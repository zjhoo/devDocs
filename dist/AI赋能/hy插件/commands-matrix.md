# hy 常见操作 × 三平台使用对照表

> hy 工作流插件三平台适配（Claude Code ✅ / Codex 🔧 / CodeBuddy 🔧）的常见操作对照。
> 核心差异一句话：**Claude Code 与 CodeBuddy 用斜杠命令触发，Codex 没有斜杠命令，用自然语言触发**。
> Codex 的触发语句只要包含「hy + 流程名」关键词即可命中（AGENTS.md 中登记了完整映射）。

## 1. 安装与调试

| 操作 | Claude Code | Codex | CodeBuddy |
|------|------------|-------|-----------|
| 同事一键安装 | `curl -fsSL http://10.1.34.16:30021/AI赋能/hy插件/install.sh \| sh` | `curl -fsSL http://10.1.34.16:30021/AI赋能/hy插件-codex/install.sh \| sh` | `curl -fsSL http://10.1.34.16:30021/AI赋能/hy插件-codebuddy/install.sh \| sh` |
| 安装后必须做的事 | 无（装完即生效） | **运行 `/hooks` 逐个批准 hook 信任**（否则门禁不生效） | 项目级技能需放工作区根 `.codebuddy/skills/` |
| 开发调试（免安装） | `/plugin marketplace add <repo路径>/claudeCode` + `/plugin install hy` | 复制 `codex/` 内容到 `~/.codex/` | `codebuddy --plugin-dir <repo路径>/codeBuddy` |
| 更新 | `/hy:update`（给指引，人工执行） | 重新运行安装器覆盖 | `/hy:update` 或重新运行安装器 |

## 2. 跑开发流程

| 场景 | Claude Code | Codex（自然语言触发） | CodeBuddy |
|------|------------|----------------------|-----------|
| 自动路由（拿不准走哪个流程） | `/hy:run <需求>`（不带参数显示全部流程目录） | 「运行 hy 自动路由：<需求>」 | `/hy:run <需求>` |
| 统计展示（图表 + 统计卡片） | `/hy:run-stats <需求>` | 「运行 hy 统计展示流水线：<需求>」 | `/hy:run-stats <需求>` |
| 增删改查页 | `/hy:run-crud <需求>` | 「运行 hy 增删改查流水线：<需求>」 | `/hy:run-crud <需求>` |
| 数据大屏 | `/hy:run-screen <需求>` | 「运行 hy 大屏页开发流水线：<需求>」 | `/hy:run-screen <需求>` |
| 全栈开发（PRD→蓝图→编码→验收） | `/hy:run-all <需求>` | 「运行 hy 全栈工作流：<需求>」 | `/hy:run-all <需求>` |
| v1→v2 页面迁移 | `/hy:migration <需求>` | 「运行 hy v1→v2 迁移流水线：<需求>」 | `/hy:migration <需求>` |

## 3. 委派专家

| 操作 | Claude Code | Codex | CodeBuddy |
|------|------------|-------|-----------|
| 直接调用专家（改搜索框、修接口等局部操作） | `@hy:frontend 改用户列表搜索框` | 「spawn hy 的 frontend 专家：改用户列表搜索框」 | `@hy:frontend 改用户列表搜索框` |
| 可用专家 | `@hy:product / design / lead / backend / frontend / ui / db / test` | 同名子代理（`codex/agents/*.toml`，自动转换） | 同 Claude Code 名称 |

> Codex 专家 spawn 语：Codex 会话中直接说「用 hy 的 backend 专家实现 XX」即可，Codex 会按
> `developer_instructions` 加载专家提示词。多专家并行靠 Codex 原生子代理（Agent Teams 是 CC 专属）。

## 4. 管理命令

| 操作 | Claude Code | Codex | CodeBuddy |
|------|------------|-------|-----------|
| 查看版本 | `/hy:version` | 「查看 hy 插件版本」 | `/hy:version` |
| 帮助（命令/专家/门禁/安装） | `/hy:help` | 「展示 hy 插件帮助」 | `/hy:help` |
| 检查更新 | `/hy:update` | 「检查 hy 插件更新」 | `/hy:update` |

## 5. 门禁与约束

| 操作 | Claude Code | Codex | CodeBuddy |
|------|------------|-------|-----------|
| 门禁生效方式 | 装即生效（hooks.json） | **需 `/hooks` 批准信任**后才执行 | hooks 配置合并到 `~/.codebuddy/settings.json`；**PostToolUse 无阻止能力**（拦截靠 PreToolUse） |
| AI 执行 git 提交 | ❌ commit-gate 拦截，交人工 | ❌ 同左（批准信任后） | ❌ 同左 |
| 风格红线（console.log 等） | PostToolUse 拦截回传 | PostToolUse 反馈（apply_patch 需适配） | 弱拦截（仅回传提示，PreToolUse 适配中） |
| 紧急绕过（人工授权） | `HCODEr_SKIP_GATE=1`（代提交）/ `HCODEr_SKIP_STYLE=1`（风格） | 同左 | 同左 |
| 数据库变更 | DDL/DML 只出方案，人工执行（三家一致） | 同左 | 同左 |
| 交付标准 | 人工验收通过才算交付（三家一致） | 同左 | 同左 |

## 6. 规范加载（宪法）

| 操作 | Claude Code | Codex | CodeBuddy |
|------|------------|-------|-----------|
| 规范加载机制 | constitution 技能：地图 + 按域正文，用时才读 | 同（`skills/constitution/` 直接复用）+ AGENTS.md 全局指令 | 同 Claude Code |
| 项目级规范 | `.claude/design/`、`__aiDev__/` | 同（路径无关平台） | 同 |

## 使用注意事项（按平台）

### Codex
1. **没有斜杠命令**：所有 `/hy:*` 用自然语言替代（上表已列触发语句），说清楚「hy + 流程名 + 需求」即可
2. **装完必须 `/hooks` 批准**：不批准 = 门禁不执行（commit-gate 失效，AI 可能直接 push）
3. 全局 skills 在 `~/.codex/skills/`；项目级放仓库 `.codex/`

### CodeBuddy
1. 命令/技能格式与 Claude Code 兼容，肌肉记忆直接可用（`/hy:run-crud` 等）
2. 项目级技能必须放**工作区根目录** `.codebuddy/skills/`
3. 风格门禁为提示级（PostToolUse 不能阻止），真正拦截靠 PreToolUse —— 深度依赖门禁的场景优先用 Claude Code

### 三平台通用
- 内容和规范完全一致（shared 唯一源构建），同一份宪法/流水线/专家提示词
- 绕过变量、交付标准、数据库边界一致
