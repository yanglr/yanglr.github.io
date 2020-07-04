---
title: 剑指offer面试题42(b)之左旋转字符串
date: 2016-09-29 00:31:13
tags: [剑指offer, oj]
categories: 
- 编程训练
---

### 题目: 左旋转字符串

- 热度指数：5722     时间限制：1秒     空间限制：32768K
- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579)


## 题目描述

汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！

在线提交网址:
http://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec?tpId=13

### 分析:
先将输入字符串分成前后两部分str1和str2, 输出的左旋字符串为str2+str1, 然后处理好特殊情形即可. 

```cpp
class Solution {
public:
    string LeftRotateString(string str, int n) {
        if(str.length() == 0) return str;
        if(n<0) return 0;
        string str1, str2;
        for(int i=0; i < n; i++)
        {   
            str1 += str[i];
        }
        for(int i=n; i != str.size(); i++)
        {   
            str2 += str[i];
        }        
        return (str2+str1);
    }
};
```