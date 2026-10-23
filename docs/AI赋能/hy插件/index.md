# /hy — Vibe Coding 开发插件

> /hy 是团队的 Vibe Coding 开发插件：**有规范（宪法）、有流程（流水线）、有分工（专家）、有底线（门禁）等**。
> 一键安装

> 更关注 vibe coding时 遵循前后端规范、使用通用组件、安全查询数据库、常用功能块快速集成， 保障生成的准确率

::: danger
此工具已【暂停维护】

请尽快卸载，避免AI触发钩子导致多次使用内部服务失败导致的token浪费

卸载方法：'请卸载/hy插件'
:::



## 版本记录

| 版本 | 日期 | 更新内容 |
|------|------|---------|
| v2.4.7 | 2026-08-13 | enterprise-dict 工具使用说明明确：`list_dicts_by_system`（APP_NAME 查当前微服务所有字典）/ `get_dict_options`（字典详情）/ `create_dict` 新增字典集（**必须人工确认**）/ `create_dict_item` 完善字典项（**必须人工确认**） |
| v2.4.6 | 2026-08-13 | dict-maintain 升级为字典确认与使用独立流程（5 步）：确定字典 → MCP 查可用 → 有则使用者确认用哪个、无则 hy-db-tools 查字段描述后人工确认新增 → ENUM_KEYS 登记 + useEnumStore 使用 → 检查接口数据出口与使用处语法 |
| v2.4.5 | 2026-08-13 | 三 MCP 明确触发条件与触发点：新增 `reference/mcp-triggers.md` 触发指南；run-crud/run-all/run-screen 工作流接线（表结构查询 hy-db-tools · 字典 enterprise-dict · 设计图 figma） |
| v2.4.1 | 2026-08-12 | 平台化修复：`/hy:update` `/hy:version` `/hy:help` 的版本源、安装/更新指引按平台（Claude Code / Codex / CodeBuddy）各自生效 |
| v2.4.0 | 2026-08-12 | 三平台支持：Claude Code / Codex / CodeBuddy 统一内容源构建，三平台安装器与命令对照表发布 |
| v2.0.0 | 2026-08-12 | 新增 `/hy:migration` —— v1→v2 迁移流水线（拷贝 pages → 6 项适配 → 验收） |
| v1.0.0 | 2026-08-04 | 初始版本：宪法规范加载 / 全栈工作流 / 专家 Agent / 质量门禁 |
