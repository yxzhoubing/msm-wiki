# 安装总览

本页帮助你快速选择合适的安装方式，并把“安装完成后接下来做什么”直接串起来。

## 选择安装方式

| 场景 | 推荐方式 | 说明 |
| --- | --- | --- |
| Linux 服务器/虚拟机 | [Linux 安装](/zh/guide/install-linux) | 一键脚本 + systemd 服务 |
| macOS 主机 | [macOS 安装](/zh/guide/install-macos) | CLI 安装或桌面版 |
| Alpine/OpenWrt 类极简系统 | [Alpine 安装](/zh/guide/install-alpine) | musl + 手动服务管理 |
| Docker 环境 | [Docker 安装](/zh/guide/docker) | 容器化部署 |

## 基本要求（通用）

- **权限**：Linux 需要 root 或 sudo，macOS 需要管理员权限。
- **网络**：能够访问 GitHub Releases 或镜像源。
- **端口**：默认使用 `7777`（Web），`53/1053`（DNS），`7890/7891/7892`（代理）。

## 安装完成后必做

1. 打开管理界面
   - 默认：`http://your-server-ip:7777`
   - 示例：`http://192.168.20.2/`
2. 完成初始化向导
   - 创建管理员账户
   - 选择 MosDNS 和代理内核
   - 检查本机 IPv4 / IPv6 设置
3. 进入 [路由器集成](/zh/guide/router-integration)
   - 配置 DHCP DNS（通常只填 MSM 的 IPv4 地址）
   - 配置 `28.0.0.0/8`
   - 配置 `f2b0::/18`
4. 回到 MSM
   - 设置 DNS 分流规则
   - 设置设备白/黑名单
   - 配置代理节点并验证连通性

## 推荐落地顺序

如果你是第一次搭建，建议按下面顺序完成：

1. 先完成系统安装和初始化
2. 再完成主路由的 IPv4 / IPv6 DNS 与静态路由
3. 然后在 MSM 中设置 DNS 规则和设备名单
4. 最后再调整代理节点、策略组和进阶规则

这样排错最简单。不要一开始就同时改太多地方，否则很难判断问题出在安装、DNS、路由还是代理配置。

## 安装完成后的最小验收

- 能打开 `http://<MSM-IP>:7777`
- `msm status` 正常
- 主路由已经把 DHCP DNS 指向 MSM
- 主路由已经同时添加 `28.0.0.0/8` 和 `f2b0::/18`
- 客户端 `nslookup google.com` 和 `dig AAAA google.com` 都能拿到 FakeIP

## 常用命令（Linux/macOS CLI 安装）

```bash
# 状态
msm status

# 日志
msm logs

# 重启
msm restart
```

## 下一步

- [首次使用](/zh/guide/first-use)
- [路由器集成总览](/zh/guide/router-integration)
- [使用指南总览](/zh/guide/basic-config)
