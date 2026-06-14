# Harness Agent 和 Codex 这类工具有什么区别

先给结论：

**Harness Agent 是一类架构形态；Codex、Claude Code、OpenCode、Hermes Agent 这类东西，是不同团队把这种形态做成具体产品或运行时后的结果。**

它们不完全是同一层级的概念。

## 1. 先把名字分层

可以这样分：

```text
Model 层：GPT、Claude、Gemini、Hermes LLM
Harness 思想层：如何驾驭模型做任务
Agent Runtime 层：Hermes Agent、Codex CLI、Claude Code、OpenCode
应用入口层：CLI、IDE、Dashboard、Telegram、Slack
```

如果把这些都混成“AI 工具”，会很难判断它们到底在比什么。

## 2. Harness Agent 是什么

Harness Agent 不是某一个固定品牌。

它指的是一类系统：

- 模型外面有控制循环
- 能管理上下文
- 能调用工具
- 能执行多步骤任务
- 能保存状态
- 能把失败反馈回下一步

Hermes Agent 就是典型 Harness Agent。

它把 Harness 做得比较完整，而且强调长期运行、技能、记忆、多平台入口和可部署性。

## 3. Codex 这类工具是什么

这里说的 Codex，通常指的是面向编码任务的 agentic coding 工具。

它的核心目标更聚焦：

```text
让 AI 在代码仓库里读代码、改代码、跑命令、测结果、提交修改。
```

所以 Codex 这类工具的强项通常在：

- 代码仓库理解
- 文件编辑
- 命令执行
- 测试验证
- Git 工作流
- 终端协作

它也是有 Harness 的，因为它也需要控制模型做多步骤任务。

但它的 Harness 更偏“软件工程工作台”。

## 4. Hermes Agent 和 Codex 的关注点差异

可以粗略这样看：

| 维度 | Hermes Agent | Codex 这类编码工具 |
| --- | --- | --- |
| 核心定位 | 通用 Agent 框架 | 编码/工程任务 Agent |
| 入口 | CLI、Dashboard、Gateway、Cron、消息平台 | 主要是 CLI、IDE、代码工作区 |
| 长期记忆 | 强调 Memory / USER / Skill | 通常更强调当前仓库上下文 |
| 技能沉淀 | Skill 是核心能力之一 | 更偏任务内规则、项目指令、工程流程 |
| 多平台 | 强调 Telegram、Discord、Slack 等 | 通常不是核心 |
| 自动化任务 | Cron 和 Gateway 是重要能力 | 更多围绕代码任务执行 |
| 模型选择 | 强调多 provider、多模型接入 | 取决于具体工具实现 |

## 5. 它们不是互斥关系

Hermes Agent 和 Codex 这类工具不是“谁替代谁”的关系。

更像是：

- Hermes Agent：你想搭一个长期存在、能接多平台、有记忆和技能的通用 AI 助手。
- Codex：你想在某个代码仓库里高效完成工程任务。

你甚至可以让 Hermes Agent 调用或协作使用某些 coding agent 技能，反过来也可以在 Codex 里搭建 Hermes Agent 项目。

## 6. 为什么都叫 Agent，但体验不一样

因为 Agent 不是一个单一规格。

只要满足下面这些特征，就可能被叫 Agent：

- 能用模型做决策
- 能调用工具
- 能多步执行
- 能根据结果继续调整

但具体产品会选择不同重点：

- 有的重代码
- 有的重办公自动化
- 有的重聊天入口
- 有的重本地部署
- 有的重多 Agent 协作

Hermes Agent 的特色是把很多通用 Agent 能力打包在一个框架里。

Codex 的特色是把编码工作流打磨得更深。

## 7. 用一句话区别

```text
Hermes Agent 更像一个可部署的通用 AI 助手运行时。
Codex 更像一个面向代码仓库的 AI 工程搭档。
Harness Agent 是它们背后共同使用的一类架构思想。
```

## 8. 小白怎么选

如果你的目标是：

- 学 Agent 架构
- 搭一个自己的 AI 助手
- 接消息平台
- 做自动化任务
- 理解记忆和技能系统

优先看 Hermes Agent。

如果你的目标是：

- 改代码
- 跑测试
- 修 bug
- 做 PR
- 在仓库里让 AI 直接动手

优先看 Codex 这类编码工具。

## 9. 本教程为什么先讲 Hermes Agent

因为 Hermes Agent 更适合作为“Agent 系统入门样本”。

它把很多层都暴露出来：

- provider
- config
- tools
- memory
- skills
- gateway
- cron
- deployment

你学完它之后，再看 Codex、Claude Code、OpenCode，就会更容易看懂它们各自把 Harness 做在了哪里。
