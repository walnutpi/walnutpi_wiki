---
sidebar_position: 1
---

# 绘图简介

前面我们看到PyQt5已经拥有非常强大的控件功能。但控件的界面相对固定的，假设我们想自己DIY画一些图形，比如点、线、矩形、圆、字符、图片等，就可以用到QPainter类绘图功能。

## QPainter对象

画图和设置使用函数方法都在QPainter，位于PyQt5.QtGui下。

|  画图类方法 |  说明 |
|  :---:  | --- | 
| drawPoint()  |  画点  | 
| drawPoints()  |  画多个点  | 
| drawLine()  |  画直线  | 
| drawLines()  |  画多条直线  | 
| drawRect()  |  画矩形  | 
| drawRects()  |  画多个矩形  | 
| drawRoundedRect()  |  画多个矩形  | 
| drawEllipse()  |  画椭圆（圆）  |
| drawArc()  |  画圆弧  | 
| drawChord()  |  画和弦  |
| drawImage()  |  画图片  | 
| drawPath()  |  画路径  | 
| drawLines()  |  画多条直线  | 
| drawPicture()  |  画Picture图片  |
| drawPie()  |  画扇形  |
| drawPixmap()  |  从图像中提前Pixmap并绘制 |
| drawPolygon()  |  绘制多边形  | 
| drawPolyline()  |  绘制折线  | 
| drawText()  |  绘制文本  | 
| fillPath()  |  填充路径  | 
| fillRect()  |  填充矩形  | 

<br></br>

|  设置类方法 |  说明 |
|  :---:  | --- | 
| setPen()  |  设置画笔  | 
| setBrush()  |  设置画刷  | 
| setFont()  |  设置字体  | 
| setOpacity()  |  设置透明度  | 
| begin()  |  开始绘制  | 
| end()  |  结束绘制  | 
