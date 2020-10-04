---
layout: post
redirect_from:
  - /2019/03/21/XAML_Studio-powerfull_tool_for_WPF_Sliverlight_Xamarin_UWP/
title: 微软XAML Studio - WPF、Sliverlight、Xamarin、UWP等技术开发者的福音
date: 2019-03-21 02:46:04

categories: 
- [wpf, xaml]

tags: [wpf]
excerpt: 大白技术控 - 微软XAML Studio - WPF、Sliverlight、Xamarin、UWP等技术开发者的福音
image: https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio1.png
---

XAML Studio，用来调试REST服务的绑定挺棒的~

-------------

最近又在继续倒腾`WPF`的项目，继续使用`Caliburn.Micro`和`Xceed`来堆代码。每次调试xaml上的binding，都有种要疯的赶脚。

今天路过 [https://channel9.msdn.com/](https://channel9.msdn.com/) 浏览 `WPF`相关的学习视频时，遇到微软推荐的相关视频 - [XAML sutdio简介](https://channel9.msdn.com/Shows/On-NET/Introducing-XAML-Studio)，好奇心使然，目测是和Visual Studio Code类似而强大的牛牛工具，就好好看完了视频。

![XAML studio](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio0.jpeg)

XAML sutdio是微软Garage实验小组的作品，其特色是为XAML提供了如下一些功能。

**XAML Studio包含以下功能：**

- 实时且可交互的预览窗口
- 实时绑定和调试
- 数据上下文编辑器
- 自动保存和恢复文档
- 智能感知
- 文档工具箱
- 对齐指南
- 命名空间助手

下面结合XAML studio的界面对其进行详细介绍~

[XAML Studio](https://www.microsoft.com/en-us/garage/profiles/xaml-studio/) 是微软Garage项目组的一个不依赖 Visual Studio而能快速创建`XAML`UI原型、实时预览、调试数据绑定及其他更多功能的一个轻项目，其最新版本可从 [Microsoft Store](https://www.microsoft.com/en-us/p/xaml-studio/9ntls214tkmq?rtc=1&activetab=pivot:overviewtab) 进行安装。

## 编辑器功能

XAML Studio的编辑器很像一个"轻量级"的Visual Studio，或者用VS Code来类比更合适。除了编辑器， 在左侧还有文件，数据源，调试和工具箱这几个选项。

![img](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio1.png)

编辑器的行为与您期望的一样。 您可以在底部向XAML添加控件，顶部预览面板会对更新做出响应。

![img](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio2.gif)

工具箱提供了一个可以搜索的控件列表，然后单击以插入到XAML中。

![img](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio3.gif)

与Visual Studio中的XAML编辑器不同，VS中的实时预览不提供任何类型的拖放体验。

## 数据(源)功能

你可以通过静态JSON或JSON REST API将数据绑定到XAML组件。

要绑定到静态JSON，可以单击数据源窗格，然后直接在编辑器中输入JSON即可。

![img](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio4.png)

要绑定到REST API，可以单击数据源面板顶部的两个箭头以打开一个文本框，您可以在其中输入REST API。 输入REST API URI然后单击刷新按钮后，JSON将更新，XAML预览也将更新。

![img](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio5.png)

## 调试数据绑定

调试功能允许你查看哪些数据绑定实际成功。 打开调试模式后，您将能够看到当前绑定以及可用绑定的历史记录。

![img](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio6.gif)

## 伟大的开始

我对这个工具的诞生感到很兴奋。  这看似是建立在VS Code和Monaco编辑器的基础上开发而来的，但它的特色是提供了一些便捷的功能。 我很乐意看到这里的绑定功能，不仅仅是因为这里使用了简洁的JSON数据，而且是它现在就可以提供非常棒的绑定调试功能，而我知道目前的Visual Studio中还没提供这种功能。

## 我们来一起实践吧

我在编辑器中创建了一段这样的代码:

```xml
<Page
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d">

    <Grid Padding="40">
        <TextBlock>
            <Run FontSize="24" Foreground="#FFFC5185">First demo using XAML Studio</Run><LineBreak/>
            <Run> Hello, Bravo.</Run>
        </TextBlock>
    </Grid>
</Page>
```

上方立马就出现了代码预览~

![code preview](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/xamlStudio7.png)

知道`HTML`的人都应该知道这里 `<Run>`标签的左右，其实和HTML中的`<p>`标签有点像，除此之外，其他的XAML部分和其他地方一样~

好吧，接下来就请各位慢慢享用了~

**参考链接：**

[Microsoft Garage's XAML Studio Does Real-Time UWP UI Changes -- Visual Studio Magazine](https://visualstudiomagazine.com/articles/2019/01/23/xaml-studio.aspx)

[By devs, for devs: meet new Garage projects XAML Studio and Team Retrospectives - Microsoft Garage](https://www.microsoft.com/en-us/garage/blog/2019/01/by-devs-for-devs-meet-new-garage-projects-xaml-studio-and-team-retrospectives/)

<br>

<hr>

欢迎在留言区留下你的观点，一起讨论提高。如果今天的文章让你有新的启发，学习能力的提升上有新的认识，欢迎转发分享给更多人。

<br>

欢迎各位读者加入 **.NET技术交流群**，在公众号后台回复**“加群”**或者**“学习”**即可。

<br>

![大白技术控 公众号名片](https://gitee.com/geekplayers/images/raw/master/gzhCard_blog.png)

### 文末彩蛋

> 微信后台回复“**asp**”，给你：一份全网最强的ASP.NET学习路线图。
> <br>
> 回复“**cs**”，给你：一整套 C# 和 WPF 学习资源！
><br>
> 回复“**core**”，给你：2019年dotConf大会上发布的.NET core 3.0学习视频！
