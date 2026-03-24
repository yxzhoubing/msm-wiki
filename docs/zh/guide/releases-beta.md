# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本


> 当前 Beta 版本：`beta-1.0.8`  
> 发布时间：2026-03-24 17:22:55 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.8>  
> - 下载方式：同一发布页内提供各平台二进制、安装包与派网 APX

### ✨ 新增
- 代理组卡片增加类型彩色标签显示
- 优化代理组页面整体 UI 显示效果

### 🔧 变更
- 统一核心名称显示为「Mihomo」
- 「规则仓库」更名为「规则集」
- 移除实时速率卡片连接数展示
- 重构规则编辑器及映射对话框 UI
- 优化仪表盘及代理页面加载性能
- 仪表盘设置弹窗 UI 重新设计

### 🐛 修复
- 修复代理组类型标签映射及 API 格式
- 修复 TUN 模式关闭显示异常
- 修复策略组多选功能及前端性能
- 修复 Switch/MiniSwitch 滑块对齐
- 修复仪表盘拖拽手柄显示逻辑
- 修复仪表盘卡片最小高度约束
- 修复多处 i18n 翻译及占位符问题
- 恢复 /process 入口并统一文案

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`9dd338e`](https://github.com/msm9527/msm/commit/9dd338e194afbaa83c34584c971c8c4efd4f729a)
- **提交信息**: fix(i18n): 修复用户卡片翻译错误
- **提交作者**: msm
- **提交时间**: 2026-03-24 17:22:55 CST
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
