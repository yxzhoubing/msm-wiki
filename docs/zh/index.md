---
layout: home

hero:
  name: "MSM"
  text: "统一管理平台"
  tagline: 基于 MosDNS + SingBox/Mihomo 的智能 DNS 分流与透明代理管理平台
  image:
    src: /logo/logo-square.svg
    alt: MSM Logo
  actions:
    - theme: brand
      text: 🚀 快速上手
      link: /zh/guide/install
    - theme: alt
      text: 🔌 路由器接入
      link: /zh/guide/router-integration
    - theme: alt
      text: 🖥️ 界面功能
      link: /zh/guide/basic-config

features:
  - icon: 🌐
    title: 双栈 FakeIP 分流
    details: 文档默认按 FakeIP v4 与 v6 的共存方式组织，主路由接入逻辑更统一
  - icon: 🔄
    title: 双内核代理
    details: 同时支持 Mihomo 和 Sing-Box，便于按自己的使用习惯选择内核
  - icon: 🛡️
    title: 设备级控制
    details: 支持白名单、黑名单和禁用模式，按设备精确决定谁走代理
  - icon: 🔌
    title: 常见路由器可接入
    details: 已提供 RouterOS、爱快、OpenWrt、UniFi 的接入说明
  - icon: 📝
    title: 可视化配置与日志
    details: DNS、代理、日志和配置文件都能在 Web 界面中集中管理
  - icon: ⚡
    title: 单二进制部署
    details: 支持 Linux、macOS、Docker 等部署方式，适合家庭网络和小型实验环境
---

## 一句话理解

MSM 是一套围绕 **MosDNS + Mihomo / Sing-Box** 构建的旁路由方案。  
你只需要完成三件事：安装 MSM、让主路由把 DNS 指向 MSM、再把 `28.0.0.0/8` 和 `f2b0::/18` 路由回 MSM。

## 你会在这里完成什么

- 选择适合你的安装方式并完成初始化
- 按路由器系统完成接入
- 配置 DNS 分流、设备名单和代理节点
- 用日志与诊断页面做最终验收

## 推荐阅读顺序

1. [安装总览](/zh/guide/install)
2. [首次使用](/zh/guide/first-use)
3. [路由器集成总览](/zh/guide/router-integration)
4. [对应路由器配置](/zh/guide/routeros)
5. [DNS 服务管理](/zh/guide/mosdns)
6. [设备管理](/zh/guide/device-management)
7. [代理服务（Mihomo）](/zh/guide/mihomo) 或 [代理服务（Sing-Box）](/zh/guide/singbox)

## 三步开始

### 1. 安装并进入管理界面

- 从 [安装总览](/zh/guide/install) 选择你的平台
- 完成初始化向导
- 确认可以访问 `http://<MSM-IP>:7777`

### 2. 完成主路由接入

- DHCP DNS 默认只下发 MSM 的 IPv4 地址
- 添加 `28.0.0.0/8 -> MSM IPv4`
- 添加 `f2b0::/18 -> MSM IPv6`

### 3. 回到 MSM 完成业务配置

- 检查 DNS 分流规则和 FakeIP 网段
- 把自己的设备加入白名单
- 导入代理节点并测试 `A` / `AAAA` 查询结果

## 已提供教程的路由器系统

- [RouterOS（MikroTik）](/zh/guide/routeros)
- [爱快（iKuai）](/zh/guide/ikuai)
- [OpenWrt / LEDE](/zh/guide/openwrt)
- [UniFi](/zh/guide/unifi)

> 其他支持静态路由和自定义 DNS 的系统，也可以先参考 [路由器集成总览](/zh/guide/router-integration) 按相同原则落地。

## 进阶入口

- [OpenWrt 进阶](/zh/guide/openwrt-advanced) - 批量路由和自动化脚本
- [回家配置](/zh/guide/home) - 远程回家访问内网设备
- [系统诊断](/zh/guide/diagnostics) - 常见问题定位入口

## 社区与资料

- [Telegram 交流群](https://t.me/msm_home)
- [Telegram 频道](https://t.me/msmwiki)
- [Tom佬的技术博客](https://blog.847977.xyz/)
- [以 FakeIP 分流为基石的一套科学方案](https://blog.847977.xyz/2025/10/30/%E4%BB%A5fakeip%E5%88%86%E6%B5%81%E4%B8%BA%E5%9F%BA%E7%9F%B3%E7%9A%84%E4%B8%80%E5%A5%97%E7%A7%91%E5%AD%A6%E6%96%B9%E6%A1%88/)
- [MosDNS 相关实践（PH 佬）](https://github.com/yyysuo/mosdns)
- [StoreHouse 脚本合集](https://github.com/herozmy/StoreHouse/tree/latest)

## 下一步

- [安装总览](/zh/guide/install) - 从安装开始
- [完整使用流程](/zh/guide/complete-workflow) - 端到端串起来看
- [使用指南总览](/zh/guide/basic-config) - 对照后台菜单逐项使用
