# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本


> 当前 Beta 版本：`beta-0.9.12`  
> 发布时间：2026-03-04 16:40:44 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-0.9.12>  
> - 下载方式：同一发布页内提供各平台二进制与安装包

### 🔧 变更（Changed）
- 设置页改版：渠道迁移至版本信息并按组展示
- 代理管理页卡片适配移动端工具条布局
- 代理编辑改为暂存后统一保存并重启
- 订阅与节点共用「保存并重启」按钮
- Proxies Tab 改为内联展示，移除弹窗

### 🐛 修复（Fixed）
- 恢复白名单策略中遗漏的 Tracker 配置
- 禁用代理节点增加状态标识显示
- 修复禁用项目编辑及状态管理异常
- 修复订阅节点增删改后未立即生效问题

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`1a70d40`](https://github.com/msm9527/msm/commit/1a70d406e4976f408634e286ae6c628ffdfb13ec)
- **提交信息**: 白名单策略增加tracker（之前误删了）
- **提交作者**: msm
- **提交时间**: 2026-03-04 16:40:44 CST
:::

---

## 📚 历史 Beta 版本

> 下面仅展示最新一次 beta 每日构建信息。完整历史请以 GitHub Releases 中 `beta-*` 标签为准。

---

## ⚠️ 使用说明

1. Beta 版标签格式：`beta-x.x.x`
2. Docker 标签格式：`msmbox/msm:beta-x.x.x` 与 `msmbox/msm:beta-latest`
3. 若需稳定环境，请使用[稳定版发布](/zh/guide/releases)

## 一键安装

```bash
# 使用 curl（sudo）
curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | sudo bash
# root 用户
curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | bash

# 或使用 wget（sudo）
wget -qO- https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | sudo bash
# root 用户
wget -qO- https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | bash
```

::: tip 国内加速（可选）
如果直连 GitHub 较慢，可使用社区加速镜像：

```bash
# curl（sudo）
curl -fsSL https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_beta.sh | sudo bash
# root 用户
curl -fsSL https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_beta.sh | bash

# wget（sudo）
wget -qO- https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_beta.sh | sudo bash
# root 用户
wget -qO- https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_beta.sh | bash

# 或直接使用国内专用脚本（自动走镜像下载二进制）
curl -fsSL https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_beta_cn.sh | sudo bash
# root 用户
curl -fsSL https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_beta_cn.sh | bash
# wget（sudo）
wget -qO- https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_beta_cn.sh | sudo bash
# root 用户
wget -qO- https://msm.19930520.xyz/https://raw.githubusercontent.com/msm9527/msm-wiki/refs/heads/main/install_beta_cn.sh | bash
```

> 系统自带工具小贴士：Debian/Ubuntu/Alpine 最小镜像通常预装 `wget` 而不一定有 `curl`；CentOS/RHEL/Fedora 常见预装 `curl`；macOS 预装 `curl`。缺少对应工具时可先用包管理器安装（如 `apt-get install curl` 或 `yum install wget`）。
:::
