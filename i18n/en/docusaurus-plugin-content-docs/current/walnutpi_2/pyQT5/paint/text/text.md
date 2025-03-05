---
sidebar_position: 1
---

# 写文本

绘制文本的函数跟前面画形状类似，只需要一个函数即可实现：

## 函数
```python
drawText(x, y, "string")
```
写文本。
- `x, y` : 起点坐标；
- `string` : 文本内容；

## 编程方法

我们通过代码来实现绘制文本：

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
        
        #写文本
        painter.drawText(100, 100, "核桃派！")
        
        
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

运行代码，可以看到窗口如下（默认字体有点小，下一节会讲述如何设置字体）：
![text1](./img/text/text1.png)

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
        
        #写文本
        painter.drawText(100, 100, "核桃派！")
```

