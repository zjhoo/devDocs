# 内部使用的MCP服务

> hy 插件内置 3 个 MCP 服务，以下是各自的**触发条件**（什么场景用）与**触发点**（工作流里哪里触发）。
> 插件内完整说明见 `reference/mcp-triggers.md`（随插件安装）。

## 获取数据库表信息 hy-db-tools（数据库/表查询）
- 定位：查询数据库表结构/字段（只读），hy 插件内置服务，随插件安装自动启用
- 开发者： 郑建华
- **触发条件**：任何需要表结构/字段信息的开发任务 —— 建表前确认（复用现有表、避免重复建表）、页面/接口字段对齐、schema 评审、慢查询分析
- **触发点**：`run-crud` 表格字段梳理（步骤 1.1）、`run-all` 数据设计（`02-data/`）前委派 `@hy:db`、`@hy:db` 专家直呼
- 工具：`lookup_table_fields(表名/关键词)` 按表名或中文备注模糊搜索字段信息；`list_databases()` 列出可用数据库连接
- 无需手动配置 mcpServers：已注册在插件 `.mcp.json`（Claude Code）/ `config.toml`（Codex）/ 插件清单 mcpServers（CodeBuddy）
- 首次使用需写入访问 token（找插件维护者要【测试环境接口】token）：
  `node ~/.hcoder/plugin/mcp/hy-db-tools/server.js --set-token <token>`（Windows 为 `~\.hy\plugin\...`）
- Token 失效时查询会**立即停下**，向使用者索要测试环境接口 token，写入后立即生效、无需重启
- 不可用降级：文件级 schema 分析（读迁移脚本 / DO 类），流程不卡死

> prompts:
- 首先把数据表的信息给AI 》
Prompt: 通过工具获取 【审批表单配置表】的信息

- 驾驶AI实现标准模版的功能 》
（原型或设计图截图）
Prompt: 在这里实现 【目录】 ，已设计图截图为准，使用【审批表单配置表】字段，严格按照功能模版framework\src\pages\pageDemo\standard 实现设计图功能;

- 驾驶AI实现表单功能 》
（原型或设计图截图）
Prompt: 在这里实现 【目录】, 实现表单功能onFrom***Json(), 字段用【审批表单配置表】对齐; 并在interactiveStrategy实现相关策略；在这【代码位置】调用策略

## 字典的管理 enterprise-dict（系统字典查询和操作）
- 定位：系统字典的查询和操作（SSE 服务，后端注册名 `system-service`）
- 开发者： 林晨
- **触发条件**：表单下拉 / 单元格回显 / 筛选条件 / 后端枚举字段需要可选值（字典 key）；写页面/改表单前需确认枚举是否已存在
- **触发点**：`gen` 页面生成、`run-crud` 表单生成（A.2 / C.2）、`run-all` 前端编码、宪法 `02-frontend` 字典章节、`dict-maintain` 技能
- 工具：`list_dicts_by_system` 拿前端项目 `src/global/constant.js` 的 APP_NAME 查**当前微服务所有字典**（去 `-web` 作 systemFlag）；`get_dict_options` 查询字典详情；`create_dict` 新增字典集（**新增必须人工确认**）/ `create_dict_item` 完善字典项（**必须人工确认**）—— 仅当前系统，systemFlag = APP_NAME 去 `-web`
- 使用方式
   - 1. 如果使用trae 需要切换智能体为 build with mcp 
   - 2. 字典编码的结构现在为 {系统编码}__{实体名}__{字段名}
   - 3. 让ai新增字典时，需要提供系统编码， 实体名，和字段名， 以及对应的值(例如 1-可用，2-禁用)
```js
{
  "mcpServers": {
    "system-service": {
      "type": "sse",
      "url": "http://10.1.34.16:30051/mcp/sse",
      "headers": {
        "login-user": "你的账号"
      }
    }
  }
}
```
- 禁止：猜测枚举值（描述不清先询问用户）、新增**其他系统**的字典
- 不可用降级：退回批量导入文本（`1-示例项1；2-示例项2`，中文分号分隔、中划线前值后标签）

## UI 设计图实现 figma
- 定位：读取 Figma 设计稿提取视觉规范（design token），实现像素级高保真 UI 与 UI 保真度检查
- **触发条件**：有 Figma 设计稿需视觉还原（登录页 / 官网 / 营销页 / 数据大屏 / 自定义组件等非低代码场景）/ UI 保真度检查
- **触发点**：`run-screen` 步骤 6（设计图确认，向用户提问 + 文件 id）、`run-all`（有设计稿时）、`@hy:ui` 专家（**唯一调用者**，tools 白名单仅其含 `mcp__figma__*`）
- 工具：`mcp__figma__*`（本地 `http://127.0.0.1:3845/mcp`，需桌面端 Figma 客户端配合）
- 提取的信息**必须沉淀为文本**（`.claude/design/04-ui/visual-spec.md` 或样式 token），禁止只停留在对话 —— AI 与后续编码只认文本
- 禁止：非 `@hy:ui` 角色调用；沉淀视觉规范前凭记忆写样式；用占位图/假数据假装完成
- 不可用降级：设计稿缺失/未授权/连接不可用 → 如实说明，改用 `04-ui/` 契约 + 项目设计系统兜底，不阻塞交付
