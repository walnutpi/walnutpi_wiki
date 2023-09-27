---
sidebar_position: 2
---

# Blinka（Python库）简介

在MCU领域我们可以使用MicroPython或CircuitPython做Python嵌入式编程，而在Linux板卡中，有这么一个开源项目，由adafruit发起，名字叫Blinka，旨在Linux板卡上实现GPIO类嵌入式编程的通用Python库。目前Blinka已经支持树莓派、Jetson Nano等众多市面的Linux开发板。

开源项目：https://circuitpython.org/blinka 

![blinka](./img/blinka_intro/blinka.png)

简单来说，核桃派通过安装Blinka库后，就可以轻松使用Python库来玩转各类开发板GPIO外设了。核桃派出厂系统已经预装了Blinka库，位于 **/opt/adafruit_blinka** 目录下：


:::tip 提示

核桃派预装的Blinka经过定制修改，适配了核桃派的CPU。

:::