# 核心原理与架构入门

## 为什么一定要讲原理

很多教程只写“命令怎么敲”，结果你一报错就卡死。Hermes Agent 又比普通聊天工具复杂得多，如果不理解核心组件，你会在下面这些场景里持续蒙圈：

- 为什么同样一句话在 CLI 能跑、在消息平台不能跑
- 为什么本地终端能执行，容器里却不行
- 为什么会话能继续，但换平台后上下文不一样
- 为什么技能、工具、MCP 看起来都像“增强能力”，但实际不是一回事

## 官方架构里最关键的几个模块

根据官方架构文档，可以先把 Hermes 看成这些大模块：

1. Agent Loop
2. Prompt System
3. Provider Resolution
4. Tool System
5. Session Persistence
6. Messaging Gateway
7. Plugin / Memory / Skills / MCP
8. Cron / Automation

## 用小白能懂的话解释一遍

### 1. Agent Loop

这是大脑外面的“工作调度器”。

它负责：

- 收到你的问题
- 拼装提示词
- 决定是否调用工具
- 处理工具结果
- 再继续和模型交互
- 最后把答案给你

### 2. Prompt System

不是每次只把你的话原样发给模型。Hermes 会把：

- 系统角色说明
- 工具说明
- 上下文文件
- 记忆信息
- 时间信息
- 当前用户输入

一起整理后再发给模型。

### 3. Provider Resolution

这层像路由器，负责决定：

- 走哪个 provider
- 用哪个 model
- 用哪个 key
- 要不要走某个 base URL

### 4. Tool System

这层负责让模型不只是“说”，还能“做”。

例如：

- 运行终端命令
- 搜索网页
- 读写文件
- 生成图像
- 管理进程

### 5. Session Persistence

这层解决“记住会话”的问题。

Hermes 会把会话和一些历史信息持久化，不然你每次重开都像失忆。

### 6. Messaging Gateway

这层解决“怎么从 Telegram、Discord、Slack 等平台和 Hermes 对话”的问题。

### 7. Skills / Memory / MCP / Plugin

这些都在增强 Hermes，但用途不同：

- `Skill`：一份按需加载的任务说明书
- `Memory`：长期记忆和用户画像
- `MCP`：连接外部能力服务
- `Plugin`：扩展 Hermes 本身

### 8. Cron

这层解决“让 Hermes 定时自己做事”的问题。

## 你要搞懂的 3 条关键链路

### 链路 1：CLI 对话

你输入一句话。

然后系统大概会：

1. 读取配置
2. 恢复会话
3. 拼装 prompt
4. 调用 provider
5. 需要时调用工具
6. 返回结果
7. 保存会话

### 链路 2：消息平台

别人给机器人发消息后，流程会多一层 gateway：

1. 平台收到消息
2. gateway 解析
3. 校验用户权限
4. 找到对应会话
5. 进入 agent loop
6. 回消息

### 链路 3：定时任务

cron 到点后：

1. 读取任务配置
2. 创建或恢复运行上下文
3. 调 agent
4. 执行任务
5. 把结果发到目标平台

## 为什么终端 backend 也很重要

Hermes 的工具里最有威力、也最容易出事的一类就是终端执行。

官方支持多种 backend，比如：

- local
- docker
- ssh
- singularity
- modal

这意味着“执行命令”这件事不一定发生在你当前电脑裸机上。

## 为什么这决定了部署设计

如果你是个人学习，本地执行就够了。

如果你是长期运行、希望更安全、更可控，就要考虑：

- Docker 隔离
- SSH 到远端主机
- 云端容器
- 权限收敛

## 新手不必一开始全懂，但要先知道边界

你不用第一天就写 plugin 或搞复杂 memory provider，但至少要知道：

- Hermes 是一个系统，不是单个脚本
- 每一层都可能成为问题来源
- 会聊天只是最表层能力

## 学习建议

先掌握顺序：

1. 安装
2. provider
3. CLI
4. tool
5. memory / skill / MCP
6. gateway
7. deploy

按这个顺序，你排错时也更容易定位是哪一层出了问题。
