---
layout: post
category: wpf
date: 2020-06-26 22:14:09
title:  WPF中的Data Binding调试指南
tagline: by 萌较瘦
tags: wpf
excerpt: WPF中的Data Binding调试方法和工具汇总
keywords: .NET, wpf, xaml
# topmost: true
---

大家平时做WPF开发，相信用Visual studio的小伙伴比较多。XAML里面曾经在某些特殊版本的Visual Studio中是可以加断点进行调试的，不过目前多数版本都不支持在XAML加断点来调试。

那如果自己需要绑定的 Property 没生效，该怎么去检测或Debug排查问题呢？下面大白给出几种自己用过的方法，本人的开发环境是 Win10专业版x64 + Visual Studio 2019专业版v16.2.2，以下方法都亲测有效。

<br>

## 方法1: 修改注册表 + 修改config文件

在注册表中增加一个选项，

具体做法是，在目录`HKEY_CURRENT_USER\Software\Microsoft`中创建文件夹`Tracing`, 然后在其里面创建子文件夹`WPF`，然后新建一个DWORD(32位)值ManagedTracing，将其值设置为`1`.

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug1.png)



也可以将下面的文件另存为 trace.reg，然后双击进行设置。

```reg
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Microsoft\Tracing\WPF]
"ManagedTracing"=dword:00000001
```



接下来，需要在你的Project的能影响 `.exe.config`生成的那个 `.config`文件下加入`折叠区域`的内容:

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug2.png)



由于我这边相关的config文件就是`App.config`，所以只需在`App.config`中加入该内容。

图中折叠的部分如下:

```xml
  <system.diagnostics>
    <sources>
      <source name="System.Windows.Data" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>   
      </source>
      
       <!--<source name="System.Windows.Data" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingXmlListener" />
        </listeners>      
      </source>-->

      <source name="System.Windows.DependencyProperty" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>
      </source>

      <source name="System.Windows.Freezable" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>
      </source>

      <source name="System.Windows.RoutedEvent" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>
      </source>

      <source name="System.Windows.Media.Animation" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>
      </source>

      <source name="System.Windows.NameScope" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>
      </source>

      <source name="System.Windows.ResourceDictionary" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>
      </source>

      <source name="System.Windows.Markup" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>
      </source>

      <source name="System.Windows.Documents" switchName="BindingSwitch" >
        <listeners>
          <add name="BindingTextListener" />
        </listeners>
      </source>
      
    </sources>
      
    <switches>
      <add name="BindingSwitch" value="All" />
      <!--add name="BindingSwitch" value="Off" -->
      <!--add name="BindingSwitch" value="Verbose" -->
      <!--add name="BindingSwitch" value="Warning" -->
      <!--add name="BindingSwitch" value="Activity" -->
    </switches>
    <sharedListeners>
      <!-- This listener sends output to a file named BindingTrace.log (text) -->
      <add name="BindingTextListener" type="System.Diagnostics.TextWriterTraceListener" initializeData="BindingTrace.log" />

      <!-- This listener sends output to the console -->
      <add name="console" type="System.Diagnostics.ConsoleTraceListener" initializeData="false"/>

      <!-- This listener sends output to an Xml file named BindingTrace.xml -->
      <add name="BindingXmlListener" type="System.Diagnostics.XmlWriterTraceListener" traceOutputOptions="None" initializeData="BindingTrace.xml" />
    </sharedListeners>

    <trace autoflush="true" indentsize="4"></trace>
  </system.diagnostics>
```



设置好后，你build这个wpf项目后，当启动Debug时，在其相应的debug目录下会多出一个 `BindingTrace.log`文件，比如, 我这边的内容上这样的：

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug3.png)



我配置监听器(listener)时，将debug的信息设置成了`.log`格式，与`.txt`格式相比其优势是: 当用vs code打开时，自带高亮，看起来比较爽。

```xml
      <!-- This listener sends output to a file named BindingTrace.log (text) -->
      <add name="BindingTextListener" type="System.Diagnostics.TextWriterTraceListener" initializeData="BindingTrace.log" />
```



当然也有小伙伴希望将Trace信息导出为`xml`，也可以的，只需将加入内容开头部分的:

```xml
  <source>
	<listeners>
      <add name="BindingTextListener" />
    </listeners>   
  </source>
  
   <!--<source name="System.Windows.Data" switchName="BindingSwitch" >
    <listeners>
      <add name="BindingXmlListener" />
    </listeners>
      </source>  -->
```
改为:

```xml
  <!-- <source>
	<listeners>
      <add name="BindingTextListener" />
    </listeners>   
  </source> -->
  
   <source name="System.Windows.Data" switchName="BindingSwitch" >
    <listeners>
      <add name="BindingXmlListener" />
    </listeners>
   </source>
```

即可。



那么，此时在其相应的debug目录下会多出一个 `BindingTrace.xml`文件，我这边的内容上这样的：

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug4.png)


**参考:**

<https://systemscenter.ru/scsm_authoringtool.en/html/b24efd85-0ced-48ea-8ecc-d816c789bae2.htm>

<https://www.cnblogs.com/furenjun/archive/2011/08/01/2123983.html>

WPF Tutorial | Debug DataBinding Issues
<https://www.wpftutorial.net/DebugDataBinding.html>

old-wpf-blog/45-DebuggingDataBinding at master · bstollnitz/old-wpf-blog
<https://github.com/bstollnitz/old-wpf-blog/tree/master/45-DebuggingDataBinding>


## 方法2: 在XAML中设置TraceLevel + 在xaml中需要debug的View对应的 `.xaml.cs`文件中启用WPF Trace


该方法适用于 .NET framework 3.5以后(包括 .NET core)的WPF project.

首先需要给该View的xaml文件的某个节点加入` PresentationTraceSources.TraceLevel="High"`,

```xml
<UserControl x:Class="CaliburnMicro_Calculator.Views.CalculatorView"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
             xmlns:local="clr-namespace:CaliburnMicro_Calculator.Views"
             xmlns:cal="http://www.caliburnproject.org"
             mc:Ignorable="d"
             Width="240">
```

我这边直接在这个view的根节点`<UserControl>`中加入` PresentationTraceSources.TraceLevel="High"`，结果如下:


```xml
<UserControl x:Class="CaliburnMicro_Calculator.Views.CalculatorView"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
             xmlns:local="clr-namespace:CaliburnMicro_Calculator.Views"
             xmlns:cal="http://www.caliburnproject.org"
             mc:Ignorable="d"
             Width="240" PresentationTraceSources.TraceLevel="High">
```


此时，我们还需要在目标View的对应的 `.xaml.cs`文件中启用WPF Trace.

```csharp
            // Enable WPF tracing
            PresentationTraceSources.Refresh();
            PresentationTraceSources.DataBindingSource.Listeners.Add(new ConsoleTraceListener());
            PresentationTraceSources.DataBindingSource.Switch.Level = SourceLevels.All;
```

此时，在Output(输出窗口)就可以看到数据绑定的相关信息了。

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug5.png)


可能有人会好奇output中的红色字体是怎么来的，vs的output默认是黑色。

其实安装一个vs插件`VSColorOutput`就好了，传送门: 

<https://marketplace.visualstudio.com/items?itemName=MikeWard-AnnArbor.VSColorOutput>.



当然，你还可以在此时启用"诊断工具"，位置是： 调试 -> 窗口 -> 显示诊断工具，配合起来用起来更爽喔~

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug6.png)



## 方法3: Visual Studio 2019 (16.4之后的版本)安装 XAML binding extension

这个VS插件由微软XAML团队推出，看起来像是实现了方法1或方法2的自动化。


XAML binding extension for Visual Studio 2019 下载地址:
<https://marketplace.visualstudio.com/items?itemName=PeterSpa.XamlBinding>



相关代码已开源: 

spadapet/xaml-binding-tool: XAML binding error window in a Visual Studio 2019 extension
<https://github.com/spadapet/xaml-binding-tool>



当安装好这个插件时，重启VS就可以用了，debug时，调试窗口中会多一个选项"XAML binding failures (experimental)"。点击该选项，debug相关窗口中会显示`Data binding`的详细信息。

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug7.png)



此时，`WPF trace level`附近的`...`还可以点击进行设置。

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug8.png)


## 方法4: 使用第三方debug工具 WPF 

首推Snoop，这个工具大概2006年就出来了，历史悠久，最初由微软Blend团队的Pete Blois开发，功能也异常强大，而且目前也一直有人维护和更新。

![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug9.png)

左上角支持filter，属性或层级很多时，可以快速定位目标节点。

Snoop中的Tree, Properties, Data Context均支持filter，而Properties和Data Context都可以打断点。

当属性值更改，整个属性的背景更改为**黄色**高亮一秒钟，以吸引用户注意。

Snoop允许您查看您在应用程序中指定的事件列表。当您单击元素时，您可以看到哪些元素受到影响，并查看哪个（方法或任何人）处理该点击。Hanlded的事件以**绿色**显示。这是Snoop提供的查看隧道和事件冒泡传递之间的区别的强有力方法，特别是当这些事件处理得太快或根本不处理，它们如何影响您的可视化元素。

当出现binding error时，可以选择应用程序右侧的属性，然后右键单击以深入了解绑定或绑定表达式，以便给出更详细的错误说明。

在Snoop的左上角，有一个下拉框可以打开，然后选择"Show only Visuals with binding Errors"以查看应用程序所具有的可视数据绑定错误列表。


![大白技术控geekplayers](/assets/images/2020/blog/wpf-debug10.png)


Snoop 的一个众所周知的功能是能够识别数据绑定问题。当看到组件是否绑定正确时，我通常只是尝试一下，看看它是否有效。如果无效，我转向 Visual Studio 调试模式下的output窗口。如果无法立即看到该值，我会这样做：将 Snoop 附加(Attach)到我的应用，并从应用程序树视图上方的搜索/筛选器栏中选择"Show only visuals with binding errors"选项。



Attach和Debug的步骤如下:

- 以管理员权限启动snoop
- 在代码里面的合适地方加上断点
- Ctrl + F5 运行项目
- 重现需要debug的界面
- 调试 -> Debug -> 附加到进程(Attach)

然后在snoop上依次点:

Refresh按钮, Snoop按钮(望远镜)，借助filter找需要inspect的目标元素，接下来 debug就比较顺畅了。


还可以使用它来显示任何具有绑定错误(Binding error)的控件（就像word中的拼写检查一样）：

![大白技术控-snoop绑定](/assets/images/2020/blog/wpf-debug11.png)

Snoop 中的绑定错误会**红色**高亮显示



也有小伙伴在用或WPF Inspector，不过这个工具好久没更新了。
![WPF inspect-大白技术控](/assets/images/2020/blog/wpf-debug12.png)

WPF Inspector 这个项目之前是在CodePlex上的，后来没人维护了，目前有人手动fork到github上，但没见任何更新。



还有小伙伴用  `Mole`这个Visual Studio 插件，有兴趣的朋友可以去试试~



**Mole for Visual Studio插件下载:**

Mole for VS 2015 is installed from the [Visual Studio Marketplace](https://visualstudiogallery.msdn.microsoft.com/1d05cb44-8686-496b-9af3-4ed3deed3596).

Mole for VS 2017 is installed from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KarlShifflettkdawg.MoleforVisualStudio2017).

Mole for VS 2019 is installed from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KarlShifflettkdawg.MoleforVisualStudio2019).

![mole](/assets/images/2020/blog/wpf-debug13.png)


## 其他方法:

- 将`Binding`改为`x:Binding`后进行调试
- 增加一个 `ValueConverter`，调用它进行调试

这两种本人不太熟悉，有兴趣的可以自己去试试哈~
