---
sidebar_position: 1
---

# 系统安装

核桃派的操作系统是安装到SD卡上的，目前提供2个镜像，分别是定制版Debian和无桌面版本。

- 桌面版（desketop版）核桃派定制版Debian经过魔改后，体验更像Windows，系统预装丰富的应用软件，开机即用。包含C、Python编程软件、谷歌浏览器、LibreOffice办公（兼容Office）、图片查看器、VLC媒体播放器、截图软件等。，务求让大家降低使用门槛。

- 无桌面版（server版）使用终端方式交互，好处是更快的启动速度，更少的内存占用，功耗低，特别适合熟悉Linux指令的用户。你甚至可以用它来部署一个小型服务器。

## 镜像下载地址：

百度网盘链接：https://pan.baidu.com/s/1k3dHC86ZZVwdvBa5J9Q0dw?pwd=WPKJ
提取码：WPKJ

更新说明可以看里面的**说明文档.txt**。觉得百度网盘下载慢的话可以到QQ群文件下载：677173708

![0](./img/os-install/0.png)

## 使用balenaEtcher烧录

镜像下载完后我们还需要一个镜像烧录软件。**balenaEtcher**下载： [https://etcher.balena.io/#download-etcher](https://etcher.balena.io/#download-etcher/)

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

完成后MicroSD卡里面就带有核桃派Linux系统了，将它插入核桃派背面的SD卡槽，连接好HDMI显示器，上电后可以看到操作系统正常启动即可。

:::tip 提示

核桃派桌面版（Desktop版）系统首次启动由于需要初始化软件等，耗时比较长，大约几分钟，需要耐心等待系统桌面显示出来。以后再次启动速度会快很多，大约几十秒。

::: 

## 使用rufus烧录

如果你无法使用上面的balenaEtcher烧录，那么可以试试这个轻量级软件rufus。下载地址：https://rufus.ie/zh/#google_vignette

![9](./img/os-install/9.png)

下载后直接打开软件，选择U盘盘符和要烧写的镜像即可：

![10](./img/os-install/10.png)

完成后MicroSD卡里面就带有核桃派Linux系统了，将它插入核桃派背面的SD卡槽，连接好HDMI显示器，上电后可以看到操作系统正常启动即可。

:::tip 提示

核桃派桌面版（Desktop版）系统首次启动由于需要初始化软件等，耗时比较长，大约几分钟，需要耐心等待系统桌面显示出来。以后再次启动速度会快很多，大约几十秒。

::: 