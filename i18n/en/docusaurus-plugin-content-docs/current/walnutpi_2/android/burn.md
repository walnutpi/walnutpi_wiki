---
sidebar_position: 1
---

# 镜像烧录

核桃派2B Android使用的是Android 普通版本系统。我们已经对核桃派2B硬件进行了适配。用户烧录该系统可以安装各类安卓APP。

## 镜像下载地址：

- 百度网盘链接：https://pan.baidu.com/s/14Vi3VoKkUBPWZf2TvYiPaw?pwd=WPKJ
- 提取码：**WPKJ**

打开Android文件夹，镜像更新说明可以看里面的**说明文档.txt**。觉得百度网盘下载慢的话可以到QQ群文件下载：677173708

**（下载后将压缩包解压,得到img镜像文件待使用）**

![burn](./img/burn/burn1.png)

## SD启动卡烧录

### 使用 PhoenixCard 烧录

镜像下载完后我们还需要一个镜像烧录软件，使用PhoenixCard。软件位于核桃派Android镜像资料包下烧录工具文件夹里面：

**（下载后需要解压得到文件夹）**

![burn](./img/burn/burn2.png)

进去文件夹，打开下图所示软件：

![burn](./img/burn/burn3.png)

插入SD卡到电脑：

![burn](./img/burn/burn4.png)


按下面步骤开始烧录：

1、选择要烧录的镜像；

2、启动卡；

3、选择插入的SD卡盘符；

4、点击烧卡开始烧录。

![burn](./img/burn/burn5.png)

烧录过程中进度条可能不动，需要等待几分钟左右，请耐心等待，烧录完成后如下图所示：

![burn](./img/burn/burn6.png)

在我的电脑会出现一个100多M的盘符。那是核桃派 Android系统的一些配置文件。

烧完后将SD卡插入核桃派2B上电即可开机。


## EMMC烧录

使用上面 [烧录教程](#sd启动卡烧录) 烧录到SD卡。区别是要选`量产卡`，其它流程一样。

![burn](./img/burn/burn10.png)

烧录完成后将SD卡插入核桃派2B EMMC版本硬件，上电，蓝灯快闪表示正在写入EMMC。

![burn](./img/burn/burn11.png)

蓝灯熄灭表示烧录完成。

![burn](./img/burn/burn12.png)

:::tip 提示
可以使用USB转TTL工具接调试串口观察烧录进度。[调试串口打开终端](../os_software/terminal.md#调试串口打开终端)
:::

断电拔下SD卡，重新上电，即可从EMMC启动Android系统。

