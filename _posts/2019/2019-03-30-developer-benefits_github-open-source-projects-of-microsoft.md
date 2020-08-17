---
layout: post
title: 一大波开发者福利来了，一份微软官方Github上发布的开源项目清单等你签收
categories: 
- [github, 微软]

tags: [github, 微软]
excerpt: 大白技术控 - @开发者，一份微软官方Github上发布的开源项目清单等你签收

keywords: .NET,微软,开源
description: 大白技术控 - @开发者，一份微软官方Github上发布的开源项目清单等你签收
topmost: true
author: bravo_yeung
platform: 博客园
sourcelink: https://www.cnblogs.com/enjoy233/p/developer-benefits_github-open-source-projects-of-microsoft.html
date: 2019-03-30 19:43:10
---

一份微软官方Github上发布的开源项目清单等你签收!

-------------

最近在倒腾`WPF`的项目，试着搜一下微软官方提供的`WPF Smaples`, 结果找到了<https://github.com/Microsoft/WPF-Samples>. 当然还发现了`Cortana`相关的开源资料<https://microsoft.github.io/UWPQuickStart/docs/challenges/cortana-integration.html>和`UWP`资源<https://microsoft.github.io/UWPQuickStart/docs/resources.html>.

## 微软Github开源项目入口

当你访问网址<https://microsoft.github.io>时，会自动跳转到<https://opensource.microsoft.com>，于是可知微软开源项目入口即为<https://opensource.microsoft.com>或<https://microsoft.github.io>.


## 微软开源项目受欢迎程度排名

打开主页<https://opensource.microsoft.com>，将排序条件从默认的`Trending`切换到`Stars`, 即可看到Star最多的项目，同理`Forks`是按`fork`的量排序，A**A** Name是按项目名字典序排序。

![sort-by-stars](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p1.png "大白技术控Bravo Yeung")

还可点击`← Previous `或`Next →`来进行翻页。



### Visual Studio Code

免费开源且十分流行的跨平台代码编辑器，除了代码编辑功能以外，安装插件后还能进行调试，目前已更新到版本v1.3.2. 相比于Atom、Sublime等其他代码编辑器，它拥有最多的扩展插件，最新数据表明它排在所有商业和非商业IDE中位居第`6`位。还提供代码实时分享的协作开发(Live share)功能。
此外，微软官方还开源了很多vs插件的代码: <https://opensource.microsoft.com/?sort=Stars&keyword=vscode&tag=>，除了列表里的第一个，其他都是，特别是[Microsoft/vscode-go](https://github.com/Microsoft/vscode-go)最受欢迎，源码值得学习.
![vs-code](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p2.png "大白技术控Bravo Yeung")

中文官网: <https://azure.microsoft.com/zh-cn/products/visual-studio-code/>.

github地址: <https://github.com/Microsoft/vscode>



### TypeScript

TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个严格超集，并添加了可选的静态类型和基于类的面向对象编程。C#的首席架构师以及Delphi和Turbo Pascal的创始人安德斯·海尔斯伯格参与了TypeScript的开发。

TypeScript设计目标是开发大型应用，然后转译成JavaScript。由于TypeScript是JavaScript的严格超集，任何现有的JavaScript程序都是合法的TypeScript程序。

![Typescript-TS](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p3.png "大白技术控Bravo Yeung")

github地址: https://github.com/Microsoft/TypeScript



### RxJS

RxJS是JavaScript的Reactive Extensions，它是使用 Observables 的响应式编程的库，它使编写异步或基于回调的代码更容易。该项目是 `Reactive-Extensions/RxJS` 上一版本的重写，具有更好的性能、更好的模块性、更好的可调试调用堆栈，同时保持大部分向后兼容，只有一些破坏性的变更(breaking changes)是为了减少外层的 API 。

中文官网: <https://cn.rx.js.org> .

![img](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p4.png "大白技术控Bravo Yeung")

github地址: [Reactive-Extensions/RxJS](https://github.com/Reactive-Extensions/RxJS)



### .NET Core 基础类库

此Repo包含.NET Core的库实现（称为“CoreFX”）。 它包括System.Collections，System.IO，System.Xml和许多其他组件。 相应的.NET Core Runtime存储库（称为“CoreCLR”）包含.NET Core的运行时实现。 它包括RyuJIT，.NET GC和许多其他组件。 特定运行时的库代码（System.Private.CoreLib）位于Core CLR Repo中。 它需要与运行时一起构建和版本化。 CoreFX的其余部分与运行时实现无关，可以在任何兼容的.NET运行时（例如CoreRT）上运行。
![.net-coreFx](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p5.png "大白技术控Bravo Yeung")

github地址: https://github.com/dotnet/corefx


### CNTK

Microsoft Cognitive Toolkit（CNTK），一个开源的深度学习工具包

![cntk](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p6.png "大白技术控Bravo Yeung")

github地址:  [Microsoft/CNTK](https://github.com/Microsoft/CNTK)



### Microsoft calculator

Windows计算器：Windows自带的一个简单但功能强大的计算器 (Win10上的UWP计算器)

![Calculator Screenshot](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p7.png "大白技术控Bravo Yeung")

github地址: [Microsoft/calculator](https://github.com/Microsoft/calculator)



### Monaco editor
**Monaco editor**：基于浏览器的代码编辑器，Visual Studio就是以Monaco editor为基础开发而成的，本人上一篇文章XAML Studio也是以之为基础做成的。

![Monaco-editor](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p8.png "大白技术控Bravo Yeung")

在线试用:
[https://microsoft.github.io/monaco-editor/playground.html](https://microsoft.github.io/monaco-editor/playground.html)

github地址: [Microsoft/monaco-editor](https://github.com/Microsoft/monaco-editor)



### MS-DOS

MS-DOS 1.25和2.0的原始资源，供参考。

![ms-dos](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p9.png "大白技术控Bravo Yeung")

github地址: [Microsoft/MS-DOS](https://github.com/Microsoft/MS-DOS)



### Redis windows版

由于Redis官方没推出Windows版，微软自己基于Redis官方的Linux版的部分特性做了一个Windows版。
Redis windows版是一个内存数据库，可以在磁盘上保留。 数据模型是键值，但支持许多不同类型的值：字符串，列表，集，排序集，哈希值.

![Redis Cache On Windows](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p10.png "大白技术控Bravo Yeung")

![Redis windows](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p11.png "大白技术控Bravo Yeung")

它原来的repo地址是 [MSOpenTech](https://github.com/MSOpenTech/redis) ，后来 <https://github.com/orgs/MSOpenTech>下的项目全迁移到了<https://github.com/MicrosoftArchive>.

故最新github地址: [MicrosoftArchive/redis](https://github.com/MicrosoftArchive/redis)



### .NET Core CLR (公共语言运行时)

CoreCLR，是 .NET Core 的执行引擎，包括 RynJIT、.NET GC、原生 interop 和其他 .NET 运行时组件。当你在 .NET Core 上运行 ASP.NET 5 应用时，CoreCLR 用来执行你的代码，这还需要依赖于 CoreFX/BCL 库。
微软称在开源和跨平台 .NET 运行时环境这项工作上将会有几个额外的里程碑。
![.NET Core CLR-enjoy233-Bravo Yeung](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p12.png "大白技术控Bravo Yeung")

github地址: https://github.com/dotnet/coreclr



### ASP.NET Core

ASP.NET Core 是新一代的 ASP.NET，早期称为 ASP.NET vNext，并且在推出初期命名为 ASP.NET 5，但随着 .NET Core 的成熟，以及 ASP.NET 5 的命名会使得外界将它视为 ASP.NET 的升级版，但它其实是新一代从头开始打造的 ASP.NET 核心功能，因此微软宣布将它改为与 .NET Core 同步的名称，即 ASP.NET Core。
ASP.NET Core 可运行于 Windows 平台以及非 Windows 平台，如 Mac OSX 以及 Ubuntu Linux 操作系统，是 Microsoft 第一个具有跨平台能力的 Web 开发框架。
微软在一开始开发时就将 ASP.NET Core 开源，因此它也是开源项目的一员，由 .NET 基金会 (.NET Foundation) 所管理。
![ASP.NET Core](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p13.png "大白技术控Bravo Yeung")


github地址: https://github.com/aspnet/AspNetCore



### Entity Framework Core

Entity Framework Core 是微软新一代的对象关系对应 (ORM) 框架，以 .NET Core 实现，不过它是归属于 ASP.NET Core 项目的一部分，在 ASP.NET Core 开始开发时就被列入标准功能，与现行的 Entity Framework 一样，是微软官方建议使用的数据访问功能，但 .NET Core 成功移植 ADO.NET 基类库 System.Data 之后，开发人员仍能使用 ADO.NET 作为数据访问的解决方案。

github地址: https://github.com/aspnet/EntityFrameworkCore




### PowerShell

PowerShell（包括Windows PowerShell and PowerShell Core）是微软公司开发的任务自动化和配置管理框架，由.NET Framework和.NET Core是构建的命令行界面壳层相关脚本语言组成，最初仅Windows组件，后于2016年8月18日开源并跨平台支持。
在PowerShell中，管理任务通常由cmdlets（发音为command-lets）执行，这是执行特定操作的专用.NET类。可以将cmdlet集合至脚本、可执行文件（一般是独立应用程序）中，或通过常规.NET类（或WMI / COM对象）实例化。通过访问不同数据存储中的数据由PowerShell运行，如资源管理器或注册表。

PowerShell Core可很好地与现有工具配合使用, 并针对处理结构化数据 (例如 json、csv、xml 等)、REST API 和对象模型进行了优化。

![img-Bravo Yeung-enjoy233](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p14.png "大白技术控Bravo Yeung")


github地址: https://github.com/PowerShell/PowerShell



## 如何在其中搜索自己需要的项目

由于主页<https://opensource.microsoft.com>提供了搜索功能，只需在`Search repos...`的地方输入关键字即可。比如我需要搜索`wpf`相关的，在该处输入`wpf`。
![search-Bravo Yeung-enjoy233](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p15.png "大白技术控Bravo Yeung")


此时发现地址栏的网址已变成
<https://opensource.microsoft.com/?sort=Awesomeness&keyword=wpf&tag=>.

搜索结果为:
![search-result](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p16.png "大白技术控Bravo Yeung")


同上，此处也可切换排序条件，点击`← Previous `或`Next →`来进行翻页。

![sort-by-stars_Bravo Yeung-enjoy233](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p17.png "大白技术控Bravo Yeung")



## GitHub-邮件订阅

事实上，微软开源项目是使用`Github pages`来管理的。根据`Github pages`的规则，默认设置下`Github pages`访问页<http://microsoft.github.io>对应的项目应该为: <https://github.com/Microsoft/microsoft.github.io>. 使用`Github pages`搭建过个人博客的人都应该深知这一点。

![1553940590777-Bravo Yeung-enjoy233](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p18.png "大白技术控Bravo Yeung")

在`github`上登录个人账号之后，只需点`Watching`, 选择"Be notified of all conversions"即可，一旦github上有更新，会在Email中收到通知~



## Rss订阅

本人使用工具<https://fivefilters.org/content-only/>为此网站创建了`rss`功能，订阅地址为<http://ftr.fivefilters.org/makefulltextfeed.php?url=https%3A%2F%2Fopensource.microsoft.com%2F&max=10>，或者 <http://www.feed43.com/8078656626535244.xml>，同时我还创建了一个FeedEx的版本: <https://feedex.net/feed/www.feed43.com/8078656626535244.xml>，按需取用吧。

推荐使用[Feedly](https://feedly.com)来订阅，

![Feedly_Usage-Bravo Yeung-enjoy233](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/ms-opensource-p19.png "大白技术控Bravo Yeung")
这样一来，只要<https://opensource.microsoft.com>的列表里出现新项目，你进`feedly`就能看到了~

## 其他 microsoft.github.io上**有用的链接**
- Windows on Github <https://microsoft.github.io/windows/>
- TypeScript Types Search <https://microsoft.github.io/TypeSearch/>
- Python Tools for Visual Studio <https://microsoft.github.io/PTVS/>
- sqlworkshops \| SQL Server Workshops <https://microsoft.github.io/sqlworkshops/>
- Join Microsoft Developer Design <https://microsoft.github.io/join-dev-design/>
- Project Ace - Using Native UI <http://microsoft.github.io/ace/docs/native-ui/>
- LSP Overview <https://microsoft.github.io/language-server-protocol/overview>
- DAP Overview <https://microsoft.github.io/debug-adapter-protocol/overview>
- ONNX.js - Run ONNX models in the browser <https://microsoft.github.io/onnxjs-demo/#/>
- Microsoft Days in the Web <https://microsoft.github.io/frontend-bootcamp/>
- Project Mu <https://microsoft.github.io/mu/>
- PowerBI Custom Visuals <https://microsoft.github.io/PowerBI-visuals/docs/overview/>
- PowerBI-JavaScript demo <https://microsoft.github.io/PowerBI-JavaScript/demo/v2-demo/index.html>
- Microsoft Technical Case Studies <https://microsoft.github.io/techcasestudies/>
- Microsoft Open Source Code of Conduct <https://microsoft.github.io/codeofconduct/>
- Embedded Learning Library (ELL) <https://microsoft.github.io/ELL/>
- A library for building cross-platform apps - ReactXP <https://microsoft.github.io/reactxp/>
- PartsUnlimited <https://microsoft.github.io/PartsUnlimited/>
- PartsUnlimitedMRP <https://microsoft.github.io/PartsUnlimitedMRP/>
- CodePush <https://microsoft.github.io/code-push/>
- Microsoft PROSE SDK <https://microsoft.github.io/prose/>
- Create extensions for Visual Studio <https://microsoft.github.io/extendvs/>
- DSCEA <https://microsoft.github.io/DSCEA/>
- IoT kit built for the cloud <https://microsoft.github.io/azure-iot-developer-kit/>

如果有问题，欢迎留言交流~

<hr>

**作者简介**：Bravo Yeung，计算机硕士，知乎干货答主(获**81K** 赞同, **38K** 感谢, **235K** 收藏)。曾在国内 Top3互联网视频直播公司工作过，后加入一家外企做软件开发至今。

<br>

如需转载，请加微信 **iMath7** 申请开白！

<br>

欢迎在留言区留下你的观点，一起讨论提高。如果今天的文章让你有新的启发，学习能力的提升上有新的认识，欢迎转发分享给更多人。

<br>

欢迎各位读者加入 **.NET技术交流群**，在公众号后台回复**“加群”**或者**“学习”**即可。


<br>

![大白技术控 公众号名片](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/gzhCard_for_blog.png "大白技术控Bravo Yeung")


### 文末彩蛋

> 微信后台回复“**asp**”，给你：一份全网最强的ASP.NET学习路线图。
> <br>
> 回复“**cs**”，给你：一整套 C# 和 WPF 学习资源！
><br>
> 回复“**core**”，给你：2019年dotConf大会上发布的.NET core 3.0学习视频！