---
sidebar_position: 2
---

# 红外接收头

核桃派板载1个红外接收头。

![ir1](./img/ir/ir1.png)

核桃派系统预装了**ir-keytable**软件，可用于查看红外设备和测试红外接收解码。

## 查看设备信息

终端输入下面指令即可查看红外设备信息：

```bash
ir-keytable
```
![ir2](./img/ir/ir2.png)

## 红外接收测试

首先你需要一个常用的遥控器，这里使用这种，比较容易买到。

![ir3](./img/ir/ir3.png)


在终端输入下面命令，等待红外遥控信号：

```bash
sudo ir-keytable -c -p NEC -t
```

![ir4](./img/ir/ir4.png)

用遥控器对着红外接收头，任意按下按键：

![ir5](./img/ir/ir5.png)

可以在终端看到读取到的红外编码：

![ir6](./img/ir/ir6.png)