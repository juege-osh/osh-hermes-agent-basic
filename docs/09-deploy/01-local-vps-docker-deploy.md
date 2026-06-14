# 本地、VPS、Docker 三种部署路线

## 为什么要分三种

因为“搭起来”和“部署好”不是一回事。

很多人第一次只是在自己电脑上跑起来，但真正长期使用时，常见会进入这三个阶段：

1. 本地学习环境
2. VPS 常驻环境
3. Docker 隔离环境

## 路线 1：本地环境

### 适合谁

- 第一次学习 Hermes
- 想快速试用
- 主要在自己电脑上操作

### 优点

- 最简单
- 最容易调试
- 改完马上验证

### 缺点

- 不适合长期常驻
- 会直接影响本机环境

## 路线 2：VPS 环境

### 适合谁

- 想让 Hermes 长期在线
- 想通过 Telegram/Discord 等远程使用
- 不想依赖本地电脑持续开机

### 最小路线

1. 买一台 Linux VPS
2. SSH 登录
3. 用官方安装脚本装 Hermes
4. 配置 provider key
5. 启动 gateway 或长期服务

### VPS 上你最需要关注的点

- 系统版本
- Python 与 `uv`
- 环境变量管理
- 日志
- 进程守护
- 权限边界

## 路线 3：Docker 环境

### 适合谁

- 想隔离执行环境
- 想减少本机污染
- 想提升可迁移性

### 为什么 Docker 很值得

agent 很可能会：

- 安装依赖
- 拉包
- 执行脚本
- 读写项目文件

容器化可以让这些影响更可控。

## 新手最现实的建议

### 第一阶段

先本地跑通。

### 第二阶段

把同样流程搬到 VPS。

### 第三阶段

再做 Docker 化和长期服务化。

## VPS 部署建议流程

### 1. 登录 VPS

```bash
ssh user@your-vps-ip
```

### 2. 安装 Hermes

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

### 3. 配置 key

建议用安全方式管理，不要直接散落在命令历史里。

### 4. 先做 CLI 测试

```bash
hermes doctor
hermes
```

### 5. 再开 gateway

```bash
hermes gateway setup
hermes gateway
```

## Docker 思路讲人话

不是说你一定要自己写一套很重的镜像，而是要先理解：

- Hermes 可以在容器执行后端里做命令执行
- 也可以把整个运行环境容器化

## 部署时最容易漏的东西

1. 日志目录
2. 自动重启机制
3. provider key 的安全注入
4. 文件持久化位置
5. 更新策略

## 什么时候你真的算“部署好”

不是打开一次 CLI 就算，而是满足：

- 重启后能恢复
- 日志可看
- 权限边界清楚
- provider 稳定
- 人不在电脑前也能继续工作

## 部署检查清单

- Hermes 已安装
- provider 已验证
- `hermes doctor` 正常
- gateway 可启动
- 日志可追踪
- 失败后有重启方案
- 关键目录可持久化
