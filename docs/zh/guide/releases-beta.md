# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本


> 当前 Beta 版本：`beta-1.0.0`  
> 发布时间：2026-03-21 00:24:50 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.0>  
> - 下载方式：同一发布页内提供各平台二进制与安装包

### ✨ 新增（Added）
- 引入能力票据与多点授权校验
- 为 MosDNS 上游统计添加分组显示

### 🔧 变更（Changed）
- 前后端统一 Pro 限制体验并收紧配置接口
- 适配 MosDNS 5.2.0 API 与升级恢复逻辑
- 限制 MosDNS 版本保留策略并支持删除
- 压缩 MosDNS 配置页并移除分流刷新配置
- 临时禁用 MosDNS cn-fakeip 和 answer 模式
- 加固本地授权绑定与运行期安全检测

### 🐛 修复（Fixed）
- 修复 SQLite 旧库主键迁移问题
- 修复内存生命周期问题并清理资源
- 修复 Mihomo Pro 权限、升级流程及 License 页面
- 修复许可证租约冲突静默恢复机制
- 修复激活响应能力票据加载顺序
- 修复 MosDNS 版本显示与概览统计展示
- 修复 MosDNS 升级恢复与严格模块回写
- 修复上游 DNS 统计显示及批量重建状态

### 📝 备注（Notes）
- 本次更新涉及 MosDNS 5.2.0 API 适配，请留意兼容
- Pro 配置接口收紧，请注意调用方兼容性

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`db0e3ad`](https://github.com/msm9527/msm/commit/db0e3addfa6307bc4ea32ae446122a584f8839f9)
- **提交信息**: 修复 SQLite 旧库主键迁移 / Fix legacy SQLite primary key migration
- **提交作者**: msm
- **提交时间**: 2026-03-21 00:24:50 CST
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
