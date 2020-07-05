---
layout: post
title: 永远的窗口(个人对窗口的拙见)
date: 2020-07-05 11:06:50
no-post-nav: true
category: windows

sitemap:
  lastmod: 2020-07-02 20:00:00
  priority: 0.7
  changefreq: 'weekly'
  exclude: 'yes'

tags: [mfc, windows]
excerpt: 永远的窗口(个人对窗口的拙见) - 转载自helloj2ee的博客园博客
---

来源: [永远的窗口（个人对窗口的拙见） - by helloj2ee](https://www.cnblogs.com/helloj2ee/archive/2009/06/29/1513210.html)


文章愿意和大家分享，但是转载请注明出处！

如果windows一直存在下去，窗口这个话题也许是永恒的......



## 一切皆窗口

在我看来桌面上的一切都是窗口，桌面本身是窗口，开始菜单是窗口，桌面上永远置顶的播放器是个置顶的窗口，工具栏是个子窗口.......

不仅我这么看，Spy++也这么看，如下图：

![img1](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/forever-window-p1.jpg)

**图 1‑1 Spy++和桌面**

一切都是窗口，窗口错落有致，成为界面树上的翩翩叶子，组织成了我们所看到的整个Windows系统用户界面。

我们首先通过一个普普通通典型的窗口，来分析一下窗口的组成：

![img2](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/forever-window-p2.jpg)

**图 1‑2 普普通通的窗口**

         一个窗口是有很多界面元素的，比如标题栏，菜单栏，状态栏等等。但实际上可以把这些归为两类，一类是客户区，客户区就是整个窗口中间的部分，在图中已经标示出来。客户区是由程序员负责绘制的，程序员可以在上面写个字或者画个圆这样。而另一类当然是非客户区，除了图上客户区以外的地方，标题栏，水平滚动条等等都是非客户区，这一部分的绘制是由操作系统负责的。

         界面元素是看的见的，还有一些窗口特性我们用上图是无法表示出来的，比如窗口该如何响应用户的输入？比如窗口的鼠标应该是什么样的，是单箭头或者是其他比较炫的鼠标效果？比如客户区的背景色应该是什么样的等等。

归纳起来就是两点：

（1）      窗口的界面元素分成两类，一类是客户区，另一类是非客户区；

（2）      窗口的特性，看得见的，看不见的，七大姑八大姨的，确实很多。

一个成功的窗口需要程序员和操作系统默契配合。操作系统作一些通用的，基础的工作，比如绘制一个标题栏，状态栏这样的事情。程序员作一些特定的工作，比如读一个数据文件，然后用图形化的方式显示在窗口客户区内。



## 2. 窗口的创建

前面我说了，窗口的特性是很多的。不是一般的多，而是七大姑八大姨般的多。因此窗口的创建，一般的方法，那就麻烦了。程序员需要一个一个指定这些特性，看得见得要指定，看不见的还要指定。不仅如此，每打算创建一个窗口，你就要指定一次，无论这些窗口有多么类似，你还是要不厌其烦地指定下去。

有些人怕麻烦，他指定了三五个特性，最终宣布"这真不是人干的活，老子金盆洗手了......",这些人，我们只有哎......

有些人不怕麻烦，他会老老实实一遍一遍指定下去，这些人，我们尊敬他们.......

         还有些人怕麻烦，于是他们想出了新的办法，这些人，我们只有崇拜.......

技术精英们想出的办法是"把共性的东西，抽象出来"。这句话我在下面会慢慢解释。



### 2.1 把共性的东西，抽象出来


在Windows操作系统里，我们是用窗口句柄（HWND）来操作一个窗口的。HWND就相当于每个窗口的钥匙。Windows里CreateWindow或者CreateWindowEx都是创建一个窗口的函数，它们返回 HWND类型的一个值，以便程序员继续对窗口进行操作。这个值对应的是桌面上一个一个实实在在的窗口，我们看到这些窗口有很多特性是类似的，比如窗口客户区的背景色都是白色的，鼠标的光标形状都是一样的等等。于是技术精英们就把这些共性的东西抽象出来了，抽象成了一个结构，这个结构我们称之为窗口类（windows class）。

```cpp
typedef struct {
    UINT style;
    WNDPROC lpfnWndProc;
    int cbClsExtra;
    int cbWndExtra;
    HINSTANCE hInstance;
    HICON hIcon;
    HCURSOR hCursor;
    HBRUSH hbrBackground;
    LPCTSTR lpszMenuName;
    LPCTSTR lpszClassName;
} WNDCLASS, * PWNDCLASS;
```


**代码 2‑1 窗口类结构体**



这里面最为重要的是第二个成员窗口过程，如果把窗口比作有生命的物体，那么窗口过程就注入了灵魂。这个我们需要在消息循环一节当中解释。

其他的比较常用的成员变量，比如`hIcon`指定了应用程序的图标，`hCursor`指定了鼠标的形状，hbrBackground指定了客户区的背景色，`lpszMenuName`指定了窗口类的菜单，`lpszClassName`指定了窗口类的名字等等。这些特性是每个窗口都具备的共性，因此全部抽象成了窗口类的成员变量。

窗口类和窗口的关系，在面向对象里我们可以把它们比作类和对象的关系。但是更贴切的比喻，我认为是模具和成品的关系。窗口类好比一个个模具，想要做按钮，我们就拿一个按钮的模具，倒成一个模子，然后再在上面做一些慢工细活，成为一个按钮。想做组合框，我们就拿一个组合框的模具，想做编辑框，我们就拿一个编辑框的模具，想做一个花瓶，我们就拿....... 问题来了，操作系统没有提供花瓶的模具，不过也有办法，操作系统会告诉我们，你把模具的特性告诉我，我会给你制作一个花瓶的模具。

有`Win32`经验的程序员都知道，每次创建窗口之前，我们都会调用一个函数`RegisterClass`，注册窗口类。注册窗口类实际上就是告诉操作系统模具的特性和要求，让操作系统为我们制作一个模具。

因此一个标准的窗口创建过程，如下所示： 

```cpp
LRESULT CALLBACK WndProc(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam);

int APIENTRY WinMain(HINSTANCE hInstance,
	HINSTANCE hPrevInstance,
	LPSTR lpCmdLine,
	int nCmdShow)
{

	static TCHAR szAppName[] = TEXT("HelloWin");

	HWND hwnd;

	WNDCLASS wndclass;

	// 注册窗口

	wndclass.style = CS_HREDRAW | CS_VREDRAW;

	wndclass.lpfnWndProc = WndProc;

	wndclass.cbClsExtra = 0;

	wndclass.cbWndExtra = 0;

	wndclass.hInstance = hInstance;

	wndclass.hIcon = LoadIcon(NULL, IDI_APPLICATION);

	wndclass.hCursor = LoadCursor(NULL, IDC_ARROW);

	wndclass.hbrBackground = (HBRUSH)GetStockObject(WHITE_BRUSH);

	wndclass.lpszMenuName = NULL;

	wndclass.lpszClassName = szAppName;

	if (!RegisterClass(&wndclass))
	{
		return 0;
	}

	// 创建窗口并显示窗口

	hwnd = CreateWindow(szAppName, TEXT("The Hello Program"),
		WS_OVERLAPPEDWINDOW,
		CW_USEDEFAULT,
		CW_USEDEFAULT,
		CW_USEDEFAULT,
		CW_USEDEFAULT,
		NULL, NULL, hInstance, NULL);

	ShowWindow(hwnd, nCmdShow);

	UpdateWindow(hwnd);
	// …….

	return 0;
}

LRESULT CALLBACK WndProc(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam)
{
	return DefWindowProc(hwnd, message, wParam, lParam);
}
```

 **代码 2‑2 标准的窗口创建过程**

但是这个还远没有结束。按照毛主席老人家的话，这是"万里长征第一步"。如果运行一下这个程序，窗口犹如昙花一现，一闪而过。这其中的原因，我们还是要留在后面介绍。操作系统之所以能够找到指定的模具来制作窗口，主要是靠窗口类的类名（lpszClassName）。我们可以看到CreateWindow的第一个参数便是窗口类的类名，操作系统根据这个类名去寻找相应的系统窗口类或者是应用程序注册的窗口类。



### 2.2 唏嘘感慨几句

说到这里，真的是要唏嘘感慨几句。相信绝大多数程序员都有这个认识，就是C语言是过程语言，而C++是面向对象的语言。但是Win32掷地有声地告诉我们，语言只是载体，用C语言同样可以写出面向对象思想的程序。窗口类和窗口即是明证。

此外，如果你是从Win32，MFC, WinForm到现在最为流行的WPF一路走来，同样也会感到微软的技术进步带给程序员的便利。我自认为对Win32还算是熟悉，但是让我创建一个窗口的时候，我往往也是要从MSDN里找出一段代码Copy上去，或者是直接利用向导创建一个HelloWorld。在MFC里，事情并没有得到好转，虽然我们可以利用向导直接得到一个单文档，多文档或者是基于对话框的应用程序，但是我们连应用程序的入口（WinMain）都找不到了。相信每个MFC程序员，在早期的MFC学习当中都是痛苦不堪的。在WinForm中创建窗口，真正的变的简单。多简单？一句话。只需要一句话，一个窗口就创建出来了。

```cpp
static void Main()
{
   Application.Run(new HelloWorldWinForm());
}
```

**代码 2‑3 WinForm里创建窗口**



按理说，WinForm已经简单到了极致。WPF没有理由再简单，但他还是做到了。因为在WPF里甚至不需要写任何程序，只需要在指定应用程序启动的时候启动那个窗口文件即可。

```xml
<Application x:Class = "HelloWorldWPF.App" 
	xmlns = "http://schemas.microsoft.com/winfx/2006/xaml/presentation"
	xmlns:x = "http://schemas.microsoft.com/winfx/2006/xaml"
	StartupUri = "HelloWorldWPF.xaml">
```

**代码 2‑4 WPF里创建窗口**



所以真的是不从历史这样一步一步走到当代，就看不出进步。这几个例子的源码我都写好了，放在附件文件夹下，各位的机器有VC6.0和VS2008的环境的话即可运行。



## 3. 窗口的类型

注册完窗口类，紧接着就是创建窗口，过去在创建窗口的时候，我很拿不准的就是指定样式（CreateWindow的第三个参数）。因为窗口的样式确实太多，我简单统计了一下窗口样式有18种，也许有人觉得不算多，但是这18种还是可以任意组合的。这样就真是无穷无尽了。但是好好的归纳和总结，事情是可以变的简单的。真正的窗口类型只有5种，而真正常用的只有3种。下面，我需要分别介绍一下这5种窗口类型，实际上搞清楚前3种，大体也就OK了。



### 3.1    重叠式窗口（Overlapped Windows）

一个重叠式窗口往往是应用程序的主窗口，它有标题栏，边框，客户区，图标，最小化，最大化按钮等等。创建窗口的时候，如果你指定WS_OVERLAPPED或者WS_OVERLAPPEDWINDOW 这样的样式，就可以创建一个重叠式窗口。

相信一定会有人问，WS_OVERLAPPED 和WS_OVERLAPPEDWINDOW 有什么区别？我们只要看看两个宏的定义，便可见分晓（窗口样式的宏都定义在WinUser.h这个文件当中）。

```cpp
// 摘自WinUser.h文件

#define WS_OVERLAPPED       0x00000000L

#define WS_POPUP            0x80000000L

#define WS_CHILD             0x40000000L

#define WS_MINIMIZE          0x20000000L

#define WS_VISIBLE            0x10000000L

#define WS_DISABLED          0x08000000L

#define WS_CLIPSIBLINGS       0x04000000L

#define WS_CLIPCHILDREN      0x02000000L

#define WS_MAXIMIZE         0x01000000L

......

#define WS_OVERLAPPEDWINDOW (WS_OVERLAPPED     | "
    WS_CAPTION | "
    WS_SYSMENU | "
    WS_THICKFRAME | "
    WS_MINIMIZEBOX | "
    WS_MAXIMIZEBOX)
```

**代码 3‑1 窗口样式**



从定义上也能看出`WS_OVERLAPPEDWINDOW`是`WS_OVERLAPPED`和其他样式的一种组合。

写到这里，我们不得不岔开一下话题，谈一谈关于程序员"小气和高明"的问题。



### 小气和高明的程序员

细心的读者可能已经注意到了，窗口样式的宏定义并不是按照我们常规的方式来定义，比如WS_OVERLAPPED用1来表示，WS_POPUP用2来表示，以此类推......实际上宏定义全部采用的是16进制的表示方法，而且在表示也是有讲究的，基本上用的是1(2^0^)，2(2^1^)，4(2^2^)，8(2^3^)这样的数值表示。实际上不仅仅是窗口样式，绝大部分类似窗口样式这种可以组合表示的宏都采用的这种手法。也许还是有相当的新手，不知道这样表示的妙用，我们把他们全部用二进制的表示方法，秘密昭然若揭。



**表格 3‑1 窗口样式的二进制和十六进制表示**

| 样式                 | 数值表示（32位整型数字,2进制表示） |      |      |      |      |      |      |      |      | 数值（16进制） |
| -------------------- | ---------------------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------------- |
| WS_OVERLAPPED        | 0                                  | 0    | 0    | 0    | 0    | 0    | 0    | 0    | ……   | 0x00000000L    |
| WS_POPUP             | 1                                  | 0    | 0    | 0    | 0    | 0    | 0    | 0    | ……   | 0x80000000L    |
| WS_CHILD             | 0                                  | 1    | 0    | 0    | 0    | 0    | 0    | 0    | ……   | 0x40000000L    |
| WS_MINIMIZE          | 0                                  | 0    | 1    | 0    | 0    | 0    | 0    | 0    | ……   | 0x20000000L    |
| WS_VISIBLE           | 0                                  | 0    | 0    | 1    | 0    | 0    | 0    | 0    | ……   | 0x10000000L    |
| …….                  | …….                                | …….  |      |      |      |      |      |      |      |                |
| WS_POPUP \| WS_CHILD | 1                                  | 1    | 0    | 0    | 0    | 0    | 0    | 0    | ……   |                |


![window macros table](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/window_macros_table.png)



察觉出来没有，程序员没有用一个整型（32位）来表示一个特定的窗口样式，而是用1位来表示窗口样式。小气吗？真小气，早期的程序员就像守财奴一样非常吝啬地使用自己的内存。一个32位的整型，程序员用其中1位来表示一个特定的样式。如果其中有几位都是1呢？那么它表示的就是一个样式的组合。因此，我们可以看到`WS_OVERLAPPEDWINDOW` 可以由几个窗口样式进行或运算组合而成。

这样的做法也是一个极其高明的做法。需要组合的这种参数，往往会设计成这样。它们通过或运算组合而成。判断该参数里是否有某一个特定的样式，则用与运算来检验。将样式从某一个组合里剔除出来，则采用与非运算。如下所示：

```cpp
DWORD style = WS_POPUP;         // 数值为0x80000000

style = style | WS_MINIMIZE;    //样式组合成了 WS_POPUP | WS_MINIMIZE    数值为0x80000000 | 0x20000000为0xa0000000

bool res = style & WS_MINIMIZE; // 判断style里是否有WS_MINIMIZE 返回为真

res = style & WS_CHILD;          //判断style里是否有WS_CHILD返回为假    

style = style & ~WS_MINIMIZE;    //从样式里去掉了WS_MINIMIZE样式         数值为0x80000000

```

**代码 3‑2 窗口样式运算**



## 3.2    弹出式窗口（Popup Window）


最典型的弹出式窗口是对话框。弹出式窗口和重叠式窗口还是相当类似的。弹出式窗口和重叠式窗口到底有什么区别呢？

一般来说一个应用程序的主窗口是重叠式窗口，而弹出式窗口多用于对话框，消息框这样的窗口。当然还有细节上的问题。

（1） WS_OVERLAPPED样式创建的窗口是含有标题栏的，而WS_POPUP样式创建的窗口是不含标题栏的，如果需要创建一个带标题栏的WS_POPUP样式的窗口，那么需要运用WS_"POPUP | WS_CAPTION"样式组合；

（2） 在创建WS_OVERLAPPED样式窗口的时候，CreateWindow或者CreateWindowEx函数当中x,y,nWidth, nHeight四个参数都可以取CW_USEDEFAULT默认值，系统会选择一个合适的值。但是创建WS_POPUP样式的窗口，CW_USEDEFAULT对这四个参数是无效的，如果程序员一意孤行非要传CW_USEDEFAULT值，系统会默认认为这几个参数为0，那么这个时候整个窗口的大小就为0。这个时候往往会给程序员造成一种错觉，以为自己的窗口没有创建出来，实际上窗口已经创建出来了，只不过它长宽均为0而已。



## 3.3 子窗口（Child Window）

类似于按钮这样的窗口，我们称之为子窗口。子窗口的样式为WS_CHILD,子窗口必须得有一个父窗口。而且子窗口的区域一定限制在父窗口的客户区内。一般一个子窗口默认只有客户区，除非程序员再去显示地为子窗口指定标题栏（WS_CAPTION）或者边框（WS_BORDER）之类的样式。

自此，应该说窗口的类型算是基本上介绍完了。无论桌面上的窗口怎么变，有80%都是在这三种之间变来变去，把弹出窗口加一个标题栏，或者把重叠窗口加上最大最小化按钮啊等等。但确实还有一小撮不属于这三种类型的，但是下面的两种都是属于比较特殊的情况，为了满足各位的好奇心，我们还是把窗口的类型介绍完整。



### 3.4 分层窗口（Layered Window）


分层窗口，这样的翻译不知道是否准确。因为这一部分，大家讨论得还是比较少，因此没有什么统一认可的翻译方式。分层窗口是在Windows2000之后才出现的。如果大家比较感兴趣可以参考我的另一篇文章《分层窗口------Windows进化的中间产物》。

如果各位体验过Windows2000以前的产品，Windows95或者Windows98。细心的用户会发现Windows为了改进用户体验，在部分细节的地方作了改变，比如鼠标。在Windows2000以前，鼠标只是一个平面的箭头。而在Windows2000和Windows2000以后，鼠标下面会增加了一层阴影，以强化其视觉深度。这样使得鼠标更有立体感，在大的显示器甚至是多个显示器上更容易找到那个小小的鼠标。 

![img3](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/forever-window-p3.jpg)

 **图 3‑1 左图是Windows200以前的鼠标，右图是Windows2000以后的鼠标，增加了阴影**



再比如置顶窗口的一个时钟，透明地浮动在窗口，为你显示时间。

![img4](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/forever-window-p4.jpg)

**图 3‑2 透明时钟**

再比如Office助手，这样的小玩意。它浮动在窗口的顶层，可能是一个老头，也可能是一个妙龄少女，或者是一个机器人，你问它答。Office助手已经完全脱离了传统的窗口样式

还有.......等等这样的特殊效果，都是分层窗口所致。我再重复一遍，这篇文章我们不讨论太多的这种窗口，如果有兴趣我会再写另一篇文章《分层窗口------Windows进化的中间产物》。



### 3.5   单一处理消息窗口（Message-Only Windows）

Message-Only Windows这个翻译成单一处理消息窗口，不知道是否妥贴。我一般翻译都不喜欢自创，一般会遵循大家普遍认可的翻译方式，但是Message-Only Windows也许大家不够关注，于是缺少一个普遍认可的词汇，不得已只有自己创造之。

其实E文的名称已经足以说明该窗口是个什么咚咚，就是一个看不见，找不着，专门用来处理消息的窗口。



**相关参考:**

[Message-Only Windows](https://docs.microsoft.com/en-us/windows/win32/winmsg/window-features#message-only-windows)

<https://www.cnblogs.com/kwliu/archive/2011/07/30/2121861.html>

<https://www.codeproject.com/Articles/7969/How-to-make-a-Message-Only-Window>



## 4.消息循环

我们已经运行过代码 2‑2。事实是窗口昙花一现，一闪而过；原因是我们缺少最必要的一环就是消息循环。我每回在写一个标准的Windows程序时候，等到加消息循环的时候，就会有意停顿一下，因为感觉自己就像一个画龙的画师，等待着给龙点睛[[2]](https://www.cnblogs.com/helloj2ee/archive/2009/06/29/1513210.html#_ftn2)。点睛的龙，会一飞冲天；加上消息循环的窗口，则注入了生命。

整个消息循环的代码如下，非常简单，三个函数和一个While循环搞定。但是要真正地解释清楚，这里面涉及到应用程序和操作系统的关系，还有消息，消息队列以及窗口过程等重要概念。

```cpp
MSG msg;
......

while (GetMessage(&msg, NULL, 0, 0))
{
	TranslateMessage(&msg);
	DispatchMessage(&msg);
}
```

**代码 4‑1 消息循环的代码**



事实上，我已经说过所有的应用程序都是系统和程序员进行配合完成的。我在阅读MSDN关于窗口这一部分文档，结合自己的编程经验，脑海里常常呈现出一幅应用程序和操作系统"你来浇水，我施肥"的和谐共建图。但是每回拿起笔，又感觉颇为艰难。一次无意当中随手随手翻翻侯捷大师的《深入浅出MFC》（经典书是常翻的），以前没有注意到的一幅图完全抓住了我的眼球。因为正是我脑海中常常浮现的一幅图，虽然这幅图还是有部分瑕疵，但是瑕不掩瑜，老实说我是画不出来的......

一幅应用程序和操作系统"你来浇水，我施肥"的和谐共建图

![img5](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/forever-window-p5.jpg)

**图4‑1 windows程序与操作系统关系（侯捷，1997）**

这幅图，如果简单的归纳只能用十二个字来表示"以消息为基础，以事件驱动之"。如果是E文，这更为简洁明了"message based, event driven"。但是这个就好比"五心向天"这样的口诀，光记下来是没用的，因此我们这一节都是围绕着这个图来解释这十二字真言。

前面我们已经说过，当我们注册完窗口类（RegisterClass），创建窗口（CreateWindow）和显示窗口（ShowWindow，UpdateWindow）。一个应用程序就进入了消息循环，这个时候窗口所需要做的事情就是两个字------"等待"。操作系统说，"您该重绘了"，于是窗口就把自己重新画一遍，操作系统说"您该响应鼠标消息了"，窗口就响应一下鼠标消息。总之"敌不动，我不动，敌一动，我乱动"。

人和人之间交流用语言，留便条或者打手机等等。操作系统和应用程序之间，他们用消息来进行这样的通讯。 操作系统说 "您该重绘了"，它会向应用程序发送一个WM_PAINT消息；操作系统说"用户按下鼠标左键了"，它会向应用程序发送一个"WM_LBUTTONDOWN"消息等等。而窗口收到了这些消息，当然也需要处理这些消息，窗口有一个集中处理消息的办公地点，这个办公地点称之为"窗口过程"函数（WndProc）。实际上在注册窗口类的时候，就将一种特定类型的窗口和窗口过程函数绑定在了一起。倘若不记得，不妨回过头再看看窗口的创建一节。

窗口过程函数就好象是一个专门处理消息的部门。当然这个小小的部门也不是所有大事小事都能完全处理，有些消息，窗口可以自己处理，但是有些消息，窗口处理不了。处理不了的事情按照常规当然是要及时上报，于是窗口过程函数的实现都是同一个模子。首先上来switch....case，处理消息1，消息2，消息3.....处理不了，那么交给操作系统去处理（default return DefWindowProc......），DefWindowProc函数的意思是让操作系统按照默认的方式处理消息。

一个一个消息就好比一件一件公文，最终放到窗口过程函数的桌面上等待处理。但是这些公文的到来，也是有不同的途径。第一种途径当然是一种常规途径，就是按照先来后到的顺序，排成队处理。而第二种途径自然是特权途径，这种就好比领导打个电话或者递个条子语重心长地说"小李啊，这个特事要特办啊"。其实我还是蛮痛恨这种"递条子"现象。但是在计算机这档子事里还真是必须要有这种特权现象存在。



## 4.1 两种不同的消息传递途径

### 百姓苦排队型（进队消息）

我们现在来具体说说这两种途径。先说第一种途径，消息要一件一件处理，总要安排个地方给消息排队。因此操作系统为窗口安排了两个消息队列，消息来了统统在这两个消息队列里排队。然后应用程序的消息循环取出消息（GetMessage,TranslateMessage和DispatchMessage），传给窗口过程函数去处理。

两个消息队列分别是系统消息队列（System Message Queue）和应用程序消息队列（Application Message Queue）。注意系统消息队列是唯一的，也就是说一个操作系统也就一个系统消息队列，用户点击鼠标，敲击键盘，由相应的鼠标和键盘驱动将这些外部事件转换为鼠标和键盘消息，然后放在系统消息队列里排队。操作系统非常聪明会知道某个鼠标键盘消息属于哪个窗口，然后把相应的消息放到特定窗口应用程序消息队列中。注意我再重复一遍，系统消息队列会把相应的消息放到特定窗口的应用程序消息队列中。换句话说，消息循环不会从系统消息队列里去取消息，只会从特定窗口的应用程序消息队列中取消息。因此侯先生的这幅图出现了一点小小的瑕疵，它应该修改成如下图。

![](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/forever-window-p6.jpg)

**图 4‑2 windows程序与操作系统关系（作者修改）**



而应用程序消息队列接受的都是该窗口的鼠标和键盘消息或者菜单消息等等。总之属于该窗口的消息都会最终放置在该窗口的应用程序消息队列里，以应用程序的眼光来看，是不需要知道该消息是放在系统消息队列还是应用程序消息队列，应用程序只需要从应用程序消息队列取消息即可。



### 领导递条子型（非进队消息）

第二种途径当然要"牛"很多。这种"牛"体现在两点上。第一这些消息从来不排队，直接抵达窗口过程函数。第二点更"牛"，这种消息到达窗口过程就必须得处理，处理不完就一直等待。幸运的是计算机里我们不需要送美女，送金钱，只需要调用SendMessage，这样消息就直接摆放在窗口过程的桌子上，窗口过程不处理都不行。



## 4.2 几个特殊进队的消息

按说进队消息已经没什么特殊，他们都是老老实实地遵循先进先出（first in first out）的原则。但是仍然有些消息会特殊。按照常理来想，如果你要搞特殊，大可不排队，走领导递条子型不就得了。但是这些消息特殊，并不是特殊在他们要特权，他们的问题是太过谦让，看到其他消息总是说"您请先"。

现在让我们介绍一下，这几个特殊而高尚的信息。他们分别是`WM_PAINT`，`WM_TIMER`和`WM_QUIT`消息。这三个消息总在谦让，他们谦让的程度让人咂舌。消息队列里只要还有一条消息在排队，他们都不会往前，直到消息队列为空，才会交给窗口过程处理。

当系统感觉到窗口需要重绘的时候，比如窗口大小，尺寸等发生变化，会向窗口发送`WM_PAINT`消息，告知窗口需要重绘。`WM_PAINT`消息不仅会谦让，而且当消息队列里有多个`WM_PAINT`消息，系统会自动合并成一个`WM_PAINT`消息，同时会将每个`WM_PAINT`消息的无效矩形合并成一个大的无效矩形。`WM_PAINT`之所以这样做，是因为避免窗口过多地重绘造成的系统低效。关于`WM_PAINT`和无效矩形，我想还得再写一篇文章来说明这个问题。

`WM_TIMER`是设置了计时器之后，系统会按照计时器规定的间隔时间来定时发送`WM_TIMER`消息。由于`WM_TIMER`消息是一个具有"先人后己"道德高尚的消息，因此，我们说这种计时器是不太准的，比如定时器设置了每50毫秒发送一次`WM_TIMER`消息，但是50毫秒的时候，消息队列里还有很多其他兄弟消息，于是`WM_TIMER`就忍让了，可能51毫秒或者52毫秒的时候`WM_TIMER`消息才会放到消息队列当中。

当应用程序需要退出的时候，系统会发送`WM_QUIT`消息。`WM_QUIT`的谦让精神和前面的兄弟消息也是一样，就无需多言了。`WM_QUIT`的特殊之处，在于GetMessage一旦得到的是`WM_QUIT`消息，就返回0，整个消息循环就结束了，Game Over！



### 4.3 一个消息的完整结构


其实我前面有埋一个伏笔，那就是操作系统怎么就能如此聪明，知道哪个消息是属于哪个窗口的呢？其实看看消息的结构，就不难知道答案。

```cpp
typedef struct tagMSG {
	HWND        hwnd;

	UINT        message;

	WPARAM      wParam;

	LPARAM      lParam;

	DWORD       time;

	POINT       pt;

} MSG;
```



消息结构体，总共有六个成员变量。第一个就是窗口句柄`hwnd`，这个参数就告诉我们是哪个窗口收到消息，操作系统可以根据这个信息将消息放到合适的窗口应用程序消息队列当中；第二个是消息的标识，比如WM_PAINT等；第三和第四参数都是用来存储消息的额外信息；第五个参数记录的是消息被放入到消息队列的时间；第六个参数是消息被放入到消息队列时，鼠标所在的位置。



## 5. 小结

写到最后了，还是小结一下。



Windows里一切都由窗口组成 

- 窗口类是模具，窗口是成品 

- 窗口的类型样式很多，但归纳起来也就那么几种 

- 消息循环是窗口的灵魂，消息为基础，事件驱动之 

- 有特权的消息不排队，无特权的消息排队 

- 但是总会有那些有谦让精神崇高的消息 



我想《永远的窗口》此文就到此结束了......