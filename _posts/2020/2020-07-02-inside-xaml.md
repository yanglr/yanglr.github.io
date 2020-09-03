---
layout: post
redirect_from:
  - /2020/07/02/inside-xaml/
title: 深入浅出XAML

categories: 
- [life, xaml, wpf]
# platform: 公众号
# gzhname: 大白技术控
tags: [wpf]
excerpt: 深入浅出XAML - 转载自《程序员杂志》
---

今天来聊聊深入浅出XAML的那些事~


-------------

**Inside XAML**

Ian Griffiths/文, co-author of Mastering Visual Studio .NET

01/19/2004

<br/>

Longhorn 为开发人员提供的最有趣技术之一就是其基于XML的新标记语言，开发代号为XAML（eXtensible ApplicationMarkup Language〈可扩展应用标记语言〉的缩写，发音为"Zammel"）。Longhorn应用程序中的用户界面通常是使用XAML来构建的。 在本文中，我们将考察XAML与WinFX 提供的底层支持如何相关。

XAML用户界面的构建方式与HTML Web用户界面的构建方式非常相似——只需使用标签来为所需要的每个界面元素创建一个文档。下面是一个简单的XAML用户界面：

```xml
<FlowPanel xmlns="http://schemas.microsoft.com/2003/xaml">
    <Text>Hello World</Text>
    <Button>Click me!</Button>
</FlowPanel>
```

这个特定的例子显示一个Text元素和一个Button元素，同时使用FlowPanel 在屏幕上排列它们。这些全都是Avalon定义的类，Avalon 是WinFX 的用户界面框架。Text 和Button元素是不言而喻的。FlowPanel 是窗格的一个例子。窗格用于根据特定的布局方法安排元素。FlowPanel 在屏幕上安排元素的方式与通常对文本进行格式编排的方式相同——元素从左至右地“流”过可用空间，在当前行没有更多空间时移到下一行上。结果如下所示。（第一幅图片显示了这样一个窗口，它足够宽到可在一行上同时包含两个元素。第二幅图片显示了当窗口不足够宽时所发生的情况 —— FlowPanel 将元素分割到两行上。）Avalon提供了针对不同布局技术的各种窗格类型，包括固定布局、停靠，以及基于列的文本流。

![img1](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/xaml-img1.png
)

![img2](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/xaml-img2.png)

<br/>

## 为什么要发明一种新的标记语言?

你可能在疑感为什么Microsoft决定发明一种崭新的标记语言来构建用户界面，而不是使用HTML或SVG。原因之一是功能——Avalon 提供许多HTML中不可用的高级用户界面特性，比如文本和图形的缩放和旋转，以及动画。此外，HTML主要是为在Web上使用而开发的，而XAML主要针对的是直接运行在Windows上的应用程序(即“胖客户机”(Rich Client)或“智能客户机”)。但是这仍然留下了为什么微软不使用SVG(Scalable Vector Graphics,可缩放矢量图形，这是一种基于XML的图形丰富的标记语言)的问题。毕竟，SVG弥补了HTME作为胖客户机标记语言所其有的许多缺点。然而，设计一种新标记语言的最有力原因在于，XAML文件中的元素之间以及运行时的对象之间存在非常紧密的关系。不像任何早前的标记语言，XAML被设计为直接与WinFX集成。

<br/>

## XAML和对象

XAML文件中的每个元素都会导致在运行时创建一个对应的对象。在前面的例子中，运行中的程序将具有三个对象，分别是FlowPanel，Text和Button类型。这些类是Avalon类库的组成部分。由于命名空间声明的存在，XAML编译器知道要使用哪些类库 一 XAML编译器将XML命名空间http://schemas.microsoft.com/2003/xaml理解为要使用Avalon类。

你还可以定义自定义的命名空间来使用类库。（原则上，你可以在XAML中使用任何.NET类。Don Box曾撰写过一篇文章表明，如果需要，你甚至可以用XAML编写控制台应用程序。）

XAML文件通常是编译过的，而不是在运行时分析（虽然在确实需要时也可以采用运行时分析）在构建基于XAML的项目时，XAML编译器将分别为每个XAML文件生成一个类。这些类包含用于创建XAML中指定的对象的代码。如果你感到好奇，可以找出这些已生成的代码。使用支持Longhorn的Visual Studio .NET Whidbey版本（在2003年的专业开发人员大会——PDC上公布），你可以使用Longhorn Application模板之一来创建新的基于XAML的项目。在编译项目时，XAML编译器将为每个XAML文件生成一个临时源代码文件。这些文件将创建在obj\Debug or obj\Release子目录中。例如，如果将上述例子中的XAML放在一个名为MyPanel.xaml 的文件中，生成（build ）该项目将产生一个临时文件

obj\Debug\MyPanel.g.cs。（如果使用Visual Basic .NET，文件扩展名将是.vb 而不是.cs。）

观察一下这个生成的文件的内部，你会找到一个类定义。

对于每个XAML文件，XAML编译器都会构建一个类，这个类派生自该文件的根元素的类。在前面所示的例子中，根元素是FlowPanel，因此所生成的类就派生自FlowPanel：

```csharp
public partial class MyPanel : MSAvalon.Windows.Controls.FlowPanel { ... }
```


在该类的初始化代码内部，它创建了XAML中指定的其他元素。

```csharp
MSAvalon.Windows.Controls.FlowPanel _FlowPanel_1_ = this;

((MSAvalon.Windows.Serialization.ILoaded)(_FlowPanel_1_))

    .DeferLoad();

  MSAvalon.Windows.Controls.Text _Text_2_ = 

    new MSAvalon.Windows.Controls.Text();

((MSAvalon.Windows.Serialization.ILoaded)(_Text_2_))

    .DeferLoad();

((MSAvalon.Windows.Serialization.IAddChild)(_FlowPanel_1_))

    .AddChild(_Text_2_);

((MSAvalon.Windows.Serialization.IAddChild)(_Text_2_))

    .AddText("Hello World");

((MSAvalon.Windows.Serialization.ILoaded)(_Text_2_))

    .EndDeferLoad();

  MSAvalon.Windows.Controls.Button _Button_3_ = 

    new MSAvalon.Windows.Controls.Button();

((MSAvalon.Windows.Serialization.ILoaded)(_Button_3_))

    .DeferLoad();

((MSAvalon.Windows.Serialization.IAddChild)(_FlowPanel_1_))

    .AddChild(_Button_3_);

((MSAvalon.Windows.Serialization.IAddChild)(_Button_3_))

    .AddText("Click me!");

((MSAvalon.Windows.Serialization.ILoaded)(_Button_3_))

    .EndDeferLoad();

((MSAvalon.Windows.Serialization.ILoaded)(_FlowPanel_1_))

    .EndDeferLoad();
```


其中创建Text和Button 对象的行以粗体高亮显示。其余的代码不过就是设置两个元素的文本，然后使它们成为FlowPanel的子元素，以便在运行时反映原始XAML的树结构。注意所有这些代码都是在编译时生成的——XAML本身在运行时并不需要。（综上所述，如果想要动态生成用户界面，就不必执行这个编译步骤——在运行时分析XAML也是可以的。WinFX提供了一个用于将未编译的XAML直接转换为对象的API。）

<br/>

## 属性（property）

像创建对象一样，XAML还允许设置那些对象上的属性。例如，让我们把创建Button 的行修改如下：
```xml
<Button Background="Red">Click me!</Button>
```


这表明应该设置Button对象的Background 属性。XAML编译器将生成相应的代码来设置该属性：

```csharp
Button_3_.Background = 
new MSAvalon.Windows.Media.SolidColorBrush(MSAvalon.Windows.Media.Color.FromARGB(255, 255, 0, 0));
```



如果想知道XAML编译器如何将字符串Red 映射为上面的代码，事实上它使用了一种自从.NET的第一版发布以来就已存在的技术：`类型转换器`。类型转换器是.NET设计时环境的一部分，用于在VS.NET Properties窗口中显示的字符串和对象属性的实际值之间执行转换。类型转换器还可以生成代码来初始化这些属性——VS.NET使用它们来创建Windows Forms应用程序的InitializeComponent方法中的代码。XAML 编译器简单地使用这个现有的基础结构，将特性（attribute）字符串值转换为初始化代码。

<br/>

## 复杂属性

并非所有属性都可表示为字符串--有些属性具有一个包含许多嵌套对象的内部结构。XAML支持一种特殊的语法，用于设置这些所谓的复杂属性。与使用特性（attribute）来设置属性（property），相反，这些属性可以使用子元素来设置。为了表明一个XAML元素表示一个复杂属性而不是表示通常的子对象，元素名称必须包含父元素的名称，后面跟着一个点，然后再跟着属性名称，如下面的例子所示：

```xml
<Button>
  <Button.Background>
    <LinearGradientBrush>
      <LinearGradientBrush.GradientStops>
        <GradientStopCollection>
          <GradientStop Color="Red" Offset="0" />
          <GradientStop Color="Magenta" Offset="0.25"/>
          <GradientStop Color="Blue" Offset="0.5"/>
          <GradientStop Color="White" Offset="1"/>
        </GradientStopCollection>
      </LinearGradientBrush.GradientStops>
    </LinearGradientBrush>
  </Button.Background>
  Click me!
</Button>
```


与依赖通常的类型转换器机制来将字符串转换为画笔不同，这个例子显式地使用标记来创建了一个画笔。在此例中，我们创建了一个相当复杂的画笔——具有许多填充阶次的LinearGradientBrush。这个例子展示了两个复杂属性，一个属性嵌套在另一个属性的内部。<Button.Background>元素设置按钮的背景属性， 但是在这个元素的内部，<LinearGradientBrush.GradientStops>元素设置线性渐变画笔的GradientStops属性。复杂属性的语法与其他任何XAML属性的语法完全相同——它允许建立对象的树结构。唯一的区别在于，这些属性然后被指定为它们所应用到的元素的属性，而不是成为那些元素的子元素。结果如下所示：


![Click me](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/xaml-img3.png)

<br/>

## 添加代码

正如我们已经看到的，XAML编译器分别为每个XAML文件生成一个类。那些类从对应XAML文件的根元素类型派生而来，并且包含用于创建所有子元素的代码，如上所示。然而，这些生成的代码对于创建实用的UI 还不足够。大多数用户界面并不只是提供信息——它们通常还需要能够响应用户输入。因此你通常需要添加代码来提供用户界面的行为。把代码插入XAML 文件本身是可以做到的。你可以在Definition 命名空间中添加一个`<Code>`元素。（根据约定，Definition命名空间被映射到def命名空间前缀，因此这个元素通常以`<def:Code>`的形式出现。）然后你可以把源代码直接放在这个元素内部，XAML编译器将把它添加到所生成的源文件中。这些代码通常添加到`CDATA`节之内，如下面的例子所示：

```xml
<FlowPanel xmlns="http://schemas.microsoft.com/2003/xaml"
    xmlns:def="Definition">
    <Text>Hello World</Text>
    <Button>Click me!</Button>
    <def:Code>
      <![CDATA[
        // Will be added to generated source file
        public string Hello()
        {
          return "Hello!"; 
        }
      ]]>
    </def:Code>
</FlowPanel>
```

然而，对于建立动态Web页面有过足够经验的任何人都知道，在单个源文件中混合代码和标记是一种不可维护的方案。将用户界面的可视设计与决定UI 行为的代码分离，这样要好得多。幸运的是，XAML使得将代码与标记分离很容易——它支持这样一种代码编写风格，只要你使用过ASP.NET 的“code-behind（代码分离）”特性，就会对这种代码编写风格很熟悉。（如果熟悉ASP.NET的Whidbey 版本所引入的“code-beside”技术，你会对这种代码编写风格更加熟悉。）从上面的例子可以看出，XAML编译器生成的类使用了partial关键字来声明。这向C#编译器表明，该类定义可能分散在多个

源文件中，而这个声明仅包含该定义的一部分。这样使得我们能够通过在另一个源文件中放置更多成员来扩充该类--C#编译器将生成这样一个类，它是为该类提供的所有partial类定义的汇总。


```csharp
public partial class MyPanel
{
  public string Hello()
  {
    return "Hello!";
  }
}
```

当你在Visual Studio .NET中创建一个XAML项目时，添加到项目的每个XAML文件都会自动具有一个对应的源文件，其中包含一个partial 类定义，允许你向将从XAML文件生成的代码添加新的代码。你可以通过单击Solution Explorer中的Show All Files 按钮来看到这些code-behind 文件。注意，如果在code-behind文件中指定了基类，它必须与所生成的代码的基类（即XAML文件的根元素）匹配——如果指定了不一致的基类，C#编译器将提示出错。

在编写XAML文件的代码时，你当然需要能够访问标记所定义的对象，以便控制UI。结果证明这是极其简单的：你所需做的就是在标记中使用一个ID特性来标注你希望能够访问的对象，如下所示：

```xml
<Text ID="textElem">Hello World</Text>
```

这样做之后，XAML编译器将使得这个对象可以像该类的成员变量一样使用，也就是使用ID特性中所指定的名称。例如，你可以将上面的元素中的文本修改如下：`textElem.TextRange.Text = "Foo";`

你通常不会像上面的例子那样在公共方法编写这种代码。code-behind 文件中的大多数代码都在事件处理程序方法中。

<br/>

## 处理事件

向XAML页面添加代码的主要原因是为了处理事件——或者是来自用户的输入，或者是用户界面生存期中的重要事件。

向XAML编译器表明我们的code-behind文件中的代码应该在某些事件发生时调用，这是一件简单的事情。我们只需向希望其处理事件的元素添加一个特性。该特性的名称应该是事件的名称，其值应该是code-behind文件中的处理程序方法的名称。例如，我们可以像下面这样处理按钮单击事件：

```xml
<Button Click="OnClick">Click me!</Button>
```

这样将导致XAML编译器生成相应代码，把OnClick函数附加为事件处理程序。它使用标准的.NET事件处理机制来完成这个工作，例如：

```csharp
_Button_4_.Click += 
new MSAvalon.Windows.Controls.ClickEventHandler(this.OnClick);
```

为了使这段代码能够正确地编译，我们当然必须在codebehind文件中提供适当的OnClick函数。与.NET程序中的所有事件处理程序一样，该函数的签名必须匹配事件的委托（delegate）类型。在此例中，按钮的Click 事件使用了`ClickEventHandler`委托，因此我们必须编写一个具有匹配的签名的函数。


```csharp
private void OnClick(object sender, ClickEventArgs e)
{
    textElem.TextRange.Text = "Foo";
}
```

<br/>

## 结束语

XAML是生成.NET对象树的简单而强大的方法。由于它基于XML，创建基于XAML的标记就很简单了。这不仅使得手工构建用户界面很容易，而且使得通过工具来生成XAML也相对简单——今后，能够导出文档和以XAML格式来绘制的设计工具将会出现。使用诸如XSLT之类的技术来将XML数据源转换为XAML文档也很容易。XAML通过code-behind文件支持用户界面与代码的完全分离，而它与WinFX的紧密集成使得代码操作标记中定义的用户界面元素非常容易。
