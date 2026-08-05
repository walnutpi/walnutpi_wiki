---
sidebar_position: 2
---

# Product Specifications

WalnutPi 1st generation is based on the Allwinner H616/H618 quad-core 64-bit Cortex-A53 high-performance processor.

## WalnutPi 1B

### Feature Overview

**1G/2G/4G LPDDR4 RAM Versions:**

![walnutpi](./img/hw-parameter/1b2.png)


**H616 + DDR3 (1GB) Version: [Discontinued]**

![walnutpi](./img/hw-parameter/1b1.png)


### Detailed Specifications

|  Product Specs |  |
|  :---:  | ---  |
| CPU  | Allwinner H618 64-bit / Quad-core high-performance Cortex-A53 processor, 1.5GHz |
| GPU  | Mali G31 MP2<br></br>Supports OpenGL ES 1.0/2.0/3.2, OpenCL 2.0|
| RAM (Optional)  | ● 1GB (LPDDR4)<br></br> ● 2GB (LPDDR4)<br></br> ● 4GB (LPDDR4)<br></br>| 
| Storage  | ● MicroSD card up to 512GB<br></br>● Reserved SPI Flash (unpopulated)|
| Wireless  | Dual-band WiFi (2.4G & 5G) + Bluetooth 5.0 |
| Wired Network  | 100Mbps Ethernet port |
| Audio Output  | 3.5mm audio jack |
| Video Output  | MicroHDMI 2.0a, supports 4K@60fps |
| Peripherals  | ● USB 2.0 x 3<br></br>● IR receiver x 1<br></br>● Button x 1<br></br>● LED x 1<br></br>● 40-Pin GPIO header (Raspberry Pi compatible)<br></br>● 3-Pin UART (serial) debug header |
| Power  | Type-C port, 5V/1A input |
| OS  | WalnutPi OS (Debian), Ubuntu 22.04, Home Assistant, Android |

|  Physical Specs |  |
|  :---:  | ---  |
| Dimensions  | 85 x 56 x 21mm (PCB size) |
| Weight  | 38g (bare board) |

### Dimensions

![size](./img/hw-parameter/1b4.png)


## WalnutPi ZeroW

### Feature Overview

![walnutpi](./img/hw-parameter/zerow1.png)

### Detailed Specifications

|  Product Specs |  |
|  :---:  | ---  |
| CPU  | Allwinner H618 64-bit / Quad-core high-performance Cortex-A53 processor, 1.5GHz |
| GPU  | Mali G31 MP2<br></br>Supports OpenGL ES 1.0/2.0/3.2, OpenCL 2.0|
| RAM  | 1GB / 2GB / 4GB LPDDR4 (Optional)<br></br>| 
| Storage  | ● MicroSD card up to 512GB<br></br>● Reserved SPI Flash (unpopulated)|
| Wireless  | Dual-band WiFi (2.4G & 5G) + Bluetooth 5.0 <br></br> (Onboard dual-band high-gain ceramic antenna, optional external ipex4) <br></br>|
| Video Output  | MicroHDMI 2.0a, supports 4K@60fps |
| Peripherals  | ● USB 2.0 x 1 (Type-C)<br></br>● Button x 1<br></br>● LED x 1<br></br>● 40-Pin GPIO header (Raspberry Pi compatible)<br></br>|
| FPC Connector  | ● USB 2.0 x 2 <br></br>● IR receiver x 1<br></br>● Audio<br></br>● 100Mbps Ethernet<br></br>● Debug serial (UART) <br></br>● Power output (5V and 3.3V)|
| Power  | Type-C port, 5V/1A input |
| OS  | WalnutPi OS (Debian), Ubuntu 22.04, Home Assistant, Android |

|  Physical Specs |  |
|  :---:  | ---  |
| Dimensions  | 65 x 30 x 5mm (PCB size) |
| Weight  | 8.5g (bare board) |

### Dimensions

![size](./img/hw-parameter/zerow2.png)


## WalnutPi CM1

### Feature Overview

- **CM1 Standard Version**

![walnutpi](./img/hw-parameter/cm1_1.png)

- **CM1 EMMC Version**

![walnutpi](./img/hw-parameter/cm1_2.png)

:::tip Note
**The CM1 EMMC version occupies pins PC8, PC9, PC10, PC11, PC14, and PC15 on the WalnutPi 40-Pin GPIO.**
:::

### Detailed Specifications

|  Product Specs |  |
|  :---:  | ---  |
| CPU  | Allwinner H618 64-bit / Quad-core high-performance Cortex-A53 processor, 1.5GHz |
| GPU  | Mali G31 MP2<br></br>Supports OpenGL ES 1.0/2.0/3.2, OpenCL 2.0|
| RAM  | 1GB / 2GB / 4GB LPDDR4 (Optional)<br></br>| 
| Storage  | ● MicroSD card up to 512GB (via BTB connector)<br></br> ● EMMC Flash 0GB/32GB optional (other capacities available for custom orders)<br></br>● Reserved SPI Flash (unpopulated, for non-EMMC versions)|
| Wireless  | Dual-band WiFi (2.4G & 5G) + Bluetooth 5.0 <br></br> (Onboard dual-band high-gain ceramic antenna, optional external ipex4) <br></br>|
| Peripherals<br></br>(BTB Connector)  | ● Video Output: MicroHDMI 2.0a, supports 4K@60fps <br></br>● Audio <br></br>● 100Mbps Ethernet <br></br>● USB 2.0 x 3 <br></br>● IR receiver x1 ● Button x 1<br></br>● LED x 1<br></br>● 40-Pin GPIO header (Raspberry Pi compatible)<br></br>● Debug serial (UART) <br></br>● BOOT pin <br></br>● Power input (5V)|
| Power  | Type-C port, 5V/1A input |
| OS  | WalnutPi OS (Debian), Ubuntu 22.04, Home Assistant, Android |

|  Physical Specs |  |
|  :---:  | ---  |
| Dimensions  | 55 x 40 x 5mm |
| Weight  | 8.5g (bare board) |

### Dimensions

![walnutpi](./img/hw-parameter/cm1_3.png)


## WalnutPi BOX

WalnutPi BOX is composed of a CM1 compute module and an IO expansion board. It can be connected to a 0.96-inch OLED display (I2C), enclosure, and cooling fan.

### Feature Overview

#### WalnutPi BOX

![walnutpi](./img/hw-parameter/box.png)

#### IO Expansion Board

![walnutpi](./img/hw-parameter/io_board1.png)

### Detailed Specifications


|  Product Specs |  |
|  :---:  | ---  |
| CPU  | Allwinner H618 64-bit / Quad-core high-performance Cortex-A53 processor, 1.5GHz |
| GPU  | Mali G31 MP2<br></br>Supports OpenGL ES 1.0/2.0/3.2, OpenCL 2.0|
| RAM  | 1GB / 2GB / 4GB LPDDR4 (Optional)<br></br>| 
| Storage  | ● MicroSD card up to 512GB<br></br>● Reserved SPI Flash (unpopulated)|
| Wireless  | Dual-band WiFi (2.4G & 5G) + Bluetooth 5.0 <br></br>(Onboard dual-band high-gain ceramic antenna, optional external ipex4)|
| Wired Network  | 100Mbps Ethernet port |
| Audio Output  | 3.5mm audio jack |
| Video Output  | HDMI 2.0a, supports 4K@60fps |
| Peripherals  | ● USB 2.0 x 2<br></br>● IR receiver x 1<br></br>● Button x 1<br></br>● LED x 1<br></br>● 40-Pin GPIO header (Raspberry Pi compatible)<br></br>● 3-Pin UART (serial) debug header <br></br>● 0.96-inch OLED display interface (I2C) |
| Power  | Type-C port, 5V/1A input |
| OS  | WalnutPi OS (Debian), Ubuntu 22.04, Home Assistant, Android |

|  Physical Specs |  |
|  :---:  | ---  |
| Dimensions  | 100 x 100 x 21 mm (without enclosure)<br></br> 105 x 105 x 33.6 mm (with enclosure)|
| Weight  | 67.5g (without enclosure) |

### Dimensions

![walnutpi](./img/hw-parameter/io_board3.png)
