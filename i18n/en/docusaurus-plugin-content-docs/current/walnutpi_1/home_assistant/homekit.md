---
sidebar_position: 10
---

# 接入苹果HomeKit

苹果HomeKit是苹果手机自带的智能家居APP，只需要在核桃派Home Assistant添加HomeKit bridge集成即可将特定设备绑定，在苹果手机上实现设备控制。

本节以LED灯为例，将注册的LED实体加入HomeKit。确保已经加入了LED实体，可参考教程：[LED](../home_assistant/mqtt/device_entity/led.md) 章节内容。

首先添加HomeKit Bridge集成，用于桥接Home Kit和Home Assistant设备。

![homekit](./img/homekit/homekit1.png)

![homekit](./img/homekit/homekit2.png)

搜索 “homekit” 关键词，点击弹出的苹果栏：

![homekit](./img/homekit/homekit3.png)


点击`HomeKit Bridge` :

![homekit](./img/homekit/homekit4.png)

这里选择包含的域，实际是Home Assistant的元件分类，由于这里使用的LED是归属light，所以确保light已经勾选即可。

![homekit](./img/homekit/homekit5.png)

点击完成：

![homekit](./img/homekit/homekit6.png)

这时候在左侧通知栏会有新通知：

![homekit](./img/homekit/homekit7.png)

出现一个二维码。

![homekit](./img/homekit/homekit8.png)

打开苹果手机自带应用的“家庭”APP：

![homekit](./img/homekit/homekit9.png)

选择扫描配件：

![homekit](./img/homekit/homekit10.png)

扫描刚刚Home Assistant弹出的二维码：

![homekit](./img/homekit/homekit11.png)

![homekit](./img/homekit/homekit11_2.png)

然后按提示添加, 添加成功后可以看到LED设备实体出现在苹果APP上。

![homekit](./img/homekit/homekit12.png)

可以通过苹果家庭APP控制核桃派的LED了。

![homekit](./img/homekit/homekit13.png)

![homekit](./img/homekit/homekit14.png)




