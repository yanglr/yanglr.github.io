---
layout: post
redirect_from:
  - /2020/06/29/visual-cpp-wpf-method/
title: Visual C++中创建WPF项目的方法
categories: 
- [WPF, C++]
# platform: 公众号
# gzhname: 大白技术控
tags: [WPF, C++]
excerpt: Visual C++中创建WPF项目的方法
---

## `C++/CLI`下创建WPF项目的方法
`Visual C++`中创建WPF项目的方法

<br>

由于WPF不仅仅支持C#/VB开发，还支持其他语言，比如: C++、F#等开发，于是大白我最近花了点时间摸索了一下，本文主要介绍`C++/CLI`下创建WPF项目的方法。



我使用的开发环境是: Win10 x64 + Visual Studio 2019 (16.6.1版本)。



今天我们需要使用`C++/CLI`，算是C++的一个子集吧。

要能正常使用`C++/CLI`，首先需要确保你安装了`C++/CLI` build套件(见下图)，同时还需要确保你安装好了Visual C++相应版本的运行库。



进入`控制面板`，找到 Visual Studio 2019，右击"修改"，然后切换到"独立组件"(Individual components)这个选项卡。

![img1](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LThiMDEzYThmN2M3OGZjNmQucG5n)

如果没安装，勾选后安装一下即可。



接下来我们可以创建项目了，建议选用模板 `CLR Empty Project (.NET Framework)`，解决方案和项目名可以都用`CppWpfDemo`。

![img2](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LWNhNDIwMDYyNmZmMDQyM2EucG5n)

这时一个空项目就创建完成了。



此时查看 Project的属性，`Configration  Properties`  ->  "C/C++" -> "All Options"，输入 "common"进行搜索，确保选中的是 `Common Language Runtime Suppor(/clr)`.

![img3](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LWIzOGIzYmIzNzBhZDQ5NjAucG5n)

接下来我们鼠标右击项目下的文件夹"Resource Files"，点"Add" -> "new item"，类型选"Component Class"，可使用默认的名字`MyComponent`。

![img4](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LTJlOTJlOGIwNDczYzQ4YmIucG5n)

此时，`MyComponent.cpp`中的代码如下:

```cpp
#include "MyComponent.h"
```



为了正确引用到 WPF 中的各种库，我们还需要加入 WPF中 3 个核心的 dll，操作方法是:

右键点击项目中的 `References`，然后点 `Add Reference`，勾选上:

- PresentationCore
- PresentationFramework
- WindowsBase


![img5](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LWUwMTVlY2I5ZGI5MDcyMWMucG5n)

接下来，进行了一番倒腾，我改成了这个，做成了一个简单的界面:

此时 `MyComponent.cpp`的内容如下:

```cpp
#include "MyComponent.h"

using namespace CppWpfDemo;
using namespace System::Windows;
using namespace System::Windows::Controls;
using namespace System::Windows::Media;

[System::STAThreadAttribute]
int main(array<System::String^>^ args)
{
	Application^ app = gcnew Application();
	Window^ window = gcnew Window();
	window->Title = "C++/CLI WPF demo";

	TextBlock^ tb = gcnew TextBlock();
	tb->Text = "Hello WPF";

	// Add root Grid
	Grid^ rootGrid = gcnew Grid();
	rootGrid->Width = 120;
	rootGrid->Height = 120;
	RowDefinition^ myRowDef1 = gcnew RowDefinition();
	rootGrid->RowDefinitions->Add(myRowDef1);

	DataGrid^ grid = gcnew DataGrid();
	grid->Background = Brushes::LightBlue;
	grid->Width = 80;
	grid->Height = 100;

	// Define the Canvas
	Canvas^ mainCanvas = gcnew Canvas();
	mainCanvas->Children->Add(tb);
	mainCanvas->Children->Add(grid);

	Canvas::SetTop(tb, 20);
	Canvas::SetLeft(tb, 20);

	Canvas::SetTop(grid, 50);
	Canvas::SetLeft(grid, 20);

	rootGrid->Children->Add(mainCanvas);
	Grid::SetRow(mainCanvas, 0);

	window->Content = rootGrid;
	app->Run(window);

	return 0;
}
```



代码中的`[STAThread]`是需要的，表示Single Thread Apartment(单线程单元)，等价于`[System::STAThread]` 或 ` [System::STAThreadAttribute]`，更多相关介绍见文末。

还有个朋友说需要在项目属性中设置"Entry Point"的值为"main"，测试过了填与不填没影响，建议别填。

![image6](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LTQ0MmJjMDNlMDQ2OWFiOWYucG5n)

接下来，可以build了。

如果出现`VCRUNTIME140.dll missing`的问题，安装一下[Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145) 和 [Microsoft Visual C++ 2015 Redistributable Update 3 RC](https://www.microsoft.com/en-us/download/details.aspx?id=52685) 可以解决，x64和x86的运行库都需要安装。



如果还不行，

- 下载 [VCRUNTIME140.DLL](http://www.opendll.com/index.php?file-download=vcruntime140.dll&arch=64bit&version=14.0.22816.0&dsc=)
- 以管理员权限复制这个 dll 到 `C:\Windows\System32` 
- 检查该 dll 的文件读写权限是否为`只读`，如果是只读，去掉前面的勾勾.



此时按F5(或 Ctrl + F5)，运行结果如下:

![image7](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LTI2M2Q0NWQyYzY1MmI0ZjQucG5n)


美中不足的是后面一直有个命令行窗口。

<br>

## 启动时如何设置才能只显示WPF界面?
那么问题来了，F5启动时如何设置才能只显示WPF界面?
网上找了下解决方案，发现将目前用的 `int main()`改为`int WINAPI WinMain() ` 可以解决，要能使用`WinMain()`则需要引入`windows.h`头文件。

当把 `#include windows.h`加到`#include "MyComponent.h"`下一行时，发现如下错误:

![image8](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LWFmMzg2MjNiZjc3YmVjZTgucG5n)

原因在于命令空间冲突，使得` Window`的引用出现起义。



解决方法是: 将 `#include windows.h`放在代码的第一行。



此时，此时 `MyComponent.cpp`的内容如下:

```cpp
#include "windows.h"
#include "MyComponent.h"

using namespace System::Windows;
using namespace System::Windows::Controls;
using namespace System::Windows::Media;

[STAThread]
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,
	LPSTR lpCmd, int nCmd)
{
	Application^ app = gcnew Application();
	Window^ window = gcnew Window();
	window->Title = "C++/CLI WPF demo";

	TextBlock^ tb = gcnew TextBlock();
	tb->Text = "Hello WPF";

	// Add root Grid
	Grid^ rootGrid = gcnew Grid();
	rootGrid->Width = 120;
	rootGrid->Height = 120;
	RowDefinition^ myRowDef1 = gcnew RowDefinition();
	rootGrid->RowDefinitions->Add(myRowDef1);

	DataGrid^ grid = gcnew DataGrid();
	grid->Background = Brushes::LightBlue;
	grid->Width = 80;
	grid->Height = 100;

	// Define the Canvas
	Canvas^ mainCanvas = gcnew Canvas();
	mainCanvas->Children->Add(tb);
	mainCanvas->Children->Add(grid);

	Canvas::SetTop(tb, 20);
	Canvas::SetLeft(tb, 20);

	Canvas::SetTop(grid, 50);
	Canvas::SetLeft(grid, 20);

	rootGrid->Children->Add(mainCanvas);
	Grid::SetRow(mainCanvas, 0);

	window->Content = rootGrid;
	app->Run(window);

	return 0;
}
```



而运行结果为:

![image9](https://cdn.jsdelivr.net/gh/yanglr/images/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTAxNDc3LWE4OWZmN2NjMzY1NWFjOGIucG5n)

大白今天躺坑完毕，总算解决了问题，先酱~

第一个版本代码已上传到 `github`: <https://github.com/yanglr/CppWpfDemo/tree/master/CppWpfDemo/CppWpfDemo>.

<br>

## 线程化与“套间”(单元)

STAThreadAttribute 类：指示应用程序的 COM 线程模型是单线程单元 (STA)。

一个进程加载了一个COM的DLL文件后，该DLL可能定义并使用了一些可修改的全局变量或访问共享资源。该进程内的多个线程如何并发访问该DLL并保证是[线程安全](https://zh.wikipedia.org/wiki/%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8)的，这就是“套间”（apartment）技术需要解决的问题。

COM对象与创建或调用COM对象的线程可以按两种策略来实现并发安全：

- 按照单线程执行方式写COM对象的代码，完全不考虑并发执行问题。这样的每个COM对象只能由一个线程执行，该线程通过Windows消息队列实现多线程访问该COM对象被串行化从而并发安全。这种策略称作单线程套间（Single-Threaded Apartment，STA）。
- COM对象的代码自身实现了并发控制（通过Windows互斥原语，如[互斥锁](https://zh.wikipedia.org/wiki/%E4%BA%92%E6%96%A5%E9%94%81)、[临界区](https://zh.wikipedia.org/wiki/%E4%B8%B4%E7%95%8C%E5%8C%BA)、[事件](https://zh.wikipedia.org/wiki/%E4%BA%8B%E4%BB%B6_(%E5%90%8C%E6%AD%A5%E5%8E%9F%E8%AF%AD))、[信号量](https://zh.wikipedia.org/wiki/%E4%BF%A1%E5%8F%B7%E9%87%8F)等）。因此实际上多线程可以直接调用该COM对象的方法，这是并发安全的。这种策略称作多线程套间（Multi-Threaded Apartment，MTA）。

COM的并发安全的具体实现，提出了套间（apartment）概念。每一种套间类型表示在一个进程内部是多线程情况下，如何同步对COM对象的调用。套间是一个逻辑容器，收纳遵循相同线程访问规则的COM对象与**COM线程**（创建了COM对象的线程或者调用了COM对象的方法的线程）。套间本质上只是一个逻辑概念而非物理实体，没有句柄类型可以引用它，更没有可调用的API操纵它。套间有两种：

- 单线程套间（Single-Threaded Apartment，STA）：每个进程可以有多个STA套间。每个STA套间只能有一个线程。每个STA性质的COM对象只能属于一个STA套间。一个STA套间可以有零个或多个STA属性的COM对象，这些COM对象的方法只能由该套间的唯一线程执行。STA套间的线程可以直接调用该套间的COM对象的方法。如果STA套间的COM对象被套间外的线程或进程调用，那么该套间的线程必须实现[Windows消息队列与消息循环](https://zh.wikipedia.org/wiki/Windows%E6%B6%88%E6%81%AF%E5%BE%AA%E7%8E%AF)处理机制，其他线程必须通过[marshalling](https://zh.wikipedia.org/wiki/Marshalling_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))与unmarshalling机制，通过给该STA套间的线程发送Windows消息来调用COM对象。每个STA性质的线程自动形成一个STA套间，这个套间容纳了该线程及其创建的所有STA性质COM对象。MTA性质的线程创建STA性质的COM对象时，系统自动把该COM对象放在default STA套间内，由该套间的STA线程来执行该COM对象的方法。每个进程至多有一个default STA套间，该套间与套间内线程是自动生成的。
- 多线程套间（Multi-Threaded Apartment，MTA）：每个进程至多有一个MTA套间。所有MTA性质的线程都属于MTA套间。所有MTA性质的COM对象也都属于这个MTA套间。STA性质的线程创建MTA性质的COM对象时，系统自动创建一些线程以执行这些MTA性质的COM对象，这些线程也属于MTA套间，系统返回安整后的COM对象的描述给STA性质的线程。

一个COM对象只能存在于一个套间。COM对象一经创建就确定所属套间，并且直到销毁它一直存在于这个套间。COM对象有4种套间模式：[单线程](https://zh.wikipedia.org/wiki/%E5%8D%95%E7%BA%BF%E7%A8%8B)套间（Single Threading Apartment，STA），[多线程](https://zh.wikipedia.org/wiki/%E5%A4%9A%E7%BA%BF%E7%A8%8B)套间（MTA），线程中立套间（Thread Neutral Apartment，NA），以及Both(STA+MTA)。详见下表。COM对象的套间类型写在Windows注册表相关条目中。

一个COM线程从创建到结束都属于同一个套间。COM线程只有两种套间模式：STA或MTA。[[13\]](https://zh.wikipedia.org/wiki/%E7%BB%84%E4%BB%B6%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B#cite_note-13)线程必须通过调用CoInitializeEx()函数并且设定参数为COINIT_APARTMENTTHREADED或者COINIT_MULTITHREADED，来指明该线程的套间模式。调用了CoInitializeEx()函数的线程即已进入套间，直到线程调用CoUninitialize()函数或者自身终止，才会离开套间。COM为每个STA的线程自动创建了一个隐藏窗口，其Windows class是"OleMainThreadWndClass" 。跨套间调用这个STA套间内的COM对象，实际上是向这个隐藏窗口发送了一条窗口消息，通过消息循环与分派，该窗口过程收到这条窗口消息并调用相应的COM对象的接口方法。

线程与属于同一套间的对象遵循相同的线程访问规则，可以直接执行方法调用而不需COM的辅助。线程跨套间边界去调用COM对象，传递的指针需要[marshalling](https://zh.wikipedia.org/wiki/Marshalling_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))。如果通过标准的COM的API来调用，可以自动完成安整。例如，把一个COM接口指针作为参数传递给另外一个套间的COM对象的proxy的情形。但如果软件编程者跨套间传递接口指针而没有使用标准COM机制，就需要手工完成安整（通过CoMarshalInterThreadInterfaceInStream函数）与反安整（通过CoGetInterfaceAndReleaseStream函数获取COM接口的proxy）。例如，把COM接口指针作为线程启动时的参数传递的情形。

跨进程的调用COM对象类似于同一进程内跨套间的调用COM对象。

Object Linking & Embedding (**OLE**，对象链接与嵌入技术)提供了如下几种套间:

| 套间类型                                                     | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **单线程套间**[[14\]](https://zh.wikipedia.org/wiki/%E7%BB%84%E4%BB%B6%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B#cite_note-14)（*STA*），（ThreadingModel=*Apartment*） | 一个单独的线程专门用于执行COM对象的方法。如果是STA的COM线程创建了STA的COM对象，这个COM对象的方法就由该线程执行，该线程调用该COM对象是直接调用。如果MTA的COM线程创建了STA的COM对象，系统在当前进程内自动创建一个default STA线程来执行该STA的COM对象的方法，并把COM对象的proxy返回该MTA的线程。COM对象所在STA套间之外的线程调用该COM对象的方法，需要对COM对象的指针先做[marshalling](https://zh.wikipedia.org/wiki/Marshalling_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))再由操作系统自动排队（通过该COM对象被调用方法所在的线程的标准的[Microsoft Windows的訊息迴圈](https://zh.wikipedia.org/wiki/Microsoft_Windows%E7%9A%84%E8%A8%8A%E6%81%AF%E8%BF%B4%E5%9C%88)）。这提供了自动同步以确保对象的方法每次调用执行完毕后才能启动方法的新的调用。开发者不需要担心线程加锁（locking）或[競態條件](https://zh.wikipedia.org/wiki/%E7%AB%B6%E6%85%8B%E6%A2%9D%E4%BB%B6)。如果跨套间调用STA的COM对象，该对象所在STA的线程必须提供线程消息循环处理机制。 |
| **多线程套间**[[15\]](https://zh.wikipedia.org/wiki/%E7%BB%84%E4%BB%B6%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B#cite_note-15)（*MTA*），（ThreadingModel=*Free*） | COM[运行时](https://zh.wikipedia.org/wiki/%E8%BF%90%E8%A1%8C%E6%97%B6)不提供同步，多个MTA线程可以同时调用同一个MTA的COM对象，由各个MTA线程直接执行COM对象的方法，且因为在同一个MTA中因此不需要安整。COM对象需要自己实现同步控制以避免多线程同时访问造成的[競態條件](https://zh.wikipedia.org/wiki/%E7%AB%B6%E6%85%8B%E6%A2%9D%E4%BB%B6)或死锁。STA的线程创建MTA的COM对象，系统自动创建一个或多个线程来执行MTA的COM对象。STA线程调用MTA的COM对象也需要[marshalling](https://zh.wikipedia.org/wiki/Marshalling_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))，系统自动分配某个自动创建的线程来执行COM对象。MTA的优点是提高了并发处理性能，同时工作线程不需要有自己的[Windows消息循环](https://zh.wikipedia.org/wiki/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97)。 |
| **自动选择套间**[[16\]](https://zh.wikipedia.org/wiki/%E7%BB%84%E4%BB%B6%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B#cite_note-16)，（ThreadingModel=*Both*） | COM对象创建时系统自动选择STA或MTA，以匹配主调线程的套间类别。这避免了很多[marshalling](https://zh.wikipedia.org/wiki/Marshalling_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))开销，例如一个MTA服务器被一个STA线程调用。 |
| **Thread Neutral Apartment**（*NA*），（ThreadingModel=*Neutral*） | 一个特殊的套间，没有任何指定的线程。当STA或MTA线程调用同一进程的NA对象，则调用线程临时离开它的套间并执行COM对象的代码，没有任何线程切换。即任何线程都可以直接了当调用COM对象的方法。[[17\]](https://zh.wikipedia.org/wiki/%E7%BB%84%E4%BB%B6%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B#cite_note-17)因此NA可以认为是优化套间之间方法调用的效率。 |

<br>

**参考:**

<https://zh.wikipedia.org/wiki/%E7%BB%84%E4%BB%B6%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B#%E7%BA%BF%E7%A8%8B%E5%8C%96%E4%B8%8E%E2%80%9C%E5%A5%97%E9%97%B4%E2%80%9D>

<https://docs.microsoft.com/zh-CN/dotnet/api/system.stathreadattribute>

<https://stackoverflow.com/questions/1293402/why-does-wpf-require-a-stathread-attribute-to-be-applied-to-the-main-method>

<br>

改天接着聊，欢迎来评论区留言互动哈~
