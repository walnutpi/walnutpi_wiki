---
sidebar_position: 7
---

# IP地址获取

## WiFi IP地址

WiFi模块硬件位置, 通过WiFi无线连接到路由器（支持2.4G、5G信号）：

![ip_get1](./img/ip_get/ip_get1.png)

通过以下命令可以获取核桃派所有网络IP地址，**wlan0**为WiFi无线卡名称，连接成功可以看到其IP地址。
```bash
sudo ifconfig
```

![ip_get2](./img/ip_get/ip_get2.png)

## 以太网IP地址

以太网模块硬件位置，通过网线连接到路由器：

![ip_get3](./img/ip_get/ip_get3.png)

通过以下命令可以获取核桃派所有网络IP地址，**eth0**为以太网卡名称，连接成功可以看到其IP地址。
```bash
sudo ifconfig
```

![ip_get4](./img/ip_get/ip_get4.png)
