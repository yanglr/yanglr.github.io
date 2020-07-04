---
title: 华为oj之等差数列前n项和
date: 2016-09-17 15:35:11
tags: [oj]
categories:
- 编程训练
---

### 题目: 等差数列

- 热度指数：1010    时间限制：1秒    空间限制：32768K


## 题目描述

功能: 对于等差数列 2，5，8，11，14...

输入: 正整数N >0

输出: 求等差数列前N项和

返回: 转换成功返回 0 ,非法输入与异常返回-1

 

##### **输入描述:**

```
输入一个正整数。
```

##### **输出描述:**

```
输出一个相加后的整数。
```

##### **输入例子:**

```
2

```

##### **输出例子:**

```
7
```

在线提交网址: http://www.nowcoder.com/practice/f792cb014ed0474fb8f53389e7d9c07f?tpId=37&tqId=21323&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking

### 分析:

使用求和公式, a[n] = d*n - a[0], S[n] = (a[1] + a[n])/2, 算一下就可以写出代码了...



已AC代码:

```cpp
#include<cstdio>
#include<iostream>
using namespace std;

int main()
{
    int n;
    while(cin>>n)
    {
        if(n <= 0) return (-1);
        int sum;
        sum = n*(3*n+1)/2;
        
        cout<<sum<<endl;
    }    
    return 0;
}
```
