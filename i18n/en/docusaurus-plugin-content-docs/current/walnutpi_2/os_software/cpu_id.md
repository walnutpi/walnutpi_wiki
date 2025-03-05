---
sidebar_position: 42
---

# 主控ID号

核桃派2B的主控是全志T527，每个芯片的chipid都是唯一的，用户可以通过下面指令获取chipid来区分不同开发板。

```bash
cat /sys/class/sunxi_info/sys_info |grep sunxi_serial
```

![cpu_id](./img/cpu_id/cpu_id1.png)