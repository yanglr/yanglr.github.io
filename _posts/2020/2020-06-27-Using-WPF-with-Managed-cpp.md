---
layout: post
title: 基于托管的C++来使用WPF - Using WPF with Managed C++
categories: [WPF, C++]
# platform: 公众号
# gzhname: 大白技术控
tags: [WPF, C++]
excerpt: 基于托管的C++来使用WPF - Using WPF with Managed C++
---

基于托管的C++来使用WPF - Using WPF with Managed C++

Posted by **Zeeshan Amjad**

This article was originally published on `August 12th, 2009`

## 1. Introduction

The purpose of this article is two folds. At the first half we discuss what WPF is. In addition we studied why and how to program WPF using Managed C++ and high level overview of WPF architecture. Latter we scratch the surface of Loan Amortization with one working example of Loan Amortization in WPF using C++.

## 2. What is WPF?

Before going to study the WPF one might ask a question that what is WPF? WPF is abbreviation of "Window Presentation Foundation". It is a next generation presentation system for building window client application that can be run stand alone as well as in a Web Browser (i.e. XBAP Application). WPF is based on .Net environment, it means it is a managed code and theoretically can be written with any .Net based language such as Visual C#, VB.Net and Managed C++. WPF introduced with .Net 3.0 with few other important technologies such as Windows Communication Foundation (WCF) and Windows Workflow Foundation (WF), but here we are going to study only WPF.

WPF is the latest Microsoft technologies to create user interface. It was introduced with .Net 3.0 and then improved in .Net 3.5 and .Net 4.0 (Beta as of now). It does not depend on Windows Standard control; it draws everything from DirectX technology and takes full advantage of 3D graphics and hardware accelerator if available.

Most of the programmer thought that WPF is a feature of Visual C# and VB.Net can be done only in these languages. Although writing WPF programs in these languages are quite easy and fun, but it is not limited to only this. WPF is in fact a feature of .Net introduced with its version 3.5; therefore technically any .Net language can use it.

If this is a case then why there are so many WPF samples written only in C# and VB.Net codes even in MSDN? The best answer might be because of XAML. When using C# or VB.Net then we can take full advantage of XAML, which is not available in VC++.Net. It means when you are trying to write WPF code in Managed C++, then you are on your own and have to write code for everything. It may be a daunting task but not impossible and in fact there are few samples available with Microsoft SDK such as PlotPanel, RadialPanel, CustomPanel etc.

### 2.1. Why Managed C++ for WPF?

Next question is why should we use Managed C++ in Visual C++ to write WPF application when we can do the same thing in C# or VB.Net with XAML? There can be different reasons for it.

- You lots of code base written in VC++ unmanaged code and it is not possible to rewrite everything in C#. You want to take advantage of both managed and unmanaged code in your project, such as using MFC document view architecture with rich user interface of WPF without creating any new DLL in C#.
- Portion of your programs should be optimized for speed and for performance reason you write unmanaged code for it. WPF internally used the same technique for performance reason to call DirectX.
- You want to hide the implementation of some portion of your program and or algorithm so no one can reverse engineer and write it as unmanaged code so no one can reverse engineer your code using ildasm.
- Just for fun.

### 2.2. WPF Programming in VC++

To create simplest WPF program using Managed C++, you have to include reference of .Net components named windowsbase.dll, presentationcore.dll and presentationframeworkd.dll. In addition the program must be compiled using /clr switch because it is a managed code. Here is a diagram to show one project that has added references of these three DLL. To add the reference, right click on the project in the Solution Explorer tree and select "Reference..." from there.

![img](https://www.codeguru.com/images/article/16355/loan_01.gif)

If we want to create a simple windows based program then it would be something like this.

```cpp
#include <windows.h>
using namespace System::Windows;
 
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,
				   LPSTR lpCmd, int nCmd)
{
	MessageBox::Show("Hello World");
}
```

This program does nothing more than simply display one message box. We can further shorten the program by using main instead of WinMain and avoid including windows.h header file altogether, but in that case we will see the black console window behind the message box.

If we want to make something more useful and interesting then we have to create objects of at least two classes Window and Application. But remember there can be only one object of Application class in the whole program. Here is the simplest program to show the usage of Window and Application class.

```cpp
#include <windows.h>
using namespace System;
using namespace System::Windows;
 
[STAThread]
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,
				   LPSTR lpCmd, int nCmd)
{
	Window^ win = gcnew Window();
	win->Title = "Hello World";
 
	Application^ app = gcnew Application();
	app->Run(win);
}
```

The output of this program is a blank window with a title "Hello World". Here Application class is used to start the WPF application, manage the state of application and application level variables and information, but there is no output of it. It is Windows class that is responsible to draw window on the screen. Run method should be the last method call in the program, because this method won't return until the program close. Return value of Run method is application exit code return to the operating system.

It is not necessary to pass the window object as a parameter in the run function of application class. We can call Run function without any parameter, but if we call the Run function without any parameter then we have to call the Show or ShowDilaog function of Window class before calling the Run. Difference between Show and ShowDialog is Show display the model dialog, on the other hand ShowDialog display the modeless dialog. For our simple application it doesn't make any difference.

You can inherit your classes from Window and Application classes to store some application specific or window specific information. But remember you class must be inherited using the "ref" keyword and use "gcnew" keyword to create an instance of it on managed heap. Here is a simple program to show the usage of user inherited Window and Application classes.

```cpp
#include <windows.h>
using namespace System;
using namespace System::Windows;
 
public ref class MyWindow : public Window
{
public:
	MyWindow()
	{
		Title = "Hello World";
	}
};
 
public ref class MyApplication : public Application
{
};
 
[STAThread]
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,
				   LPSTR lpCmd, int nCmd)
{
	MyWindow^ win = gcnew MyWindow();
 
	MyApplication^ app = gcnew MyApplication();
	app->Run(win);
}
```

Output of this program is same as the previous one. In this program we can store all the application specific information in MyApplication class and Window specific information in MyWindow class. For example we set the title of the window in the constructor rather than in main after creating the object of it. We can also set other properties of window such as its back ground color, size, etc in the same place i.e. constructor.

These classes and their usages looks quite familiar with MFC. In MFC based application we also need object of two classes named CWinApp and CWnd. Similarly we create only one object of CWinApp based class and call the run method of CWinApp.

### 2.3. WPF Class Hierarchy

As we have seen before that to make smallest WPF application that display its own window we have to create objects of at least two classes named Window and Application. Before going further let's take a look at these two classes in little bit more detail. Here is a class diagram to show the inheritance chain for Application and Window class.

![img](https://www.codeguru.com/images/article/16355/Loan_02.gif)



### 2.4. High Level Architecture of WPF

If we see the higher level architecture of WPF then the best approach is to write code in any .Net language weather it is C#, VB or C++ rather than using XAML. If we write code in any programming language then we understand about WPF classes in more detail.

When we write WPF program then it internally uses DirectX to draw everything including all controls. All WPF calls are passed to DirectX via Media Integration Layer. For performance reason Media Integration Layer is written in unmanaged code. Here is an overall diagram of WPF application.

![img](http://www.codeguru.com/images/article/16355/loan_03.gif)

There are few other layers which are not shown here. Such as taking the input from user is responsibility of user32.dll. In addition WPF is written in .Net based language, it means WPF application uses .Net language and run on common language runtime not shown in this diagram.

#### 2.4.1. WPF Layer

Now let's dig down little bit more and try to explore these layers in little bit more detail. First layer in this stack is your application code that is of course a managed code written in any .Net language. In case of Managed C++ it can be a mixture of managed and unmanaged code compiled with /clr switch.

Second layer of the stack is WPF layer. It is composed by three DLLs named WindowsBase.dll, PresentationCore.dll and PresentationFramework.dll. All WPF programs whether written in C++, C# or VB.Net has to include the reference of these DLLs.

![img](http://www.codeguru.com/images/article/16355/loan_04.gif)

The first component in WPF layer is WindowsBase.DLL. This DLL provides some very basic level functionality to the WPF which can be used in other applications too. This DLL provides the support of threading and dependency property, which we are going to study in more detail in the following sections.

Second component PresentationCore.DLL provides the basic building block for WPF framework. From the design prospect WPF divides its classes in two groups, the core and framework. This DLL has some core functionality of WPF classes such as Visual to draw something and UIElement, basic building block that WPF Framework uses.

`PresentationFrameWork` provides the support of WPF framework. This DLL has support for layout, event handling, controls, animation and almost everything WPF has. When writing a WPF program, we usually use the classes defined in this component. All the controls such as Label, TextBlock, Button, Menu etc are defined in this component.

#### 2.4.2. Media Integration Layer

The other layer of WPF program is Media Integration Layer. It is written in unmanaged code for performance reason and directly interfaces with DirectX. This layer has two important component milcore.dll and windowscodecs.dll. Milcore.dll is responsible for give 2D and 3D support and windowscodecs.dll is support different imaging support.

![img](http://www.codeguru.com/images/article/16355/loan_05.gif)

Here is a combine diagram to show all the major component of WPF application. This diagram shows all major components of WPF application. Please note that in this diagram we only focus on WPF and DirectX, because WPF internally uses DirectX to draw everything on the screen. But there are other components also involved in any WPF or any windows based program. It still uses User32.dll to get user input and operating system kernel DLL and device driver to hardware interface. In addition it is also understood that WPF code also runs in managed environment. It means WPF layer is based on Common run time environment. To make things simple, we only focus those elements in this diagram, which are part of WPF.

![img](http://www.codeguru.com/images/article/16355/loan_06.gif)



## 3. Time Value of Money

The time value of money is a very basic concept in financial engineering and lots of other concepts are built on it. Here we study the value of money with respect to time (i.e. how much the value of money would be change from time). The value of money changes either from time or from interest rates. If you assumed that the interest rate is same during the whole time period, then the only factor that can change the value of money is time.

### 3.1. Compound Interest

Compound interest is the most common method of calculating the interest in real life. The difference between simple interest and compound interest is that in simple interest you will get profit only in the first year's value of the money; however in compound interest you will get money on every year's value of the money. For example if you have $1000 and your bank will give you 10% interest rate then after one year the value of your money will become $1100. In case of simple interest you will still get the second year's profit based on the first year value, $1000. In the case of compound interest, you will get profit on $1100 for the second year.

In compound interest you will get profit on every year's value not only the first year value therefore the value of money will increase more rapidly in compound interest than simple interest. We show the change of the value of money in ten years in the given table.

![img](http://www.codeguru.com/images/article/16355/loan_07.gif)

Demonstrating the same thing in the form of graph shows a curve as can be seen in the figure.

![img](http://www.codeguru.com/images/article/16355/loan_08.gif)

The easiest way to calculate the compound interest is that first convert the interest in one point form then multiplies it with original value.

For example to convert 12.5% into one point form, first divide it by 100 then add one in the result. It will become 1.125. If we multiply the original amount with this then we will get the value of money after one year. To get the value of money after two year, we will multiply the original value with 1.125 twice.

Mathematically we can write this in this way

![img](http://www.codeguru.com/images/article/16355/loan_09.gif)

### 3.2. Period Compound Interest

It is not uncommon to get profit more than once per year, such as after every six months, monthly etc. This is known as Periodic Compound Interest. In that case we simply divide the interest rate with the number of times we get profit in the year. For example, if you are getting profit with 10% interest rate annually and you want to get profit after every six months then your interest rate will be 5% not 10% because you are getting profit twice per year.

Let's take a look this with one example. Suppose you invest $1500 in a bank with 6% interest rate. We have already seen the method to calculate the compound interest annually. Here is the table to show the compound interest calculated annually for 5 years

![img](http://www.codeguru.com/images/article/16355/loan_10.gif)

Here is the table to show the interest calculated bi annually.

![img](http://www.codeguru.com/images/article/16355/loan_11.gif)

This table shows that we will get more profit with monthly than annually. It is even more than bi-annually.

In other words the higher the number of times we get the profit, the higher the profit we get at the end of the year. Here is the mathematical formula to calculate the profit taken more than once.

![img](http://www.codeguru.com/images/article/16355/loan_12.gif)

### 3.3. Annuity

In financial engineering annuity is a concept of taking or giving some predefined money at some specified time, for example if you pay the installment of your car or withdraw some specific money from the bank every month. The important thing about annuity is that the amount should be same and periodic.

Suppose you deposit some money in your bank every year. If you are not getting any profit then after some years the value of your money will be the multiple of the number of year. For example if you deposit $1000 in a bank for 5 years then you will have $5000 after 5 years.

As we know that the value of money changes with respect to time and that change is depend on the interest rate. Let's suppose we are getting 10% interest rate from the bank. In this case we won't get any profit at the end of first year, because we deposited that money at the end of year and that money was not in the bank for the whole year. At the end of second year, we will get profit on the first year money because that money was in the bank for whole year and we won't get any profit of the money which we deposited at the end of second year. Similarly at the end of third year we will get the profit of first two years money because that money was in the bank for the whole year.

In other words we can say that if we deposit "x" amount in a bank for "n" years then we won't get any profit on the money which we deposit at the last year. We will get only one year profit on the money that we will deposit at "n-1" year because that money will be in the bank for only one year. The money we will deposit at "n-1" year, we will get 2 years profit, because that money will be in the bank for 2 years. In the same way we will get the "n-1" year profit on the first year money because that money will be in the bank for "n-1" years. Now the value of our annuity will be the sum of all of these values. In this table we show the profit on $1000 with 10% interest rate for different 1 year to 5 years.

It means this will be the value of our money after every year.

![img](http://www.codeguru.com/images/article/16355/loan_13.gif)

If we make a graph of this then it will be a curve.

![img](http://www.codeguru.com/images/article/16355/loan_14.gif)

Mathematically we can write the same thing this way

![img](http://www.codeguru.com/images/article/16355/loan_15.gif)

![img](http://www.codeguru.com/images/article/16355/loan_16.gif)

![img](http://www.codeguru.com/images/article/16355/loan_17.gif)

This is a geometric series. Using the geometric series formula for sum, it will become something like this.

![img](http://www.codeguru.com/images/article/16355/loan_18.gif)

### 3.4. Annuity with more than one payment per year

In real life most of our payments are monthly, biannually or quarterly basis not on annually basis. In this section we are going to study what will be the effect of this on annuity when we have more than one payment in the year. We have already study the concept of more than one payment during the study of time value of money.

If we have more than one payment per year then we simply divide the interest rate by the number of payments per year because interest rate is usually given in annual interest rate form. In addition we multiply the number of years by the number of payments per year, because now we are getting (or paying) more payments.

We already know how to calculate the future value of annuity when there is only one payment per year. Here is the modified formula to calculate the future value of annuity when there is more than one payment per year.

![img](http://www.codeguru.com/images/article/16355/loan_19.gif)

### 3.5. Loan Amortization

If we take a loan then we usually pay it easily monthly installments. This is in fact application of annuity with more than one payment per year. To calculate the monthly payment of the loan first we have to calculate the present value of the annuity.

We already studied how to calculate future value of money using this formula.

![img](http://www.codeguru.com/images/article/16355/loan_09.gif)

If we just modify this formula little bit then we can calculate the present value of money. Here is a formula to calculate the present value of the money.

![img](http://www.codeguru.com/images/article/16355/loan_20.gif)

To calculate the present value of annuity, we have to calculate the present value of all the money we deposit (or withdraw) into a bank and then sum it. Mathematically we can write it in this way.

![img](http://www.codeguru.com/images/article/16355/loan_21.gif)

![img](http://www.codeguru.com/images/article/16355/loan_22.gif)

This is again a geometric series. Here is the sum of this series using geometric series formula.

![img](http://www.codeguru.com/images/article/16355/loan_23.gif)

If there is more than one payment per year then we have to divide the interest rate by the total number of payments per year and multiply total number of years. Here is a modified formula to calculate the present value of annuity if there is more than one payment per year.

![img](http://www.codeguru.com/images/article/16355/loan_24.gif)

If we already know the present value of annuity (i.e. amount of loan we are going to take) interest rate and the payment method (i.e. weather it is going to be monthly, quarterly, yearly etc) then we can easily rearrange this formula to calculate the payment amount of the loan. Here is the formula to calculate the payment amount of loan. For monthly payment the value of n should be 12, i.e. 12 payments per year.

![img](http://www.codeguru.com/images/article/16355/loan_25.gif)

Let's suppose e get $5000 loan from a bank with 12.5% interest rate. Just to keep our calculation small we assumed that we are going to pay off the loan in one year, so we will have only 12 payments.

By using the above formula our monthly payment would be $445.4143. Now the question is how much money of this payment is going to pay the interest and how much will be used to paid off the principle amount. We can calculate the interest on this money using time value of money formula.

![img](http://www.codeguru.com/images/article/16355/loan_26.gif)

```
FV = 5052.08333
```

The interest after one month will be

```
Interest = Future Value - Present Value
Interest = 5052.08333 - 5000
Interest = 52.08333
```

The remaining amount of your payment will be the principle amount.

```
Principle = Payment - Interest
Principle = 455.4143 - 52.08333
Principle = 393.331
```

Now our new amount will be

```
Amount = 5000 - 393.331
Amount = 4606.669202
```

And the second month's interest will be calculated on this new amount. Similarly we can calculate the interest part and principle amount part of each payment for every payment. Here we showed the same thing in tabular form, here 5th and 6th columns shows the interest part and principle amount part of the monthly payment respectively.

![img](http://www.codeguru.com/images/article/16355/loan_27.gif)

If we take a look at this table carefully then we can observe that the amount of interest rate will decrease after every month. In first month we pay $52.08 interest, in second month it became $47.98, in third month it became $43.84 and in last month we pay only $4.59 interest. This is because the principle amount decrease every month, and we already know that if interest rate and time is constant then the only factor to change the value of interest is original amount. Lower the amount, lower the interest rate is.

On the other hand the amount of principle amount will increase from every previous month. The reason of this phenomenon is very obvious; because the value of monthly payment is same and interest rate decrease every month then the remaining amount will increase every month. In other words, as month goes on, the value of your principle amount will decrease more rapidly.

We can show the same thing in this graph. Here we displayed two graphs; first one shows the interest part of the monthly payment and other shows the principle amount part of the payment.

![img](http://www.codeguru.com/images/article/16355/loan_28.gif)

This graph shows the value of interest we pay each month to pay off the loan. This graph is strictly decreasing; means the value of interest will decrease every month. It looks like a straight line, but in fact this is a curve. There are twelve payments in this example, but if we have an example of 30 years home mortgage, i.e. 360 payments then we can see this easily.

What is the meaning of curve line instead of straight line? We have already seen that the amount of interest decrease, but the ratio of reduction of interest rate is not same during every month. The ratio of decreasing the interest part will increase in each passing month. It means the interest of interest we pay each month will reduce more rapidly than same every month.

In the above example if we take a difference between the interest part of first two payments then it would be

```
Difference
```

1

```
 = 52.08333 - 47.9861Difference
```

1

```
 = 4.097198
```

Similarly the difference between the interest part of the second month and third month would be

```
Difference
```

2

```
 = 47.9861 - 43.8462
 Difference
```

2

```
 = 4.139877
```

We can verify that the difference between the interest parts of two consecutive payments will always increase.

The situation of principle amount part is no different. Let's take a look at the principle amount part of the payment. Here is the graph of principle amount part of the payment.

![img](http://www.codeguru.com/images/article/16355/loan_29.gif)

This graph is very much similar to the interest rate part of the payment graph. The only difference is the direction. This is also a curve just like the interest part graph but here we can see the amount of principle amount is increasing. The difference between any two consecutive principle amount parts will be exactly same as we have seen in the interest graph, but with a negative sign. Reason behind this is very simple, we have fixed monthly payment every months and it contains only two parts, interest and principle; so whatever value is excluded from one portion will automatically be included into other portion.

For every payment there are two parts of payment the interest part and principle amount part.

```
PMT = INTEREST + PRINCIPLE
```

We have different value of interest and principle amount in each payment. In general we can represent it in such way

PMT<sub>i</sub> = R<sub>i</sub> + P<sub>i</sub>

We already saw that the principle amount will reduce with each payment. It depends on the interest calculated in the previous principle amount. Here is the formula to calculate the remaining principle amount after a specified amount of time, say after "n" months.

![img](http://www.codeguru.com/images/article/16355/loan_30.gif)

![img](http://www.codeguru.com/images/article/16355/loan_31.gif)

This is again a geometric series. We can calculate the sum of it using geometric series formula. The value of Principle amount after nth payment would be

![img](http://www.codeguru.com/images/article/16355/loan_32.gif)

Similarly if we want to calculate the interest part of any specific period then first we have to calculate the principle amount remaining at that time and multiply it with interest rate. Here is the formula to calculate the interest part of any specific payment.

R<sub>n</sub> = A<sub>n</sub> * r

![img](http://www.codeguru.com/images/article/16355/loan_33.gif)

![img](http://www.codeguru.com/images/article/16355/loan_34.gif)

After solving this geometric series we get the formula to calculate the interest part of any particular payment. Here is the formula to calculate the interest part of any payment.

![img](http://www.codeguru.com/images/article/16355/loan_35.gif)

Once we calculated the interest part then principle amount part is very easy to calculate. Any payment has only two parts principle amount and interest, if we already calculate the interest part then we can subtract it from the payment to get the principle amount part. Here is the formula to calculate the principle amount part of the payment.

PMT<sub>i</sub> = R<sub>i</sub> + P<sub>i</sub>

![img](http://www.codeguru.com/images/article/16355/loan_36.gif)



## 4. Loan Amortization Application in WPF

We have all of our required formulae so we can write small functions to perform these calculations. Here are the auxiliary functions to calculate remaining balance, interest part and principle amount part of any particular payment.

```cpp
// Calculate the remaining balance at particular payment
double PaymentWindow::CalculateBalance(int month)
{
	double interestTerm = Math::Pow((1 + interestRate), month);
	double totalInterest = principle * interestTerm;
	double totalPaid = payment * (interestTerm - 1) / interestRate;
	return totalInterest - totalPaid;
}
 
// Calculate the Interest part of any particular payment
double PaymentWindow::CalculateInterestPart(int month)
{
	double interestTerm = Math::Pow((1 + interestRate), (month - 1));
	double totalInterest = principle * interestTerm;
	double totalPaid = payment * (interestTerm - 1) / interestRate;
	return (totalInterest - totalPaid) * interestRate;
}
 
// Calculate the principle part of any particular payment
double PaymentWindow::CalculatePrinciple(int month)
{
    return payment - CalculateInterestPart(month);
}
```

We need to take four inputs such as total payment, interest rate, total number of payment per year, total number of years and type of payments. We need auxiliary class to store information about all payments and export these as properties so we can use this in list control. Here is our auxiliary class.

```cpp
public ref class PaymentInfo
{
private:
	int paymentNo;
	double payment;
	double principle;
	double interest;
	double balance;
 
public:
	property int PaymentNo
	{
		int get()
		{ return paymentNo; }
 
		void set(int value)
		{ paymentNo = value; }
	}
 
	property double Payment
	{
		double get()
		{ return payment; }
 
		void set(double value)
		{ payment = value; }
	}
 
	property double Principle
	{
		double get()
		{ return principle;	}
 
		void set(double value)
		{ principle = value; }
	}
 
	property double Interest
	{
		double get()
		{ return interest; }
 
		void set(double value)
		{ interest = value;	}
	}
 
	property double Balance
	{
		double get()
		{ return balance; }
 
		void set(double value)
		{ balance = value; }
	}
};
```

Here is an auxiliary function to calculate the interest part, principle amount part and remaining balance after each payment and add those items in the list control.

```cpp
// Calculate the complete amortization schedule and fill the list control
void PaymentWindow::CalculatePayment()
{
	Title = L"Amortizatin Schedule for " + Convert::ToString(totalpayments) + " Payments";
 
	// calculate interest term
	double interestTerm = Math::Pow((1 + interestRate), totalpayments);
 
	// calculate payment
	payment = (principle * interestRate) / (1 - (1 / interestTerm));
 
	for (int iIndex = 1; iIndex <= totalpayments; ++iIndex)
	{
		PaymentInfo^ paymentInfo = gcnew PaymentInfo();
		paymentInfo->PaymentNo = iIndex;
		paymentInfo->Balance = CalculateBalance(iIndex);
		paymentInfo->Payment = payment;
		paymentInfo->Interest = CalculateInterestPart(iIndex);
		paymentInfo->Principle = CalculatePrinciple(iIndex);
 
		lstView->Items->Add(paymentInfo);
	}
}
```

Here is the output of the program.

![img](http://www.codeguru.com/images/article/16355/loan_37.gif)

This program is not restricted to monthly payments only. We can select different payment methods such as Monthly, Quarterly, Bi-Yearly, Yearly or daily. There is one enum defined for the payment selection.

```cpp
enum PaymentMethod
{
	NotSelected = 0,
	Monthly,
	Quartly,
	BiYearly,
	Yearly,
	Daily
};
```

Here is the output of the amortization schedule. This dialog display the monthly payment, the total amount paid over time and the interest and principle amount part of every payment.

![img](http://www.codeguru.com/images/article/16355/loan_38.gif)

<br>

**Reference:**
<https://www.codeguru.com/cpp/cpp/cpp_managed/general/article.php/c16355/Using-WPF-with-Managed-C.htm>