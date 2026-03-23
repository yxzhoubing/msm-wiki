---
layout: home

hero:
  name: "MSM"
  text: "统一管理平台"
  tagline: 基于 MosDNS + SingBox/Mihomo 的智能 DNS 分流与透明代理管理平台，单二进制一键部署，可视化管理
  image:
    src: /logo/logo-square.svg
    alt: MSM Logo
  actions:
    - theme: brand
      text: 🚀 快速安装
      link: /zh/guide/install
    - theme: alt
      text: 📖 使用指南
      link: /zh/guide/basic-config
    - theme: alt
      text: 🔌 路由器集成
      link: /zh/guide/router-integration

features:
  - icon: 🌐
    title: 旁路由架构
    details: 作为旁路网关部署，不影响主路由配置。通过静态路由和 DNS 分流实现智能流量管理，故障时自动回退
  - icon: 🎯
    title: DNS 智能分流
    details: 基于 MosDNS 引擎的 DNS 分流，支持 FakeIP 模式和 GeoIP 规则，精准识别国内外域名
  - icon: 🔄
    title: 双内核透明代理
    details: 同时支持 Mihomo 和 Sing-Box 双代理内核，自由切换，支持 SS/VMess/Trojan/VLESS/Hysteria 等主流协议
  - icon: 🖥️
    title: 可视化管理界面
    details: 现代化 Web 管理平台，仪表盘实时监控、在线配置编辑、DNS 查询日志、代理连接管理，告别命令行
  - icon: 🛡️
    title: 设备级精准控制
    details: 支持白名单/黑名单/禁用三种模式，精确控制每台设备的代理行为，自动发现局域网设备
  - icon: 🔌
    title: 广泛路由器兼容
    details: 支持 RouterOS、爱快、OpenWrt、UniFi 等所有支持静态路由的路由系统，提供详细配置教程
  - icon: 📝
    title: 配置管理与回滚
    details: 在线文件编辑器（Monaco Editor）、语法高亮、自动验证、配置历史版本对比和一键回滚
  - icon: ⚡
    title: 单二进制跨平台部署
    details: 零依赖单文件部署，支持 Linux/macOS（x64/ARM64）、Docker、systemd 服务，一键安装脚本
  - icon: 👥
    title: 多用户权限管理
    details: 基于 RBAC 的多用户管理，管理员/运维员/查看者三级角色，JWT 认证，API Token 支持
  - icon: 📊
    title: 完整 REST API
    details: 提供 200+ 个 API 端点，覆盖所有管理功能，支持 SSE 实时事件流，便于自动化和二次开发
  - icon: 🔧
    title: CLI 命令行工具
    details: 提供 serve/init/doctor/status/logs 等完整的 CLI 命令，支持系统服务管理和授权管理
  - icon: 🌍
    title: 多语言与主题
    details: 支持中英文双语界面无缝切换，明亮/暗色主题模式，自定义仪表盘布局
---

## 什么是 MSM？

MSM 是一个**旁路由 DNS 分流方案**，通过将 **MosDNS**（DNS 服务器）和 **SingBox/Mihomo**（代理内核）整合到一个可视化管理平台，实现智能 DNS 分流和透明代理。

### 核心架构

```
主路由 (192.168.1.1)
    ↓ DHCP DNS: 192.168.1.2
    ↓ 静态路由: 28.0.0.0/8 → 192.168.1.2
    ↓
MSM 旁路由 (192.168.1.2)
    ├─ MosDNS (53端口) - DNS 分流
    │   ├─ 国内域名 → 国内 DNS
    │   └─ 国外域名 → FakeIP (28.0.0.0/8)
    │
    └─ SingBox/Mihomo (7890/7891) - 透明代理
        └─ FakeIP 流量 → 代理服务器
```

### 工作原理

1. **DNS 分流**: 主路由将 DNS 请求转发到 MSM，MosDNS 根据规则分流国内外域名
2. **FakeIP 模式**: 国外域名返回 FakeIP 地址（28.0.0.0/8 网段）
3. **静态路由**: 主路由将 FakeIP 流量路由到 MSM
4. **透明代理**: SingBox/Mihomo 拦截 FakeIP 流量并通过代理转发
5. **设备控制**: 通过 IP 白名单控制哪些设备走代理

## 核心功能

- **一键部署**: 单二进制文件，支持一键安装脚本，5 分钟完成部署
- **DNS 分流**: 基于域名规则的智能 DNS 分流，支持自定义规则
- **FakeIP 模式**: 高效的 FakeIP 实现，减少 DNS 泄漏
- **透明代理**: 无需客户端配置，全局透明代理
- **设备管理**: IP 白名单控制，精确管理哪些设备走代理
- **多内核支持**: 支持 SingBox 和 Mihomo 双内核，可自由切换
- **配置编辑**: 在线编辑配置文件，支持语法高亮和验证
- **历史回滚**: 自动保存配置历史，一键回滚到任意版本
- **实时监控**: 实时查看服务状态、日志和资源使用情况
- **多用户管理**: 基于角色的访问控制（管理员/运维员/查看者）
- **CLI 工具**: 完整的命令行工具，支持 `serve`、`doctor`、`status` 等命令
- **REST API**: 200+ API 端点，支持二次开发和自动化

## 支持的路由系统

MSM 支持所有能够配置**静态路由**和**自定义 DNS** 的路由系统：

- ✅ **RouterOS** (MikroTik)
- ✅ **爱快** (iKuai)
- ✅ **OpenWrt** / LEDE
- ✅ **UniFi** (Ubiquiti)
- ✅ **梅林固件** (Asuswrt-Merlin)
- ✅ **pfSense** / OPNsense
- ✅ 其他支持静态路由的路由系统

## 快速开始

### 系统要求

- **平台**: Linux (Debian/Ubuntu/CentOS/Alpine) 或 macOS
- **架构**: x86_64 (amd64) 或 ARM64 (aarch64)
- **内存**: 最低 512MB，推荐 2GB
- **权限**: root 或 sudo 权限

### 一键安装

```bash
# 使用 curl（sudo）
curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install.sh | sudo bash
# root 用户
curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install.sh | bash

# 或使用 wget（sudo）
wget -qO- https://raw.githubusercontent.com/msm9527/msm-wiki/main/install.sh | sudo bash
# root 用户
wget -qO- https://raw.githubusercontent.com/msm9527/msm-wiki/main/install.sh | bash
```

::: tip 国内加速（可选）
如果直连 GitHub 较慢，可使用社区加速镜像：

```bash
# curl（sudo）
curl -fsSL https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install.sh | sudo bash
# root 用户
curl -fsSL https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install.sh | bash

# wget（sudo）
wget -qO- https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install.sh | sudo bash
# root 用户
wget -qO- https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install.sh | bash

# 或直接使用国内专用脚本（自动走镜像下载二进制）
curl -fsSL https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_cn.sh | sudo bash
# root 用户
curl -fsSL https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_cn.sh | bash
# wget（sudo）
wget -qO- https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_cn.sh | sudo bash
# root 用户
wget -qO- https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_cn.sh | bash

# 镜像直链版（等价，用于部分环境更快）
curl -fsSL https://msm.19930520.xyz/dl/install.sh | sudo bash
# root 用户
curl -fsSL https://msm.19930520.xyz/dl/install.sh | bash
# wget（sudo）
wget -qO- https://msm.19930520.xyz/dl/install.sh | sudo bash
# root 用户
wget -qO- https://msm.19930520.xyz/dl/install.sh | bash
```

> 系统自带工具小贴士：Debian/Ubuntu/Alpine 最小镜像通常预装 `wget` 而不一定有 `curl`；CentOS/RHEL/Fedora 常见预装 `curl`；macOS 预装 `curl`。缺少对应工具时可先用包管理器安装（如 `apt-get install curl` 或 `yum install wget`）。
:::

安装完成后访问 `http://your-server-ip:7777`

## 致谢与引用

::: info 社区致谢
MSM 的设计与落地过程中，参考了许多社区前辈的公开方案与经验，在此致谢：

- [MSSB（逗猫佬）](https://github.com/baozaodetudou/mssb)：旁路由与分流整体思路的重要参考项目
- [MosDNS 相关实践（PH 佬）](https://github.com/yyysuo/mosdns)：MosDNS 配置与实战经验参考
- [Mihomo 官方核心](https://github.com/MetaCubeX/mihomo)：MSM 当前使用的代理核心之一
:::

## 社区交流

- 💬 [Telegram 交流群](https://t.me/msm_home) — 问题讨论、经验分享、互助交流
- 📢 [Telegram 频道](https://t.me/msmwiki) — 版本更新通知、公告推送

### 延伸教程与资料

| 类型 | 资源 | 用途 |
| --- | --- | --- |
| 分流教程 | [FakeIP 分流大法总教程](https://drive.google.com/drive/u/1/folders/1ldD2XqIrREPgr_CKMSgvYomXgwknpApi) | 系统理解 FakeIP 分流原理与落地方法 |
| 官方知识库 | [原版 MosDNS 知识库](https://irine-sistiana.gitbook.io/mosdns-wiki/) | 查询 MosDNS 规则、插件与高级配置 |
| 开源脚本 | [StoreHouse 脚本合集](https://github.com/herozmy/StoreHouse/tree/latest) | 获取实用脚本与部署辅助工具 |

## 快速安装

1. 选择你的系统与部署方式：
   - [Linux 安装](/zh/guide/install-linux)
   - [macOS 安装](/zh/guide/install-macos)
   - [Alpine 安装](/zh/guide/install-alpine)
   - [Docker 安装](/zh/guide/docker)
2. 安装完成后访问管理界面：
   - 典型访问地址：`http://your-server-ip:7777`
   - 示例环境：`http://192.168.20.2/`
3. 按路由器系统完成集成配置：
   - [路由器集成总览](/zh/guide/router-integration)

## 下一步

- [安装总览](/zh/guide/install) - 安装方式与选择建议
- [路由器集成](/zh/guide/router-integration) - 不同系统的配置步骤
- [使用指南总览](/zh/guide/basic-config) - 对照界面功能逐步使用
- [CLI 命令参考](/zh/guide/cli) - 命令行工具参考
- [API 参考](/zh/guide/api) - REST API 文档
- [常见问题](/zh/faq/) - 故障排查
