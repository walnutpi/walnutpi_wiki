---
sidebar_position: 0
---

# 目录

![directory](./img/directory/directory1.png)

- **核桃派简介**

    - [核桃派简介](./intro/intro.md)
    - [资料下载](./intro/download.md)

- **开箱指南**

    - [硬件参数](./getting_start/hw-parameter.md)
    - [硬件详解](./getting_start/hw-detail.md)
    - [外围配件组装](./getting_start/hw-peripherals.md)
    - [系统镜像烧录](./getting_start/os-install.md)
    - [开机](./getting_start/start_up.md)

- **核桃派系统使用**

    - [系统简介](./os_software/os_intro.md)
    - [预装软件](./os_software/software.md)
    - [终端和常用命令](./os_software/terminal.md)
    - [WiFi连接](./os_software/wifi.md)
    - [时间设置](./os_software/date.md)
    - [系统语言](./os_software/language.md)
    - [IP地址获取](./os_software/ip_get.md)
    - [SSH远程终端](./os_software/ssh.md)
    - [VNC远程桌面](./os_software/vnc.md)
    - [关机和重启](./os_software/log_out.md)
    - [主控温度信息](./os_software/core_temp.md)
    - [主控ID号](./os_software/cpu_id.md)
    - [音频（耳机口）](./os_software/audio.md)
    - [红外接收头](./os_software/ir.md)
    - [U盘挂载](./os_software/usb_disk.md)
    - [USB摄像头](./os_software/usb_cam.md)
    - [3.5寸触摸显示屏](./os_software/3.5_LCD.md)
    - [config.txt](./os_software/config.txt.md)

- **GPIO应用**

    - [GPIO介绍](./gpio/gpio_intro.md)
    - [GPIO指令操作](./gpio/gpio_command.md)
    - [GPIO设备配置](./gpio/gpio_config.md)

- **Python嵌入式编程**

    - [运行Python代码](./python/python_run.md) 
    - [Blinka（Python库）简介](./python/blinka_intro.md) 

    - **GPIO基础实验**
        - [GPIO介绍](./python/gpio/gpio_intro.md) 
        - [点亮第1个LED](./python/gpio/led.md) 
        - [按键](./python/gpio/key.md) 
        - [有源蜂鸣器](./python/gpio/active_buzzer.md) 
        - [UART（串口通讯）](./python/gpio/uart.md) 
        - [I2C（OLED显示屏）](./python/gpio/i2c_oled.md) 

    - **传感器**
        - [人体感应传感器](./python/sensor/human_induction.md) 
        - [HC-SR04超声波测距](./python/sensor/hcsr04.md) 
        - [BMP280大气压强](./python/sensor/bmp280.md) 
        - [MPU6050六轴加速度计](./python/sensor/mpu6050.md) 
        - [VL53L1X激光测距](./python/sensor/vl53l1x.md) 
        - [MLX90614红外测温](./python/sensor/mlx90614.md) 

    - **拓展模块**
        - [继电器](./python/module/relay.md) 

    - **网络应用**
        - [Socket通讯](./python/network/socket.md) 
        - [MQTT通讯](./python/network/mqtt.md) 

    - **其它使用技巧**
        - [开机自动运行Python代码](./python/skills/auto_run.md) 
        - [Python调用终端命令](./python/skills/command.md) 

- **C嵌入式编程**

    - [IO控制（基于WiringPi）](./c/io_wiringpi.md) 
    - [I2C](./c/i2c.md) 
    - [SPI](./c/spi.md) 
    - [UART（串口）](./c/uart.md) 

- **PyQt5**

    - [PyQt5简介](./pyQT5/pyqt5_intro.md) 
    - [开发环境搭建](./pyQT5/development_setup.md) 
    - [第一个窗口](./pyQT5/first_window.md) 
    - [代码编写和运行](./pyQT5/code_run.md) 
    - [信号和槽](./pyQT5/signal_slot.md) 

    - **控件**
        - [控件简介](./pyQT5/widgets/widgets_intro.md) 

        - **按钮类**
            - [PushButton（按钮）](./pyQT5/widgets/buttons/push_button.md) 
            - [ToolButton（工具按钮）](./pyQT5/widgets/buttons/tool_button.md) 

        - **显示控件**
            - [Label](./pyQT5/widgets/display/label.md) 

        - **输入控件**
            - [LineEdit（单行文本框）](./pyQT5/widgets/input/line_edit.md) 
            - [TextEdit（多行文本框）](./pyQT5/widgets/input/text_edit.md) 

    - **绘图**
        - [绘图简介](./pyQT5/paint/paint_intro.md) 

        - **绘制形状**
            - [画形状](./pyQT5/paint/shape/shape.md) 
            - [画笔和画刷设置](./pyQT5/paint/shape/qpen_qbursh.md) 

        - **绘制文本**
            - [写文本](./pyQT5/paint/text/text.md) 
            - [字体设置](./pyQT5/paint/text/qfont.md) 

        - [绘制图像](./pyQT5/paint/image.md) 

- **Linux系统编译**

    - [使用walnutpi-build构建镜像系统](./linux_build/walnutpi-build.md) 
    - [编译uboot](./linux_build/uboot.md) 
    - [编译linux](./linux_build/linux.md) 
    - [编译debian](./linux_build/debian.md) 
    - [交叉编译器安装](./linux_build/cross_compiler.md) 
    - [在开发板上编译驱动](./linux_build/compile_driver.md) 

- [**更新说明**](./update.md)


