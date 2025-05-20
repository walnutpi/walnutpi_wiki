---
sidebar_position: 6
---
# YOLO11 姿势识别
该模型的功能是识别姿态，输出的是鼻子、眼睛、耳朵、肩部、手部、腿部等关键点的坐标，可以基于这些坐标来判断姿势。也可以自己训练识别其他动物的姿势等。

![model_change](./img/pose/pose0.png)


## 准备模型文件

我们提供的程序包里会有一个名为`yolo11n-pose.nb`的文件，这就是在核桃派2B（T527） NPU上运行YOLO11姿势识别的模型文件。

![result](./img/pose/pose1.png)

想尝试自行转换模型可以参考：[模型转换教程](./model_convert.md) 

## 安装OpenCV

本教程需要用到OpenCV库，安装方法参考：[OpenCV安装](../../opencv/install.md)

## Python运行模型

核桃派2B v1.3.0 版本以上系统提供一套封装好的YOLO11 Python库。

### 1. 实例化yolo11类
实例化`YOLO11_POSE`类，需要传入模型文件的路径
```python
from walnutpi import YOLO11
yolo = YOLO11.YOLO11_POSE("model/yolo11n-pose.nb")
```
### 2. 运行模型-阻塞式
使用`run`方法即可运行模型，并返回检测结果，需要传入3个参数
- 图片数据， 使用opencv的读取图片方法进行读取即可
- 置信度阈值， 只会返回置信度高于这个值的检测框
- 检测框重叠度阈值， 模型经常会在物体周围同时命中多个检测框，如果框之间的面积重合度高于这个值，则只保留置信度最高的框，删除其他重合框

```python
# 读取图片
import cv2
img = cv2.imread("image/bus.jpg")

# 检测
boxes = yolo.run(img, 0.5, 0.5)
```

### 3. 运行模型-非阻塞式
使用`run_async`方法会创建一个线程来运行模型,然后立刻返回。需要传入3个参数
- 图片数据， 使用opencv的读取图片方法进行读取即可
- 置信度阈值， 只会返回置信度高于这个值的检测框
- 检测框重叠度阈值， 模型经常会在物体周围同时命中多个检测框，如果框之间的面积重合度高于这个值，则只保留置信度最高的框，删除其他重合框

非阻塞式运行需要配合 `is_running` 属性使用，他的值是 true或false，表示后台是否跑着`run_async`启动的模型运行线程。如果后台已经跑着一个运行线程了，则运行`run_async`时不会再启动新的线程。也可以用此属性来判断模型运行线程跑完了没，是否可以获取结果了。

使用`get_result()`方法 会返回后台的识别结果，与阻塞式方法`run`得到的是相同的东西

```python
import cv2
img = cv2.imread("image/bus.jpg")

yolo.run_async(img, 0.5, 0.5)
while yolo.is_running:
    time.sleep(0.1)
boxes = yolo.get_result()
```

### 4. 检测结果
`run`方法和`get_result`方法返回的都是一个列表，如果图片中检测不到东西则返回一个空的列表。列表里每个值都代表一个命中了的检测框，每个检测框对象都包含以下属性

| 属性        | 说明                                          |
| ----------- | --------------------------------------------- |
| x           | 检测框中心点的x坐标                           |
| y           | 检测框中心点的y坐标                           |
| w           | 检测框的宽度                                  |
| h           | 检测框的高度                                  |
| reliability | 表示检测框的置信度，例如:0.78                 |
| label       | 检测框的标签，一般pose模型只识别1种类别的物体 |
| keypoints   | 每个关键点的信息                              |

keypoints属性是一个列表，列表的每个值都是关键点对象，例如使用yolo官方的人体姿势模型，会有17个关键点，顺序是

| 关键点序号 | 关键点名称 |
| ---------- | ---------- |
| 0          | 鼻子       |
| 1          | 左眼       |
| 2          | 右眼       |
| 3          | 左耳       |
| 4          | 右耳       |
| 5          | 左肩       |
| 6          | 右肩       |
| 7          | 左手肘     |
| 8          | 右手肘     |
| 9          | 左手腕     |
| 10         | 右手腕     |
| 11         | 左髋部     |
| 12         | 右髋部     |
| 13         | 左膝盖     |
| 14         | 右膝       |
| 15         | 左脚踝     |
| 16         | 右脚踝     |

    
每个关键点对象都包含以下属性
| 属性       | 说明                          |
| ---------- | ----------------------------- |
| xy         | 关键点的xy坐标，例如(192,320) |
| visibility | 该点可见的概率                |


可以使用以下代码输出所有检测到的框的信息
```python
print(f"boxes: {boxes.__len__()}")
for box in boxes:
    print(
        "{:f} ({:4d},{:4d}) w{:4d} h{:4d} lbael:{:d}".format(
            box.reliability,
            box.x,
            box.y,
            box.w,
            box.h,
            box.label,
        )
    )
```

## 示例程序

### 基于图片

读取图片做检测，绘制检测到的的关键点

![results](./img/pose/pose0.png)

```python
'''
实验名称：YOLO11姿势识别
实验平台：核桃派2B
说明：基于图片
'''

from walnutpi import YOLO11
import cv2

#【可选代码】允许Thonny远程运行
import os
os.environ["DISPLAY"] = ":0.0"

label_names = ["person"]

model_path = "model/yolo11n-pose.nb"
picture_path = "image/person.jpg"
output_path = ".result.jpg"

# 检测图片
yolo = YOLO11.YOLO11_POSE(model_path)
boxes = yolo.run(picture_path, 0.5, 0.5)

# 到图上画框
img = cv2.imread(picture_path)
for box in boxes:
    left_x = int(box.x - box.w / 2)
    left_y = int(box.y - box.h / 2)
    right_x = int(box.x + box.w / 2)
    right_y = int(box.y + box.h / 2)
    label = str(label_names[box.label]) + " " + str('%.2f'%(box.reliability))
    (label_width, label_height), bottom = cv2.getTextSize(
        label,
        cv2.FONT_HERSHEY_SIMPLEX,
        0.5,
        1,
    )
    cv2.rectangle(
        img,
        (left_x, left_y),
        (right_x, right_y),
        (255, 255, 0),
        2,
    )
    cv2.rectangle(
        img,
        (left_x, left_y - label_height * 2),
        (left_x + label_width, left_y),
        (255, 255, 255),
        -1,
    )
    cv2.putText(
        img,
        label,
        (left_x, left_y - label_height),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.5,
        (0, 0, 0),
        1,
    )
    
    # 0 鼻子 1 左眼 2 右眼 3 左耳 4 右耳 5 左肩 6 右肩
    # 7 左手肘 8 右手肘 9 左手腕 10 右手腕 11 左髋部 12 右髋部
    # 13 左膝盖 14 右膝盖 15 左脚踝 16 右脚踝
    for i in box.keypoints:  # 绘制所有可见度够高的关键点
        if i.visibility > 0.5:
            cv2.circle(img, i.xy, 5, (0, 0, 200), -1)
            
    # 头部连接
    cv2.line(img, box.keypoints[3].xy, box.keypoints[1].xy, (0, 255, 255), 2)
    cv2.line(img, box.keypoints[1].xy, box.keypoints[0].xy, (0, 255, 255), 2)
    cv2.line(img, box.keypoints[0].xy, box.keypoints[2].xy, (0, 255, 255), 2)
    cv2.line(img, box.keypoints[2].xy, box.keypoints[4].xy, (0, 255, 255), 2)
    cv2.line(img, box.keypoints[3].xy, box.keypoints[5].xy, (0, 255, 255), 2)
    cv2.line(img, box.keypoints[4].xy, box.keypoints[6].xy, (0, 255, 255), 2)
    
    # 左右手连接
    cv2.line(img, box.keypoints[7].xy, box.keypoints[5].xy, (255, 0, 0), 2)
    cv2.line(img, box.keypoints[7].xy, box.keypoints[9].xy, (255, 0, 0), 2)
    cv2.line(img, box.keypoints[8].xy, box.keypoints[6].xy, (255, 0, 0), 2)
    cv2.line(img, box.keypoints[8].xy, box.keypoints[10].xy, (255, 0, 0), 2)

    # 中间身体相连
    cv2.line(img, box.keypoints[5].xy, box.keypoints[6].xy, (100, 255, 100), 2)
    cv2.line(img, box.keypoints[11].xy, box.keypoints[5].xy, (100, 255, 100), 2)
    cv2.line(img, box.keypoints[12].xy, box.keypoints[6].xy, (100, 255, 100), 2)
    cv2.line(img, box.keypoints[12].xy, box.keypoints[11].xy, (100, 255, 100), 2)

    # 左右脚连接
    cv2.line(img, box.keypoints[13].xy, box.keypoints[11].xy, (255, 255, 0), 2)
    cv2.line(img, box.keypoints[13].xy, box.keypoints[15].xy, (255, 255, 0), 2)
    cv2.line(img, box.keypoints[14].xy, box.keypoints[12].xy, (255, 255, 0), 2)
    cv2.line(img, box.keypoints[14].xy, box.keypoints[16].xy, (255, 255, 0), 2)

#保存图片
cv2.imwrite(output_path, img)

#窗口显示图片
cv2.imshow('result',img)

cv2.waitKey() #等待键盘任意按键按下
cv2.destroyAllWindows() #关闭窗口

```

### 基于摄像头

可以先学习在OpenCV的 [USB摄像头使用教程](../../opencv/usb_cam.md)

![results](./img/pose/pose2.png)

```python
'''
实验名称：YOLO11姿势识别
实验平台：核桃派2B
说明：基于摄像头
'''

from walnutpi import YOLO11
import cv2

#【可选代码】允许Thonny远程运行
import os
os.environ["DISPLAY"] = ":0.0"

label_names = ["person"]

model_path = "model/yolo11n-pose.nb"
yolo = YOLO11.YOLO11_POSE(model_path)

# 打开摄像头并循环获取帧显示到屏幕上
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Cannot open camera")
    exit()

# 设置为1080p
# cap.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc(*"MJPG"))
# cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)  # 设置宽度
# cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)  # 设置长度

boxes = []
while True:
    # 读取一帧图像并显示出来
    ret, img = cap.read()
    if not ret:
        print("Can't receive frame (stream end?). Exiting ...")
        break
    if not yolo.is_running:
        yolo.run_async(img, 0.3)
    boxes = yolo.get_result()

    # 到图上画框
    for box in boxes:
        label = str(label_names[box.label]) + " " + str('%.2f'%box.reliability)
        left_x = int(box.x - box.w / 2)
        left_y = int(box.y - box.h / 2)
        right_x = int(box.x + box.w / 2)
        right_y = int(box.y + box.h / 2)
        (label_width, label_height), bottom = cv2.getTextSize(
            label,
            cv2.FONT_HERSHEY_SIMPLEX,
            0.5,
            1,
        )
        (label_width, label_height), bottom = cv2.getTextSize(
            label,
            cv2.FONT_HERSHEY_SIMPLEX,
            0.5,
            1,
        )
        cv2.rectangle(
            img,
            (left_x, left_y),
            (right_x, right_y),
            (255, 255, 0),
            2,
        )
        cv2.rectangle(
            img,
            (left_x, left_y - label_height * 2),
            (left_x + label_width, left_y),
            (255, 255, 255),
            -1,
        )
        cv2.putText(
            img,
            label,
            (left_x, left_y - label_height),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.5,
            (0, 0, 0),
            1,
        )
        # 0 鼻子 1 左眼 2 右眼 3 左耳 4 右耳 5 左肩 6 右肩
        # 7 左手肘 8 右手肘 9 左手腕 10 右手腕 11 左髋部 12 右髋部
        # 13 左膝盖 14 右膝盖 15 左脚踝 16 右脚踝
        for i in box.keypoints:  # 绘制所有可见度够高的关键点
            if i.visibility > 0.5:
                cv2.circle(img, i.xy, 5, (0, 0, 200), -1)

        # 头部连接
        cv2.line(img, box.keypoints[3].xy, box.keypoints[1].xy, (0, 255, 255), 2)
        cv2.line(img, box.keypoints[1].xy, box.keypoints[0].xy, (0, 255, 255), 2)
        cv2.line(img, box.keypoints[0].xy, box.keypoints[2].xy, (0, 255, 255), 2)
        cv2.line(img, box.keypoints[2].xy, box.keypoints[4].xy, (0, 255, 255), 2)
        cv2.line(img, box.keypoints[3].xy, box.keypoints[5].xy, (0, 255, 255), 2)
        cv2.line(img, box.keypoints[4].xy, box.keypoints[6].xy, (0, 255, 255), 2)
        
        # 左右手连接
        cv2.line(img, box.keypoints[7].xy, box.keypoints[5].xy, (255, 0, 0), 2)
        cv2.line(img, box.keypoints[7].xy, box.keypoints[9].xy, (255, 0, 0), 2)
        cv2.line(img, box.keypoints[8].xy, box.keypoints[6].xy, (255, 0, 0), 2)
        cv2.line(img, box.keypoints[8].xy, box.keypoints[10].xy, (255, 0, 0), 2)

        # 中间身体相连
        cv2.line(img, box.keypoints[5].xy, box.keypoints[6].xy, (100, 255, 100), 2)
        cv2.line(img, box.keypoints[11].xy, box.keypoints[5].xy, (100, 255, 100), 2)
        cv2.line(img, box.keypoints[12].xy, box.keypoints[6].xy, (100, 255, 100), 2)
        cv2.line(img, box.keypoints[12].xy, box.keypoints[11].xy, (100, 255, 100), 2)

        # 左右脚连接
        cv2.line(img, box.keypoints[13].xy, box.keypoints[11].xy, (255, 255, 0), 2)
        cv2.line(img, box.keypoints[13].xy, box.keypoints[15].xy, (255, 255, 0), 2)
        cv2.line(img, box.keypoints[14].xy, box.keypoints[12].xy, (255, 255, 0), 2)
        cv2.line(img, box.keypoints[14].xy, box.keypoints[16].xy, (255, 255, 0), 2)

    cv2.imshow("result", img)
    key = cv2.waitKey(1) # 窗口的图像刷新时间为1毫秒，防止阻塞    
    if key == 32: # 如果按下空格键，打断退出
        break
    
cap .release() # 关闭摄像头
cv2.destroyAllWindows() # 销毁显示摄像头视频的窗口

```