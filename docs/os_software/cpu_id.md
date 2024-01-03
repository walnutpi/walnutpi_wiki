---
sidebar_position: 22
---

# 主控ID号

核桃派1B的主控是全志H616/H618，每个芯片的chipid都是唯一的，用户可以通过下面指令获取chipid来区分不同开发板。

```bash
cat /sys/class/sunxi_info/sys_info | grep "chipid"
```

![cpu_id](./img/cpu_id/cpu_id1.png)