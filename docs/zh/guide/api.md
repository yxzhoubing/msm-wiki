# API 参考

MSM 提供完整的 REST API，支持通过编程方式管理平台功能。

## 基本信息

| 项目 | 说明 |
|------|------|
| **Base URL** | `http://your-server:7777/api/v1` |
| **协议** | HTTP / HTTPS |
| **数据格式** | JSON |
| **认证方式** | JWT Token / API Token |

## 认证

### 登录获取 Token

```bash
curl -X POST http://your-server:7777/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your-password"}'
```

响应：

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  }
}
```

### 使用 Token

在请求头中携带 Token：

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://your-server:7777/api/v1/services
```

### 刷新 Token

```bash
curl -X POST http://your-server:7777/api/v1/auth/refresh \
  -H "Authorization: Bearer YOUR_REFRESH_TOKEN"
```

### API Token（长期令牌）

也可以使用 API Token 认证（需要管理员在 Web 界面创建）：

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  http://your-server:7777/api/v1/services
```

## API 端点总览

### 认证相关

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/auth/login` | 用户登录 |
| `POST` | `/auth/logout` | 退出登录 |
| `POST` | `/auth/refresh` | 刷新 Token |
| `GET` | `/auth/me` | 获取当前用户信息 |

### 服务管理

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/services` | 获取所有服务列表 |
| `GET` | `/services/:name` | 获取指定服务详情 |
| `GET` | `/services/:name/exists` | 检查服务是否存在 |
| `POST` | `/services/:name/start` | 启动服务 |
| `POST` | `/services/:name/stop` | 停止服务 |
| `POST` | `/services/:name/restart` | 重启服务 |
| `GET` | `/services/:name/logs` | 获取服务日志 |
| `PUT` | `/services/:name/config` | 更新服务配置 |

### 系统守护进程

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/daemon/status` | 获取守护进程状态 |
| `POST` | `/daemon/restart` | 重启守护进程 |
| `POST` | `/daemon/stop` | 停止守护进程 |

### 系统监控

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/monitor/system` | 获取系统信息 |
| `GET` | `/monitor/hardware` | 获取硬件信息 |
| `GET` | `/monitor/resources` | 获取资源使用率 |
| `GET` | `/monitor/network` | 获取网络统计 |
| `GET` | `/monitor/history` | 获取资源历史数据 |
| `GET` | `/monitor/stats` | 获取综合统计 |

### 配置管理

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| `GET` | `/config/tree` | 获取文件树 | Pro |
| `GET` | `/config/file` | 获取文件内容 | Pro |
| `PUT` | `/config/file` | 更新文件内容 | Pro |
| `POST` | `/config/file` | 创建新文件 | Pro |
| `DELETE` | `/config/file` | 删除文件 | Pro |
| `POST` | `/config/validate` | 验证配置 | - |
| `GET` | `/config/download` | 下载文件 | - |
| `POST` | `/config/upload` | 上传文件 | Pro |

### 配置历史

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| `GET` | `/history` | 获取历史列表 | Pro |
| `GET` | `/history/:id` | 获取指定版本 | Pro |
| `POST` | `/history/:id/rollback` | 回滚到指定版本 | Pro |
| `POST` | `/history/:id/star` | 标记为稳定版 | Pro |
| `DELETE` | `/history/:id` | 删除历史记录 | Pro |
| `GET` | `/history/compare` | 版本对比 | Pro |

### DNS 服务（MosDNS）管理

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/mosdns/stats` | DNS 统计信息 |
| `GET` | `/mosdns/overview/dashboard` | 概览数据 |
| `GET` | `/mosdns/query-logs` | 查询日志 |
| `GET` | `/mosdns/clients` | 客户端列表 |
| `POST` | `/mosdns/clients` | 添加客户端 |
| `POST` | `/mosdns/clients/scan` | 扫描客户端 |
| `GET` | `/mosdns/rules/:type` | 获取规则列表 |
| `POST` | `/mosdns/rules/:type` | 添加规则 |
| `PUT` | `/mosdns/rules/:type` | 更新规则 |
| `DELETE` | `/mosdns/rules/:type` | 删除规则 |
| `POST` | `/mosdns/rules/:type/import` | 导入规则 |
| `GET` | `/mosdns/rules/:type/export` | 导出规则 |
| `GET` | `/mosdns/system/cache` | 缓存信息 |
| `POST` | `/mosdns/system/cache/clear` | 清除缓存 |

### 用户管理

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| `GET` | `/users` | 用户列表 | Admin |
| `POST` | `/users` | 创建用户 | Admin + Pro |
| `GET` | `/users/:id` | 用户详情 | Admin |
| `PUT` | `/users/:id` | 更新用户 | Admin + Pro |
| `DELETE` | `/users/:id` | 删除用户 | Admin + Pro |
| `POST` | `/users/:id/reset-password` | 重置密码 | Admin |
| `POST` | `/users/:id/toggle-active` | 启用/禁用 | Admin |

### 个人资料

| 方法 | 路径 | 说明 |
|------|------|------|
| `PUT` | `/profile` | 更新个人信息 |
| `POST` | `/profile/password` | 修改密码 |

### 系统设置

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| `GET` | `/settings` | 获取系统设置 | Admin |
| `PUT` | `/settings` | 更新系统设置 | Admin |

### 系统诊断

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/system/diagnostics` | 运行系统诊断 |

### 日志管理

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/logs/:service` | 获取日志 |
| `GET` | `/logs/:service/download` | 下载日志 |
| `DELETE` | `/logs/:service` | 清除日志 |
| `GET` | `/logs/:service/stats` | 日志统计 |

### 授权管理

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/license-activation/status` | 授权状态 |
| `GET` | `/license-activation/hardware-fingerprint` | 设备指纹 |
| `POST` | `/license-activation/activate` | 激活授权 |
| `POST` | `/license-activation/deactivate` | 取消激活 |
| `POST` | `/license-activation/refresh` | 刷新授权 |

### 组件更新

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| `GET` | `/component-updates/:component/status` | 检查更新状态 | - |
| `POST` | `/component-updates/:component/check` | 检查更新 | Admin |
| `POST` | `/component-updates/:component/update` | 执行更新 | Admin |

### 版本信息

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/version` | 获取版本信息 |

## 实时事件流

MSM 提供基于 SSE（Server-Sent Events）的实时事件推送：

| 路径 | 说明 |
|------|------|
| `/events` | 统一事件流 |
| `/events/monitor` | 系统监控事件 |
| `/events/proxy` | 代理服务事件 |
| `/events/mosdns` | MosDNS 事件 |
| `/events/mihomo` | Mihomo 事件 |
| `/events/logs/:service` | 服务日志流 |

使用示例：

```bash
# 监听实时事件
curl -N -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/events/monitor
```

## 使用示例

### 获取系统状态

```bash
# 获取系统资源使用率
curl -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/monitor/resources
```

响应示例：

```json
{
  "cpu_percent": 26.6,
  "memory_percent": 57.7,
  "memory_total": 68719476736,
  "memory_used": 39636488192,
  "disk_percent": 43.5
}
```

### 管理 DNS 规则

```bash
# 获取域名分流规则
curl -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/mosdns/rules/domain

# 添加规则
curl -X POST -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"domain": "example.com", "action": "proxy"}' \
  http://your-server:7777/api/v1/mosdns/rules/domain
```

### 管理服务

```bash
# 重启 MosDNS
curl -X POST -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/services/mosdns/restart

# 查看 Mihomo 日志
curl -H "Authorization: Bearer TOKEN" \
  http://your-server:7777/api/v1/services/mihomo/logs
```

## 错误处理

API 错误响应格式：

```json
{
  "error": "unauthorized",
  "message": "Invalid or expired token"
}
```

常见 HTTP 状态码：

| 状态码 | 说明 |
|--------|------|
| `200` | 请求成功 |
| `201` | 创建成功 |
| `400` | 请求参数错误 |
| `401` | 未认证或 Token 过期 |
| `403` | 权限不足 |
| `404` | 资源不存在 |
| `429` | 请求频率过高（限流） |
| `500` | 服务器内部错误 |

## 速率限制

- 登录接口有频率限制，短时间内多次失败会被临时锁定
- 其他接口暂无严格限流，但建议合理控制请求频率

## 下一步

- [CLI 命令参考](/zh/guide/cli) - 命令行工具
- [用户管理](/zh/guide/user-management) - API Token 管理
- [配置编辑](/zh/guide/config-editor) - 配置管理
- [授权管理](/zh/guide/license) - Pro 功能
