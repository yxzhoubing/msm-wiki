# 进程管理

MSM 提供对所有服务进程的集中控制，包括启停、重启和状态监控。

## 概述

服务进程控制已集成到仪表盘和各服务页面中：

- **仪表盘**：底部显示所有服务的运行状态卡片，支持快捷停止/重启
- **代理服务**：展开菜单时显示代理核心的运行状态（PID、运行时间）和控制按钮
- **DNS服务**：展开菜单时显示 DNS 服务的控制按钮

每个服务卡片展示：

- 服务名称和类型
- 运行状态（运行中 / 已停止 / 异常）
- 进程 PID
- 运行时长
- 快捷操作按钮

## 管理的服务

MSM 统一管理以下服务进程：

| 服务 | 说明 | 默认端口 |
|------|------|----------|
| **MosDNS** | DNS 分流引擎 | 53 |
| **ProxyCore** | ProxyCore 代理内核 | 7890/7891/7892 |
| **Sing-Box** | Sing-Box 代理内核 | 7890/7891/7892 |

::: info 说明
ProxyCore 和 Sing-Box 是两种可选的代理内核，通常只需启用其中一个。
:::

## 基本操作

### 启动服务

1. 在进程管理页面找到目标服务
2. 点击 **启动** 按钮
3. 服务状态变为「运行中」后表示启动成功

### 停止服务

1. 点击服务卡片上的 **停止** 按钮
2. 确认停止操作
3. 服务状态变为「已停止」

::: warning 注意
停止 MosDNS 会导致依赖该 DNS 的所有设备无法正常解析域名。停止代理服务会导致所有代理连接中断。
:::

### 重启服务

点击 **重启** 按钮可以快速重启服务。重启过程中会有短暂的服务中断。

常见需要重启的场景：

- 修改了服务配置文件后
- 更新了分流规则后
- 服务运行异常需要恢复

## 服务状态说明

| 状态 | 图标 | 说明 |
|------|------|------|
| 运行中 | 🟢 | 服务正常运行 |
| 已停止 | 🔴 | 服务未运行 |
| 启动中 | 🟡 | 服务正在启动 |
| 异常 | 🟠 | 服务运行但存在错误 |

## 配置管理入口

进程管理页面同时也是各服务配置的快捷入口：

- **配置管理** — 进入对应服务的配置管理页面
- **日志查看** — 进入对应服务的日志页面

## 命令行操作

也可以通过 CLI 命令管理服务进程：

```bash
# 查看所有服务状态
msm status

# 重启 MSM 服务（会同时重启所有子服务）
msm restart

# 停止 MSM 服务
msm stop

# 查看服务日志
msm logs mosdns
msm logs mihomo
msm logs singbox
```

## 通过 API 管理

使用 REST API 管理服务进程：

```bash
# 获取所有服务状态
curl -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/services

# 启动服务
curl -X POST -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/services/mosdns/start

# 停止服务
curl -X POST -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/services/mosdns/stop

# 重启服务
curl -X POST -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/services/mosdns/restart
```

## 服务依赖关系

```
MSM 主服务
  ├── MosDNS (DNS 分流)
  │     └── 依赖：端口 53 可用，配置文件有效
  ├── ProxyCore (代理内核)
  │     └── 依赖：配置文件有效，订阅节点可用
  └── Sing-Box (代理内核)
        └── 依赖：配置文件有效，订阅节点可用
```

::: tip 启动顺序
建议先启动 MosDNS（DNS 服务），再启动代理内核（ProxyCore 或 Sing-Box），确保 DNS 分流就绪后代理才开始工作。
:::

## 故障恢复

当服务异常时的恢复步骤：

1. **查看日志** — 先查看对应服务的日志，了解错误原因
2. **检查配置** — 确认配置文件语法正确
3. **重启服务** — 尝试重启解决临时性问题
4. **运行诊断** — 使用 `msm doctor` 进行全面诊断
5. **查看端口** — 检查是否有端口冲突

## 下一步

- [DNS 服务管理](/zh/guide/mosdns) - DNS 分流详细配置
- [代理服务（ProxyCore）](/zh/guide/mihomo) - ProxyCore 代理管理
- [代理服务（Sing-Box）](/zh/guide/singbox) - Sing-Box 代理管理
- [系统诊断](/zh/guide/diagnostics) - 系统健康检查
- [日志查看](/zh/guide/logs) - 日志管理
