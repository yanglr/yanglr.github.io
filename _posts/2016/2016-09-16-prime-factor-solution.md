---
title: 华为oj之质数因子

date: 2016-09-16 22:02:17

tags: [oj]

categories:
- [oj, 编程练习]
---

### 题目: 质数因子

- 热度指数：5143    时间限制：1秒    空间限制：32768K
- 本题知识点： [排序](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=590)


## 题目描述

功能:输入一个正整数，按照从小到大的顺序输出它的所有质数的因子（如180的质数因子为2 2 3 3 5 ）

最后一个数后面也要有空格

详细描述：

函数接口说明：

public String getResult(long ulDataInput)

输入参数：

long ulDataInput：输入的正整数

返回值：

String

##### **输入描述:**

```
输入一个long型整数
```

##### **输出描述:**

```
按照从小到大的顺序输出它的所有质数的因子，以空格隔开。最后一个数后面也要有空格。
```

##### **输入例子:**

```
180

```

##### **输出例子:**

```
2 2 3 3 5
```

### 分析:
将输入的数记作n, i从2~n开始遍历去除n, 如果该数能整除n, 第一次除尽时就break, 此时记录下的i值必为质数, 将n更新为n/i, 当n不为1时继续循环, 直至n为1时整个程序结束, 此时所有的质因子输出完毕.

已AC代码:
```cpp
#include<cstdio>
#include<iostream>
using namespace std;

int main()
{
    long n;
    while(cin>>n)
    {
        while(n != 1)
        {
             for(int i=2; i<=n; i++)
             {
                 if(n % i == 0)
                 {
                     n = n / i;          // 每次计算出商后, 判断是否为1, 如果不为1继续执行, 直至为1时结束程序
                     cout<<i<<' ';
                     break;              // 能被该质数"第一次"除尽时就跳到 while(n != 1)
                 }
             }
        }
             
    }    
    return 0;
}
```
