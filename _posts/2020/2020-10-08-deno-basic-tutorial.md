---
layout: post
date: 2020-10-08 20:15:32
title: deno零基础入门教程
categories:
- [deno, 入门教程]
tags: [deno, 入门教程]
excerpt: deno零基础入门教程, 从零到一
keywords: deno, 入门教程, deno
description: 大白来分享一下deno的玩法，给出从零到一的deno入门教程。
topmost: true
---

## 安装Deno

首先，我们需要安装好 Deno。


在Windows下安装Deno，有两种方式

- 在`git bash`中用curl安装

具体命令是:

```shell
curl -fsSL https://x.deno.js.cn/install.sh | sh -s v1.0.0
```

- 在PowerShell中使用chocolate包管理器安装

首先，你需要使用powershell安装好`chocolate`，具体操作如下:

以管理员权限打开powershell，然后输入以下命令:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

安装好chocolate后，可以直接在PowerShell中以管理员权限运行如下命令:

```powershell
choco install deno
```
未完待续~
