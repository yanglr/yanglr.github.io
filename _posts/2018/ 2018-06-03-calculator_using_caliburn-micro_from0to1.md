---
layout: post
title: ��0��1��ʹ��Caliburn.Micro(WPF��MVVM)�����򵥵ļ�����
no-post-nav: true
categories: 
- [wpf, xaml]

sitemap:
  lastmod: 2018-06-03 19:53:01
  priority: 0.7
  changefreq: 'weekly'
  exclude: 'yes'

tags: [wpf]
excerpt: ��׼����� - ��0��1��ʹ��Caliburn.Micro(WPF��MVVM)�����򵥵ļ�����
---

ǰһ��ʱ��һֱ����`Caliburn.micro`��ܣ����������ܽ�һ��~

-------------

## ��0��1��ʹ��Caliburn.Micro(WPF��MVVM)�����򵥵ļ�����

֮ǰʱ��һֱ��ʹ��Caliburn.Micro����Ӧ����MVVMģʽ��WPF�������������ʱ���ܽ�һ���ˡ�

Caliburn.Micro(Caliburn.Micro��ܸ��� - https://blog.csdn.net/lzuacm/article/details/78886436) ��һ����������WPF��ܣ�����WPF�еĲ����÷����Ƽ���WPF����ʱ����ʹ�á�

�������ٶ�����������һ�ż����Ϳ��Գ������������ٶ�ȥ����һ�������Ŀ(Toy project)��Ȼ�󲻶ϵ��Ż����ع�֮�����籾�Ľ��������ʹ��Caliburn.Micro v3.2������һ���򵥵ļ������������õ���C#�е�async�첽������Caliburn.Micro�е�Conductor�ȵ�~

### Step 1: ��VS�д���WPF��Ŀ
![create_project](https://img2018.cnblogs.com/blog/436938/201903/436938-20190324010953551-1224926541.png)


### Step 2: ʹ��NuGet��������Ϊ��ǰ��Ŀ��װCaliburn.Micro
����Caliburn.Micro 1.x��2.x�棬ֻ��ʹ��.dll�����ֶ�����Ŀ��Reference����3.0�Ժ�İ汾��ʹ��NuGet����������������װ��ж�ؼȷ����ֳ��ף��Ƽ�ʹ�á�(ps: NuGet֮��Visual Studio(C++, C#��), ��pip֮��Python, npm֮��node, maven֮��Java, gem֮��Ruby�ȵ�)

![Install CM](https://img2018.cnblogs.com/blog/436938/201903/436938-20190324005855423-424717537.png)


### Step 3: ��ܴ

 1. ɾ����Ŀ��Ŀ¼�µ�MainWindow.xaml
 2. ����ͼ����App.xaml
 ɾ�����StartupUri="MainWindow.xmal"��
 ![config1](https://img2018.cnblogs.com/blog/436938/201903/436938-20190324005959001-1435534729.png)


 3. ���Application.Resources
```xml
    <Application.Resources>
         <ResourceDictionary>
             <ResourceDictionary.MergedDictionaries>
                 <ResourceDictionary>
                     <local:Bootstrapper x:Key="bootstrapper"/>
                 </ResourceDictionary>
             </ResourceDictionary.MergedDictionaries>
         </ResourceDictionary>
    </Application.Resources>
```
  &nbsp;&nbsp; 4 . ����Bootstrapper��
Ȼ������̳���BootstrapperBase�࣬�����Ϲ��캯������������д����OnStartup���ɡ�

```csharp
using System.Windows;
using Caliburn.Micro;
using CaliburnMicro_Calculator.ViewModels;

namespace CaliburnMicro_Calculator
{
    public class Bootstrapper : BootstrapperBase
    {
        public Bootstrapper()
        {
            Initialize();
        }

        protected override void OnStartup(object obj, StartupEventArgs e)
        {
            DisplayRootViewFor<ShellViewModel>();
        }
    }
}

```
 &nbsp;&nbsp; 5 . ����ĿĿ¼���½�Models, ViewModels, Views��3���ļ���
��ViewModel�ļ��������ShellViewModel.cs��������Left, Right��Result��3�����ԡ�
 
��Ҫע����� ShellViewModel.cs��Ҫ�̳��� **Screen �� INotifyPropertyChanged** (���ڸ�֪��ͬ���������Եı仯)��ShellViewModel�������Ϊ:
```csharp
using System.ComponentModel;
using System.Threading;
using System.Windows;
using System.Windows.Controls;
using Caliburn.Micro;

namespace CaliburnMicro_Calculator.ViewModels
{
    public class ShellViewModel : Screen, INotifyPropertyChanged
    {
        private double _left;
        private double _right;
        private double _result;

        public double Left
        {
            get { return _left; }
            set
            {
                _left = value;
                NotifyOfPropertyChange();
            }
        }

        public double Right
        {
            get { return _right; }
            set
            {
                _right = value;
                NotifyOfPropertyChange();
            }
        }

        public double Result
        {
            get { return _result; }
            set
            {
                _result = value;
                NotifyOfPropertyChange();
            }
        }
}
```
**˵��:** �ʼ����xamlʱ�����λ��ʱ���õ�����(operand 1), ��(operand 2), ��(result)����������ֵʹ����Left, Right��Result��

### Step 4: ���XAML��������
��Views�ļ����д���Window������ΪShellView.xaml����Views�ļ����´������ļ���Images�����ڴ��+,-,*,/��4�ֲ�����Ӧ��Сͼ�꣬�����������£�
```xml
<Window x:Class="CaliburnMicro_Calculator.Views.ShellView"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:CaliburnMicro_Calculator.Views"
        xmlns:cal="http://www.caliburnproject.org"
        mc:Ignorable="d"
        Title="Calculator" SizeToContent="Height" Width="240">

    <StackPanel Background="Beige">
        <StackPanel Orientation="Horizontal">
            <Label Margin="10"
                   Target="{Binding ElementName=left}">
                Operand _1:
            </Label>
            <TextBox Margin="10"
                     Width="72"
                     x:Name="left"/>
        </StackPanel>
        <StackPanel Orientation="Horizontal">
            <Label Margin="10"
                   Target="{Binding ElementName=right}">
                Operand _2:
            </Label>
            <TextBox Margin="10"
                     Width="72"
                     x:Name="right"/>
        </StackPanel>
        <StackPanel Orientation="Horizontal">
            <Button Margin="10"
                    x:Name="btnPlus" 
                    cal:Message.Attach="[Event Click]=[Action Plus(left.Text, right.Text):result.Text]">
                <Image Source="Images/op1.ICO"/>
            </Button>

            <Button Margin="10"
                    x:Name="btnMinus" 
                    cal:Message.Attach="[Event Click]=[Action Minus(left.Text, right.Text):result.Text]">
                <Image Source="Images/op2.ICO"/>
            </Button>

            <Button Margin="10"
                    x:Name="btnMultiply" 
                    cal:Message.Attach="[Event Click]=[Action Multipy(left.Text, right.Text):result.Text]">
                <Image Source="Images/op3.ICO"/>
            </Button>

            <Button Margin="10"
                    x:Name="btnDivide" IsEnabled="{Binding Path=CanDivide}"
                    cal:Message.Attach="[Event Click]=[Action Divide(left.Text, right.Text):result.Text]">
                <Image Source="Images/op4.ICO"/>
            </Button>

        </StackPanel>
        <StackPanel Orientation="Horizontal">
            <Label Margin="10">
                Answer:
            </Label>
            <TextBox Margin="10"
                     Width="72"
                     Text ="{Binding Path=Result, StringFormat={}{0:F4}}" IsReadOnly="True" />
        </StackPanel>
    </StackPanel>
</Window>
```
**˵����**�Բ�����Operand _1��Operand _2����Alt��+���ֿ���ѡ�иô�������WPF��һ�������÷������ڼ�������ϣ�����޸ģ����Ǽ���������```IsReadOnly="True"```��

### Step 5: ��Ʋ����¼�
������ʱֻ����ʵ��+, -, *, /���ֲ�������������ֻ�贴����Ӧ��4���������ɣ����ڳ�����0��������������������ټӸ��жϺ���CanDivide��

Caliburn.Micro�а��¼���д����: 
```cal:Message.Attach="[Event E]=[Action A]"```(E�ǲ���������Click, MouseDown, KeyDown�ȵȣ�A��ViewModel�о���ĺ�����)

��ShellViewModel�м����¼���Ҫ�����£���ʱShellViewModelΪ��
```csharp
using System.ComponentModel;
using System.Threading;
using System.Windows;
using System.Windows.Controls;
using Caliburn.Micro;

namespace CaliburnMicro_Calculator.ViewModels
{
    public class ShellViewModel : Screen, INotifyPropertyChanged
    {
        private double _left;
        private double _right;
        private double _result;

        public double Left
        {
            get { return _left; }
            set
            {
                _left = value;
                NotifyOfPropertyChange();
            }
        }

        public double Right
        {
            get { return _right; }
            set
            {
                _right = value;
                NotifyOfPropertyChange();
            }
        }

        public double Result
        {
            get { return _result; }
            set
            {
                _result = value;
                NotifyOfPropertyChange();
            }
        }
                public bool CanDivide(double left, double right)
        {
            return right != 0;
        }

        public async void Divide(double left, double right)
        {
            Thread.Sleep(600);
            if (CanDivide(left, right) == true)
                Result = left / right;
            else MessageBox.Show("Divider cannot be zero.", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
        }

        public async void Plus(double left, double right)
        {
            Result = left + right;
        }

        public async void Minus(double left, double right)
        {
            Result = left - right;
        }

        public async void Multipy(double left, double right)
        {
            Result = left * right;
        }
    }
}
```
��ʱ�������Ĺ����ѻ�����ɣ������ǿ��Զ�ViewModel�����ʵ��ĵ�����
1.�����µ�ViewModel - CalculatorViewModel����ԭ����ShellViewModel�о���ļ����߼����뵽CalculatorViewModel�У�
2.��ʱ��ShellViewModel�̳�**Conductor&lt;Object>**������ShellViewModelӵ���˹���Screenʵ���Ĺ���(ViewModel��ʹ��ActivateItem��������View��ʹ��X:Name="ActivateItem"��ǩ)����������Ϊ:
```csharp
using System.ComponentModel;
using System.Threading;
using System.Windows;
using System.Windows.Controls;
using Caliburn.Micro;

namespace CaliburnMicro_Calculator.ViewModels
{
    public class ShellViewModel : Conductor<object>
    {
        public ShellViewModel()
        {
        }
        public void ShowCalculator()
        {
            ActivateItem(new CalculatorViewModel());
        }
    }
}
```
��ʱ��CalculatorViewModel�ľ������Ϊ��
```csharp
using System.ComponentModel;
using System.Threading;
using System.Windows;
using Caliburn.Micro;

namespace CaliburnMicro_Calculator.ViewModels
{
    public class CalculatorViewModel: Screen, INotifyPropertyChanged
    {
        private double _left;
        private double _right;
        private double _result;

        public double Left
        {
            get { return _left; }
            set
            {
                _left = value;
                NotifyOfPropertyChange();
            }
        }

        public double Right
        {
            get { return _right; }
            set
            {
                _right = value;
                NotifyOfPropertyChange();
            }
        }

        public double Result
        {
            get { return _result; }
            set
            {
                _result = value;
                NotifyOfPropertyChange();
            }
        }

        public CalculatorViewModel()
        {
        }

        public bool CanDivide(double left, double right)
        {
            return right != 0;
        }

        public async void Divide(double left, double right)
        {
            Thread.Sleep(600);
            if (CanDivide(left, right) == true)
                Result = left / right;
            else MessageBox.Show("Divider cannot be zero.", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
        }

        public async void Plus(double left, double right)
        {
            Result = left + right;
        }

        public async void Minus(double left, double right)
        {
            Result = left - right;
        }

        public async void Multipy(double left, double right)
        {
            Result = left * right;
        }
    }
}
```

&nbsp;&nbsp;3 . ����View��ֻ���CalculatorViewModel��Ӧ��CalculatorView��ΪContentControl�ؼ�Ƕ��ShellView���ɡ���ʱShellView�Ĵ������Ϊ:
```xml
<Window x:Class="CaliburnMicro_Calculator.Views.ShellView"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:CaliburnMicro_Calculator.Views"
        xmlns:cal="http://www.caliburnproject.org"
        mc:Ignorable="d"
        Title="Calculator" SizeToContent="Height" Width="240">

    <Grid MinHeight="200">
        <Button Content="Show Calculator" x:Name="ShowCalculator" Grid.Row="0"></Button>
        <ContentControl x:Name="ActiveItem"></ContentControl>        
    </Grid>
</Window>
```
**������һ��**����ViewModel A��Ƕ��ViewModel B��һ����˵��Ҫ���Ĳ����ǣ�
��A��view��ʹ��ContentControl����B��ViewModelֻ��ʹ�����cal:View.Model="{Binding BViewModel}"���ɣ���B��view��UserControl�Ϳ�������

��ʱCalculatorView��һ��UserControl�������Ϊ:
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

    <StackPanel Background="Beige">
        <StackPanel Orientation="Horizontal">
            <Label Margin="10"
                   Target="{Binding ElementName=left}">
                Operand _1:
            </Label>
            <TextBox Margin="10"
                     Width="72"
                     x:Name="left"/>
        </StackPanel>
        <StackPanel Orientation="Horizontal">
            <Label Margin="10"
                   Target="{Binding ElementName=right}">
                Operand _2:
            </Label>
            <TextBox Margin="10"
                     Width="72"
                     x:Name="right"/>
        </StackPanel>
        <StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
            <Button Margin="10"
                    x:Name="btnPlus" 
                    cal:Message.Attach="[Event Click]=[Action Plus(left.Text, right.Text):result.Text]">
                <Image Source="Images/op1.ICO"/>
            </Button>

            <Button Margin="10"
                    x:Name="btnMinus" 
                    cal:Message.Attach="[Event Click]=[Action Minus(left.Text, right.Text):result.Text]">
                <Image Source="Images/op2.ICO"/>
            </Button>

            <Button Margin="10"
                    x:Name="btnMultiply" 
                    cal:Message.Attach="[Event Click]=[Action Multipy(left.Text, right.Text):result.Text]">
                <Image Source="Images/op3.ICO"/>
            </Button>

            <Button Margin="10"
                    x:Name="btnDivide" IsEnabled="{Binding Path=CanDivide}"
                    cal:Message.Attach="[Event Click]=[Action Divide(left.Text, right.Text):result.Text]">
                <Image Source="Images/op4.ICO"/>
            </Button>

        </StackPanel>
        <StackPanel Orientation="Horizontal">
            <Label Margin="10">
                Answer:
            </Label>
            <TextBox Margin="10"
                     Width="72"
                     Text ="{Binding Path=Result, StringFormat={}{0:F4}, UpdateSourceTrigger=PropertyChanged}" IsReadOnly="True" />
        </StackPanel>
    </StackPanel>
</UserControl>
```
�������ͽ������ڱ������߼��������ӣ�Model��ʱ�ò��ϣ����ڸ���һ�����Ŀ��Model��Ҫ�������ݵĶ�ȡ�����ļ����������ݿ������service���õȣ��Ժ��л������������˵��

�����Ҫ�־û�(persistent)���������ÿ��M-VM(Model��ViewModel)����State�����ʵ�ʹ�����Ҳ�õ��ر�ࡣ

### Part 6: ���ܾ���
Calculator��ҳ��
![Main Page](https://img2018.cnblogs.com/blog/436938/201903/436938-20190325081757557-1375110827.png)


�����ť��ShowCalculator�����ɿ�������ļ�����~

�˷�������
![Multiply](https://img2018.cnblogs.com/blog/436938/201903/436938-20190325081820757-800108336.png)


����������
![Divide](https://img2018.cnblogs.com/blog/436938/201903/436938-20190325081841357-881843872.png)


**����ϴ��룺**
CaliburnMicro-Calculator: A simple Calculator using Caliburn.Micro
https://github.com/yanglr/CaliburnMicro-Calculator��
��ӭfork��star�����иĽ������ӭ�ύpull request~


<br>

<hr>

**���߼��**��Bravo Yeung�������˶ʿ��֪���ɻ�����(��**81K** ��ͬ, **38K** ��л, **235K** �ղ�)�����ڹ��� Top3��������Ƶֱ����˾�������������һ�������������������

<br>

����ת�أ����΢�� **iMath7** ���뿪�ף�

<br>

��ӭ��������������Ĺ۵㣬һ��������ߡ��������������������µ�������ѧϰ���������������µ���ʶ����ӭת������������ˡ�

<br>

��ӭ��λ���߼��� **.NET��������Ⱥ**���ڹ��ںź�̨�ظ�**����Ⱥ��**����**��ѧϰ��**���ɡ�


<br>

![��׼����� ���ں���Ƭ](https://images.cnblogs.com/cnblogs_com/enjoy233/1389971/o_gzhCard_for_blog.png)


### ��ĩ�ʵ�

> ΢�ź�̨�ظ���**asp**�������㣺һ��ȫ����ǿ��ASP.NETѧϰ·��ͼ��
> <br>
> �ظ���**cs**�������㣺һ���� C# �� WPF ѧϰ��Դ��
><br>
> �ظ���**core**�������㣺2019��dotConf����Ϸ�����.NET core 3.0ѧϰ��Ƶ��
