---
slug: /walnutpi_2
sidebar_position: 0
---

# Directory

![directory](./img/directory/directory1.png)

### **Walnut Pi 2 Introduction**

- [WalnutPi Introduction](./intro/intro.md)
- [Product Specifications](./intro/hw-parameter.md)
- [Downloads](./intro/download.md)

### **Getting Started**

- [Hardware Details](./getting_start/hw-detail.md)
- [Walnut Pi 2B Peripheral Assembly](./getting_start/2b-peripherals.md)
- [Walnut Pi CM2 Peripheral Assembly](./getting_start/cm2-peripherals.md)
- [System Image Burning](./getting_start/os-install.md)
- [Power On](./getting_start/start_up.md)

### **Walnut Pi OS Usage**

- [OS Introduction](./os_software/os_intro.md)
- [Pre-installed Software](./os_software/software.md)
- [Terminal and Common Commands](./os_software/terminal.md)
- [WiFi Connection](./os_software/wifi.md)
- [Time Settings](./os_software/date.md)
- [System Language](./os_software/language.md)
- [IP Address](./os_software/ip_get.md)
- [SSH Remote Terminal](./os_software/ssh.md)
- [VNC Remote Desktop](./os_software/vnc.md)
- [Device Map](./os_software/map_device.md)
- [EMMC Storage](./os_software/emmc.md)
- [NVMe SSD](./os_software/nvme.md)
- [Shutdown and Reboot](./os_software/log_out.md)
- [CPU Temperature](./os_software/core_temp.md)
- [Chip ID](./os_software/cpu_id.md)
- [Audio and Recording](./os_software/audio.md)
- [IR Receiver](./os_software/ir.md)
- [USB Drive Mounting](./os_software/usb_disk.md)
- [MIPI Camera](./os_software/mipi_cam.md)
- [USB Camera](./os_software/usb_cam.md)
- **Display**
    - [1.54-inch Display](./os_software/display/1.54_LCD.md) 
    - [3.5-inch Display](./os_software/display/3.5_LCD.md)    
    - [5.5-inch MIPI Display](./os_software/display/5.5_mipi.md)
    - [10.1-inch MIPI Display](./os_software/display/10.1_mipi.md)
    - [Raspberry Pi MIPI Display](./os_software/display/rpi_mipi.md)
- [Auto-run Script on Boot](./os_software/auto_run.md)
- [config.txt](./os_software/config.txt.md)

### **GPIO Applications**

- [GPIO Introduction](./gpio/gpio_intro.md)
- [GPIO Command Operations](./gpio/gpio_command.md)
- [GPIO Device Configuration](./gpio/gpio_config.md)
- [PWM](./gpio/pwm.md)

### **Python Embedded Programming**

- [Running Python Code](./python/python_run.md) 
- [Introduction to Blinka (Python Library)](./python/blinka_intro.md) 
- **GPIO Basic Experiments**
    - [GPIO Introduction](./python/gpio/gpio_intro.md) 
    - [Lighting the First LED](./python/gpio/led.md) 
    - [Button](./python/gpio/key.md) 
    - [Active Buzzer](./python/gpio/active_buzzer.md) 
    - [UART (Serial Communication)](./python/gpio/uart.md) 
    - [I2C (OLED Display)](./python/gpio/i2c_oled.md) 
    - [ADC (Voltage Measurement)](./python/gpio/adc.md) 
    - [PWM](./python/gpio/pwm.md) 
- **Sensors**
    - [PIR Motion Sensor](./python/sensor/human_induction.md) 
    - [HC-SR04 Ultrasonic Distance](./python/sensor/hcsr04.md) 
    - [BMP280 Barometric Pressure](./python/sensor/bmp280.md) 
    - [MPU6050 6-Axis Accelerometer](./python/sensor/mpu6050.md) 
    - [VL53L1X Laser Distance](./python/sensor/vl53l1x.md) 
    - [MLX90614 Infrared Thermometer](./python/sensor/mlx90614.md) 
- **Expansion Modules**
    - [Relay](./python/module/relay.md) 
- **Network Applications**
    - [Socket Communication](./python/network/socket.md) 
    - [MQTT Communication](./python/network/mqtt.md) 
- **Other Tips**
    - [Auto-run Python Code on Boot](./python/skills/auto_run.md) 
    - [Calling Terminal Commands from Python](./python/skills/command.md) 

### **C Embedded Programming**

- [Compiling C Code on the Board](./c/c_run.md) 
- [IO Control](./c/io_gpioc.md) 
- [I2C](./c/i2c.md) 
- [SPI](./c/spi.md) 
- [UART (Serial)](./c/uart.md) 
- [PWM](./c/pwm.md) 

### **PyQt5**

- [PyQt5 Introduction](./pyQT5/pyqt5_intro.md) 
- [Development Environment Setup](./pyQT5/development_setup.md) 
- [First Window](./pyQT5/first_window.md) 
- [Writing and Running Code](./pyQT5/code_run.md) 
- [Signals and Slots](./pyQT5/signal_slot.md) 
- **Widgets**
    - [Widgets Introduction](./pyQT5/widgets/widgets_intro.md) 
    - **Button Classes**
        - [PushButton](./pyQT5/widgets/buttons/push_button.md) 
        - [ToolButton](./pyQT5/widgets/buttons/tool_button.md) 
    - **Display Widgets**
        - [Label](./pyQT5/widgets/display/label.md) 
    - **Input Widgets**
        - [LineEdit (Single-line Text Box)](./pyQT5/widgets/input/line_edit.md) 
        - [TextEdit (Multi-line Text Box)](./pyQT5/widgets/input/text_edit.md) 
- **Drawing**
    - [Drawing Introduction](./pyQT5/paint/paint_intro.md) 
    - **Drawing Shapes**
        - [Drawing Shapes](./pyQT5/paint/shape/shape.md) 
        - [Pen and Brush Settings](./pyQT5/paint/shape/qpen_qbursh.md) 
    - **Drawing Text**
        - [Writing Text](./pyQT5/paint/text/text.md) 
        - [Font Settings](./pyQT5/paint/text/qfont.md) 
    - [Drawing Images](./pyQT5/paint/image.md) 

### **OpenCV**

- [OpenCV Introduction](./opencv/intro.md) 
- [OpenCV Installation](./opencv/install.md) 
- [Basic Image Operations](./opencv/operate.md) 
- [Image Fundamentals](./opencv/image.md) 
- **Drawing**
    - [Drawing Shapes](./opencv/draw/shape.md) 
    - [Writing Characters](./opencv/draw/string.md) 
- **Image Processing**
    - [Resize](./opencv/process/resize.md) 
    - [Flip](./opencv/process/flip.md) 
    - [Binarization](./opencv/process/binary.md) 
- **Image Detection**
    - [Contour Detection](./opencv/detection/contour_detection.md) 
    - [Edge Detection](./opencv/detection/edge_detection.md) 
    - [Line Detection](./opencv/detection/line_detection.md) 
    - [Circle Detection](./opencv/detection/circle_detection.md) 
    - [Template Matching](./opencv/detection/template_match.md) 
- [USB Camera Usage](./opencv/usb_cam.md) 
- [LCD Usage](./opencv/lcd.md) 
- **Visual Recognition**
    - [Cascade Classifier Introduction](./opencv/vision/haar_cascade.md) 
    - [Face Detection](./opencv/vision/front_face_detection.md)
    - [Eye Detection](./opencv/vision/eye_detection%20copy.md) 
    - [Cat Face Detection](./opencv/vision/cat_face_detection.md) 
    - [License Plate Detection](./opencv/vision/plate_detection.md) 

### **NPU Applications**

- [NPU Introduction](./npu/intro.md) 
- **YOLO Applications**
    - [YOLO Introduction](./npu/yolo/intro.md) 
    - [YOLO11 Classification](./npu/yolo/yolo11-cls.md) 
    - [YOLO11 Detection](./npu/yolo/yolo11-detect.md) 
    - [YOLO11 Oriented Detection](./npu/yolo/yolo11-obb.md) 
    - [YOLO11 Image Segmentation](./npu/yolo/yolo11-seg.md) 
    - [YOLO11 Pose Estimation](./npu/yolo/yolo11-pose.md) 
    - [Model Conversion](./npu/yolo/model_convert.md) 
    - [Online Model Training](./npu/yolo/model_train.md) 

### **Home Assistant**

- [Introduction](./home_assistant/intro.md) 
- [Home Assistant Installation](./home_assistant/install.md) 
- [Initial Configuration](./home_assistant/config.md) 
- [Concepts and Terminology](./home_assistant/concept.md) 
- [Dashboard](./home_assistant/dashboard.md) 
- **MQTT Integration**
    - [MQTT Server Installation](./home_assistant/mqtt/install.md) 
    - [Adding MQTT Integration](./home_assistant/mqtt/add.md) 
    - **Adding MQTT Devices and Entities**
        - [Discovering Devices and Entities](./home_assistant/mqtt/device_entity/discovery.md) 
        - [LED](./home_assistant/mqtt/device_entity/led.md) 
        - [Button](./home_assistant/mqtt/device_entity/key.md) 
        - [Temperature Sensor DS18B20](./home_assistant/mqtt/device_entity/ds18b20.md) 
- [Camera Monitoring](./home_assistant/ip_camera.md) 
- [Automation](./home_assistant/automation.md) 
- [Adding Commercial Products](./home_assistant/other_device.md) 
- [Integrating Apple HomeKit](./home_assistant/homekit.md) 

### **Android System Usage**

- [Image Burning](./android/burn.md) 
- [Power On](./android/start_up.md) 
    
### [**Community Open-Source Project Sharing**](./diy.md) 

### [**Changelog**](./update.md)
