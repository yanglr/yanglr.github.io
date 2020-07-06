---
title: WPF学习笔记（一） - by 邹溪源
date: 2020-03-18 21:26:20
no-post-nav: false
category: wpf

sitemap:
  lastmod: 2020-03-18 21:26:20
  priority: 0.7
  changefreq: 'weekly'
  exclude: 'yes'

tags: [mfc, windows]
excerpt: WPF学习笔记（一） - 转载自邹溪源的博客园博客
---

来源: [WPF学习笔记（一） - by 邹溪源](https://www.cnblogs.com/xiyuanMore/p/12520439.html)

<br>

## 引言

在桌面开发领域，虽然在某些领域，基于electron的跨平台方案能够为我们带来某些便利，但是由于WPF技术能够更好的运用Direct3D带来的性能提升、以及海量Windows操作系统和硬件资源的支持，所以他依然有着得天独厚的优势。

当然，选用一门技术，依然看公司的基因土壤和综合因素或者老板的心血来潮，例如QT也同样是一门非常不错的跨平台图形界面解决方案。

目前我们公司在桌面开发领域广泛应用了WPF技术，主要是使用其作为大屏数据可视化相关的UI呈现，包括一些数据展示效果、动画效果等。由于之前我对WPF仅有三周经验，因此在开发和设计相关功能时，一些简单功能还能勉强完成，稍微复杂一点的就有点费时过长了，因此这篇文章主要梳理自己的学习笔记，以便总结学习成果。

## 如何学习WPF技术？

在Quote上有人提出了这样一个相同的问题，[查看问题](https://www.quora.com/How-can-I-learn-WPF-easily)，开发者`Srikanth Pagadala`如是回答：

> 1、以了解基础控件作为学习的起步过程：这些控件包括TextBox,Button,TextBlock及其他的，理解这些控件对外提供的属性，以及如何使用。
>
> 2、了解和使用布局空间：例如Grid、StackPanel、DockerPanel和其他控件，在这一点上，你需要花费大量的时间。同时你需要学会创建复杂的UI设计。
>
> 3、了解循环类型的空间，例如ItemControl控件。
>
> 4、了解关于模板的概念。包括如何定义包含CheckBox的Combox，同时这个控件还包含了一张图片的按钮，以及如何在ItemsControl中使用不同的模板。
>
> 5、理解数据绑定的运行机制。尝试创建一个MVVM或类似类型的应用程序。
>
> 6、创建一个典型的控件，探索DependencyProperties（依赖属性）和AttachedProperties（附加属性）。
>
> 7、创建一个样式资源，理解如何给控件设计样式。

除此之外，还有其他开发者给出了补充回答：

> 1、学习控件的数据绑定过程，在DataGrid上实现数据绑定。
>
> 2、学习和实现INotifyPropertyChanged类。[查看如何实现](https://msdn.microsoft.com/en-us/library/vstudio/ms743695(v=vs.100).aspx)
>
> 3、学习Observable Collection。该类型的集合广泛使用于数据集合绑定方面，同时也提供了数据改变通知的机制。
>
> 4、使网格上的列可编辑。用文本控件（用户项目模板）替换列。为每个捕获文本更改事件的列创建一个属性。在文本控件上使用绑定类型。尝试捕获您在后端在网格上所做的更改。
>
> 5、成功将数据控件中的文本控件与后端属性绑定后，请在同一页面上创建网格的副本。尝试同步这两个网格。例如，您在第一个网格中所做的每个更改都必须在第二个网格中自动更新。

网站"<https://www.wpf-tutorial.com/>"是一个专门用于学习WPF的网站，通过这个网站，可以快速的入门WPF。

由于WPF技术已经比较熟悉，所以书籍也比较多，网友推荐来自刘铁猛老师的《深入浅出WPF》这本书，而我通过Kindle则看到了一本比较有意思的书《葵花宝典-WPF自学手册》，这本书写得比较生动，通过故事的形式讲了WPF的许多技术原理，无形中让我对WPF的概念有了许多新的认识。当然，这本书已经有点年头了。


### WPF的常用控件

| 控件类型 | 控件名称 | 控件说明 | 链接地址 |
| --- | --- | --- | --- |
| 组件 | Window | 窗口 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.window?view=netframework-4.8) |
|  | Page | 页面 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.page?view=netframework-4.8) |
|  | NavigationWindow | 导航窗口 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.navigation.navigationwindow?view=netframework-4.8) |
|  | Frame |  | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Frame) |
| 常规控件 | Button | 按钮控件，提供Content作为内容 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Button) |
|  | TextBox | 文本框控件，用以输入文本 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/TextBox) |
|  | TextBlock | 文本块，用以显示文本 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/TextBlock) |
|  | Label | 标签，用以显示文本 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Label) |
|  | ProgressBar | 进度条 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/ProgressBar) |
|  | ToggleButton | 一种可以设置开关三态的按钮 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.primitives.togglebutton?view=netframework-4.8) |
|  | Image | 图像控件，通过Source设置资源路径 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Image) |
|  | CheckBox | 勾选框，可以设置是否勾选的三种状态 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/CheckBox) |
|  | RichTextBox | 富文本框，可以多种格式显示和输入文本 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/RichTextBox) |
|  | TreeView | 树视图，以树状图的形式显示绑定内容，可以显示是否勾选三态。 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/TreeView) |
|  | WebBrowser | 浏览器，基于IE内核的浏览器控件 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.webbrowser?view=netframework-4.8) |
|  | Calendar | 日历控件 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.calendar?view=netframework-4.8) |
|  | ComboBox | 下拉列表 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/ComboBox) |
|  | ContentControl | 内容控件 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.contentcontrol?view=netframework-4.8) |
|  | Expander | 扩展器，可以显示和折叠面板内的元素 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Expander) |
|  | GroupBox | 分组框 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/GroupBox) |
|  | StatusBar | 状态栏，用于在页面下方显示状态信息。 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/StatusBar) |
|  | DateTimePicker | 时间控件，可以设置时间状态。 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.forms.datetimepicker?view=netframework-4.8) |
|  | DocumentViewer | 文档查看器 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/DocumentViewer) |
|  | RadioButton | 单选按钮 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/RadioButton) |
|  | ScollViewer | 滚动视图 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/scrollviewer-overview) |
|  | ScollBar | 滚动条 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.primitives.scrollbar?view=netframework-4.8) |
|  | Separator | 分隔器 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Separator) |
|  | ToolBar | 工具条 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/ToolBar) |
|  | Slider |  | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Slider) |
|  | Menu | 菜单 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Menu) |
|  | MediaElement | 多媒体控件 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.mediaelement?view=netframework-4.8) |
|  | PasswordBox | 密码输入框 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/PasswordBox) |
|  | TabControl | 选项卡 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/TabControl) |
|  | ToolBarTray | 工具条 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.toolbartray?view=netframework-4.8) |
|  | WindowsFormsHost | 用以承载WinForm | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.forms.integration.windowsformshost?view=netframework-4.8) |
|  | Border | 边框 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Border) |
| 数据控件 | ListView | 列表视图 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/ListView) |
|  | DataGrid | 数据表 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/datagrid) |
|  | ListBox | 列表框 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/ListBox) |
| 布局 | WrapPanel | 可变面板 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/WrapPanel) |
|  | StackPanel | 固定面板 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/StackPanel) |
|  | DockerPanel | 停靠面板 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.dockpanel?view=netframework-4.8) |
|  | Grid | 表格布局 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Grid) |
|  | UniformGrid | 统一分布表格布局 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.controls.primitives.uniformgrid?view=netframework-4.8) |
| [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Label) | Canvas | 画布 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Canvas) |
| 图形 | Point | 点 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/controls/Border) |
|  | Line | 线 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.shapes.line?view=netframework-4.8) |
|  | Path | 路径 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.shapes.path?view=netframework-4.8) |
|  | Polygon | 多边形 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.shapes.polygon?view=netframework-4.8) |
|  | Polyline | 多段线 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.shapes.polyline?view=netframework-4.8) |
|  | Rectangle | 矩形 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.drawing.rectangle?view=netframework-4.8) |
|  | Shape | 画笔 | [查看示例](http://xn--z4qx0el9c32a313hyqhea/) |
|  | Rectangle | 矩形 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.drawing.rectangle?view=netframework-4.8) |
|  | Ellipse | 椭圆 | [查看示例](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.shapes.ellipse?view=netframework-4.8) |

### WPF的XAML语法

#### 概述

在WPF技术中引入的XAML语法算是该技术的一大特色，也是被学习者视同为学习路径陡峭的"罪魁祸首"。原因是在前端技术飞速发展的今天，HTML的语法体系由于更早的被开发者接受，所以也自然而然更容易成为开发者的首选。

而XAML是一种脱胎于XML，并吸收了HTML的精华的语法体系，是一种界面描述语言，XML语法本身相对而言较为臃肿的体系，看似成为了他的历史负担，但是其实倒也没那么复杂，通过几个简单的示例，其实就足够掌握这门新的语法体系了。例如，使用这样的语法，完全可以平滑过渡到这样的语法体系。(部分标签其实只是大小写不同）。当然，在XAML中熟练编写样式，确实需要花一点点时间。

在WPF中，通过XAML定义面向用户交互层的界面，然后编译成baml运行，后端则使用C#或VB.NET这样的CLR语法来实现逻辑交互。

#### XAML的语法定义


### XAML的根元素定义

根元素定义是定义XAML的命名空间。



```xml
<Page
  xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">

```

### XAML的属性语法

通过xaml定义按钮，并设置文本为 helloworld 。这种写法在官方文档中称为"属性语法"，即直接在XAML中对属性进行设置。



```xml
<Button Background="Blue" Foreground="Red" Content="hello world"/>

```

### XAML的属性元素语法

通过xaml定义按钮，并设置其背景为蓝色画笔，字体颜色为红色画笔，内容 为helloworld。这种写法在官方文档中称为"属性元素语法"。



```xml
<Button>
  <Button.Background>
    <SolidColorBrush Color="Blue"/>
  </Button.Background>
  <Button.Foreground>
    <SolidColorBrush Color="Red"/>
  </Button.Foreground>
  <Button.Content>
    hello world
  </Button.Content>
</Button>

```

### XAML的集合语法

定义按钮的颜色为红色和蓝色渐变色，内容为helloworld。这种称为"集合语法"。



```
<LinearGradientBrush>
  <LinearGradientBrush.GradientStops>
    <!-- no explicit new GradientStopCollection, parser knows how to find or create -->
    <GradientStop Offset="0.0" Color="Red" />
    <GradientStop Offset="1.0" Color="Blue" />
  </LinearGradientBrush.GradientStops>
</LinearGradientBrush>

```

### XAML的样式定义


### 通过属性语法来定义按钮的外观

样式定义使用 标签，然后在中间对样式的内容进行定义。

例如，以下表示通过XAML语法对 ToggleButton 按钮定义了一个命名为 ToggleLikeButtonStyle 的样式。


```xml
 <Style TargetType="ToggleButton" x:Key="ToggleLikeButtonStyle">
            <Setter Property="Margin"   Value="4" />

            <Setter Property="FontWeight" Value="Black"/>

            <Setter Property="Foreground"  Value="Black" />

            <Setter Property="BorderThickness" Value="0"/>

            <Setter Property="IsThreeState" Value="False"></Setter>

</Style>

```

### WPF中的模板Template

WPF中的控件可以通过模板 Template 的形式来定义其内容，使得开发者能够通过 XAML 灵活的对控件的外观进行扩展。例如，如下定义了一个 Template，这个控件模板将会对控件（Button）定义填充制定颜色。

```xml
 <Setter Property="Template">
                <Setter.Value>
                    <ControlTemplate>
                        <Border BorderThickness="0" CornerRadius="3">
                            <Border.Background>
                                <LinearGradientBrush EndPoint="0,1" StartPoint="0,0">
                                    <GradientStop Color="#4696F2" Offset="0.5"/>
                                </LinearGradientBrush>
                            </Border.Background>
                            <ContentPresenter Content="{TemplateBinding ContentControl.Content}" HorizontalAlignment="Center" VerticalAlignment="Center" />
                        </Border>
                    </ControlTemplate>
                </Setter.Value>
            </Setter>

```

### XAML中的触发器Triggers

传统的WinForm开发者习惯于通过事件的机制对按钮的外观进行定义，而在WPF中，则可以通过属性的形式对外观进行设置，这使得开发者更能够写出高质量的代码。

例如，如下代码通过定义触发器，设置控件（控件为 ToggleButton），当控件的勾选状态属性为"IsChecked" 时，其边框填充色为#4696F2颜色。



```xml
<ControlTemplate.Triggers>
                            <Trigger Property="IsChecked" Value="True">
  <Setter Property="Border.Background" TargetName="PART_Background"
<Setter.Value>
                                        <LinearGradientBrush EndPoint="0,1" StartPoint="0,0">
                                            <GradientStop Color="#4696F2" Offset="0.5"/>
                                        </LinearGradientBrush>
                                    </Setter.Value>
                                </Setter>
                                <Setter Property="Width" TargetName="PART_Background" Value="60"></Setter>
                                <Setter Property="Content"  TargetName="contextPresenter" Value="已点赞"></Setter>
                                <Setter Property="Visibility"  TargetName="contextPresenter" Value="Visible"></Setter>
                                <Setter Property="Visibility" TargetName="contextImage" Value="Hidden"/>
                            </Trigger>
</ControlTemplate.Triggers>                        

```

### 部分完整代码

在上述事例中，共定义了两个按钮的样式，分别是:

-   **FlatButtonStyle，这是个圆角按钮。**![](https://img2020.cnblogs.com/blog/191302/202003/191302-20200318212756317-118994661.png)



```xml
<Style TargetType="Button" x:Key="FlatButtonStyle">
            <Setter Property="Margin"   Value="4" />
            <Setter Property="FontWeight" Value="Black"/>
            <Setter Property="Foreground"  Value="Black" />
            <Setter Property="BorderThickness" Value="0"/>
            <Setter Property="Template">
                <Setter.Value>
                    <ControlTemplate>
                        <Border BorderThickness="0" CornerRadius="3">
                            <Border.Background>
                                <LinearGradientBrush EndPoint="0,1" StartPoint="0,0">
                                    <GradientStop Color="#4696F2" Offset="0.5"/>
                                </LinearGradientBrush>
                            </Border.Background>
                            <ContentPresenter Content="{TemplateBinding ContentControl.Content}" HorizontalAlignment="Center" VerticalAlignment="Center" />
                        </Border>
                    </ControlTemplate>
                </Setter.Value>
            </Setter>
        </Style>

```

-   **ToggleLikeButtonStyle，这是一个点赞按钮。** ![](https://img2020.cnblogs.com/blog/191302/202003/191302-20200318212810837-524413026.png)



```xml
<Style TargetType="ToggleButton" x:Key="ToggleLikeButtonStyle">
            <Setter Property="Margin"   Value="4" />
            <Setter Property="FontWeight" Value="Black"/>
            <Setter Property="Foreground"  Value="Black" />
            <Setter Property="BorderThickness" Value="0"/>
            <Setter Property="IsThreeState" Value="False"></Setter>
            <Setter Property="Template">
                <Setter.Value>
                    <ControlTemplate TargetType="{x:Type ToggleButton}">
                        <Border BorderThickness="0" CornerRadius="3" Name="PART_Background">
                            <Border.Background>
                                <LinearGradientBrush EndPoint="0,1" StartPoint="0,0">
                                    <GradientStop Color="#525252" Offset="0.5"/>
                                </LinearGradientBrush>
                            </Border.Background>
                            <Grid>
                                <ContentPresenter x:Name="contextPresenter" Content="{TemplateBinding ContentControl.Content}" HorizontalAlignment="Center" VerticalAlignment="Center" />
                                <Image x:Name="contextImage" Width="24" Height="24" Source="assests/thumbs-up-outline.png" HorizontalAlignment="Center" VerticalAlignment="Center"/>
                            </Grid>
                        </Border>
                        <ControlTemplate.Triggers>
                            <Trigger Property="IsChecked" Value="True">
                                <Setter Property="Border.Background" TargetName="PART_Background">
                                    <Setter.Value>
                                        <LinearGradientBrush EndPoint="0,1" StartPoint="0,0">
                                            <GradientStop Color="#4696F2" Offset="0.5"/>
                                        </LinearGradientBrush>
                                    </Setter.Value>
                                </Setter>
                                <Setter Property="Width" TargetName="PART_Background" Value="60"></Setter>
                                <Setter Property="Content"  TargetName="contextPresenter" Value="已点赞"></Setter>
                                <Setter Property="Visibility"  TargetName="contextPresenter" Value="Visible"></Setter>
                                <Setter Property="Visibility" TargetName="contextImage" Value="Hidden"/>
                            </Trigger>
                            <Trigger Property="IsChecked" Value="False">
                                <Setter Property="Border.Background" TargetName="PART_Background">
                                    <Setter.Value>
                                        <LinearGradientBrush EndPoint="0,1" StartPoint="0,0">
                                            <GradientStop Color="#525252" Offset="0.5"/>
                                        </LinearGradientBrush>
                                    </Setter.Value>
                                </Setter>
                                <Setter Property="Width" TargetName="PART_Background" Value="40"></Setter>
                                <Setter Property="Visibility"  TargetName="contextPresenter" Value="Hidden"></Setter>
                                <Setter Property="Visibility" TargetName="contextImage" Value="Visible"/>
                            </Trigger>
                        </ControlTemplate.Triggers>
                    </ControlTemplate>
                </Setter.Value>
            </Setter>
</Style>

```

### XAML的[标记扩展](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/advanced/markup-extensions-and-wpf-xaml)


通过了解WPF的常用控件，我们可以知道自己需要使用的控件有哪些属性，并能使用 XAML 语法对相应的属性进行设置，这种设置方法有别于通过C#代码的形式进行定义的方法，在 XAML中的属性称为 "标记"。标记使用 "{}" 花括号，编译器通过该花括号将语法和XAML语法进行区分。

例如：



```xml
 HeaderTemplate="{DynamicResource StretchedHeaderTemplate}"

```

### 标记值的转换与TypeConverters

在进行标记值转换时，有时候需要使用TypeConverters实现类型转换。例如，在上述示例代码中，可以看到使用了字符串"#525252"来定义颜色，在内部就是实现了从字符串到 Color 类的转换过程。限于篇幅有限，此处就暂时略过。

### XAML中内置特殊标记扩展

-   x:Type：特定类型



```xml
<object property="{x:Type prefix:typeNameValue}" .../>

```

-   x:Static：使用静态值。



```xml
<object property="{x:Static prefix:typeName.staticMemberName}" .../>

```

-   x:Null：使用空对象定义为属性值。



```xml
<object property="{x:Null}" .../>

```

-   x:Array：使用数组对象。



```xml
<x:Array Type="typeName">
  arrayContents
</x:Array>

```

### 常见的标记扩展

1.  StaticResource：通过替换已定义资源的值来为属性提供内容，该资源标记在XAML加载时自动执行。静态资源无法通过在XAML语法体系中对其引用关系进行前向引用，意味着无法通过多层级关系定义可复用的样式资源，如果需要这样做，则需要使用DynamicResource。



```xml
<object property="{StaticResource key}" .../>

```

1.  DynamicResource：在运行时为资源提供内容。



```
<object property="{DynamicResource key}" .../>

```

1.  Binding：在运行时为使用数据上下文为数据提供内容。



```
<object property="{Binding}" .../>
-or-
<object property="{Binding  bindProp1=value1[, bindPropN=valueN]*}" ...
/>
-or-
<object property="{Binding path}" .../>
-or
<object property="{Binding path[, bindPropN=valueN]*}" .../>

```

1.  RelativeSource：提供了可在运行时对象树中导航几个可能的关系的 [Binding](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.data.binding) 的源信息。



```
<Binding RelativeSource="{RelativeSource modeEnumValue}" .../>

```

1.  TemplateBinding：使控件模板能够使用模板化属性的值，这些属性来自于将使用该模板的类的对象模型定义属性。



```
<object property="{TemplateBinding sourceProperty}" .../>

```

1.  ColorConvertedBitmap：提供一种方法，用于指定没有嵌入的配置文件的位图源。 颜色上下文/配置文件由 URI 指定，与映像源 URI 相同。



```
<object property="{ColorConvertedBitmap imageSource sourceIIC destinationIIC}" .../>

```

1.  ComponentResourceKey和TemplateResourceKey：



```
<object x:Key="{ComponentResourceKey {x:Type targetTypeName}, targetID}" .../>

```

#### XAML资源复用

在开发过程中，我们可以直接在按钮上进行按钮模板的定义，例如下面的代码。



```xml
<Button Width="40" Height="40" Style="{DynamicResource CubeImageButtonStyle}" Click="Button_Click" Content="点赞">
    <Button.Background>
                                <ImageBrush ImageSource="/assests/favicon.png" Stretch="Fill"/>
                            </Button.Background>
                        </Button>
                          <Setter Property="Template"
                <Setter.Value>
                    <ControlTemplate>
                        <Border BorderThickness="0" CornerRadius="3">
                            <Border.Background>
                                <LinearGradientBrush EndPoint="0,1" StartPoint="0,0">
                                    <GradientStop Color="#4696F2" Offset="0.5"/>
                                </LinearGradientBrush>
                            </Border.Background>
                            <ContentPresenter Content="{TemplateBinding ContentControl.Content}" HorizontalAlignment="Center" VerticalAlignment="Center" />
                        </Border>
                    </ControlTemplate>
                </Setter.Value>
            </Setter>
        </Style>
 </Window.Resources>
 <Grid>
<Button Grid.Column="0" Grid.Row="1" Style="{StaticResource FlatButtonStyle}" HorizontalAlignment="Center" VerticalAlignment="Top" Width="48" Height="16" FontSize="10" Background="#4696F2" Content="获取"></Button>
 </Grid>

```

这样的代码在界面比较简单时，还无所谓，但是随着控件的样式越来越复杂，可能会成为一团乱麻，这对于追求优雅代码的我们来说，可能是难以忍受的，所以往往会使用资源引用来完成。

### StaticResource

例如，我们可以在当前页面代码中定义对应的样式，这种样式可以使用 StaticResource 的形式引入。但是这样的引用形式，没有对象图的访问权限，意味着无法访问资源依赖的其他资源。



```xml
 <Window.Resources>
<Style TargetType="Button" x:Key="FlatButtonStyle"> 
            <Setter Property="Margin"   Value="4" />
            <Setter Property="FontWeight" Value="Black"/>
            <Setter Property="Foreground"  Value="Black" />        
            <Setter Property="BorderThickness" Value="0"/>
</Window.Resources>         

```

### DynamicResource

将上述代码中的{StaticResource FlatButtonStyle} 改成{StaticResource FlatButtonStyle}则会在运行时加载样式，并可以访问相应的对象图。

当然，这样的更改意义不大，如果该FlatButtonStyle引用了其他样式或元素，会发生作用。



```
<Grid
<Button Grid.Column="0" Grid.Row="1" Style="{StaticResource FlatButtonStyle}" HorizontalAlignment="Center" VerticalAlignment="Top" Width="48" Height="16" FontSize="10" Background="#4696F2" Content="获取"></Button>
 </Grid>

```

## 注意事项

1、由于XAML语法脱胎于XML语法，而XML语法中本身对某些输入字符，如"<>"存在限制，所以在XAML中也会出现这类问题，并会被Visual Studio检测出错误而无法编译，需要使用UTF-8编码进行转换。

### 用户控件和自定义控件

#### 用户控件


而用户控件，使用于控件组合的场景。

#### 自定义控件


在笔者进行开发时，总是思考究竟是使用用户控件，还是自定义控件，后来在阅读《葵花宝典-WPF自学手册》这本书中，终于得以大彻大悟。

作者指出："不要被控件的外观所欺骗，要考虑其内在本质"。即思考控件的基本特征，首先想到该控件的行为与原有控件的行为是否相似，如果能够找到，则修改原有控件，而不是定义一个控件。尤其是在XAML语法中，能够通过Content 模型和模板、附加属性的运用，使得自定义控件的用途得到了进一步缩减，只有当实在万不得已时，在定义自定义控件。

作者给出了使用自定义控件的分析思路：

![](https://img2020.cnblogs.com/blog/191302/202003/191302-20200318212827625-1658133466.png)

例如，在示例代码**ToggleLikeButtonStyle **中，我实现了一个点赞和取消点赞的状态，则使用了ToggleButton来完成，就没必要使用 Button 扩展出一个是否点赞的状态了。

而如果我们需要实现的功能有这么复杂，那大概使用传统的控件就无法实现，就得使用自定义控件了。（[点击查看示例代码](https://github.com/caomfan/WpfDemo.git)）

![图片](https://uploader.shimo.im/f/f44dU5UMbaYZpJtm.png!thumbnail)

作者定义了自定义控件 ButtonEx，并实现了依赖属性 ButtonType，见【依赖属性】，并定义了不同类型的样式特征。



```xml
 <Trigger Property="ButtonType" Value="Icon">
                <Setter Property="Cursor" Value="Hand"/>
                <Setter Property="Template">
                    <Setter.Value>
                        <ControlTemplate TargetType="{x:Type controls:ButtonEx}">
                            <Border Width="{TemplateBinding Width}" Height="{TemplateBinding Height}">
                                <Image x:Name="Img" VerticalAlignment="Center" HorizontalAlignment="Center" Source="{TemplateBinding Icon}" Stretch="None"/>
                            </Border>
                            <ControlTemplate.Triggers>
                                <Trigger Property="IsMouseOver" Value="True">
                                    <Setter Property="Opacity" Value="0.8"/>
                                </Trigger>
                                <Trigger Property="IsPressed" Value="True">
                                    <Setter Property="Opacity" Value="0.9"/>
                                </Trigger>
                            </ControlTemplate.Triggers>
                        </ControlTemplate>
                    </Setter.Value>
                </Setter>
            </Trigger>

```

使用时，只需这样设置，即可实现不同类型的按钮外观。



```xml
 <controls:ButtonEx Icon="/Images/search.png"  Margin="10" ButtonType="Icon"/>

```

### 属性和事件


[依赖属性](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/advanced/dependency-properties-overview)
-----------------------------------------------------------------------------------------------------

依赖属性是为既有WPF控件对象定义自定义属性，以便支持其扩展，例如在上述自定义控件的示例中，就定义了依赖属性 ButtonType，实现了不同类型的按钮外观。



```xml
public ButtonType ButtonType
        {
            get { return (ButtonType)GetValue(ButtonTypeProperty); }
            set { SetValue(ButtonTypeProperty, value); }
        }

        public static readonly DependencyProperty ButtonTypeProperty =

```

DependencyProperty.Register("ButtonType", typeof(ButtonType), typeof(ButtonEx), new PropertyMetadata(ButtonType.Normal));
-------------------------------------------------------------------------------------------------------------------------

[附加属性](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/advanced/attached-properties-overview)\
按照官方的说法就是"附加属性旨在用作可在任何对象上设置的一类全局属性"，例如，DockPanel面板中的子对象，继承了来自于容器对象的附加属性，使得其能够在父对象中实现停靠的功能。



```xml
<DockPanel>
  <CheckBox DockPanel.Dock="Top">Hello</CheckBox>
</DockPanel>

```

[路由事件](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/advanced/routed-events-overview)
---------------------------------------------------------------------------------------------

### 基本定义

假设我们定义了几个这样的控件。



```xml
<Border Height="50" Width="300" BorderBrush="Gray" BorderThickness="1">
  <StackPanel Background="LightGray" Orientation="Horizontal" Button.Click="CommonClickHandler">
    <Button Name="YesButton" Width="Auto" >Yes</Button>
    <Button Name="NoButton" Width="Auto" >No</Button>
    <Button Name="CancelButton" Width="Auto" >Cancel</Button>
  </StackPanel>
</Border>

```

实现了这样的界面![](https://img2020.cnblogs.com/blog/191302/202003/191302-20200318212853603-773449582.png)

路由事件就是针对这组元素树中多个元素调用处理程序的事件。当我们点击了按钮Button时，将会触发 Button=>StackPanel=>Border的事件路由，而不是像WinForm应用一样，只能触发最上层的Button的按钮点击事件。

### 路由策略

-   冒泡事件（官方称为浮升，这个翻译有点。。）：调用事件源上的事件处理程序。 路由事件随后会路由到后续的父级元素，直到到达元素树的根。 大多数路由事件都使用浮升路由策略。 浮升路由事件通常用于报告来自不同控件或其他 UI 元素的输入或状态变化。
-   直接： 只有源元素本身才有机会调用处理程序以进行响应。通过使用 [EventSetter](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.eventsetter) 和 [EventTrigger](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.eventtrigger)使用来设置处理程序。例如，可以使用RoutedEventArgs的[Handled](https://docs.microsoft.com/zh-cn/dotnet/api/system.windows.routedeventargs.handled)，设置为 true 将事件标记为已处理，将 "停止" 路由用于隧道路由或冒泡路由。



```csharp
void MakeButton2()
{
  Button b2 = new Button();
  b2.Click += new RoutedEventHandler(Onb2Click2);
}
void Onb2Click2(object sender, RoutedEventArgs e)
{
  //logic to handle the Click event
}

```

-   隧道：最初将调用元素树的根处的事件处理程序。 随后，路由事件将朝着路由事件的源节点元素（即引发路由事件的元素）方向，沿路由线路传播到后续的子元素。
-   WPF中约定，隧道路由事件的名称以单词"Preview"开头。 输入事件通常成对出现，一个是浮升事件，另一个是隧道事件。例如，如下图所示，假设按钮2为触发事件的源。

![图片](https://raw.githubusercontent.com/farway000/image.techq.xyz/master/images/how-to-learn-wpf/event.png)

1、处理Border根元素的隧道事件PreviewMouseDown

2、处理StackPanel面板的隧道事件PreviewMouseDown.

3、处理Button按钮的隧道事件的PreMouseDown。

4、处理Button按钮的MouseDown事件。

5、处理StackPanel的MouseDown事件。

6、处理Border的MouseDown事件。

## 总结

WPF是一个非常庞大的技术体系，以上学习路径仅供开发者进行简单的入门，由于篇幅有限，对于标记扩展还需要进一步理解透彻，以及格式转换、图形绘制、数据绑定、MVVM等内容未能一一描述。

如果果想要对WPF进一步了解，最好通过系统的学习相关知识，除了前面提到的网站和几本书，最好的入门网站依然是[微软官方文档](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/)。
