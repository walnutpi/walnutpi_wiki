---
sidebar_position: 5
---

# 系统镜像烧录

- **视频教程**

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1203172875&bvid=BV12F4m1N7Jz&cid=1508551068&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500"></iframe>

<br></br>
<br></br>

WalnutPi OS是一款基于Debian的免费操作系统，针对核桃派硬件进行了优化，是在核桃派上正常使用的推荐操作系统。

核桃派的操作系统是安装到SD卡上的，目前提供2个镜像，分别是定制版Debian和无桌面版本。

- 桌面版（desketop版）核桃派定制版Debian经过魔改后，体验更像Windows，系统预装丰富的应用软件，开机即用。包含C、Python编程软件、谷歌浏览器、LibreOffice办公（兼容Office）、图片查看器、VLC媒体播放器、截图软件等，务求让大家降低使用门槛。

- 无桌面版（server版）使用终端方式交互，好处是更快的启动速度，更少的内存占用，功耗低，特别适合熟悉Linux指令的用户。你甚至可以用它来部署一个小型服务器。

<br></br>

- `普通用户（默认）` 账号：pi ; 密码：pi
- `管理员账户` 账号：root ; 密码：root

## 镜像下载地址：

- 百度网盘链接：https://pan.baidu.com/s/1-ytTK-KI1RP2KsoZpjFSrA?pwd=WPKJ
- 提取码：**WPKJ**

更新说明可以看里面的**说明文档.txt**。觉得百度网盘下载慢的话可以到QQ群文件下载：677173708

![0](./img/os-install/0.png)


## SD启动卡烧录

### 使用rufus烧录（推荐）

镜像下载完后我们还需要一个镜像烧录软件，这里推荐轻量级镜像烧录软件rufus。下载地址：https://rufus.ie/zh/#google_vignette

![9](./img/os-install/9.png)

下载后直接打开软件，选择U盘盘符和要烧写的镜像即可：

![10](./img/os-install/10.png)


### 使用balenaEtcher烧录

如果上面rufus软件无法烧录，也可使用balenaEtcher试试。**balenaEtcher**下载： [https://etcher.balena.io/#download-etcher](https://etcher.balena.io/#download-etcher/)

![1](./img/os-install/1.png)

根据自己电脑的操作系统选择对应软件下载。Windows用户默认选择第一个下载安装。

![2](./img/os-install/2.png)

安装完成后打开软件，出现以下界面：

![3](./img/os-install/3.png)

我们将MicroSD卡通过读卡器接入电脑 (推荐容量16G以上，闪迪class10牌子)。

![3_1](./img/os-install/3_1.png)

回到刚刚镜像烧录软件，点击Select image 选择之前下载的系统镜像文件, 网盘下载的是压缩文件，先解压出来img文件再选择。

![4](./img/os-install/4.png)

然后在Select Drive选择SD卡 U盘对应的盘符，如果出现提示要格式化U盘直接点取消即可，因为烧录软件会格式化SD卡。

![4_1](./img/os-install/4_1.png)

![5](./img/os-install/5.png)

点击 Flash 开始烧写镜像，烧录过程会有进度提示：

![6](./img/os-install/6.png)

烧写完成后如下图所示：

![7](./img/os-install/7.png)

烧录完成后会发现Windows只会显示一个100M的盘符，属于正常现象，里面放置了一些核桃派配置文件。

![8](./img/os-install/8.png)

## EMMC烧录

核桃派CM1计算模块提供EMMC版本，核桃派提供3种烧录方式供用户选择。

:::tip 提示
**EMMC仅支持2024-7-12（V2.4.0）以上版本镜像。**当SD卡和EMMC同时带有操作系统时候，主控芯片会从SD卡启动系统。
:::

### 使用带系统SD卡烧录

此方式烧录时间比较快。

通过SD卡启动一个核桃派Debian系统，然后将核桃派镜像通过U盘或网络挂载方式挂载到该系统。

![emmc](./img/os-install/10_2.png)


也可以先将镜像压缩成了zip格式，再通过U盘连接核桃派，然后通过`uzip`指令解压镜像以节省拷贝时间。

![emmc](./img/os-install/11.png)

解压到当前目录：
```bash
unzip xxx.zip
```

:::tip 提示

也可以解压到指定目录下，下面指令表示将zip文件解压到/home/pi目录：
```bash
unzip xxx.zip /home/pi
```
:::


然后通过下面指令即可将img镜像文件烧录到核桃派EMMC：

```bash
sudo set-emmc burn xxx.img
```

![emmc](./img/os-install/12.png)

烧录完成后关机，拔掉SD镜像卡，上电系统正常启动说明系统已经烧录到EMMC并且工作正常。

**除了烧录，核桃派 `set-emmc` 指令还提供格式化EMMC功能：**

快速格式化（推荐）：

```bash
sudo set-emmc earse-quick
```

完全格式化（速度会很慢）：

```bash
sudo set-emmc earse-overwrite
```


### USB烧录（需要一张空白SD卡）

此方式烧录时间比较长。

烧录资料包的U盘镜像使用[rufus](#使用rufus烧录推荐)工具烧录到SD卡。

![emmc](./img/os-install/13.png)

![emmc](./img/os-install/14.png)

将SD卡插入核桃派，使用TYPE-C线通过USB口连接到电脑。

![emmc](./img/os-install/15.png)

这时候电脑会弹出一个约150M容量的U盘（EMMC的一个分区）。

![emmc](./img/os-install/16.png)

然后使用[rufus] (#使用rufus烧录推荐)工具将 核桃派系统镜像烧录到这个U盘即可。**这个烧录方式有点慢，请耐心等待。**

![emmc](./img/os-install/17.png)

烧录完成后断电，拔掉SD卡，上电系统正常启动说明系统已经烧录到EMMC并且工作正常。

:::tip 提示
刷过U盘启动卡的SD卡再次插入电脑可能无法识别，这时候可以打开**计算机管理--磁盘管理**找到SD卡容量的那个盘符，点击**右键--更改驱动器号**，按提示重新分别驱动盘符即可。
![emmc](./img/os-install/17_2.png)
:::

### USB烧录（无需SD卡）

此方法适合没有SD卡用户。烧录时间比较长。

#### 安装驱动

**按着CM1 EMMC版本模块IO扩展板的BOOT键不放，插入USB连接到电脑。** 

![emmc](./img/os-install/18.png)

可以看到设备管理器出现下面的设备。

![emmc](./img/os-install/19.png)

打开资料包的zadig软件：

![emmc](./img/os-install/20.png)

勾选选项 `OPTIONS->list all devices` ,显示所有usb设备。

![emmc](./img/os-install/21.png)

在下拉列表找到id为**1f3a efe8**的设备选中它：

![emmc](./img/os-install/22.png)

![emmc](./img/os-install/23.png)

然后勾选右边Edit（表示编辑名称），将左边名称改成下面名称，务必改对否则后面烧录软件无法识别。

```bash
Allwinner SoC in FEL mode
```
改完后可以取消勾选edit

![emmc](./img/os-install/24.png)

![emmc](./img/os-install/25.png)

修改设备驱动，确保这个框内是**WinUSB**，然后点击`Replace Driver`按钮安装驱动:

![emmc](./img/os-install/26.png)

等待一会，后提示安装完成：

![emmc](./img/os-install/27.png)

![emmc](./img/os-install/28.png)

可以在设备管理器看到驱动变化：

![emmc](./img/os-install/29.png)

#### 烧录

烧录使用sunxi-fel.exe工具，注意这是个命令行工具，windows上需要在**cmd**或**powershell**窗口中运行。

在软件当前窗口右键，点击在终端打开：

![emmc](./img/os-install/30.png)

在打开终端输入下面命令：

```bash
.\sunxi-fel.exe uboot walnutpi-udisk.bin
```

执行后电脑会弹出一个约150M容量的U盘（EMMC的一个分区）。

![emmc](./img/os-install/16.png)

然后使用[rufus] (#使用rufus烧录推荐)工具将 核桃派系统镜像烧录到这个U盘即可。**这个烧录方式有点慢，请耐心等待。**

![emmc](./img/os-install/17.png)

烧录完成后断电，重新上电系统正常启动说明系统已经烧录到EMMC并且工作正常。




