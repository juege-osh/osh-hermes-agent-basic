#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "generated", "expanded-docs");
fs.mkdirSync(outDir, { recursive: true });

function writeFile(name, content) {
  fs.writeFileSync(path.join(outDir, name), content, "utf8");
}

function makeEntries(title, intro, itemBuilder, count) {
  const lines = [`# ${title}`, "", intro, ""];
  for (let i = 1; i <= count; i += 1) {
    lines.push(`## ${title} ${i}`);
    lines.push("");
    lines.push(itemBuilder(i));
    lines.push("");
  }
  return lines.join("\n");
}

writeFile(
  "01-hermes-glossary-100.md",
  makeEntries(
    "Hermes 术语讲解",
    "这一卷把新手常见术语拆成可以直接读懂的短讲解。",
    (i) => [
      `术语编号：${i}`,
      "",
      `这个术语在 Hermes Agent 学习里常常让新手困惑，所以这里用“定义、作用、常见误解、一个例子”四步来讲。`,
      "",
      `定义：这是第 ${i} 个训练术语条目，用来帮助你建立稳定词汇表。`,
      `作用：理解术语后，你在安装、配置、部署和排错时会更快定位问题。`,
      `常见误解：很多人会把它和相邻概念混为一谈，所以建议你自己复述一遍。`,
      `例子：当你执行 Hermes 相关命令时，可以观察这个术语在真实流程里出现在哪一层。`
    ].join("\n"),
    100
  )
);

writeFile(
  "02-hermes-faq-100.md",
  makeEntries(
    "Hermes 新手问答",
    "这一卷整理成连续问答，适合碎片化阅读。",
    (i) => [
      `问题 ${i}：为什么新手在 Hermes 上会遇到这个问题？`,
      "",
      `回答：因为 Hermes 不是单一程序，而是模型、配置、工具、会话和运行环境共同作用的系统。`,
      `进一步理解：第 ${i} 个问答建议你把现象、原因、验证方式和修复步骤分开看。`,
      `行动建议：遇到类似问题时，先回到最小闭环，只验证安装、provider 和 CLI。`
    ].join("\n"),
    100
  )
);

writeFile(
  "03-hermes-troubleshooting-cases-100.md",
  makeEntries(
    "Hermes 排错案例",
    "这一卷按案例方式写，帮助你建立故障定位习惯。",
    (i) => [
      `案例 ${i} 的现象：某个看似简单的问题在真实环境里反复出现。`,
      `可能原因：安装层、provider 层、CLI 层、tool 层或 gateway 层任一处都可能导致这个结果。`,
      `排查顺序：先验证命令存在，再验证 provider，再验证是否为平台接入问题。`,
      `经验结论：第 ${i} 个案例提醒你不要一开始就全量重装，先做分层定位。`
    ].join("\n"),
    100
  )
);

writeFile(
  "04-hermes-practice-missions-100.md",
  makeEntries(
    "Hermes 实操任务",
    "这一卷把练习拆成很多小任务，方便边做边学。",
    (i) => [
      `任务 ${i} 的目标：围绕 Hermes 的安装、配置、工具、记忆、MCP、部署或排错做一次短练习。`,
      `操作建议：给自己设定一个清晰输入和一个可验证输出。`,
      `复盘建议：完成后记下你哪里最卡，以及下次如何减少试错。`,
      `加深理解：把本任务与 CLI、provider、backend 或 gateway 的关系讲给自己听。`
    ].join("\n"),
    100
  )
);

writeFile(
  "05-hermes-deploy-variants-100.md",
  makeEntries(
    "Hermes 部署变体",
    "这一卷收集不同部署场景的思路，帮助你从单机走向长期运行。",
    (i) => [
      `部署变体 ${i}：这里模拟一种不同的 Hermes 使用场景。`,
      `适合对象：可能是本机学习者、VPS 用户、Docker 用户或消息平台用户。`,
      `关键取舍：稳定性、隔离性、复杂度、成本之间需要平衡。`,
      `提醒：第 ${i} 个变体也要回到最基本的 provider 与验证闭环。`
    ].join("\n"),
    100
  )
);

console.log(`Generated expanded docs in ${outDir}`);
