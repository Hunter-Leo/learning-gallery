# Matt Pocock Skills · 幻灯片脚本

> 总页数：18 页 · 设计分辨率：1920 × 1080
> 主题结构：总览 → 四大失败模式 → 需求对齐 → 规划分解 → TDD → 调试 → 架构 → 原型 → 生产力工具 → 工作流 → 社区反响

---

## 封面 · Page 1/18

**文件名：** `slides/01-cover.html`

- 徽章：Skills for Real Engineers（齿轮+锤子 icon）
- 主标题：**Matt Pocock** Skills
- 副标题：基于经典软件工程原则的 AI Agent 技能集
- 元信息：mattpocock/skills · Open Source · Claude Code / Codex
- 三大标签：`Engineering` · `Productivity` · `Misc`

---

## Section 01: 设计哲学（Page 2–4）

### Page 2/18 · Section Divider: Philosophy

**文件名：** `slides/02-section-philosophy.html`

- SECTION 01 / Why These Skills Exist
- 引语："No-one knows exactly what they want" — The Pragmatic Programmer
- 描述：Agent 协作四大失败模式 + 经典工程原则的解决路径
- 导航标记：`2 / 18 · Section 01`

### Page 3/18 · 四大失败模式

**文件名：** `slides/03-four-failure-modes.html`
**Section：** Section 01 · Philosophy

**4 卡片网格：**

| # | 失败模式 | 症状 | 方案 |
|---|---------|------|------|
| 1 | Agent 没做对事 | 理解偏差，构建与意图不符 | `/grill-me` 需求面试 |
| 2 | Agent 太啰嗦 | 20 词说 1 词的话 | `CONTEXT.md` 统一领域语言 |
| 3 | 代码不工作 | 缺乏反馈回路，飞行盲 | `/tdd` + `/diagnose` |
| 4 | 代码成泥球 | Agent 加速软件熵 | `/improve-codebase-architecture` |

灵感来源：Pragmatic Programmer（反馈回路）· DDD（共享语言）· XP（每日优化）· Ousterhout（深模块）

### Page 4/18 · 技能体系架构

**文件名：** `slides/04-skill-architecture.html`
**Section：** Section 01 · Philosophy

**三层 + 时间线布局：**

**Productivity（通用）：** grill-me · caveman · handoff · write-a-skill

**Engineering（编码）：** grill-with-docs → to-prd → to-issues → tdd → diagnose → improve-codebase-architecture | triage · prototype · zoom-out

**Misc（辅助）：** git-guardrails · scaffold-exercises · setup-pre-commit

**设计原则：** Small · Composable · Adaptable · Model-Agnostic

---

## Section 02: 需求对齐与规划（Page 5–7）

### Page 5/18 · Section Divider: Alignment

**文件名：** `slides/05-section-alignment.html`

- SECTION 02 / Alignment **& Planning**
- 工作流：`Idea → Interview → CONTEXT → ADR → PRD → Issues`
- 导航标记：`5 / 18 · Section 02`

### Page 6/18 · Grill-with-Docs — 共享领域语言

**文件名：** `slides/06-grill-with-docs.html`
**Section：** Section 02 · Alignment

**工作流程：**
1. Agent 反问，逐分支遍历设计树，每问附带推荐答案
2. 检测术语冲突 → 即时指正
3. 精炼模糊语言 → "account 指 Customer 还是 User？"
4. 用场景测试边界
5. 术语解决即写入 CONTEXT.md
6. 满足三条件时提议 ADR

**CONTEXT.md 核心规则：**
```
**Order**: A request for goods/services from a customer.
_Avoid_: Purchase, transaction
```
- 有主见（多词同义选最佳）
- 只放领域特有术语，不放通用编程概念
- 单上下文（CONTEXT.md）或多上下文（CONTEXT-MAP.md）

**ADR（三条件全满足才创建）：**
1. 难逆转  2. 无上下文会让人惊讶  3. 真实权衡
- 最小格式：一段话说明上下文 + 决定 + 原因

### Page 7/18 · To-PRD + To-Issues

**文件名：** `slides/07-to-prd-issues.html`
**Section：** Section 02 · Alignment

**To-PRD — 从对话到文档：**
- 不面试用户，只综合已有讨论
- PRD 结构：Problem → Solution → User Stories → Implementation Decisions → Testing → Out of Scope
- 不含具体文件路径（会过时）

**To-Issues — 垂直切片分解：**
```
正确（垂直切片）：
  Issue 1: DB 读写用户配置 → 贯穿 schema/API/UI/test
  Issue 2: 配置编辑页 → 全栈通

错误（水平切片）：
  Issue 1: 写 schema  Issue 2: 写 API  Issue 3: 写 UI
```
- 每切片贯穿所有层，完成即可 demo
- 分 HITL（需人参与）和 AFK（自动完成）
- 按依赖顺序发布 Issue

---

## Section 03: 实现与质量（Page 8–11）

### Page 8/18 · Section Divider: Implementation

**文件名：** `slides/08-section-implementation.html`

- SECTION 03 / Implementation **& Quality**
- 循环：TDD → Diagnose → Architecture → Prototype
- 导航标记：`8 / 18 · Section 03`

### Page 9/18 · TDD — 垂直切片驱动

**文件名：** `slides/09-tdd.html`
**Section：** Section 03 · Implementation

**核心原则：测试测行为，不测实现**

**好测试：** 集成风格，公共接口，描述 WHAT，重构后存活
**坏测试：** mock 内部协作，测私有方法，绕过接口

**四步循环：**
1. **Planning** — 确认接口 + 行为优先级 + 深模块机会（用户批准）
2. **Tracer Bullet** — 一个测试 → 最小实现 → 通过
3. **Incremental Loop** — 一次一个，不超前实现
4. **Refactor** — 全绿后提取/深化/SOLID，每步跑测试

**严禁水平切片：**
```
错误：5 tests → 5 impls（测试想象的行为）
正确：test1→impl1→test2→impl2→...（回应学到的东西）
```

### Page 10/18 · Diagnose — 六阶段调试

**文件名：** `slides/10-diagnose.html`
**Section：** Section 03 · Implementation

| 阶段 | 核心 | 关键原则 |
|------|------|---------|
| 1. 反馈回路 | 建快速确定性 pass/fail 信号 | **最重要。** 没回路不推进。10 种构建方式 |
| 2. 复现 | 确认用户描述的 Bug | 多次运行确认确定性 |
| 3. 假设 | 生成 3-5 个可证伪假设 | 先展示给用户排序 |
| 4. 探测 | 一次变一个变量 | 日志打 `[DEBUG-xxxx]` 标记 |
| 5. 修复 | 先写回归测试再修复 | 需正确接缝，否则是架构问题 |
| 6. 复盘 | 清标记 + 记根因 | 架构问题推给 improve-codebase-architecture |

**构建反馈回路的方法（优先级排列）：**
失败测试 → Curl 脚本 → CLI 调用+diff → Playwright → 回放流量 → 临时测试台 → 模糊循环 → git bisect → 差分对比 → HITL 脚本

### Page 11/18 · Improve Architecture + Prototype

**文件名：** `slides/11-architecture-prototype.html`
**Section：** Section 03 · Implementation

**左侧 — 架构深化核心概念：**
| 术语 | 定义 |
|------|------|
| Module | 有接口和实现的任何东西 |
| Depth | 小接口包大量行为（深模块） |
| Seam | 不修改原处即改变行为的位置 |

**删除测试：** 删掉模块 → 复杂度消失（透传）还是分散到 N 处（在干活）？

**流程：** Explore → HTML 报告（Mermaid 图 + Before/After）→ Grilling 循环 → 实时更新 CONTEXT.md + ADR

**右侧 — Prototype：**
- 原型 = 回答一个问题的可丢弃代码
- 逻辑验证 → 交互式终端；UI 验证 → 多变体同路由
- 六条铁律：标记丢弃 · 一键跑 · 无持久化 · 无测试 · 显式状态 · 答完即删
- 只保留答案：commit / ADR / Issue / NOTES.md

---

## Section 04: 生产力工具 + 工作流（Page 12–13）

### Page 12/18 · Productivity Tools

**文件名：** `slides/12-productivity.html`
**Section：** Section 04 · Productivity

**三卡片布局：**

**Caveman — 省 ~75% token**
- 去冠词/废话/客套
- 模式：`[事物] [动作] [原因]`
- 例外：安全警告、不可逆操作

**Handoff — 会话交接**
- 压缩当前对话 → 系统临时目录
- 含"建议技能"章节，引用已有 artifact，隐去敏感信息

**Zoom-Out — 高层视角**
- 一句话技能：走上一层抽象，用领域术语输出模块 + 调用者地图
- 适合接手不熟悉的代码区域

**其他：** triage（五状态 Issue 状态机）、write-a-skill（创建自定义 skill）

### Page 13/18 · 端到端工作流

**文件名：** `slides/13-workflow-pipeline.html`

**完整 Agent 工作流：**

```
Phase 1 — 对齐
  /grill-with-docs → CONTEXT.md + ADR

Phase 2 — 规划
  /to-prd → PRD Issue
  /to-issues → 垂直切片 Issue 列表
  /triage → 状态机管理

Phase 3 — 实现
  /tdd → 红绿重构迭代
  /diagnose → Bug 调试
  /improve-codebase-architecture → 架构深化

Phase 4 — 验证
  /prototype → 快速验证
```

**生产力支撑：** caveman · handoff · zoom-out 贯穿全过程

---

## Section 05: 社区反响与实践（Page 14–17）

### Page 14/18 · Section Divider: Community

**文件名：** `slides/14-section-community.html`

- SECTION 05 / Community **Reception**
- 描述：80K+ Stars · #1 GitHub Trending · 从"氛围编程"到"真实工程"的运动
- 引导：这个仓库在社区引发了怎样的反响？人们怎么用它？效果如何？
- 导航标记：`14 / 18 · Section 05`

### Page 15/18 · GitHub 现象级增长

**文件名：** `slides/15-github-phenomenon.html`
**Section：** Section 05 · Community

**数据看板：**
- **80K+** GitHub Stars（两月内）
- **#1** GitHub Trending
- **8.2%** fork/star 比（远高纯收藏型仓库，表明真实使用）
- **28** 个 skills · 34 次提交 · 纯 Markdown

**为什么火了？三条深层信号：**

**1. `.claude/` 目录 → AI 时代的 dotfiles**
- 如当年 .vimrc / .zshrc 的分享文化
- 个人 AI 生产力配置开始被系统化共享

**2. Anti-"Vibe Coding" 宣言**
- 副标题："Skills for Real Engineers — not vibe coding"
- 社区共鸣：AI 不应该替代工程思维
- "AI 写代码比你快 10 倍，你还剩什么？"

**3. Skills 成为团队知识传承载体**
- 高级工程师的最佳实践编码为可复用工作流
- 新人"装上就能自动执行"
- 被称为"AI 工作流的 npm 时代"

标签：Format War Winner · Claude Code · 社区驱动

### Page 16/18 · 社区采纳模式

**文件名：** `slides/16-adoption-patterns.html`
**Section：** Section 05 · Community

**左侧 — 最推荐的三件套（社区共识）：**
1. **`git-guardrails-claude-code`** — 安全锁，防止 `push --force` / `reset --hard`
2. **`/grill-me` / `/grill-with-docs`** — 需求对齐，最具价值的技能
3. **`/tdd`** — 强制红绿重构循环

**按周渐进采纳（社区推荐）：**
| 阶段 | 安装 | 目标 |
|------|------|------|
| Week 1 | grill-me + git-guardrails | 习惯需求对齐流程 |
| Week 2 | + tdd（新功能上使用） | 建立测试优先习惯 |
| Week 3 | + to-prd + to-issues + diagnose | 完整工作流 |
| Week 4 | + improve-codebase-architecture | 每周架构审查 |
| 之后 | 用 write-a-skill 自建技能 | 团队定制化 |

**右侧 — 社区评价亮点：**
- `/grill-with-docs` 是 standout："每次对话都明显更好"
- `/caveman` 被低估："经验用户必备，省 75% token"
- `/diagnose`："错误信息误导时最有价值"
- **中文社区**：已有简体中文本地化翻译（vinvcn/mattpocock-skills-zh-CN）
- "不是工具集合，是 AI 时代的软件工程操作系统"
- "工程智慧密度极高" — 引用 DDD、TDD、Pragmatic Programmer 等经典

标签：Progressive Adoption · 社区共识 · 中文本地化

### Page 17/18 · 评价与生态

**文件名：** `slides/17-criticism-ecosystem.html`
**Section：** Section 05 · Community

**左侧 — 社区反馈与批评：**

**正面：**
- 格式简洁（纯 Markdown），一学即用
- 工程方法论沉淀，读 SKILL.md 本身就有价值
- 确实验证了"反馈回路 = 速度上限"的理念

**混合/争议：**
- `/tdd` 对隔离函数效果好，但复杂 UI 组件"测试太难提前指定"
- GitHub-centric（to-issues / to-prd 绑定 GitHub Issues）
- 需要代码库有清晰模块边界才能发挥
- **Skills 本身也会熵增** — 需要版本管理和维护
- 快速原型场景下流程感太重

**右侧 — 生态位分析：**

| 项目 | 定位 | 优势 |
|------|------|------|
| **mattpocock/skills** | Claude Code 格式之王 | 先发优势，Shell 简单 |
| awesome-codex-skills | Codex 索引 | 组织支持，分类清晰 |
| pi-mono | 多模型通用 | 无模型锁定 |

**风险：** 如果 Anthropic 推出官方 skills 注册中心，mattpocock/skills 的战略价值可能被稀释
**但无论生态如何变化**，其中编码的工程方法论 —— 需求对齐、测试驱动、系统调试、架构深化 —— 是永恒的

---

## 总结页 · Page 18/18

**文件名：** `slides/18-summary.html`

- 标题：**Skills for Real Engineers**
- 3 大技能类别 | 28 个可组合技能 | 80K+ 社区 Stars
- 小 · 可组合 · 可适配 · 模型无关
- **反馈回路的速度就是你的速度上限**
- CTA：`npx skills@latest add mattpocock/skills`
- 页脚：github.com/mattpocock/skills · 18 / 18
