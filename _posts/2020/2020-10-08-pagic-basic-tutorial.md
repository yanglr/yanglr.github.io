---
layout: post
date: 2020-10-08 20:15:32
title: pagic零基础入门教程
categories:
- [pagic, 入门教程]
tags: [pagic, 入门教程]
excerpt: pagic零基础入门教程, 从零到一
keywords: pagic, 入门教程, deno
description: 不错的静态网站生成器一枚 - pagic，基于Deno和React，大白来分享一下该框架的玩法，给出从零到一的Pagic入门教程。
topmost: true
original: true
image: https://pic.rmb.bdstatic.com/bjh/5e7ecc2377179f8345992794e910ab05.png
---

## pagic零基础入门教程

刚接触到Deno不久，据说有位TypeScript大佬基于 Deno 和 React 做出了一款极简的静态网站生成框架 `Pagic`，大白猜测取名自 Page static，然后缩写为`pagic`。

接下来，大白来分享一下该框架的玩法，给出从零到一的Pagic入门教程，本文以 Windows 10 为例来讲解。



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



装好chocolate后，可以直接在PowerShell中以管理员权限运行如下命令:

```powershell
choco install deno
```



## 安装pagic

deno安装好之后，下面就可以接着安装pagic了。



打开git bash，输入以下命令可以安装最新版的 pagic:

```bash
deno install --unstable --allow-read --allow-write --allow-net --name=pagic https://deno.land/x/pagic/mod.ts
```



### 处理常见的 Error/Exception

#### Error 1: error sending request for url ... error trying to connect: received corrupt message

执行完刚刚的 `deno install ...`命令后，出现如下Error:

```bash
error: error sending request for url (https://deno.land/std/path/mod.ts): error trying to connect: received corrupt message
```



分析可知: 

这个Error是自己电脑上https的证书对 deno 无效引起的。查资料可知 开源项目 [mkcert](https://github.com/FiloSottile/mkcert) 可完美解决该问题，需要在PowerShell中执行如下命令:

```
choco install mkcert
```



接下来你还可能遇到下一个Error。



#### Error 2: error sending request for url ... error trying to connect: invalid dnsname

分析可知，这个Error 是因为 deno 引用了github仓库release下的文件导致的。该Error的详细信息如下:

```bash
error: error sending request for url (https://deno.land/std/examples/curl.ts): error trying to connect: invalid dnsname
```



**其解决方法是:**

在 hosts 文件里面添加如下代码：

```
199.232.68.133 raw.githubusercontent.com
```



如果你的电脑是 Windows 系统，这个文件位置在 C:\Windows\System32\drivers\etc 目录。

MacOS 系统在 /etc/hosts，

设置完hosts之后，ipconfig /flushdns 刷新dns缓存。



问题解决好后，我们继续下一步~



## 初始化 pagic 项目

要使用 `pagic` 构建静态网站，则该项目**至少需要包含**一个 `pagic.config.ts` 配置文件和一个 `md/tsx` 页面文件：

```autoit
site/
├── pagic.config.ts
└── README.md
```

当然，`pagic.config.ts` 一开始可以只导出一个空对象：

```ts
export default {};
```

`README.md` 可以是一个简单的 Markdown 文件：

```md
# Hi, so cool.
```



> 你可以运行以下命令一次性创建出上面的 `site` 项目：
>
> ```bash
> mkdir site && cd site && echo "export default {};" > pagic.config.ts && echo "# Hi, so cool." > README.md
> ```



## 运行 `pagic` 命令

接下来，我们就可以在项目中使用 `pagic` 命令了。它的基本用法如下：

```bash
# 构建静态网站
pagic build [options]
# --watch   监听文件变动以重新构建
# --serve   启动本地服务，预览静态网站
# --port    指定本地服务的端口号
```



打开CMD命令行，切换到 `site` 目录下，运行以下代码：

```bash
pagic build --watch --serve
```



![极客玩家大白-image1](https://pic.rmb.bdstatic.com/bjh/36b5bf4f3479daaeeb8b67fd0690eb5c.png "极客玩家大白-CMD命令行")



咦，`pagic`命令无法识别呀，原来需要手动将 pagic 加到 系统变量的 `PATH` 中。



## 使pagic命令可以在任意目录下的CMD命令行中调用

要在 CMD命令行的任何地方可以使用 pagic，只需把`%HOMEPATH%\.deno\bin`加到PATH中即可，具体操作看下图：



![极客玩家大白-系统变量PATH](https://pic.rmb.bdstatic.com/bjh/7c6809a4966126b2ca34adcbe3d972a7.png "极客玩家大白")

此时，再输入同样的命令，就能起作用了:

![极客玩家大白-系统变量](https://pic.rmb.bdstatic.com/bjh/250abd0b7971ee4f12496258bb3433e4.png "极客玩家大白")



打开git bash，切换到 `site` 目录下，运行以下代码：

```bash
pagic build --watch --serve
```



会出现:

```
bash: pgic: command not found
```



![极客玩家大白](https://pic.rmb.bdstatic.com/bjh/f70e4afeccdae52a7a99933479c3ef90.png "极客玩家大白")





## 使pagic命令可以在任意目录下的git bash中调用

要让 git bash在任何文件目录可以使用 pagic，只需为其设置好alias，并放进 `.bashrc`文件即可，具体步骤如下：

- 在个人用户目录 (~)下创建 `.bashrc` 文件

```
cd ~
touch .bashrc
```

<br/>

- 在 `.bashrc` 文件中添加alias别名:

pagic.cmd的默认安装目录为: /C/Users/{username}/.deno/bin/pagic.cmd

这里需要把{username}替换为自己的用户名。



然后输入如下命令:

```
notepad .bashrc
```



加入如下这行即可:

```
alias pagic='winpty /C/Users/{username}/.deno/bin/pagic.cmd'
```



关闭git bash，然后重新打开即可执行pagic命令了。要想在本地运行pagic项目，只需执行:

```bash
pagic build --serve
```

![极客玩家大白-系统变量](https://pic.rmb.bdstatic.com/bjh/cc8fef46bc0fd12266f85d976a64b0ab.png)

当然还需要注意一点，build时需要关闭科学上网工具~



然后用浏览器打开 http://127.0.0.1:8000/ ，看看是不是显示出 `Hi, so cool.` 了呢？

![极客玩家大白-静态站点界面](https://pic.rmb.bdstatic.com/bjh/5e7ecc2377179f8345992794e910ab05.png)



注意，构建结果在 dist 目录中（这里隐藏了一些次要的文件）：

```autoit
site/
|── dist    # 构建结果目录
|   └── index.html
├── pagic.config.ts
└── README.md
```

> 一般的 Markdown 文件会被构建为同名的 HTML 文件，但是 `README.md` 被构建为了 `index.html`，这是一种人性化的处理，方便同时在 GitHub 中和静态网站中展示首页的内容。



Pagic 只关心 include 指定的 README.md 文件和 docs 目录(放`.md`文件夹的地方)。
include 中允许配置 glob 格式的字符串，如 docs/**/*.md 就只会匹配到 docs 目录下的所有 md 文件。



**大白推荐**的做法是:

将文件`pagic.config.ts` 的内容修改为:

```ts
export default {
    srcDir: 'docs'
};
```

然后，把写好的markdown都放到`docs`文件夹中，这样build后就可以正常访问markdown页面所对应的html了。


## 使用pagic构建的示例网站

- [Deno X ranking](https://yoshixmk.github.io/deno-x-ranking/) ([GitHub](https://github.com/yoshixmk/deno-x-ranking))
- [TypeScript 入门教程](https://ts.xcatliu.com/) ([GitHub](https://github.com/xcatliu/typescript-tutorial/))
- [Deno 钻研之术](https://deno-tutorial.js.org/) ([GitHub](https://github.com/hylerrix/deno-tutorial))
- [Deno 中文手册](https://manual.deno.js.cn/) ([GitHub](https://github.com/denocn/deno_manual))
- [JavaScript 20 年](https://cn.history.js.org/) ([GitHub](https://github.com/doodlewind/jshistory-cn))

<!-- 这次，大白先聊这么多，如果有更高端的玩法，会再继续分享哈~ -->
