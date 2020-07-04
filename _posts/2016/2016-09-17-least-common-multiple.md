---
title: 华为oj之最小公倍数
date: 2016-09-17 15:19:26
tags: [oj]
categories:
- 编程训练
---

### 题目: 求最小公倍数

- 热度指数：1842    时间限制：1秒     空间限制：32768K

  ​


## 题目描述

正整数A和正整数B 的最小公倍数是指 能被A和B整除的最小的正整数值，设计一个算法，求输入A和B的最小公倍数。

##### **输入描述:**

```
输入两个正整数A和B。
```

##### **输出描述:**

```
输出A和B的最小公倍数。
```

##### **输入例子:**

```
5 
7

```

##### **输出例子:**

```
35
```



在线提交网址: http://www.nowcoder.com/practice/22948c2cad484e0291350abad86136c3?tpId=37&tqId=21331&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking



### 分析:

先用欧几里得(Euclidean)算法求出两数最大公约数, 再利用最小公倍数`lcm*gcd = n*m` 求得最小公倍数即可.



已AC代码:
```cpp
#include<cstdio>
#include<iostream>
using namespace std;

int gcd(int a, int b)  // 欧几里得算法(辗转相除法)求最大公约数
{
    if(b == 0) return a;
    return gcd(b, a%b);    
}
int main()
{
    int n, m;
    while(cin>>n>>m)
    {
        int res;
        res = n*m/gcd(n, m);   // 最小公倍数lcm*gcd = n*m
        cout<<res<<endl;
    }    
    return 0;
}
```

