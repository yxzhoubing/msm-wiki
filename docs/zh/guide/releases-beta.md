# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本

> 当前 Beta 版本：`beta-1.0.26`  
> 发布时间：2026-04-16 12:35:02 CST  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.26>  
> - 下载方式：同一发布页内提供各平台二进制、安装包、派网 APX 与 SHA256 校验清单

### ✨ 新增（Added）
- 支持规则集文件编辑功能
- 日志页面迁移至浮动窗口
- 更新配置桌面端右栏常驻
- 合并安装与重启按钮操作
- 优化日志窗口交互体验

### 🔧 变更（Changed）
- 默认关闭运行时代理网络自愈
- MosDNS 恢复原始重试策略
- 合并 Mihomo 配置接口加速
- SSE 数据迁移至 Zustand 优化

### 🐛 修复（Fixed）
- 修复嵌入式前端黑屏问题
- 修复更新模块 UI 及下载逻辑
- 修复本地服务 HTTP 请求代理
- 修复轮播模式及相关设置 Bug
- 修复日志页循环请求与性能
- 修复 Inline 规则集序列化错误
- 修复 MosDNS 配置恢复超时

### 📝 备注（Notes）
- 0.x 升级 1.x 需重置 DNS 服务，否则失效

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`306d595`](https://github.com/msm9527/msm/commit/306d5951f4055bfe4a526acf0dfc443a4e779531)
- **提交信息**: chore: sync version to 1.0.26
- **提交作者**: github-actions[bot]
- **提交时间**: 2026-04-16 12:35:02 CST
:::

---

## 📚 历史 Beta 版本

> 下面仅列出最近几个 Beta 版本的主要变更，完整变更记录以 GitHub Release 为准。

### beta-1.0.14（2026-03-31 16:29） <Badge type="tip" text="Beta 版" />

- 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-1.0.14>

**新增 / 优化**
- 统一 MosDNS 恢复写操作重试策略
- 调整组件更新 GitHub 下载优先级

**问题修复**
- 修复 MosDNS 未启用列表插件回写失败
- 修复许可证重激活因本地材料损坏失败
- 修复 MosDNS 列表插件就绪前的回写问题

**注意事项**
- 0.x 升级 1.x 必须重置或重装 DNS 服务

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
