# 常用命令速查

## 安装相关

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
bash scripts/install-hermes-local.sh
bash scripts/verify-hermes-install.sh
```

## Hermes 基础命令

```bash
hermes
hermes setup
hermes model
hermes tools
hermes doctor
hermes update
```

## Gateway 相关

```bash
hermes gateway
hermes gateway setup
hermes gateway status
```

## 配置相关

```bash
hermes config set
hermes sessions list
```

## Shell 环境相关

```bash
source ~/.zshrc
set -a
source .env
set +a
```

## 学习时推荐顺序

```bash
bash scripts/bootstrap-env.sh
bash scripts/install-hermes-local.sh
source .env
bash scripts/verify-hermes-install.sh
hermes setup
hermes
```
