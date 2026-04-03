# CLI 命令参考

MSM 提供了功能完善的命令行工具，用于管理和控制 MSM 服务。所有命令均通过 `msm` 二进制文件执行。

## 基本用法

```bash
msm [命令] [参数] [选项]
```

::: tip 默认行为
直接运行 `msm`（不带任何参数）等同于执行 `msm serve`，即启动 HTTP 服务。
:::

## 全局选项

| 选项 | 说明 | 默认值 |
|------|------|--------|
| `-c, --config <路径>` | 配置目录路径 | `~/.msm` |
| `-p, --port <端口>` | HTTP 服务端口 | `7777` |
| `--help` | 显示帮助信息 | - |
| `--help-all` | 显示所有命令的完整帮助 | - |
| `--version` | 显示版本号 | - |

## 核心命令

### `msm serve` — 启动服务 {#serve}

启动 MSM HTTP 服务及 Web 管理界面，这是最核心的命令。

```bash
# 默认启动（端口 7777）
msm serve

# 指定端口
msm serve -p 8080

# 指定配置目录
msm serve -c /etc/msm

# 后台运行（守护进程模式）
msm serve -d

# 组合使用
msm serve -p 8080 -c /etc/msm -d
```

**选项：**

| 选项 | 说明 |
|------|------|
| `-p, --port` | HTTP 服务端口（默认 7777） |
| `-c, --config` | 配置目录路径（默认 `~/.msm`） |
| `-d, --daemon` | 以守护进程模式在后台运行 |

启动后访问 `http://your-server-ip:7777` 进入 Web 管理界面。

### `msm init` — 初始化配置 {#init}

初始化 MSM 配置目录，生成默认配置文件。

```bash
# 使用默认路径初始化
msm init

# 指定配置目录
msm init -c /etc/msm
```

::: info 说明
通常在首次安装后自动执行，也可手动执行来重置配置目录。
:::

### `msm status` — 查看状态 {#status}

查看 MSM 及其管理的各组件的运行状态。

```bash
msm status
```

输出示例：

```
MSM 状态:
  MSM 服务:    运行中 (PID: 12345)
  MosDNS:     运行中 (PID: 12346)
  ProxyCore:  运行中 (PID: 12347)
  Sing-Box:   已停止
```

示例里写作 `ProxyCore`，但 CLI 当前仍沿用内部服务标识 `mihomo`。

### `msm restart` — 重启服务 {#restart}

重启 MSM 服务。

```bash
msm restart
```

### `msm stop` — 停止服务 {#stop}

停止 MSM 服务。

```bash
msm stop
```

### `msm logs` — 查看日志 {#logs}

查看 MSM 或各组件的日志输出。

```bash
# 查看 MSM 主服务日志
msm logs

# 查看 MosDNS 日志
msm logs mosdns

# 查看 Sing-Box 日志
msm logs singbox

# 查看 ProxyCore 日志
msm logs mihomo
```

## 诊断命令

### `msm doctor` — 系统诊断 {#doctor}

运行全面的系统诊断检测，检查运行环境、端口占用、依赖状态等问题。

```bash
msm doctor
```

诊断项目包括：

- ✅ 系统环境检测（OS、架构、内存、磁盘）
- ✅ 端口占用检查（53, 7777, 7890 等关键端口）
- ✅ 服务运行状态检查
- ✅ 配置文件有效性验证
- ✅ 网络连通性测试
- ✅ 权限检查（root/sudo）

::: tip 故障排查利器
遇到问题时，首先运行 `msm doctor` 进行全面诊断，它会自动发现常见问题并给出修复建议。
:::

## 密码管理

### `msm reset-password` — 重置密码 {#reset-password}

重置管理员用户密码。当忘记登录密码时使用此命令。

```bash
msm reset-password
```

::: warning 注意
此命令需要在 MSM 服务所在的主机上直接执行，不支持远程操作。执行后将重置管理员密码为默认值，请及时登录并修改密码。
:::

## 系统服务管理

### `msm service install` — 安装系统服务 {#service-install}

将 MSM 注册为系统服务，实现开机自启动。

```bash
msm service install
```

- **Linux**: 创建 systemd 服务单元文件（`/etc/systemd/system/msm.service`）
- **macOS**: 创建 launchd 配置文件（`~/Library/LaunchAgents/com.msm.plist`）

安装完成后可使用系统命令管理：

```bash
# Linux (systemd)
sudo systemctl start msm
sudo systemctl stop msm
sudo systemctl restart msm
sudo systemctl status msm

# macOS (launchctl)
launchctl start com.msm
launchctl stop com.msm
```

### `msm service uninstall` — 卸载系统服务 {#service-uninstall}

移除 MSM 系统服务注册。

```bash
msm service uninstall
```

## 授权管理

### `msm license status` — 查看授权状态 {#license-status}

查看当前 Pro 授权的激活状态。

```bash
msm license status
```

### `msm license fingerprint` — 获取硬件指纹 {#license-fingerprint}

获取当前设备的硬件指纹，用于绑定 Pro 授权。

```bash
msm license fingerprint
```

### `msm license activate` — 激活授权 {#license-activate}

使用授权码激活 Pro 许可证。

```bash
msm license activate
```

### `msm license deactivate` — 取消激活 {#license-deactivate}

取消当前设备的 Pro 授权绑定。

```bash
msm license deactivate
```

## 常用操作示例

### 完整部署流程

```bash
# 1. 初始化配置
msm init

# 2. 启动服务
msm serve -d

# 3. 安装为系统服务（开机自启）
msm service install

# 4. 检查运行状态
msm status
```

### 日常运维

```bash
# 查看服务状态
msm status

# 查看日志排查问题
msm logs mosdns

# 系统诊断
msm doctor

# 重启服务
msm restart
```

### 故障恢复

```bash
# 停止服务
msm stop

# 运行诊断
msm doctor

# 重置密码（忘记密码时）
msm reset-password

# 重新启动
msm serve -d
```

## 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `JWT_SECRET` | JWT 签名密钥（生产环境必须设置） | 自动生成 |
| `MSM_CONFIG_DIR` | 配置目录路径 | `~/.msm` |
| `MSM_PORT` | HTTP 服务端口 | `7777` |

## 下一步

- [安装总览](/zh/guide/install) - 安装 MSM
- [首次使用](/zh/guide/first-use) - 初始设置向导
- [系统诊断](/zh/guide/diagnostics) - 详细诊断说明
- [仪表盘](/zh/guide/dashboard) - 服务状态监控
