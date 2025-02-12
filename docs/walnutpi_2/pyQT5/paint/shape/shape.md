---
sidebar_position: 1
---

# 画形状

本节我们来学习一下使用Qpainter对象下面的画图函数来学习pyQT5绘图功能。

## 函数介绍

### 画点

```python
drawPoint(x, y)
```
画点。
- `x` : 横坐标；
- `y` : 纵坐标；

### 画直线

```python
drawLine(x0, y0, x1, y1)
```
画直线。
- `x0, y0` : 起点坐标；
- `x1, y1` : 终点坐标；

### 画矩形

```python
drawLine(x, y, width, height)
```
画矩形。
- `x, y` : 起点坐标；
- `width` : 矩形宽度；
- `height` : 矩形高度；

### 画椭圆（圆）

```python
drawEllipse(x, y, width, height)
```
画椭圆。
- `x, y` : 起点坐标；
- `width` : 椭圆宽度；
- `height` : 椭圆高度；

**当椭圆的width=height时，即画圆，width=height=圆的直径。**

## 编程方法

我们通过代码来实现画点、线、矩形和圆：

我们先运行一下最终代码再来讲解：

```python
# -*- coding: utf-8 -*-

# pyQT5 For WalnutPi

from PyQt5 import QtCore, QtGui, QtWidgets

from PyQt5.QtCore import Qt
from PyQt5.QtGui import QPainter,QPen,QBrush
from PyQt5.QtWidgets import QWidget

class Window(QWidget):
    
    def __init__(self):
        super().__init__() #同时执行父对象QWidget的初始化程序
        self.setWindowTitle("WalnutPi Paint") # 设置窗口标题
        self.resize(480,320) # 设置窗口大小
        
        #窗口背景颜色设置
        self.setObjectName("Paint_Window")
        self.setStyleSheet("#Paint_Window{background-color: black}") #黑色

    def paintEvent(self,event):
        
        painter=QPainter(self) # 创建绘图对象
        painter.setPen(Qt.green) # 设置画笔,绿色
        
        #画点
        painter.drawPoint(10,10) 
        
        #画线
        painter.drawLine(20, 10, 80, 10)
        
        #画矩形
        painter.drawRect(100, 10, 80, 40) 
        
        #画圆
        painter.drawEllipse(200, 10, 50, 50)
        
        
#################
#   主程序代码   #
#################
import sys

#【可选代码】允许Thonny远程运行
import os
os.environ["DISPLAY"] = ":0.0"

#【可选代码】解决2K以上分辨率显示器显示缺失问题
QtCore.QCoreApplication.setAttribute(QtCore.Qt.AA_EnableHighDpiScaling)

#主程序入口，构建窗口并显示
app = QtWidgets.QApplication(sys.argv)
window = Window() #构建窗口对象
window.show() #显示窗口
#window.showFullScreen() #全屏显示窗口

#【建议代码】允许终端通过ctrl+c中断窗口，方便调试
import signal
signal.signal(signal.SIGINT, signal.SIG_DFL)
timer = QtCore.QTimer()
timer.start(100)  # You may change this if you wish.
timer.timeout.connect(lambda: None)  # Let the interpreter run each 100 ms

sys.exit(app.exec_()) #程序关闭时退出进程

```

运行代码，可以看到窗口如下：
![shape1](./img/shape/shape1.png)


<br></br>

接下来我们来看看代码的实现原理：

主程序入口代码跟以往类似，新建了一个窗口：

```python
#主程序入口，构建窗口并显示
app = QtWidgets.QApplication(sys.argv)
window = Window() #构建窗口对象
window.show() #显示窗口
```

新建的窗口初始化了窗口标题和大小，同时设置了背景颜色为黑色，方便观察结果。
```python
class Window(QWidget):
    
    def __init__(self):
        super().__init__() #同时执行父对象QWidget的初始化程序
        self.setWindowTitle("WalnutPi Paint") # 设置窗口标题
        self.resize(480,320) # 设置窗口大小
        
        #窗口背景颜色设置
        self.setObjectName("Paint_Window")
        self.setStyleSheet("#Paint_Window{background-color: black}") #黑色
```

**def paintEvent(self,event):**是固定格式，窗口构建后会自动执行这个函数，所以QPainter对象初始化画图函数都放里面。

```python
    def paintEvent(self,event):
        
        painter=QPainter(self) # 创建绘图对象
        painter.setPen(Qt.green) # 设置画笔,绿色
        
        #画点
        painter.drawPoint(10,10) 
        
        #画线
        painter.drawLine(20, 10, 80, 10)
        
        #画矩形
        painter.drawRect(100, 10, 80, 40) 
        
        #画圆
        painter.drawEllipse(200, 10, 50, 50)
```

