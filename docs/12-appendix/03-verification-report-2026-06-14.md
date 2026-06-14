# 本次实机验证报告

验证日期：2026-06-14

## 已完成验证

- 官方 Hermes 安装脚本已实际执行成功
- `uv` 已安装
- Python 3.11 已安装
- Hermes Agent 已安装到 `~/.hermes/hermes-agent`
- `~/.local/bin/hermes` 已生成
- `hermes doctor` 已成功运行
- `hermes doctor --fix` 已成功执行并完成配置迁移
- Hermes bundled skills 已同步

## 实测中观察到的重要现象

### 1. 系统 Node 太旧时，Hermes 会自管安装新版 Node

这次本机原有 Node 是 `v18.17.0`，官方安装器检测后自动安装了 Hermes 自管的 Node 22 LTS。

### 2. 系统浏览器可被直接复用

本机检测到系统 Chrome，因此跳过了 Playwright Chromium 下载。

### 3. 安装完成后不一定当前 shell 立刻能识别 `hermes`

虽然 `~/.local/bin/hermes` 已生成，但当前 PATH 中不一定已有 `~/.local/bin`。这不是安装失败，而是 shell 环境刷新问题。

## 当前仍需手工完成的事项

### 1. 配置至少一个 provider key

目前本仓库本地 `.env` 只是模板，真实 key 需要用户自己填写。

### 2. 运行 `hermes setup`

这是后续把 provider、model 和更多能力接起来的关键一步。

### 3. 可选能力按需配置

例如：

- Telegram / Discord / Slack
- OpenRouter
- 图像与视频相关工具
- 特定 MCP server

## 当前不是阻塞项，但值得知道

- doctor 提示 web workspace 和 ui-tui workspace 各有 2 个高危 npm 构建链漏洞提示
- 这属于 Hermes 上游项目的构建链提醒，不影响你现在完成基础入门搭建

## 结论

当前环境已经达到：

- Hermes 基础安装成功
- 验证脚本可运行
- 文档中安装步骤已被实机验证

当前还没做到的只有一件关键事：

- 没有替你填写真实 provider key，因此不能替你完成“实际连通模型提供商”的最后一跳
