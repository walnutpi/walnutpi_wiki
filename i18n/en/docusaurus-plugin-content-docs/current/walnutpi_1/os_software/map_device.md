---
sidebar_position: 10
---

# 设备地图

:::tip 提示
核桃派1代镜像V2.5.0以上版本才有此功能。
:::

核桃派设备地图是核桃派系统特有功能，通过IP地址获取开发板的位置并在地图展示，位置只精确到城市。[设备地图链接](https://map.walnutpi.com)

![map_device](./img/map_device/map_device1.png)

该功能默认开启，用户可以自行关闭：

**关闭指令：**

```bash
systemctl disable map_device.service
```

重启开发板生效。

**开启指令：**

```bash
systemctl enable map_device.service
```

重启开发板生效。

