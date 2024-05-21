---
sidebar_position: 29
---

# 开机LOGO

核桃派官方Debian系统支持开机LOGO设置，需要使用系统v2.2以上版本 [(系统版本查询方法)](./os_intro.md#系统版本查询)，设置方式如下：

修改config.txt文件，参考教程：[config.txt](./config.txt.md) , 将下面变量改成 `true`:

```
bootlogo = true
```

用自己的图片替换掉这张，需要使用`png`格式，默认显示无缩放。

```
/usr/share/plymouth/themes/walnutpi/logo.png
```

配置成功后执行下面指令激活：

```
sudo update-initramfs -u
```

重启开发板:

```
sudo reboot
```

即可看到开机LOGO。**核桃派HDMI，3.5寸LCD和1.54寸LCD均有效。**

![boot_logo](./img/boot_logo/boot_logo1.jpg)

:::tip 提示
如果想实现自动缩放，修改显示位置，动画效果等高级用法，可以去编辑这个脚本。
```
/usr/share/plymouth/themes/walnutpi/walnutpi.script
```
该脚本文件的语法教程请看: 
 https://www.freedesktop.org/wiki/Software/Plymouth/Scripts/
:::

<br></br>

- `视频教程`

<iframe src="//player.bilibili.com/player.html?aid=1102857888&bvid=BV1uA4m1F7zy&cid=1501186718&p=1&high_quality=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>

<br></br>

【B站高清视频】https://www.bilibili.com/video/BV1uA4m1F7zy/
