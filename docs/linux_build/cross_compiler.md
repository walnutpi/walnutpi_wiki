---
sidebar_position: 5
---

# 交叉编译器安装
gcc编译出来的程序，只能在指定的cpu架构上运行，而电脑跟开发板的cpu架构不同，

电脑所使用的gcc的全称为`x86_64-linux-gnu-gcc`，编译出的程序只能在x86_64架构上运行，而开发板是arm架构的，所以需要先安装对应架构的gcc（俗称交叉编译器）


## 安装
### 1. 下载

walnutpi-1b使用的交叉编译器为`aarch64-none-linux-gnu`,版本为`gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu`,可从此链接处下载[<清华源>](https://mirrors.tuna.tsinghua.edu.cn/armbian-releases/_toolchain/)。

可以运行下面这段命令，把walnutpi-1b所使用的交叉编译器压缩包下载到当前路径下。

```
wget  https://mirrors.tuna.tsinghua.edu.cn/armbian-releases/_toolchain/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu.tar.xz
```

### 2. 解压
交叉编译器不需要安装，解压完即可使用。对于存放路径没有什么要求，我习惯存放到`/opt`路径下

运行下面这段命令，把压缩包解压到`/opt`路径下。
```
tar -xvf gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu.tar.xz  -C /opt
```

### 3. 添加到path

`PATH`是一个特殊的环境变量，只要把交叉编译器的路径加进这个变量，就可以在命令行省略掉完整路径，只输入交叉编译器的名字就能直接运行他

`/etc/bash.bashrc`这个文件会在登录命令行时被系统调出来运行，我们要把修改PATH变量的语句插入到这个文件末尾。这样每次进入命令行，都能自动设置好PATH变量

在命令行运行下面这行命令，他的功能是把修改PATH变量的语句写入到`/etc/bash.bashrc`，并使其立刻生效
```
echo 'PATH="$PATH:/opt/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu/bin"' | sudo tee -a /etc/bash.bashrc && source /etc/bash.bashrc
```


