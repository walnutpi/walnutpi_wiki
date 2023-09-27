---
sidebar_position: 3
---

# 编译linux
##  编译linux
### 0. 交叉编译器
关于交叉编译器的安装，写在另一篇文章里--  [安装交叉编译器](./cross_compiler) 


### 1. 下载
```
git clone https://github.com/walnutpi/linux.git
cd linux
```
### 2. 声明交叉编译器和系统类型
```
export CROSS_COMPILE=aarch64-none-linux-gnu-
export ARCH=arm64
```
### 3. 调用配置文件
```
make walnutpi_defconfig
```

### 4. 开始编译
这里我使用32线程编译
```
make -j32
```
### 5. 导出所有驱动模块
导出到当前路径下名为"ko"的文件夹
```
make  modules_install INSTALL_MOD_PATH="ko"
```

### 6. 导出设备树
导出到当前路径下名为"dtb"的文件夹
```
make dtbs_install INSTALL_DTBS_PATH="dtb"
```


## 存放相关文件
### 1. 将linux内核和设备树存放到sd卡分区1下
```
sudo mount /dev/sda1 /mnt/

sudo cp arch/arm64/boot/Image /mnt/
sudo cp -r dtb/  /mnt/

sudo umount /mnt
```
### 2. 等rootfs装好后，将驱动模块放入sd卡分区2的/usr/lib/
```
sudo mount /dev/sda2 /mnt/

sudo cp -r ko/lib/modules /mnt/usr/lib/

sudo umount /mnt
```



