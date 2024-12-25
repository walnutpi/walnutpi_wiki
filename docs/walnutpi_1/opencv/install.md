---
sidebar_position: 2
---

# OpenCV安装

我们在核桃派1B上安装OpenCV非常简单，使用pip安装即可。**推荐安装 pencv-contrib-python 库，该库包含OpenCV库主模块和contrib模块, 功能完整。**

在核桃派终端输入下面命令安装：

```bash
pip install opencv-contrib-python
```

:::tip 提示：
如果你的网络无法下载，或在中国大陆地区用户可以使用国内清华源下载，速度回比较快。将上面安装指令替换到下面指令安装即可：
```bash
pip install opencv-contrib-python -i https://pypi.tuna.tsinghua.edu.cn/simple 
```
:::

![install](./img/install/install1.png)

<br></br>

安装完成后我们测试一下是否安装成功。

输入python指令进入python终端：

```bash
python
```

然后输入下面指令,没报错说明安装成功。

```python
import cv2
```

![install](./img/install/install2.png)

继续输入下面指令可以查看版本号：

```python
cv2.__version__
```

![install](./img/install/install3.png)

由于本教程基于Python开发，而核桃派开发板提供多种运行Python代码方法，详细内容请看内容：[运行Python代码](../python/python_run.md) 章节内容，这里不再重复。

OpenCV主要是视觉开发，所以建议用户使用显示器和键鼠在核桃派开发板本地开发或通过VNC远程桌面方式开发。[核桃派VNC远程](../os_software/vnc.md) 