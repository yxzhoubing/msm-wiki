# 常见问题

## 1. 登录页面无法访问

- 确认服务已启动
- 检查端口是否被占用
- 确认防火墙放行 7777

## 2. 配置保存后不生效

- 保存后需重启对应服务
- 查看配置校验结果

## 3. 代理服务无法启动

- 只可启用 Sing-box 或 Mihomo 其中一个
- 检查配置文件格式与路径

## 4. 找不到日志

- 默认路径：`/root/.msm/logs`
- 使用 systemd 可通过 `journalctl -u msm` 查看

## 5. 有哪些推荐的参考项目和教程？

::: tip 推荐按这个顺序阅读
1. [MSSB（逗猫佬）](https://github.com/baozaodetudou/mssb)：先理解旁路由分流整体设计思路
2. [MosDNS 相关实践（PH 佬）](https://github.com/yyysuo/mosdns)：再看 MosDNS 侧配置与实战经验
3. [Mihomo 官方核心](https://github.com/MetaCubeX/mihomo)：核对内核能力与官方参数说明
4. [FakeIP 分流大法总教程](https://drive.google.com/drive/u/1/folders/1ldD2XqIrREPgr_CKMSgvYomXgwknpApi)：系统化学习 FakeIP 分流
5. [原版 MosDNS 知识库](https://irine-sistiana.gitbook.io/mosdns-wiki/) 与 [StoreHouse 脚本合集](https://github.com/herozmy/StoreHouse/tree/latest)：用于进阶查阅与脚本实践
:::

## 更多帮助

- [系统诊断](/zh/guide/diagnostics) - 运行 `msm doctor` 自动检测常见问题
- [故障排查](/zh/faq/troubleshooting) - 详细的故障排查步骤
- [CLI 命令参考](/zh/guide/cli) - 命令行工具使用
- [Telegram 交流群](https://t.me/msm_home) - 社区互助交流
