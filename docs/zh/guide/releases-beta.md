# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本


> 当前 Beta 版本：`beta-1.0.14`  
> 发布时间：2026-03-27 23:59:56 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.14>  
> - 下载方式：同一发布页内提供各平台二进制、安装包与派网 APX

### 🐛 修复
- 修复 MosDNS 恢复回写失败并优化重试等待策略
- 修复许可证重激活因本地授权材料损坏导致失败

### 🔧 变更
- 调整组件更新阶段 GitHub 下载优先级

### 📝 备注
- 0.x 升级至 1.x 需重装或重置安全并重新下载 DNS 服务

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`33d934d`](https://github.com/msm9527/msm/commit/33d934d4c5cdf97d9170a528345f422137751d64)
- **提交信息**: chore: sync version to 1.0.14
- **提交作者**: github-actions[bot]
- **提交时间**: 2026-03-27 23:59:56 CST
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
如果直连 GitHub 较慢，推荐直接使用 Beta 国内镜像脚本直链：

```bash
# Beta 国内镜像脚本（等价于 install_beta_cn.sh）
# curl（sudo）
curl -fsSL https://msm.19930520.xyz/dl/beta/install.sh | sudo bash
# root 用户
curl -fsSL https://msm.19930520.xyz/dl/beta/install.sh | bash

# wget（sudo）
wget -qO- https://msm.19930520.xyz/dl/beta/install.sh | sudo bash
# root 用户
wget -qO- https://msm.19930520.xyz/dl/beta/install.sh | bash
```

> `https://msm.19930520.xyz/dl/beta/install.sh` 为 Beta 国内镜像脚本直链，和仓库中的 `install_beta_cn.sh` 同步。

> 系统自带工具小贴士：Debian/Ubuntu/Alpine 最小镜像通常预装 `wget` 而不一定有 `curl`；CentOS/RHEL/Fedora 常见预装 `curl`；macOS 预装 `curl`。缺少对应工具时可先用包管理器安装（如 `apt-get install curl` 或 `yum install wget`）。
:::
