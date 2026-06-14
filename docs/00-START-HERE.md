# 先从这里开始

如果你是第一次接触 Hermes Agent，不要急着一口气看完所有文档。最顺的顺序是下面这 6 步。

## 第 1 步：先建立正确预期

Hermes Agent 不是一个“装完就自动替你赚钱”的黑盒，它本质上是一个可以：

- 连模型
- 读写文件
- 跑终端命令
- 接各种工具
- 记忆上下文
- 通过 CLI 或消息平台与你交互

的智能代理系统。

你可以把它理解成：

“一个能长期工作的 AI 助手运行时 + 一个可配置的工具平台 + 一个带记忆与技能系统的 agent 外壳”。

## 第 2 步：先把本地环境装起来

按照这两个文件走：

1. [docs/02-install/01-installation-roadmap.md](docs/02-install/01-installation-roadmap.md)
2. [scripts/install-hermes-local.sh](scripts/install-hermes-local.sh)

## 第 3 步：准备模型提供商 Key

至少准备一个：

- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `OPENROUTER_API_KEY`
- `NOUS_API_KEY`

填法看这里：

- [docs/03-config/01-provider-and-config-basics.md](docs/03-config/01-provider-and-config-basics.md)
- [.env.example](.env.example)

## 第 4 步：做首次验证

跑：

```bash
bash scripts/verify-hermes-install.sh
```

你要确认的不是“脚本没报错”这么简单，而是：

- `hermes` 命令可执行
- `hermes doctor` 能跑
- Hermes 配置目录存在
- 你知道后面要用哪个 provider

## 第 5 步：开始第一轮真正使用

重点看：

- [docs/05-cli/01-cli-first-session.md](docs/05-cli/01-cli-first-session.md)
- [docs/06-tools/01-tools-and-terminal-backends.md](docs/06-tools/01-tools-and-terminal-backends.md)

## 第 6 步：再进入部署、网关、记忆、技能、MCP

当你已经能本地跑通，再继续看：

- [docs/07-memory-skills/01-memory-skills-mcp.md](docs/07-memory-skills/01-memory-skills-mcp.md)
- [docs/08-messaging/01-gateway-platforms.md](docs/08-messaging/01-gateway-platforms.md)
- [docs/09-deploy/01-local-vps-docker-deploy.md](docs/09-deploy/01-local-vps-docker-deploy.md)

## 先看图

![Hermes 学习封面](assets/images/hermes-study-cover.png)

## 这套教程特别强调什么

- 不把小白当成默认懂 Python、Node、CLI
- 每个核心名词都尽量翻译成人话
- 每个高频坑都给出“症状-原因-处理方式”
- 不只讲本地，还讲 VPS、Docker、网关和长期运行

## 你最容易踩的三个大坑

1. 以为装好 Hermes 就等于装好了模型能力，其实没有 provider key 它也没法正常工作。
2. 以为能工作就等于适合生产，实际上权限、终端后端、容器隔离、消息平台授权都要单独设计。
3. 以为“会聊天”就等于“会稳定执行任务”，但 agent 稳定性很依赖配置、工具集、记忆策略和约束边界。
