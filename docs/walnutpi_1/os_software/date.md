---
sidebar_position: 5
---

# 时间设置
Linux系统启动会自动同步网络时间，但是使用的为世界标准时间UTC（伦敦时间），在中国使用需要将时区改成**Asia/Shanghai**，date命令才能获取正确时间。
执行命令：
```bash
sudo dpkg-reconfigure tzdata
```
选择Asia，即亚洲地区，按回车。
![time1](./img/time/time1.png)

选择Shanghai，上海，按回车。
![time2](./img/time/time2.png)

配置完成后可以输入date命令来查看时间：
```bash
date
```
![time3](./img/time/time3.png)