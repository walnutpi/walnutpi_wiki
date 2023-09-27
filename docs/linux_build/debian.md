---
sidebar_position: 4
---

# 编译debian
我们使用debian提供的rootfs

debian提供了适用于多种芯片架构的rootfs，具体可以查看 [<debian发行记录>](https://www.debian.org/releases/)


## 构建
官方没有将整个rootfs打包好提供下载，而是提供了一个用于构建的工具
### 1. 安装要用到的软件

```
sudo apt install qemu-user-static debootstrap 
```
debootstrap是debian官方工具，具体可查看 [<debootstrap介绍>](https://wiki.debian.org/Debootstrap)

qemu是一个模拟器


### 2. 拉取基本的rootfs
使用debootstrap工具从华为的镜像源拉取，debian12，arm64版本，并在当前路径下创建文件夹rootfs存放
```
sudo debootstrap --foreign --verbose  --arch=arm64 bookworm rootfs  http://mirrors.huaweicloud.com/debian/
```
### 3. 将模拟器放进去
```
sudo cp /usr/bin/qemu-aarch64-static rootfs/usr/bin/
sudo chmod +x rootfs/usr/bin/qemu-aarch64-static
```

### 4. 挂载动态文件
```
cd rootfs
sudo mount --bind /dev dev/
sudo mount --bind /sys sys/
sudo mount --bind /proc proc/
sudo mount --bind /dev/pts dev/pts/
cd ..
```


### 5. 完成剩余的构建过程
```
sudo LC_ALL=C LANGUAGE=C LANG=C chroot rootfs /debootstrap/debootstrap --second-stage –verbose
```
这一步结束，这个rootfs就成形了。我们可以在电脑端对他进行一些配置。

###  6. 解除动态文件的挂载
```
cd rootfs
sudo umount   sys/
sudo umount   proc/
sudo umount   dev/pts/
sudo umount   dev/
cd ..
```

## 怎么对rootfs做配置
### 1. 挂载动态文件
这些文件是linux内核实时生成的，有些软件运行时需要使用
```
cd rootfs
sudo mount --bind /dev dev/
sudo mount --bind /sys sys/
sudo mount --bind /proc proc/
sudo mount --bind /dev/pts dev/pts/
cd ..
```


### 2. 切换当前所用rootfs
chroot指令可以切换当前终端所用rootfs。
```
sudo  chroot rootfs 
```

切换进去后，你所运行的所有命令，都是在改动这个rootfs，而不会对你电脑原本的rootfs产生影响。可以直接运行`apt`来安装软件，安装完的软件会留在这个rootfs内。

### 3. 退出
如果你配置完了，就输入这个指令退出
```
exit
```

###  4. 解除动态文件的挂载
```
cd rootfs
sudo umount   sys/
sudo umount   proc/
sudo umount   dev/pts/
sudo umount   dev/
cd ..
```

### 5. 装进sd卡
rootfs的本质就是一堆文件夹集合体，只需要把sd卡挂载好，然后把这个rootfs文件夹搬进sd卡分区2即可

注意：cp指令复制的时候会导致文件权限被修改


## 必做的配置
### 1. 设置root密码
输入以下命令后，跟着提示输两次你要的密码就行
```
passwd root
```

### 2. 装一个ntp时间同步服务
开发板启动后，默认时间可能会和现实偏差很大，会导致一些网站服务报错。
```
apt update
apt install systemd-timesyncd
```



