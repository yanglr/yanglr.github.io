---
layout: post
date: 2020-10-07 21:56:31
title: 如何在dotnet，git，winget等命令行中使用自动完成功能
categories:
- [开源,微软技术]
tags: [大开源,微软技术]
excerpt: 如何在dotnet，git，winget等命令行中使用自动完成功能
keywords: 极客玩家大白
description: 如何在dotnet，git，winget等命令行中使用自动完成功能
topmost: true
image: https://cdn.jsdelivr.net/gh/yanglr/images/posh.png
---

> 转载自 [Scott Hanselman](https://www.hanselman.com/blog/HowToUseAutocompleteAtTheCommandLineForDotnetGitWingetAndMore.aspx).

多年前，.NET core增加了 [Powershell或bash中的.NET Core CLI的命令行Tab自动完成](https://www.hanselman.com/blog/CommandLineTabCompletionForNETCoreCLIInPowerShellOrBash.aspx) 的功能，但很少有人花时间进行设置。

我喜欢设置 [并使我的Prompt/命令行/ shell /终端等的体验](https://www.hanselman.com/blog/HowToUseOpenResizeAndSplitPanesInTheWindowsTerminal.aspx)尽可能有用(和[Pretty](https://www.hanselman.com/blog/HowToMakeAPrettyPromptInWindowsTerminalWithPowerlineNerdFontsCascadiaCodeWSLAndOhmyposh.aspx))。在Windows上，你有很多命令行Shell 可供选择！

请记住，这些是SHELLs，而不是终端或其他控制台。你可以在 [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701)中运行所有这些。

- 经典cmd.exe命令提示符（伪DOS！） - 仍然很有用，[Clink](http://mridgers.github.io/clink/) 可以使其更加bash-y，而无需进行全面的bash操作。
- 来自Malcolm Smith的 [Yori](https://www.hanselman.com/blog/YoriTheQuietLittleCMDReplacementThatYouNeedToInstallNOW.aspx)
- [Starship](https://starship.rs/) - 稍后会有更多介绍，这有点独特
- Windows PowerShell - 经典，因为...
- [PowerShell 7](https://docs.microsoft.com/en-us/powershell/scripting/whats-new/what-s-new-in-powershell-70/view=powershell-7)已经发布并且可以在任何地方运行，包括ARM机器！

我倾向于将PowerShell 7（以前称为PowerShell Core）用作主提示符，因为它是跨OS的提示符。我可以在Windows和Linux上使用相同的提示，相同的功能，所有内容。

![极客玩家大白-WindowsTerminal](https://cdn.jsdelivr.net/gh/yanglr/images/posh.png "极客玩家大白")

但是命令行自动补全功能带给我最大的乐趣！

- git ch `<TAB>` -> git checkout st `<TAB>` -> git checkout暂存
- dotnet bu `<TAB>` -> dotnet构建
- dotnet --list-s `<TAB>` -> dotnet --list-sdks
- 在`<TAB>`中的winget -> winget安装 -> winget安装WinDi `<TAB>` -> winget安装WinDirStat

一旦你成功地完成了标签操作，就可以轻松获得荣耀。使用PowerShell及其表亲，可以通过Register-ArgumentCompleter使其成为可能。这是[dotnet](http://www.dot.net) CLI的外观。

```powershell
# PowerShell parameter completion shim for the dotnet CLI
Register-ArgumentCompleter -Native -CommandName dotnet -ScriptBlock {
    param($commandName, $wordToComplete, $cursorPosition)
        dotnet complete --position $cursorPosition "$wordToComplete" | ForEach-Object {
           [System.Management.Automation.CompletionResult]::new($_, $_, 'ParameterValue', $_)
        }
}
```

看起来很多，但是唯一重要的是，当它看到命令“dotnet”和一些部分文本并且用户按下TAB时，它将调用cursorPosition和wordToComplete并传递给“dotnet complete”。

> **注意：**如果你了解这是如何工作的，则可以轻松地为一直使用的实用程序制作自己的Argument Completer！你可以为使用你的实用程序的工作人员制作它们！

你从未真正看到过对“dotnet complete”的调用。你只是看到自己输入dotnet bui `<TAB>`并获得一系列选项即可浏览！


这是后台发生的事情：

```bash
> dotnet complete --position 3 bui 
build 
build-server 
msbuild
```

你可以将它们添加到你的`$profile`中。通常，我在命令行上运行'notepad $profile'，它将在正确的位置自动创建正确的文件。

这是一个超级强大的模式！你可以使用 [PoshGit](https://github.com/dahlbyk/posh-git)[在PowerShell中的Git中](https://git-scm.com/book/ms/v2/Appendix-A:-Git-in-Other-Environments-Git-in-Powershell) 以及在[WinGet中](https://github.com/microsoft/winget-cli/blob/master/doc/Completion.md)获得[自动完成](https://git-scm.com/book/ms/v2/Appendix-A:-Git-in-Other-Environments-Git-in-Powershell)[功能](https://github.com/microsoft/winget-cli/blob/master/doc/Completion.md)！

你已添加到PowerShell配置文件的一些更晦涩的自动完成功能是什么？
