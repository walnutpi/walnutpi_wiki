---
sidebar_position: 1
---

# WiringPi简介

![wiringpi_intro1](./img/wiringpi_intro/wiringpi_intro1.png)

WiringPi是一个用C语言编写的早期用于（树莓派RaspberryPi）的软件包，可用于树莓派GPIO引脚控制、串口通信、SPI通信及I2C通信等功能，非常适合熟悉C/C++的人员在树莓派上进行软件开发。 

WiringPi的作者是Gordon Henderson，其官方网址为 http://www.wiringpi.com ，网站上面有一些项目使用方法和教程。

我们在核桃派上移植了WiringPi并开源托管到Github: https://github.com/walnutpi/WiringPi ,出厂镜像已经预装了该软件库，并对核桃派开发板主控做了适配。

:::tip 提示

WiringPi 原作者在2019年更新了树莓派4B的适配后就停止更新了。大家可以到网上搜索 “树莓派 WiringPi” 关键词能找到比较多的教程代码，但由于核桃派和树莓派是不一样的主控，所以如果你在使用过程中遇到问题或者有比较好的代码案例可以到我们交流群或者发邮件给我们反馈。

:::