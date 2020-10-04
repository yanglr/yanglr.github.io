---
layout: post
redirect_from:
  - /2020/06/28/the-methods-using-visual-Cpp-creating-wpf/
  - /the-methods-using-visual-Cpp-creating-wpf.html 
title: 用Visual C++创建WPF项目的三种主要方法
categories: 
- [WPF, C++]
# platform: 公众号
# gzhname: 大白技术控
tags: [WPF, C++]
excerpt: 用Visual C++创建WPF项目的三种主要方法
image: https://gitee.com/geekplayers/images/raw/master/cpp-wpf5.png
---

# 用Visual C++创建WPF项目的三种主要方法

**The problem with using XAML from C++**

<br>

Because C++ doesn’t support partial class definitions, it isn’t possible to directly support XAML in VC++ projects using this mechanism. That isn’t, however, the core reason why VC++ doesn’t directly support XAML. In addition to using the x:Class attribute, you can also use the x:Subclass attribute so that the XAML gets compiled into the class specified by the x:Class attribute, and the code behind will define the class specified by x:Subclass, which will be derived from the x:Class type. Thus, the lack of partial classes isn’t that big of a block. The main issue is that, right now, no 100-percent CodeDOM support is available to convert

the XAML to C++, and that is the single biggest reason why VC++ doesn’t support XAML intrinsically. I don’t know this for sure, but it’s possible that on a later date, the Visual C++ team may work on their CodeDOM support and provide a fully functional XAML-to-C++ converter. Once that’s available, XAML support can be integrated into VC++ projects. As of today, however, that isn’t an option.

<br>

NOTE: *CodeDOM* is a term used to represent a bunch of types available in the System.

CodeDom namespace that lets you abstract code into an object model. Source code is represented using the CodeDOM tree and can be converted into source code for a specific language using the CodeDOM code generator for that specific language. 

<br>

Still, the fact that you can’t directly use XAML in a Visual C++ project doesn’t mean that WPF applications can’t be written with Visual C++. 

<br>

## Three ways to write WPF apps using VC++

You can use three different approaches to write WPF applications using Visual C++. Each has its pros and cons, and we’ll cover each of these approaches in the next section:

- *Use procedural code.* 

For one thing, you can directly use procedural code to

write Avalon-based applications and avoid using XAML. Of course, if you

do that, you automatically give up the advantages of declarative programming

that XAML brings in, but for certain scenarios, procedural code often

serves the purpose well.

- *Dynamically load* *XAML*.

Alternatively, you can dynamically load XAML during runtime to create your Avalon windows, although the disadvantage is that you’d be distributing a bunch of XAML files with your application.

- *Derive from a class in a* *C# DLL*

A third technique uses a C# project to create your XAML-based Avalon controls and have a class (or classes) in your C++ project that derives from the classes in the C#-based Avalon DLL. With that mechanism, the UI is created using XAML in the C# project, and the business logic is kept in the C++ project.

When you’re developing WPF applications with C++, you can use one or more of these approaches to achieve whatever functionality you want. In the next section, you’ll see how to write a simple WPF app with C++/CLI using each of the three techniques mentioned here.

## 7.2 Using C++/CLI to write a WPF application

If Visual C++ doesn’t have support for XAML, and there are no project templates for building an Avalon application (as of the June 2006 CTP), how much extra effort does it take to write Avalon applications using C++? In this section, you’ll find out. You’ll put the three different techniques I described at the end of section

7.1.2 into action. All three mechanisms have their advantages and disadvantages; you can decide which is most suitable for your specific scenario. First, though, let’s briefly go over how to create a new C++/CLI project for Avalon.

### 7.2.1 Creating a new C++/CLI Avalon project

Avalon is a managed framework, and as such any Visual C++ project that needs to access and use Avalon needs to have the /clr compilation mode turned on.

Creating a new C++/CLI project with support for Avalon is fortunately not a difficult task. Table 7.1 lists the few simple steps you need to follow each time you create an application (or library, as the case might be) that uses Avalon.

Table 7.1 Steps to create a C++/CLI Avalon project 

| **Step Action**                                              | **How To**                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1 Generate a new project                                     | Using the application wizard, specify the CLR Empty Project template. |
| 2 Set the SubSystem to   /SUBSYSTEM:WINDOWS                  | Apply this change in the Project properties, Linker settings, System   sub-setting. |
| 3 Set the Entry Point to main                                | From Project properties, choose Linker settings and then the Advanced   sub-setting. |
| 4 Add references to the following assemblies:   System   PresentationCore   PresentationFramework   WindowsBase | Note: Except for System, the other three are required for Avalon. |

<br>

At this point, your empty project is ready for writing Avalon code. Of course, you don’t have any code yet to compile, but you’ll fix that soon.

<br>

### 7.2.2 Using procedural code

You’ll now write your first Avalon application using C++/CLI, and you’ll do so entirely using procedural code. Think of it as analogous to an instruction book for putting together a table that contains only textual instructions (analogous to the procedural code) and no pictures (analogous to the XAML).

Create a new CLR project using the steps outlined in the previous section, and add an App.cpp file to it (you can call it whatever you want). Listing 7.2 shows the code for the simplest Avalon application that shows a window onscreen.

 

Listing 7.2 A simple Avalon app in procedural code
![img1](https://gitee.com/geekplayers/images/raw/master/cpp-wpf0.png)

![img2](https://gitee.com/geekplayers/images/raw/master/cpp-wpf1.png)

<br>

If you compile and run the application, you’ll see a window onscreen that can be moved, resized, minimized, maximized, and closed. Avalon requires you to set the COM threading model to single threaded apartment (STA). You do so using the STAThread attribute on the main function **①**. You then create a new instance of the Application object (using gcnew) and invoke the Run method on that instance, passing in a new instance of a Window object (again using gcnew) **②**. The Application class represents an Avalon application and provides the core functionality for running the application. It has a Run method that is called to initiate the application’s main thread. The Run method has an overload that accepts a Window object, which you use in the code. This overload launches the application and uses the specified Window as the main application window. The Window class represents the core functionality of a window and by default provides you with basic windowing functionality such as moving, resizing, and so on, which you verified when you ran the application and saw a fully functional window onscreen. 

**Note:** Those of you who have an MFC background may see a faint similarity between this model and MFC, where the CWinApp class is analogous to the Application class, and the CFrameWnd class is analogous to the Window

class. CWinApp has a Run method that provides the default message loop, and Application::Run does something similar. Of course, you shouldn’t infer too much from these minor similarities because they’re totally different UI programming models, but it’s possible that a similar design model was used by the architects of Avalon.

 

This little program doesn’t have a lot of functionality; it just uses the default Window object to create and show a window onscreen. Let’s write a more refined application with its own Application-derived object as well as a window with some controls. Figure 7.4 shows a screenshot of what the enhanced application

will look like.

The main steps involved would be to derive two classes-one from the Window class, and the other from the Application class. You’ll start with the Window-derived class.

![FirstAvalonApp](https://gitee.com/geekplayers/images/raw/master/cpp-wpf2.png)

Figure 7.4

Enhanced WPF app in C++ (procedural code)

 

*Writing the Window-derived class*

The first thing you’ll do is add a new class called FirstWindow to your project, which will be derived from the Window class. You’ll also add some member variables for the various controls and set some of the window properties in the constructor. Listing 7.3 shows the code once you’ve done that.



Listing 7.3 A more functional Avalon app in procedural code


```cpp
using namespace System;

using namespace System::Windows;

using namespace System::Windows::Controls;
```

![img6](https://gitee.com/geekplayers/images/raw/master/cpp-wpf3.png)

![img7](https://gitee.com/geekplayers/images/raw/master/cpp-wpf4.png)


It’s much like Windows Forms programming, except that the controls you declare **①.** are from the System::Windows::Controls namespace (which contains various WPF controls). You set properties like Title, Width, Height, and so on on the window object in the constructor ②. There’s also a call to a method called InitControls ③, where you initialize the child controls (I put it into a separate method to improve the code’s readability). Listing 7.4 shows the InitControls method. Basically, you instantiate each of the child controls, instantiate a container control, add the child controls to the container controls, and finally set the container control as the main Content of the parent window.

 

Listing 7.4 Function to initialize the Avalon controls

```cpp
void InitControls(void)

{
      listbox = gcnew ListBox();
      listbox->Width = 180;

      listbox->Height = 350;

      Canvas::SetTop(listbox, 10);

      Canvas::SetLeft(listbox, 10);

      textbox = gcnew TextBox();

      textbox->Width = 180;

      textbox->Height = 25;
    
      Canvas::SetTop(textbox, 10);

      Canvas::SetLeft(textbox, 200);

      addbutton = gcnew Button();

      addbutton->Width = 80;

      addbutton->Height = 25;

      addbutton->Content = "Add";

      Canvas::SetTop(addbutton, 45);

      Canvas::SetLeft(addbutton, 200);

      addbutton->Click += gcnew RoutedEventHandler(this, &FirstWindow::OnAddButtonClick);

      maincanvas = gcnew Canvas();

      maincanvas->Children->Add(listbox);

      maincanvas->Children->Add(textbox);

      maincanvas->Children->Add(addbutton);

      Content = maincanvas;
}
```

 

![img](https://gitee.com/geekplayers/images/raw/master/cpp-wpf5.png)

<br> 

Again, you probably notice the similarity with Windows Forms programming.

You instantiate the child controls ①, ②, and ③, and set various properties like Width and Height, and you also use the Canvas::SetTop and Canvas::SetLeft methods to position them on their container. For the button control, you also add an event handler for the Click event ④. Then, you instantiate the Canvas control (which is a container control for other child controls) and add the child controls as its children ⑤. Finally, you set the Content property of the window to this Canvas control ⑥.

Now, you need to add the Click event handler for the button control, where you add the text entered into the TextBox to the ListBox:


```cpp
void OnAddButtonClick(Object^ sender, RoutedEventArgs^ e)
{
	listbox->Items->Add(textbox->Text);
	textbox->Text = "";
	textbox->Focus();
}
```

Notice that you set the text of the TextBox to an empty string once you’ve added it to the ListBox. You also call the Focus() method so that the user can continue

adding more entries into the ListBox. The Window-derived class is ready. Let’s now write the Application-derived class.

 

*Writing the Application-derived class*

You derive a class called FirstApp from Application and add an override for the OnStartup method where you create and show the main window:


```cpp
#include "FirstWindow.h"

ref class FirstApp : Application
{
public:
FirstApp(void){}

protected:
      virtual void OnStartup(StartupEventArgs^ e) override
      {
          Application::OnStartup(e);
          FirstWindow^ mainwnd = gcnew FirstWindow();
          mainwnd->Show();
      }
};
```


The OnStartup method is called, not surprisingly, when the application has just started. You override that function so that you can instantiate and show the window. 

The base function is responsible for invoking any event handlers associated with the Startup event, and thus you need to call the base method in the override. 

Now, all that’s left is to modify the main function to use the custom Application object instead of the default, as shown here: 

 

```cpp
#include "FirstApp.h"

[STAThread]

int main(array<String^>^ args)
{
	return (gcnew FirstApp())->Run();
}
```


Notice that you don’t specify a window object to the Run method, because the window object is created in the OnStartup override of your Application-derived class.

Compile and run the application, and try entering some text into the TextBox and clicking the Add button. You should see the text being entered into the ListBox.

When you use procedural code with Avalon, it’s much like using Windows Forms, where you derive classes from the default controls, set some properties, add some event handlers, and are done. Procedural code is all right to develop WPF applications for simple user interfaces, but sometimes it makes better sense

to take advantage of XAML and declarative programming. As I’ve mentioned a few times already, XAML isn’t directly supported in VC++, so you’ll have to look at alternate options to make use of XAML. One such option is to dynamically load the XAML at runtime.

 

### 7.2.3 Dynamically loading XAML

 

In this section, you’ll rewrite the application you wrote in the previous section, using dynamically loaded XAML. This way, you get to leverage the power of XAML and declarative programming (which you couldn’t in the procedural code technique you used in the previous section). Continuing the instruction-book analogy, this will be like one that has textual instructions that refer to pictures (which describe the various steps needed) and are loosely distributed along with the book but not directly printed in the book. You’ll define the UI using XAML instead of procedural code. When you’re done, you’ll have an identical application

to the one you previously created.

Create a new C++/CLI Avalon project using the steps mentioned in the introduction to section 7.2, and call it FirstAvalonDynamic (or whatever you want to call it). The first thing you’ll do is write the XAML (MainWindow.xaml) that represents the UI; see listing 7.5.

 

Listing 7.5 XAML for the main window

 ```xml
<Window

      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"

      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"

      Title="First Avalon App (dynamically load XAML)"

      Height="400" Width="400"

      ResizeMode="NoResize"

      > 

      <Canvas>
            <ListBox Canvas.Left="10" Canvas.Top="10"
                  Width="180" Height="350"
                  Name="listbox" />
                <TextBox Canvas.Left="200" Canvas.Top="10"
                  Width="180" Height="25"
                  Name="textbox" />
            <Button Canvas.Left="200" Canvas.Top="45"
                  Width="80" Height="25"
                  Name="addbutton">Add</Button>
      </Canvas>
</Window>
 ```

 

The XAML shown does exactly what you did with the procedural code earlier. For the control elements, you use the same names using the Name attribute as you use for the member variables in the procedural code. Next, you need to hook an event handler to the Button so that the text entered into the TextBox is inserted

into the ListBox. For that, you’ll write a helper class, as shown in listing 7.6.

 

Listing 7.6 **WindowHelper** class that implements the event handler

 ```cpp
using namespace System;

using namespace System::Windows;

using namespace System::Windows::Controls;

using namespace System::Windows::Markup;

using namespace System::IO;

ref class WindowHelper
{

      ListBox^ listbox;

      TextBox^ textbox;

      Button^ addbutton;

 

public:
WindowHelper(Window^ window)
{
	addbutton = (Button^)window->FindName("addbutton");

	textbox = (TextBox^)window->FindName("textbox");

	listbox = (ListBox^)window->FindName("listbox");

	addbutton->Click += gcnew RoutedEventHandler(

	this,&WindowHelper::OnAddButtonClick);
}

void OnAddButtonClick(Object^ sender, RoutedEventArgs^ e)
{
	listbox->Items->Add(textbox->Text);

	textbox->Text = "";

	textbox->Focus();
}

};
 ```

![img13](https://gitee.com/geekplayers/images/raw/master/cpp-wpf6.png)


![img14](https://gitee.com/geekplayers/images/raw/master/cpp-wpf7.png)

The WindowHelper constructor accepts a Window argument and uses the FindName method ① to get the control with the specified identifier (which maps to the Name attributes you used in the XAML). You also hook an event handler to the addbutton control ②. Finally, you have the event handler③, which is identical to the one you used in the procedural code project. Listing 7.7 shows the code for the Application-derived class, where you override OnStartup as before, except that you create a window dynamically by loading the XAML file from the disk.

 

Listing 7.7 The **Application**-derived class

 ```cpp
ref class FirstAppDynamic : Application

{

public:

      FirstAppDynamic(void)
      {

      }

protected:
      virtual void OnStartup(StartupEventArgs^ e) override
      {

            Application::OnStartup(e);

            Stream^ st = File::OpenRead("MainWindow.xaml");

            Window^ mainwnd = (Window^)XamlReader::Load(st);

            st->Close();

            WindowHelper^ mainwndhelper = gcnew WindowHelper(mainwnd);

            mainwnd->Show();

      }

};

 ```



![img15](https://gitee.com/geekplayers/images/raw/master/cpp-wpf8.png)
 

You open a file stream to the XAML using File::OpenRead ① and use the overload of XamlReader::Load ② that takes a Stream^ as parameter to create a Window object. This Load method works the magic, by reading and parsing the XAML and building a Window object out of it. You instantiate the WindowHelper object and pass

this Window object as the argument, so that the event handler for the addbutton control is properly set up ③. You then show the window ④ with a call to Show().

The main method is much the same as before, where you instantiate the Application object and call Run on it:


```cpp
[STAThread]
int main(array<String^>^ args)
{

      return (gcnew FirstAppDynamic())->Run();

}
```

The advantage of using this technique over using procedural code is that you get to design your UI in XAML, thereby achieving a level of UI/code separation. You can also use Cider or some other XAML designer to quickly design flexible user interfaces, which would involve a good bit of hand-coding in procedural code.

The disadvantage is that you have to distribute the XAML file with your application, and if you have multiple windows, you then need that many XAML files.

There’s always the risk of a loosely-distributed XAML file getting corrupted (accidentally or otherwise) or even being deleted. You can embed all the XAML files as resources in the C++/CLI assembly and load them at runtime, but even that involves a lot of extra work. To avoid distributing XAML files loosely with your

application or embedding them as resources, you may want to use the technique we’ll discuss in the next section: putting the XAML into a C# project and accessing it via a derived class in a C++ project.

 

### 7.2.4 Deriving from a class in a C# DLL

 

You’ll write a third variation of the same application in this section. You’ll use a C# control library project for the XAML, and a C++ project that will utilize that XAML control by deriving a control from it. Using the instruction-book analogy again, this is essentially a picture-based, step-by-step guide with the textual

instructions printed alongside each picture providing some meta-information for the step indicated by that picture. First, use the New Project Wizard to generate a new C# .NET 3.0 Custom Control Library project, and delete the default XAML file generated by the wizard. The default XAML is derived from User-

Control and isn’t what you want. Add a new XAML file to the C# project that represents a Window, and either use Cider or hand-code the XAML from listing 7.8 into that file.

 

Listing 7.8 The **Window** class definition using XAML

 ```xml
<Window x:Class="CSXamlLibrary.BaseWindow"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      Title="First Avalon App (dynamically load XAML)"
      Height="400" Width="400"
      ResizeMode="NoResize"
      > 

      <Canvas>
            <ListBox Canvas.Left="10" Canvas.Top="10"
                  Width="180" Height="350"
                  Name="listbox" x:FieldModifier="protected" />

            <TextBox Canvas.Left="200" Canvas.Top="10"
                  Width="180" Height="25"
                  Name="textbox" x:FieldModifier="protected" />

            <Button Canvas.Left="200" Canvas.Top="45"
                  Width="80" Height="25"
                  Name="addbutton" x:FieldModifier="protected">Add</Button>
      </Canvas>

</Window>
 ```


![img16](https://gitee.com/geekplayers/images/raw/master/cpp-wpf9.png)
 

The XAML is identical to that used in the previous project (where you dynamically loaded it) except for the x:Class attribute for the Window element, which specifies the name of the class that will be generated, and the x:FieldModifier attributes that are applied to the child control elements so they’re generated as protected members in the class (rather than as private which is the default). Build the C# project, and generate the control library. Once that’s done, create a new C++/CLI Avalon project (using the same steps as before), and then add a reference to this C# project. Now, you can write a new Window class that’s derived from the class in the C# DLL, as shown in listing 7.9.

 

Listing 7.9 Deriving the main window from the XAML-defined **Window** class

 ```cpp
using namespace System;

using namespace System::Windows;

using namespace System::Windows::Controls;

 

ref class AppMainWindow : CSXamlLibrary::BaseWindow
{
      public:
            AppMainWindow(void)
            {
                  addbutton->Click += gcnew RoutedEventHandler(this, &AppMainWindow::OnAddButtonClick);
            }

            void OnAddButtonClick(Object^ sender, RoutedEventArgs^ e)
            {

                  listbox->Items->Add(textbox->Text);

                  textbox->Text = "";

                  textbox->Focus();

            }

};
 ```

 

![img17](https://gitee.com/geekplayers/images/raw/master/cpp-wpf10.png)
 

The code is similar to what you’ve seen thus far, except that it’s a lot cleaner.

Unlike the first example, you don’t have a lot of clogged procedural code to create the UI. Unlike the second example, you don’t need a helper class to map the XAML elements to the control variables and event handlers. It’s definitely an improvement over the previous two examples, but you have to bring in the C#

project just for the XAML. The rest of the code needed for the application is more or less similar to what you saw earlier:

```cpp
ref class FirstAppDerived : Application
{
      protected:
            virtual void OnStartup(StartupEventArgs^ e) override
            {
                  Application::OnStartup(e);
                  AppMainWindow^ mainwnd = gcnew AppMainWindow();
                  mainwnd->Show();
            }

};

[STAThread]

int main(array<String^>^ args)
{
      return (gcnew FirstAppDerived())->Run();
}
```

 

In some ways, the third technique is a sort of hybrid of the previous two techniques.

A lot of the code is identical to that in the first technique - as with the declaration of a custom class derived from Window and an Application-derived class with the OnStartup method creating the custom window. But, like the second technique, the UI definition is in the XAML, except that in this case, it’s compiled into the C# DLL. You also reduce lines of code with each successive technique. You had the most lines of code with procedural code (as is to be expected) and improved on that considerably when you moved the UI definition to the XAML in the dynamically-loaded XAML example. In the last example, you saved even further on lines of code, such as the helper class from the second example that had to wire the XAML elements to the member variables. Of course, the total lines of code (LOC) isn’t always the single deciding factor that determines what technique you choose. Table 7.2 shows a comparison of the three techniques; for each factor, the cells with the bold text reflect the technique (or techniques) that offer maximum performance (or convenience).

 

Table 7.2 Comparison of the three techniques

|                                      | Procedural code | Dynamically load XAML | XAML in C# DLL   |
| ------------------------------------ | --------------- | --------------------- | ---------------- |
| Cluttered code that generates the UI | Yes             | No                    | No               |
| Dependency on loose XAML files       | No              | Yes                   | No               |
| Dependency on C#-based DLL           | No              | No                    | Yes              |
| Lines of code                        | Maximum         | In-between            | Minimum          |
| UI design convenience                | Poor            | Excellent             | Excellent        |
| UI/business logic separation         | Poor            | Good                  | Excellent        |
| Level of Visual C++ project support  | Total           | Partial               | (Not applicable) |

<br>

It’s hard to pinpoint a specific technique and claim that it’s the best one, because depending on your requirements, each has advantages and disadvantages. Of course, in the future, if Visual C++ has direct support for XAML (as I believe it will), that will be your best option for the majority of scenarios.
