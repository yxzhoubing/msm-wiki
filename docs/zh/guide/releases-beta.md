# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本


> 当前 Beta 版本：`beta-1.0.0`  
> 发布时间：2026-03-20 23:10:41 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.0>  
> - 下载方式：同一发布页内提供各平台二进制与安装包

### ✨ 新增
- 引入能力票据与多点授权校验
- MosDNS 上游统计新增分组显示功能
- 适配 MosDNS 5.2.0 API 与升级恢复逻辑

### 🔧 变更
- 统一 Pro 限制体验并收紧配置接口
- 限制 MosDNS 版本保留并支持删除
- 压缩 MosDNS 配置页并移除分流刷新配置
- 加固本地授权绑定与运行期安全检测

### 🐛 修复
- 修复内存生命周期问题及资源清理
- 修复 Mihomo Pro 权限与升级流程异常
- 修复许可证租约冲突及票据加载顺序
- 修复 MosDNS 统计、显示及重建状态错误

### ⚠️ 废弃
- 暂时禁用 MosDNS cn-fakeip 和 answer 模式

### 📝 备注
- 许可证安全机制升级，请注意授权变更
- MosDNS 5.2.0 适配涉及 API 变动，请测试

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`9f83cc5`](https://github.com/msm9527/msm/commit/9f83cc5f00dd51ed59970edfedda03f204948e40)
- **提交信息**: golang
- **提交作者**: msm
- **提交时间**: 2026-03-20 23:10:41 CST
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
