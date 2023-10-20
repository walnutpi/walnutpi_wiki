---
sidebar_position: 3
---

# GPIO设备配置

核桃派系统提供GPIO设备配置指令，主要用于使能或禁止GPIO的设备功能，**如：PWM, I2C, UART, SPI**。只有这些功能打开后才能使用Python或C对其进行嵌入式编程应用。

## 查看GPIO设备状态

可通过下面指令查看当前所有GPIO设备状态,如果为off状态，则相关引脚会被释放，可作为普通gpio使用。：

```bash
set-device status
```

![gpio_config1](./img/gpio_config/gpio_config1.png)

## GPIO设备使能

通过下面指令使能某项GPIO设备：

```bash
sudo set-device enable xx
```

例：使能 **uart4**

```bash
sudo set-device enable uart4
```

使能后需要重启开发板生效：

```bash
sudo reboot
```

执行上面命令后使用**set-device status**命令可以看到uart4设备已被使能。

![gpio_config2](./img/gpio_config/gpio_config2.png)

## GPIO设备禁用

通过下面指令禁用某项GPIO设备：

```bash
sudo set-device disable xx
```

使能后需要重启开发板生效：

```bash
sudo reboot
```