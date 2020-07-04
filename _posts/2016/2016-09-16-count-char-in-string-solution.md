---
title: 华为oj之计算字符个数

date: 2016-09-16 22:31:09

tags:
 [oj]
categories: 
- 编程训练
---



### 题目: 计算字符个数

- 热度指数：8276   时间限制：1秒   空间限制：32768K
- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579)


## 题目描述

写出一个程序，接受一个有字母和数字以及空格组成的字符串，和一个字符，然后输出输入字符串中含有该字符的个数。不区分大小写。

##### **输入描述:**

```
输入一个有字母和数字以及空格组成的字符串，和一个字符。
```

##### **输出描述:**

```
输出输入字符串中含有该字符的个数。
```

##### **输入例子:**

```
ABCDEF
A
```

##### **输出例子:**

```
1
```



在线提交网址:
http://www.nowcoder.com/practice/a35ce98431874e3a820dbe4b2d0508b1?tpId=37&tqId=21225&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking


### 分析:

遍历输入的字符串, 将当前位置的字符与输入的字符进行比较, 如果差值为32、-32或0, 则将计算器+1. (注意: 不区分字母大小写)

已AC代码:

```cpp
#include<cstdio>
#include<iostream>
#include<string>
using namespace std;

int main()
{
    string str;
    char ch;
    cin>>str>>ch;
    int len = str.length();
    int count = 0;
    for(int i=0; i != len; i++)
    {
        if( (str[i] - ch == 32 || str[i] - ch == -32) || str[i] == ch)   // 不区分大小写
        {
            count++;
        }
    }
    cout<<count<<endl;
    return 0;
}
```





