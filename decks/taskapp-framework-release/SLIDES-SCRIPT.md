# taskapp-framework v0.3.0 Release · 幻灯片脚本

> 总页数：21 页 · 设计分辨率：1920 × 1080
> 主题结构：Quick Start → Framework Overview → Core Features → Task Patterns + Configuration

---

## 封面 · Page 1/21

**文件名：** `slides/01-cover.html`

- 版本徽章：v0.3.0 · First Release（脉冲光点动画）
- 主标题：**taskapp**-framework（渐变 cyan 到 green）
- 副标题：基于 FastAPI + FastMCP + RQ 的异步任务框架 / 用最少的代码构建任务驱动型应用
- 元信息：Release 2026-05-20 · License Internal · Python 3.11+
- 技术栈标签：FastAPI · FastMCP · Redis Queue · Pydantic v2 · uv

---

## Section 01: Quick Start（Page 2–5）

### Page 2/21 · Section Divider: Quick Start

**文件名：** `slides/02-section-quickstart.html`

- SECTION 01 / Getting **Started**
- 描述：从远程仓库克隆，到第一个 Task 启动运行
- 导航标记：`2 / 21 · Section 01`

### Page 3/21 · Choose Your Path

**文件名：** `slides/03-quickstart-paths.html`
**Section：** Section 01 · Quick Start

**Option A — 手动部署：**
1. `git clone https://cnb.cool/mirabobio.com/demostration/taskapp-framework.git`
2. `cd taskapp-framework && uv sync`
3. `cp .env.example .env`
4. `vim .env`（按需配置）
5. `uv run python run.py`

**Option B — Agent Skill：**
1. `npx skills add "https://cnb.cool/mirabobio.com/demostration/taskapp-framework.git"`
2. 告诉 AI 助手：
   ```
   /taskapp-development
   Scaffold a service named 'my-service'
   ```
3. AI 自动执行：目录检查 → 脚手架 → uv sync → .env 配置

底部提示：完成后进入下一页「运行第一个 Task」

### Page 4/21 · Run Your First Task

**文件名：** `slides/04-quickstart-first-task.html`
**Section：** Section 01 · Quick Start

**左侧 — 启动服务：**
```bash
uv run python run.py
# 输出示例：
# INFO TaskApp started
# Uvicorn running on 0.0.0.0:8000
# Registered tasks:
#   echo     POST /api/echo
#   ping     POST /api/ping
#   analysis POST /api/analysis
#   file_word_count POST /api/file_word_count
```

**右侧 — Curl 测试：**
- 调用 echo task（wait-and-return）：`POST /api/echo` → `{"JobCode":"SUCCESS","echo":"hello"}`
- 调用 ping（eager 模式，即时返回）：`POST /api/ping` → 即时响应

### Page 5/21 · Agent Skill — Usage Guide

**文件名：** `slides/05-quickstart-agent-skill.html`
**Section：** Section 01 · Agent Skill

**双面板卡片布局：**

**左侧面板 — 直接使用：**
直接在 AI 助手中输入需求，skill 自动处理框架细节。
| # | 命令 | AI 行为 |
|---|------|---------|
| 01 | `/taskapp-development 初始化当前项目为 taskapp 项目` | 分析目录结构 → 添加框架依赖 → 生成脚手架配置 |
| 02 | `/taskapp-development 在当前路径创建一个新的 taskapp 项目` | 创建项目骨架 → uv sync → 配置 .env → 引导启动 |
| 03 | `/taskapp-development 加一个音频转文字的任务` | 创建 Pydantic 模型 → 实现 Task → 注册路由 → 生成测试 |
| 04 | `/taskapp-development 给刚才的任务写测试` | 自动选用 InMemoryTaskExecutor，覆盖正常和异常路径 |
| 05 | `/taskapp-development 检查接口为什么返回 401` | 排查 auth 配置、环境变量、请求头格式 |

**右侧面板 — 搭配需求驱动技能：**
先安装 `spec-coding-skill`，用需求驱动的方式编排开发流程。
- 安装：`npx skills add https://github.com/Hunter-Leo/llm-agent-oop-coding-skill`
| # | 命令 |
|---|------|
| 01 | `/spec-coding-skill 请使用 taskapp-development 技能创建一个视频处理服务` |
| 02 | `/spec-coding-skill 请使用 taskapp-development 技能迁移当前项目到 taskapp 框架` |
| 03 | `/spec-coding-skill 请使用 taskapp-development 技能加一个音频转文字的任务` |

底部标签：/taskapp-development · 需求驱动 · 全流程辅助

---

## Section 02: Framework Overview（Page 6–8）

### Page 6/21 · Section Divider: Framework Overview

**文件名：** `slides/06-section-overview.html`

- SECTION 02 / Framework **Overview**
- 描述：了解 taskapp-framework 的设计理念与整体架构
- 导航标记：`6 / 21 · Section 02`

### Page 7/21 · 框架总览

**文件名：** `slides/07-framework-overview.html`
**Section：** Section 02 · Framework Overview

- taskapp-framework 是一个 Python 异步任务框架，将 FastAPI、FastMCP 和 Redis Queue 整合为统一的开发体验
- 注册一个 Task = 自动获得 REST API + MCP Tool + 队列调度 + 文件管理

**8 大特性（4×2 网格）：**
| # | 特性 | 说明 |
|---|------|------|
| 1 | Hybrid Tasks | @task 装饰器或 BaseTask 类，两种风格任选 |
| 2 | Auto REST/MCP | 注册即用 — 自动生成 REST 端点和 MCP Tool |
| 3 | FileRef I/O | 下载 → 处理 → 上传，全生命周期托管 |
| 4 | Worker Scaling | 基于内存阈值的自动扩缩 + 始终在线的基础 Worker |
| 5 | Zero-Config Dev | TcpFakeServer 模拟 Redis，无需外部依赖 |
| 6 | Pluggable Auth | AuthProvider 接口 + BearerTokenAuth |
| 7 | Pydantic Config | TASKAPP_* 前缀全量覆盖，类型安全 |
| 8 | Agent Skill | AI 辅助脚手架搭建和任务开发 |

底部标签：Python 3.11+ · FastAPI 0.104+ · FastMCP 3.0+ · RQ 2.7+ · Pydantic v2 · uv workspace

### Page 8/21 · System Architecture

**文件名：** `slides/08-architecture.html`
**Section：** Section 02 · Architecture

**左侧 — 5 层架构图：**
1. API Layer → FastAPI Server → ↓ REST POST/GET
2. MCP Layer → FastMCP Tools → ↓ POST /mcp
3. Core → TaskManager → ↓ submit / poll / cancel
4. Queue + Workers → RQ Queue · Workers (auto-scale) → ↓ TcpFakeServer (dev) / Redis (prod)
5. Infrastructure → FileRef I/O · Auth · Logging · Callback

**右侧 — 信息面板：**
- Execution Pipeline：所有执行路径共享 `execute_task_with_lifecycle()`
- 模块清单：FastAPI（REST）/ FastMCP（MCP Tools）/ TaskManager（队列调度+扩缩）/ FileRef（文件管理）/ AuthProvider（认证）/ Workspace（工作目录+GC）
- Task Lifecycle：`QUEUED → STARTED → (DOWNLOADING → UPLOADING) → FINISHED → FAILED / TIMEOUT / CANCELED`

---

## Section 03: Core Features（Page 9–16）

### Page 9/21 · Section Divider: Core Features

**文件名：** `slides/09-section-features.html`

- SECTION 03 / Core **Features**
- 特性标签预览：Hybrid Tasks · Auto REST/MCP · Eager · Wait-and-Return · Pluggable Auth · Worker Scaling · TcpFakeServer · FileRef I/O
- 导航标记：`9 / 21 · Section 03`

### Page 10/21 · Hybrid Task Registration

**文件名：** `slides/10-hybrid-tasks.html`
**Section：** Section 03 · Core Features

**左侧 — @task Decorator（函数式）：**
- 自包含模型 + 实现，适合简单任务
- 示例：`@task("echo", timeout=30)` 定义 async handler
- 注册：`app.register_task(echo)`
- 标签：简单 · 自包含

**右侧 — BaseTask Class（面向对象）：**
- 生命周期钩子 + 进度追踪，适合复杂任务
- 示例：`class AnalysisTask(BaseTask)` 定义 name / timeout / retry_count
- `update_progress()` 更新进度
- 标签：生命周期 · 进度追踪 · 日志

### Page 11/21 · Auto REST / MCP Endpoints

**文件名：** `slides/11-auto-endpoints.html`
**Section：** Section 03 · Core Features

**左侧 — REST API：**
- `POST /api/{task_name}` — 提交任务（Body：data, callback_url, wait_seconds）
- `GET|POST /api/task_query?JobId={job_id}` — 查询状态/结果
- `POST /callback` — 接收回调
- `curl` 测试示例

**右侧 — MCP Tool Integration：**
- `POST /mcp` — FastMCP 端点
- `FastMCP.from_fastapi()` 自动将路由映射为 MCP Tools
- AI 助手可直接调用，无需额外适配层
- 数据流：Pydantic Model → OpenAPI → FastAPI Routes → MCP Tools

### Page 12/21 · Eager Execution + Wait-and-Return

**文件名：** `slides/12-eager-wait.html`
**Section：** Section 03 · Core Features

**左侧 — Eager=True（即时执行）：**
- ping 任务跳过队列，inline 执行
- `@task("ping", timeout=5, eager=True)`
- `POST /api/ping` → 即时响应，无需排队，无需 Worker
- 标签：零延迟 · 同步返回

**右侧 — Wait_seconds=N（同步等待）：**
- 提交并等待结果（最长 60 秒）
- `POST /api/analysis` + `wait_seconds: 15`
- N 秒内完成 → 直接返回结果；超时 → 返回 job_id，客户端轮询
- 标签：灵活 · 降级轮询
- 两种模式配合：快速幂等操作走 eager，耗时任务用 wait-and-return

### Page 13/21 · Pluggable Authentication

**文件名：** `slides/13-auth.html`
**Section：** Section 03 · Core Features

**左侧 — 内置实现 BearerTokenAuth：**
```python
app = TaskApp(title="MyApp", auth=BearerTokenAuth(token="sk-..."))
```
- 请求需携带 `Authorization: Bearer sk-...`
- 未认证返回 401，`GET /` 健康检查自动放行

**右侧 — 自定义 AuthProvider：**
```python
class CustomAuth(AuthProvider):
    async def authenticate(self, request: Request) -> AuthResult:
        api_key = request.headers.get("X-API-Key")
```
- 实现 AuthProvider 抽象类即可
- 从 header / cookie / query 验证
- open/closed 原则

### Page 14/21 · Worker Auto-Scaling

**文件名：** `slides/14-workers.html`
**Section：** Section 03 · Core Features

**左侧 — WorkerStrategy 协议：**
- `ProcessWorkerStrategy` — 子进程 Worker（CPU 密集安全）
- `AsyncWorkerStrategy` — 协程 Worker（默认，I/O 密集优化）
- `TASKAPP_WORKER_TYPE` 切换："coroutine" (default) | "process"

**右侧 — Always-On Base Worker + 配置：**
- `burst=False` → 常驻 Worker，零延迟任务拾取，无冷启动
- 配置项：
  - `TASKAPP_WORKER_MIN = 1`（默认）
  - `TASKAPP_WORKER_MAX = 4`（默认）
  - `TASKAPP_WORKER_MEMORY_THRESHOLD = 80%`
  - `TASKAPP_WORKER_SCALE_INTERVAL = 10s`

### Page 15/21 · TcpFakeServer — Zero-Config Dev

**文件名：** `slides/15-tcpfakeserver.html`
**Section：** Section 03 · Core Features

**左侧 — 工作原理：**
- 不设置 REDIS_URL 时自动启用
- 模拟 Redis 协议子集：LPUSH / BRPOP / BLPOP / GET / SET / DEL / EXISTS / SMEMBERS / SADD / SREM / ZADD / ZREMRANGEBYSCORE / EXPIRE
- 完全在内存中运行，进程重启数据即清除

**右侧 — 开发 vs 生产：**
- 本地开发：不设 REDIS_URL，零依赖开箱即用
- CI / 测试：InMemoryTaskExecutor + fakeredis，无需基础设施
- 生产：`TASKAPP_REDIS_URL=redis://localhost:6379/0` 自动切换真实 Redis
- 一行 .env 启用生产模式，同一套代码无需任何改动

### Page 16/21 · FileRef I/O System

**文件名：** `slides/16-fileref.html`
**Section：** Section 03 · Core Features

**左侧 — Input FileRef（自动下载）：**
```python
class ProcessAudioInput(BaseModel):
    audio: FileRef  # 远程 URL
```
- `POST {"audio": {"location": "https://..."}}`
- 框架自动下载到 workspace，`input.audio.location` 已经是本地路径

**Output FileRef（自动上传）：**
- `run()` 中写入本地文件，返回 `FileRef(location=str(result))`
- 框架自动上传到存储后端，返回 signed URL

**右侧 — Workspace 管理：**
- 每个任务拥有独立 workspace
- `ws.file("data.txt")` / `ws.path("subdir/")`

**存储后端：**
- LocalFileStorage — 本地文件系统
- OpenDALStorage — S3 / R2 / GCS / Azure Blob
- 通过 `TASKAPP_STORAGE_BACKEND` 切换，WorkspaceGC 按 TTL 自动清理

---

## Section 04: Task Patterns + Configuration（Page 17–20）

### Page 17/21 · Section Divider: Task Patterns

**文件名：** `slides/17-section-patterns.html`

- SECTION 04 / Task **Patterns**
- 描述：两种 Task 定义方式，覆盖简单到复杂的全部场景
- 导航标记：`17 / 21 · Section 04`

### Page 18/21 · @task Decorator Pattern

**文件名：** `slides/18-task-decorator.html`
**Section：** Section 04 · Task Patterns

**左侧 — Input/Output 模型：**
```python
class EchoInput(BaseModel):
    message: str = Field(description="Message to echo")

class EchoOutput(TaskResultBase):
    JobCode: str = "SUCCESS"
    echo: str
```

**Eager 模式示例：**
```python
@task("ping", eager=True)
async def ping(input: PingInput):
    return PingOutput(response="pong")
```
标签：简洁 · 自包含 · 可测试

**右侧 — Progress 注入：**
```python
@task("process-data", timeout=60)
async def process(input: DataRequest, progress: TaskProgress) -> DataResult:
    progress.update("processing", 50, "Processing records...")
    return DataResult(data=await transform(input))
```
注册方式：`app.register_task(process)` / `app.task()` 装饰器 / 独立 `@task()`

### Page 19/21 · BaseTask Class Pattern

**文件名：** `slides/19-basetask-class.html`
**Section：** Section 04 · Task Patterns

**左侧 — 生命周期方法：**
```python
class FileWordCountTask(BaseTask):
    name = "file_word_count"
    timeout = 60

    async def run(self, input):
        ws = self.workspace
        text = open(input.file.location).read()
        result = ws.file("result.json")
        result.write_text(json.dumps({"count": len(text.split())}))
        return FileWordCountOutput(result_file=FileRef(location=str(result)))
```

**右侧 — 钩子 + 进度 + Log：**
```python
async def on_success(self, result, elapsed_seconds=0.0):
    self.logger.info("Completed in %.2fs", elapsed_seconds)

async def on_failure(self, error):
    self.logger.error("Failed: %s", error)

async def on_timeout(self):
    self.logger.warning("Task timed out")
```
- `run()` 支持 `async def` 和 `def` 两种风格，框架自动检测

### Page 20/21 · Environment Variables

**文件名：** `slides/20-env-vars.html`
**Section：** Section 04 · Configuration

**左侧 — 完整环境变量表格：**

| 分类 | 变量 | 说明 | 默认值 |
|------|------|------|--------|
| **Server** | `TASKAPP_REDIS_URL` | Redis 连接 URL，留空自动用 TcpFakeServer | — |
| | `TASKAPP_HOST / PORT` | 服务监听地址和端口 | 0.0.0.0:8000 |
| **Worker** | `TASKAPP_WORKER_TYPE` | coroutine / process | coroutine |
| | `TASKAPP_WORKER_MIN / _MAX` | 自动扩缩上下限 | 1 / 4 |
| | `TASKAPP_WORKER_MEMORY_THRESHOLD` | 扩缩阈值 | 80% |
| | `TASKAPP_WORKER_SCALE_INTERVAL` | 检查间隔 | 10s |
| **Storage** | `TASKAPP_STORAGE_BACKEND` | local / s3 / gcs / azblob / oss | local |
| | `TASKAPP_STORAGE_LOCAL_ROOT` | 本地存储根目录 | ./taskapp_files |
| | `TASKAPP_STORAGE_S3_BUCKET / _ENDPOINT` | S3/R2 配置 | — |

**右侧 — 完整 .env 配置示例：**
涵盖 Server · Worker · Storage (Local) · Logging · MCP · Workspace · App 全部配置项

---

## 总结页 · Page 21/21

**文件名：** `slides/21-summary.html`

- 标题：**v0.3.0** — Get Started
- 8 项功能清单（带 ✓ 标记）：
  1. Hybrid Task Registration — @task decorator + BaseTask class
  2. Auto REST/MCP — 注册即得 API + MCP Tools
  3. FileRef I/O — 文件生命周期全自动管理
  4. Worker Auto-Scaling + Always-On Base Worker
  5. Eager Execution + Wait-and-Return
  6. TcpFakeServer — 零依赖本地开发
  7. Pluggable Auth + BearerTokenAuth
  8. Agent Skill — AI 辅助项目开发

- CTA：`./scripts/create-app.sh my-app ./`
- 页脚：taskapp-framework · Internal · Python 3.11+ · uv workspace · 21 / 21
