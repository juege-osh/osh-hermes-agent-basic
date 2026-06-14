# Provider 与配置入门

## 先说最重要的一句话

Hermes Agent 安装完成以后，不代表它已经有“智能回答能力”。真正让它工作的是你配置的 provider 和 model。

## 什么是 provider

provider 就是给 Hermes 提供模型接口的服务商，比如：

- OpenAI
- Anthropic
- OpenRouter
- Nous
- 其他兼容接口

## 什么是 model

model 是你真正调用的模型名，比如：

- `gpt-*`
- `claude-*`
- 通过 OpenRouter 提供的各种模型

provider 决定你连谁，model 决定你具体用哪个脑子。

## 新手最容易犯的错误

### 错误 1：只填了 key，没选 model

结果就是 Hermes 启动了，但回答异常、报错、或者根本不出结果。

### 错误 2：model 名和 provider 不匹配

比如你把某个只存在于 OpenRouter 的模型名塞给别的 provider。

### 错误 3：自定义 base URL 不兼容

看起来像 OpenAI 接口，不代表真的完全兼容。

## 推荐的最小可用策略

### 只做一件事

先用一个你最熟悉、最稳定的 provider 跑通。

不要一上来就：

- 多 provider 混用
- 加 fallback
- 自定义路由
- 接十几个工具

## 配置入口

官方常见命令：

```bash
hermes setup
hermes model
hermes config set
```

## 推荐新手顺序

### 1. 在 shell 里加载 `.env`

```bash
set -a
source .env
set +a
```

### 2. 运行配置向导

```bash
hermes setup
```

### 3. 单独检查模型选择

```bash
hermes model
```

## `.env.example` 怎么填

### 如果你用 OpenAI

填：

```env
OPENAI_API_KEY=你的_key
```

### 如果你用 Anthropic

填：

```env
ANTHROPIC_API_KEY=你的_key
```

### 如果你用 OpenRouter

填：

```env
OPENROUTER_API_KEY=你的_key
```

## 什么时候需要额外工具 Key

当你要用这些能力时才需要继续加：

- web search
- image generation
- text to speech
- cloud browser
- messaging platform

## 配置成功的判断标准

你不是只看配置文件写进去了，而是要看：

1. `hermes model` 能显示当前选择
2. 实际发一条消息能有正常回答
3. 回答不是空、乱码、明显 provider 错误

## 建议的第一条测试消息

进入 `hermes` 后发：

```text
请用三句话介绍你当前的工作模式，并告诉我你现在是否能使用工具。
```

这类消息能帮助你观察：

- 模型是否真的返回
- 风格是否正常
- Hermes 是否带有工具上下文

## 如果你以后要换 provider

不要直接在复杂任务中间切。先做这三步：

1. 新 provider 单独测试
2. 单轮对话验证
3. 再逐步加工具和复杂任务

## 和教程后续章节的关系

这部分是整个系统的入口。后面你看到的：

- tools
- gateway
- memory
- MCP
- cron

都建立在 provider 和 model 先稳定的前提上。
