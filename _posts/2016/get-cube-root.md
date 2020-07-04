---
title: 华为oj之求解立方根
date: 2016-09-17 16:18:46
tags: [oj]
categories: 
- 编程训练
---

### 题目: 求解立方根

- 热度指数：1008   时间限制：1秒   空间限制：32768K


## 题目描述

•计算一个数字的立方根，不使用库函数

立方根的逼近迭代方程是 y(n+1) = y(n)*2/3 + x/(3*y(n)*y(n)),其中y0=x. 求给定的x经过n次迭代后立方根的值。 



详细描述：

•接口说明

原型：

public static double getCubeRoot(double input)

输入:double 待求解参数

返回值:double  输入参数的立方根

##### **输入描述:**

```
待求解参数 double类型

```

##### **输出描述:**

```
输入参数的立方根 也是double类型

```

##### **输入例子:**

```
216

```

##### **输出例子:**

```
6.0
```

在线提交网址: http://www.nowcoder.com/practice/caf35ae421194a1090c22fe223357dca?tpId=37&tqId=21330&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking



已AC代码:

```cpp
#include<cstdio>
#include<cmath>
#include<iostream>
using namespace std;

double getCubeRoot(double input)
{
    if(input == 0) return (double)0;
    double pre = 0;
    double res = 1;
    while(abs(res-pre) > 0.000001)
    {
        pre = res;
        res = (2*res + input/(res*res) )/3;   // 迭代公式
    }
    return res;
}

int main()
{
    double in;
    while(cin>>in)
    {
        double res;
        res = getCubeRoot(in);
        printf("%.1f", res);           // 如果需要四舍五入保留1位小数, 最后应该用res+0.05, n位小数则需加5*pow(0.1, n+1)
    }
    return 0;
}
```

相关链接: 
http://blog.csdn.net/lzuacm/article/details/51335995
http://ilovers.sinaapp.com/article/迭代法求平方根和立方根
http://blog.csdn.net/never_cxb/article/details/47734519