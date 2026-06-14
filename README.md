# Hermes Agent 从小白到可部署实战教程仓库

这个仓库不是单纯的“介绍文档”，而是一套可以直接照着操作的 Hermes Agent 入门、搭建、部署、排错与进阶教程库。我把内容拆成了多个分卷，优先保证三件事：

1. 小白能按顺序搭起来。
2. 每个关键命令都有出处、有解释、有验证方式。
3. 仓库里同时包含脚本、环境模板、部署清单、手帐风格配图和踩坑排查。

## 你现在能直接做什么

1. 先看 [docs/00-START-HERE.md](docs/00-START-HERE.md)
2. 再跑 [scripts/install-hermes-local.sh](scripts/install-hermes-local.sh)
3. 配置 `.env`
4. 最后跑 [scripts/verify-hermes-install.sh](scripts/verify-hermes-install.sh)

## 教程地图

- [docs/00-START-HERE.md](docs/00-START-HERE.md)
- [docs/01-overview/01-what-is-hermes-agent.md](docs/01-overview/01-what-is-hermes-agent.md)
- [docs/02-install/01-installation-roadmap.md](docs/02-install/01-installation-roadmap.md)
- [docs/03-config/01-provider-and-config-basics.md](docs/03-config/01-provider-and-config-basics.md)
- [docs/04-core-concepts/01-architecture-and-core-knowledge.md](docs/04-core-concepts/01-architecture-and-core-knowledge.md)
- [docs/05-cli/01-cli-first-session.md](docs/05-cli/01-cli-first-session.md)
- [docs/06-tools/01-tools-and-terminal-backends.md](docs/06-tools/01-tools-and-terminal-backends.md)
- [docs/07-memory-skills/01-memory-skills-mcp.md](docs/07-memory-skills/01-memory-skills-mcp.md)
- [docs/08-messaging/01-gateway-platforms.md](docs/08-messaging/01-gateway-platforms.md)
- [docs/09-deploy/01-local-vps-docker-deploy.md](docs/09-deploy/01-local-vps-docker-deploy.md)
- [docs/10-troubleshooting/01-common-pitfalls.md](docs/10-troubleshooting/01-common-pitfalls.md)
- [docs/11-practice/01-guided-practice.md](docs/11-practice/01-guided-practice.md)
- [docs/12-appendix/01-command-cheatsheet.md](docs/12-appendix/01-command-cheatsheet.md)

## 手帐图

教程里需要“快速理解”和“情绪减压”的位置，我加了几张手帐风格图：

- [assets/images/hermes-study-cover.png](assets/images/hermes-study-cover.png)
- [assets/images/hermes-setup-flow.png](assets/images/hermes-setup-flow.png)
- [assets/images/hermes-troubleshooting-diary.png](assets/images/hermes-troubleshooting-diary.png)

## 自动扩展内容

考虑到你要的是超大体量教程，我额外放了一个内容生成器：

- [scripts/generate-expanded-docs.js](scripts/generate-expanded-docs.js)

它会批量生成：

- 术语解释卷
- 100 个新手问答
- 100 个排错案例
- 100 个练习任务
- 100 个部署变体说明

这样仓库既有人工整理过的主教程，也有可持续扩展的内容库。

## 当前仓库目标状态

- 已提供本地安装脚本
- 已提供验证脚本
- 已提供配置模板
- 已提供分卷式教程
- 已预留 GitHub 推送流程

如果你后面还要继续扩写成真正“百万字级”，这个仓库结构已经够继续叠加，不会乱。
