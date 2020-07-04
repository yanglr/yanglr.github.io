---
title: 华为oj之求int型正整数在内存中存储时1的个数
date: 2016-09-16 16:55:09
tags: [oj]
categories:
- 编程练习
---

### 题目: 求int型正整数在内存中存储时1的个数

- 热度指数：4427   时间限制：1秒    空间限制：32768K


## 题目描述

输入一个int型的正整数，计算出该int型数据在内存中存储时1的个数。

##### **输入描述:**

```
 输入一个整数（int类型）
```

##### **输出描述:**

```
 这个数转换成2进制后，输出1的个数
```

##### **输入例子:**

```
5

```

##### **输出例子:**

```
2
```

在线提交网址: http://www.nowcoder.com/practice/440f16e490a0404786865e99c6ad91c9?tpId=37&tqId=21238&rp=&ru=/ta/huawei

### 分析:

看到此题, 想到两种办法:

- 将该整数转为二进制的字符串, 然后去数里面字符`1`的个数;
- 巧妙使用n&(n-1)计算出1的个数. (参见 剑指offer 面试题10：二进制中1的个数 题解 -  CSDN  http://blog.csdn.net/lzuacm/article/details/51308149)

下面是用方法2写成的代码, 顺利AC.

```cpp
#include<cstdio>
#include<iostream>
using namespace std;

int digit1ofNum(int n)
{
    int count=0;
    while(n != 0)
    {
        n = n&(n-1);// 每进行一次，将最右侧存有1的bit的值置为0，直到全0，退出循环
        count++;
    }    
    return count;
}

int main()
{   
    int n;
    cin>>n;
    cout<<digit1ofNum(n)<<endl;
    return 0;
}
```

相关链接:
c++ - Changing integer to binary string of digits - Stack Overflow  http://stackoverflow.com/questions/8222127/changing-integer-to-binary-string-of-digits

c - n & (n-1) what does this expression do? - Stack Overflow  https://stackoverflow.com/questions/4678333/n-n-1-what-does-this-expression-do?noredirect=1&lq=1

c - n & ~(n - 1) What does this function do? - Stack Overflow  https://stackoverflow.com/questions/21502303/n-n-1-what-does-this-function-do