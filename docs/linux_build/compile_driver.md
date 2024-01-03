---
sidebar_position: 6
---

# 在开发板上编译驱动


需要更新到核桃派2.0版本系统


## 编写驱动
创建一个`driver.c`，填入以下内容。这个基本的驱动程序里注册了probe函数和要匹配的设备树项目，并在各函数运行时以最高等级输出信息

```
#include <linux/init.h>
#include <linux/module.h>
#include <linux/platform_device.h>
#include <linux/of_device.h>

// 在设备树匹配上的时候调用
static int test_probe(struct platform_device *pdev)
{
	printk(KERN_EMERG  "test_probe\n");
    return 0; 
}

// 匹配表
static const struct of_device_id test_of_match[] = {
	{ .compatible = "walnutpi-test" },//用于匹配设备树compatible
	{ }
};

static struct platform_driver pla_drv = {
    .driver = {
        .name = "walnutpi-test",
		.of_match_table = test_of_match,
    },
    .probe = test_probe, 
};

static int test_init(void)
{
	printk(KERN_EMERG   "test_init\n");
    platform_driver_register(&pla_drv);
    return 0;
}
static void test_exit(void)
{
	printk(KERN_EMERG  "test_exit\n");
    platform_driver_unregister(&pla_drv);
}
module_init(test_init);
module_exit(test_exit);
MODULE_LICENSE("GPL");
```
## 编译
先创建一个`Makefile`。一般编译驱动需要指向linux项目源码路径，这里只要将编译路径指向`/lib/modules/系统版本号/build`路径下即可。内容如下:
```
KDIR := /lib/modules/`uname -r`/build # Point to Linux Kernel Headers
PWD := $(shell pwd)

obj-m := driver.o

default:
	make -C $(KDIR) M=$(PWD) modules CROSS_COMPILE=""

clean:
	rm -rf *.o *.cmd *.ko *.mod.c *.tmp_versions *.order *.symvers
```

编译
```
make
```

## 设备树插件
设备树插件是Linux的一个功能，通过uboot在启动时传给内核。可用于新增设备树节点，或是覆盖掉原设备树属性。我们使用config.txt这个文件来设置启动时会使用的设备树插件，详情请看[config.txt介绍](../os_software/config.txt.md)

从`config.txt`中得知设备树文件的前缀应该是`sun50i-h616`，所以我们创建一个`sun50i-h616-test.dts`文件，填入如下内容,在根节点下创建一个dt-test节点，用于测试:
```
/dts-v1/;
/plugin/;

/ {
	compatible = "allwinner,sun50i-h616";

	fragment@0 {
		// target = <&spi1>;
		target-path = "/";
		 __overlay__ {
			dt-test@0{
				compatible = "walnutpi-test";
				status = "okay";
			};
		};
	};
	
};

```

将设备树编译成`.dtbo`格式
```
dtc -@  -I dts -O dtb -o sun50i-h616-test.dtbo sun50i-h616-test.dts
```

将dtbo文件存放到`/boot/overlays/`路径下
```
sudo cp sun50i-h616-test.dtbo /boot/overlays/
```

启用设备树插件，可以通过把名字赋值给config.txt的`overlays`属性，也可以使用`set-device`指令 ---> [set-device介绍](../gpio/gpio_config.md)

`set-device`这个指令的工作过程就是扫描`/boot/overlays/`路径下的所有文件，然后判断对应名字是否被赋值给了config.txt的`overlays`属性。使用enable就可以将其加入给overlays属性，使用disable就从overlays属性中删去
```
sudo set-device enable test
```

重启后生效，设备树插件会在系统启动时被加载。

![](./img/test_dt_has.png)


## 测试
加载驱动
```
sudo insmod driver.ko
```
![probe](./img/test_probe.png)


卸载驱动
```
sudo rmmod driver
```
![rmmod](./img/test_rmmod.png)

