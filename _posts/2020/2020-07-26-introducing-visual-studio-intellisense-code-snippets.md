---
layout: post
redirect_from:
  - /2020/07/26/introducing-visual-studio-intellisense-code-snippets/
title: Visual Studio的智能感应代码段

categories: 
- [Visual Studio, .NET]
tags: [Visual Studio, .NET]
excerpt: Visual Studio的智能感应代码段 - 转载自《程序员杂志》
keywords: Visual Studio, .NET, Code snippet
description: Visual Studio中的智能感应代码段
date: 2020-07-25 22:07:40
image: https://cdn.jsdelivr.net/gh/yanglr/images/Snip03.jpg
---

文/`Patrick Gallucci` 编译/`崔建海`

> Visual Studio 2005 IntelliSense Code Snippets
> This article introduces Visual Studio 2005IntelliSense code snippets that enable you to create y our own IntelliSense snippets without leaving the Visual Studio IDE. This ability boosts productivity by allowing you to create and insert samples of code that you use regularly. It also allows custom code dev elopers to provide snippet examples of their own libraries and APIs.

本文介绍了Visual Studio2005 的智能感应代码段功能， 它可以使您方便地创建并插入常用的代码，还可以对开发工具进行定制，以便为特定库和API 产生代码段。

代码动态生成已经不是什么新鲜事物了，您可以找到只要按一个按钮就可以产生几万行代码的工具。其中有些工具设计得非常灵活，以至于可以自由修改模板中的记号，甚至模板本身，以便对代码输出进行更好的控制。
我老早就想在程序代码中嵌入自动生成代码的“块”，而不是调用一个外部工具或者打开Visual Studio 的附加选项。这就是智能感应代码段（code snippet）可以做的事情。虽然它们的功能没有某些专门的工具强大，它们依然可以为程序员日复一日的工作提供不少帮助。

Visual Studio 2005 的智能感应代码段允许您在IDE中创建自己的代码段。这可以使您方便地创建并插入常用的代码，还可以对开发工具进行定制，以便为特定库和API产生代码段。（见下页表1）

## 从简单的开始

要使用代码段功能，只要在代码窗口单击右键然后选择“Insert Snippet”就可以了。
根据文件类型不同，您可以看到当前可用的代码段类型。本例使用C#文件，所以您可以看到两个选项：Office Development 和 Visual C#。
您选择一种类型以后，就列出了这个类型下可以使用的代码段。这些列表可能发生变化，比如您修改了原有代码段或者添加了自己的代码段。
通过选择合适的代码段名称，您可以将所需的代码段插入代码窗口的适当位置。以C#为例，选择ctor，也就是为您的类生成构造函数的代码段。鼠标点击ctor标签以后，您所需要的代码就插到了您最初单击右键的位置。现在，您可以到ctor代码段的文件中去探索一番了。

![Figure 7: Title and Header Elements in the Code Snippets Manager](https://cdn.jsdelivr.net/gh/yanglr/images/Snip07.jpg)

代码片断中的元素现在来看看怎样创建一个代码段。您可以在`snippetformat.xsd` 中找到代码段的schema 。
CodeSnippets 是这个schema的根元素，它可以包含一个或者多个CodeSnippet 子元素。
CodeSnippet 包含两个子元素和一个可选的格式属性。格式属性提供了一种可以定义代码段版本的机制。

```xml
<CodeSnippet Format="1.0.1">
<Header>...</Header>
<Snippet>... </Snippet>
</CodeSnippet>
```

Header元素包含代码段的一般信息，每个代码段只能包含一个。这个元素的子元素有：Title，Author，Description，HelpUrl，SnippetTypes，Keyword和Shortcut：

```xml
<Header>
    <Title>...</Title>
    <Author>...</Author>
    <Description>... </Description>
    <HelpUrl>... </HelpUrl>
    <SnippetTypes>...</SnippetTypes>
    <Keywords>... </Keywords>
    <Shortcut>... </Shortcut>
</Header>
```

下面是ctor代码段文件中的Header：

```xml
<Header>
    <Title>ctor</Title>
    <Shortcut>ctor</Shortcut>
    <Description>Code snippet for constructor
    </Description>
    <Author>Microsoft Corporation</Author>
    <SnippetTypes>
        <SnippetType>Expansion</SnippetType>
    </SnippetTypes>
</Header>
```

所有这些元素都具有不错的自解释能力。HelpUrl是一个指向额外帮助信息文档的指针。SnippetTypes指示Visual Studio 2005 如何将代码段插入代码窗口。

```xml
<SnippetTypes>
    <SnippetType>... </SnippetType>
    <SnippetType>... </SnippetType>
    <SnippetTypes>
```

如果没有类型信息，该代码段就可以插入任意的文件。下
面是合法的SnippetType值：

- SurroundsWith: 将代码段放入被选定的代码片段的周围。
- Expansion:  将代码段插入光标所在位置。
- Refactoring:  在Visual C# 的refactoring 过程中使用代码段 (Refactoring 无法用于通常的代码段)。

因为Refactoring 无法用于通常的代码段，所以只剩下了SruuoundsWith和Expansion。要用SruuoundsWith，您必须先选中要包围的文本。选中您要包围的文本以后，单击鼠标右键选择合适的代码段。这个例子选择的是region代码段，代码被#region和#endregion标签包围起来了，还可以注意到缺省置换字符串MyRegion已处于选中状态以方便修改。如果您要做更多的替换工作，只需按tab键移到下一个要修改的目标。这个特性提高了维护代码段的速度。Expansion代码段只是简单的将代码段插入光标所在的位置。
Keywords 元素可以包含一个或者多个子元素，以便Visual Studio 和别的代码段提供者用标准化的方式检索这些代码段。最后是Shortcut 元素，它提供了一种特性，可以让您通过键入一个快捷方式然后按tab键就可以插入一个代码段。这个结合expansion类型的代码段使用非常有效。

现在可以看看Snippet 元素，这个元素定义了代码段的代码。

```xml
<Snippet>
    <References>... </References>
    <Imports>... </Imports>
    <Declarations>... </Declarations>
    <Code>...</Code>
</Snippet>
```

下面是ctor的snippet 节点：

```xml
<Snippet>
    <Declarations>
        <Literal Editable="false">
            <ID>classname</ID>
            <ToolTip>Class name
            </ToolTip>
            <Function>ClassName()
            </Function>
            <Default>
            ClassNamePlaceholder
            </Default>
        </Literal>
    </Declarations>
    <Code Language="csharp">
        <![CDATA[public $classname$ ()
        {
            $end$
        }]]>
    </Code>
</Snippet>
```



References 元素只在Visual Basic代码段中有效。该元素可选，包含代码段可能用到的别的库的引用信息。
它有两个子元素：Assembly 是dll 的位置，Url 是有关assembly说明信息的链接。



表1：Visual Studio 2005智能感应目前支持的代码段列表

| 名称      | 描述信息                                                     | 适用范围                                   |
| --------- | ------------------------------------------------------------ | ------------------------------------------ |
| #if       | 生成#if和#endif指示符                                        | 任何地方                                   |
| #region   | 生成#region 和#endregion 指示符                              | 任何地方                                   |
| ～        | 为类生成析构函数                                             | 类内                                       |
| attribute | 生成一个从Attribute 派生的类的声明                           | 命名空间内 (包括全局命名空间),类或者结构内 |
| checked   | 生成一个checked块                                            | 方法，索引器，属性访问器，时间访问器内     |
| class     | 生成一个类声明                                               | 命名空间内 (包括全局命名空间),类或者结构内 |
| ctor      | 为一个类生成一个构造函数                                     | 类内                                       |
| cw        | 生成一个WriteLine 调用                                       | 方法，索引器，属性访问器，时间访问器内     |
| do        | 生成一个do while 循环                                        | 方法，索引器，属性访问器，时间访问器内     |
| else      | 生成一个else 块                                              | 方法，索引器，属性访问器，时间访问器内     |
| enum      | 生成一个enum 声明                                            | 命名空间内 (包括全局命名空间),类或者结构内 |
| equals    | 生成一个函数声明，覆盖Object 类中定义的Equals 函数           | 类或者结构内                               |
| exception | 生成一个从异常派生出来的类的声明（缺省情况从Exception   派生） | 命名空间内(包括全局命名空间),类或者结构内  |
| for       | 生成一个for 循环                                             | 方法，索引器，属性访问器，时间访问器内     |
| foreach   | 生成一个foreach 循环                                         | 方法，索引器，属性访问器，时间访问器内     |
| forr      | 生成一个for 循环，循环变量递减                               | 方法，索引器，属性访问器，时间访问器内     |
| if        | 生成一个if 块                                                | 方法，索引器，属性访问器，时间访问器内     |
| indexer   | 生成一个索引器声明                                           | 方法，索引器，属性访问器，时间访问器内     |
| interface | 生成一个接口声明                                             | 类或者结构内                               |
| invoke    | 生成一个安全调用事件的块                                     | 命名空间内 (包括全局命名空间),类或者结构内 |
| iterator  | 生成一个iterator                                             | 方法，索引器，属性访问器，时间访问器内     |
| iterindex | 通过适用嵌套类生成一个命名的迭代器和索引器对                 | 类或者结构内                               |
| lock      | 生成一个 lock 块                                             | 类或者结构内                               |
| mbox      | 生成一个System.Windows.Forms.MessageBox.Show   调用          | 方法，索引器，属性访问器，时间访问器内     |
| namespace | 生成一个 namespace 声明                                      | 方法，索引器，属性访问器，时间访问器内     |
| prop      | 生成一个属性声明和一个对应的底层字段                         | 命名空间内 (包括全局命名空间),类或者结构内 |
| propg     | 生成一个只带get 访问器的属性声明和一个对应的底层字段         | 类或者结构内                               |
| sim       | 生成一个static int Main 方法声明                             | 类或者结构内                               |
| struct    | 生成一个 struct 声明                                         | 类或者结构内                               |
| svm       | 生成一个static void Main 方法声明                            | 命名空间内 (包括全局命名空间),类或者结构内 |
| switch    | 生成一个switch 块                                            | 类或者结构内                               |
| try       | 生成一个try 块                                               | 方法，索引器，属性访问器，时间访问器内     |
| tryf      | 生成一个tryf 块                                              | 方法，索引器，属性访问器，时间访问器内     |
| unchecked | 生成一个unchecked块                                          | 方法，索引器，属性访问器，时间访问器内     |
| unsafe    | 生成一个unsafe 块                                            | 方法，索引器，属性访问器，时间访问器内     |
| using     | 生成一个using 指示符                                         | 方法，索引器，属性访问器，时间访问器内     |
| while     | 生成一个while 循环                                           | 方法，索引器，属性访问器，时间访问器内     |



![Figure 1: Access Code Snippets](https://cdn.jsdelivr.net/gh/yanglr/images/Snip01.jpg)



![Figure 2: Available Types of Snippets](https://cdn.jsdelivr.net/gh/yanglr/images/Snip02.jpg)



![Figure 3: Available Snippets in Visual C#](https://cdn.jsdelivr.net/gh/yanglr/images/Snip03.jpg)



Imports元素包含代码段可能用到的命名空间的信息。它的效果和您在代码中直接使用import 一样。它只有一个子元素namespace。
Declarations 元素可以定义变量，这些变量可以替换代码段中code 元素中的内容。Literal 和Object 是两种替换。Literal替换已知的类型，例如：字符串，数字，日期。Object 在代码段外部定义。
Literal元素有一个Editable属性，它决定在代码段插入以后，您是否可以修改literal的值。缺省值是True。下面是其余元素的说明：

- Default (必备元素): 指定插入代码段时literal的缺省值。 Literal 元素必须包含一个Default 元素。
- Function (可选元素): 指定一个literal在Visual Studio 中 获得焦点以后执行的函数。 Literal元素可以包含零个或者一个  Function元素。
- ID(必备元素): 指定literal的唯一ID，一个Literal有且只  能有一个ID 元素。
-  Tooltip(可选元素): 描述literal期望的值和用途。一个  literal 可以有零个或者一个Tooltip 元素。
  
  Function元素有四个可用的预处理函数,这些函数可以返回一些非常有趣的结果。它们是：GenerateSwitchCases(EnumerationLiteral)，ClassName()，SimpleTypeName(TypeName)，
  CallBase(Parameter)。它们分别返回一个唯一的结果，都非常值 得认真研究。
  现在来看看code元素，这里将放置您实际的代码，通过使 用置换变量您可以输出期望的文本。Code 元素有三个属性，没有子元素。这些属性分别是：kind，delimiter，language。Delimiter的缺省值是`$`。这个符号分割代码段中的文本和对象变量。Language属性是必备属性，可以有以下值：
- VB: Visual Basic 类型的代码段
- CSharp: Visual C# 类型的代码段
- VJSharp: Visual J# 类型的代码段
- XML: XML 类型的代码段
  这个属性指明语言的类型。实际的代码是由CDATA包围的文本。也就是说以文本字符串的形式出现。下面是ctor代码段的内容：
```xml
  <Code Language="csharp">
  <![CDATA[public $classname$ ()
  {
  	$end$
  }]]>
  </Code>
```



所以，只要仔细看代码段的输出结果，您就可以轻易的分析出IDE是怎么工作和为什么这么工作的：

```csharp
public Test()
{
}
```

1. language属性指明语言是C#。
2. code 元素从CDATA开始，然后是public。
3. 置换变量`$classname$` 将被替换为函数ClassName()返回的结果，然后是类名称后的两个括号。就像您看到的一样，置换发生的位置和置换变量的位置一致，并且基于光标所处的位置。这个也受到Visual Studio 2005 中C#语言格式设置的影响。
4. 接下来的行有一个开始大括号，下一行是一个`$end$`，再下一行是结束大括号。`$end$`是预先定义好的Literals变量之一，用于指明一行或者一个语句的结束。当用户按回车键结束编辑以后，这个变量决定脱字符号（^）的位置。



## 该创建自己的代码段了
现在您可以创建一个简单的代码段了。因为所有的代码都必须有文档，所以您可以按照自己的需要创建一个“头文件代码段”。然后您可以在这个代码段的基础上稍作修改扩展成别的代码段。假如您想利用您的代码段生成如下代码：

```csharp
// File: test.cs
// Date: 17 Oct 2005
// Author: Patrick Gallucci
// Description: This is a test file used to
// demonstrate Code Snippets
// Copyright (C) Developer.com.
// All rights reserved.
```



我预先定义了四个字面文本变量用于替换模板中的字符串。
Classname 将会是文件名的前缀。Author将会被`$author$` 变量替换。`$date$`变量将会替换创建日期和历史日期，`$company$`变量替换Developer.com。以下是最终的代码段XML 文件。

```xml
<?xml version="1.0" encoding="utf-8" ?>
<CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <CodeSnippet Format="1.0.0">
        <Header>
            <Title>c#header</Title>
            <ShortCut>c#header</ShortCut>
            <Description>Code snippet for file header</Description>
            <Author>Developer.com</Author>
            <SnippetTypes>
                <SnippetType>Expansion</SnippetType>
                <SnippetTypes>
                </Header>
                <Snippet>
                    <Declarations>
                        <Literal>
                            <ID>classname</ID>
                            <ToolTip>The class name of the file.</ToolTip>
                            <Function>ClassName()</Function>
                            <Default>ClassNamePlaceholder</Default>
                        </Literal>
                        <Literal>
                            <ID>author</ID>
                            <ToolTip>The developer who created the file.</ToolTip>
                            <Default>Patrick Gallucci</Default>
                        </Literal>
                        <Literal>
                            <ID>date</ID>
                            <ToolTip>The date the file was created.</ToolTip>
                            <Default>Now</Default>
                        </Literal>
                        <Literal>
                            <ID>company</ID>
                            <ToolTip>The company who owns the class.</ToolTip>
                            <Default>Developer.com</Default>
                        </Literal>
                    </Declarations>
                    <code Language="csharp">
                        <![CDATA[//=====================
                        // File: $classname$.cs
                        // Data: $date$
                        // Author: $author$
                        //------------------------------------
                        // Descriptions: This is a_u116 ?est file used to
                        // demonstrate Code Snippets.
                        // Copyright (c) $company$.
                        // All rights reserved.
                        //
                        // History: $date$ Created
                        ================================]]>
                    </code>
                </Snippet>
            </Codesnippet>
```



现在只须轻点几下鼠标，您就可以使用这个代码段了。首先，打开代码段管理器。选择“My Code Snippets”，单击Import按钮。找到您的header.snippet 文件并选择open。在打开的对话框中，点击“My Code Snippets”前面的复选框，然后点击Finish。现在您可以打开“My Code Snippets”节点，选择c# header代码段，对话框右侧显示了您在XML文件中设置的一些属性。找一个C#的类文件试试这个代码段吧，以下代码是我试验时输出的结果。

![](https://cdn.jsdelivr.net/gh/yanglr/images/Snip12.jpg)



![](https://cdn.jsdelivr.net/gh/yanglr/images/Snip13.jpg)



![Figure 14: Click the Checkbox Next to "My Code Snippets" and Click Finish](https://cdn.jsdelivr.net/gh/yanglr/images/Snip14.jpg)



![Figure 15: Open the "My Code Snippets" Node and Highlight the c3header Snippet](https://cdn.jsdelivr.net/gh/yanglr/images/Snip15.jpg)



```csharp
// File:
ClassNamePlaceholder.cs
// Date: Now
// Author: Patrick Gallucci
// Description: This is a test file used to
// demonstrate Code Snippets
// Copyright (C) Developer.com.
// All rights reserved.
using System;
using System.Collections.Generic;
using System.Text;
namespace SnippetTestHarness {
    public Class Test {
        public Test () { }
    }
}
```

虽然看上去没有什么了不起的，但通过快捷方式插入头文件还只是一个开始而已。
上面的操作虽然不复杂，但您可能更希望直接操作XML文件。所以下面的两个小节，我将介绍如何“大量生产”代码段，就像有些开源项目做的一样。



## 代码段宏
我发现自己总是要为重载的相同函数写很多代码段，所以就创建了一个Visual Studio宏以便从选定的代码中生成代码段。

![Figure 18: Double Click the CreateSnippet Macro](https://cdn.jsdelivr.net/gh/yanglr/images/Snip18.jpg)



您可以到 <http://www.developer.com/img/2005/10/CodeSnippetsLibrary.zip> 下载试用。打开该宏，选择您准备用来生成代码段的代码（如图1）。从宏浏览器中双击CreateSnippet 宏（如图2）。
　
然后，窗口切换，您就可以看到解决方案浏览器中的新文件了，虽然有点原始，但毕竟提高了创建代码段的速度。

## Visual Basic 代码段编辑器

上一节结尾提到的那个工具，是我维护的一个开源项目：Visual Basic 代码段编辑器，一个使您创建、编辑、测试代码段更方便的小工具。

![Figure 20: Screenshot of Visual Basic Code Snippet Editor](https://cdn.jsdelivr.net/gh/yanglr/images/Snip20.jpg)

可以从http://msdn.microsoft.com/vbasic/downloads/2005/tools/snippeteditor/ 下载试用。虽然不是十分完善，但尝试一下还是值得的，毕竟我们的小组在上面做了不少工作。

另外，试用一下Visual Basic代码段编辑器、本文中提到的方法和Visual Studio 2005 BOL，您将会很快拥有自己的代码段库。希望这个指南能帮助您了解Visual Studio 2005的智能感应代码段功能，并能提高您的开发效率。

