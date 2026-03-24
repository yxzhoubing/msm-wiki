# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本


> 当前 Beta 版本：`beta-1.0.8`  
> 发布时间：2026-03-24 16:53:45 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.8>  
> - 下载方式：同一发布页内提供各平台二进制、安装包与派网 APX

### ✨ 新增（Added）
- 代理组卡片新增类型彩色标签显示

### 🔧 变更（Changed）
- 规则编辑器 UI 重构，优化标签与列表高度
- 「规则仓库」更名「规则集」，重构添加弹窗
- 仪表盘设置弹窗 UI 重构设计及手柄显示优化
- 移除实时速率卡片连接数展示
- 代理核心显示名统一改为 Mihomo
- 优化代理页面、策略组及首屏加载性能

### 🐛 修复（Fixed）
- 修复 Switch 对齐、仪表盘手柄及卡片高度约束
- 修复多处翻译占位符及中英混排错误
- 修复 TUN 模式异常、MosDNS 状态及策略组多选
- 修复代理组标签映射及恢复 /process 入口

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`51e8a1c`](https://github.com/msm9527/msm/commit/51e8a1c60c16684382611cc7fe98965bb8885e09)
- **提交信息**: chore: sync version to 1.0.8
- **提交作者**: github-actions[bot]
- **提交时间**: 2026-03-24 16:53:45 CST
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
