---
title: 华为oj之字符串最后一个单词的长度
date: 2016-09-16 15:07:25
tags: [oj]
categories:
- 编程训练
---

### 题目: 字符串最后一个单词的长度
热度指数：9697    时间限制：1秒    空间限制：32768K
本题知识点： 字符串

### 题目描述
计算字符串最后一个单词的长度，单词以空格隔开。

### 输入描述:
一行字符串，非空，长度小于5000。


### 输出描述:
整数N，最后一个单词的长度。

### 输入例子:
hello world

### 输出例子:
5

在线提交网址: <http://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da?tpId=37&tqId=21224>

### 分析:
此题又不少解决办法, 下面po出一种解题方案: 从后向前来扫描输入的字符串, 然后用状态变量flag来记录当前位是否为空格, 字符串最末尾的空格全部跳过, 当遇到第一个非空格的字符时改变flag的值, 计数器+1, 直到flag的状态值为0, 且当前字符是空格时终止循环(break). 

注意: 此题的输入不能使用`cin>>stringvar`, cin遇到空格、tab键、换行等均会停止, 不过有getline()函数可以解决此问题.

而getline()函数有两种方法可以使用:
```
 std::getline(std::cin, stringvar);
```

```
char stringvar[100];
cin.getline(input,sizeof(stringvar));
```
推荐使用前一种方法.

已AC代码如下:

```cpp
#include<cstdio>
#include<iostream>
#include<string>          // 必需
using namespace std;
int main()
{ 
    string str;
    int flag=1;       // 记录当前位置是否为空格
    int lastlen=0;   
    while(getline(cin, str))
    {
       int len=str.length();
       for(int i=len-1; i >= 0; --i)
    	{
        if(flag==1 && str[i] == ' ')
        	{
            continue;
        	}
        else if(str[i] != ' ')
       		{
            flag=0;
            lastlen++;
        	}
       if(flag==0 && str[i]==' ')
       		{
           break;
       		}
    	}
    }
    cout<<lastlen<<endl;
    return 0;
}
```