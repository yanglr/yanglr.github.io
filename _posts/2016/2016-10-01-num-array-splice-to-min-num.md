---
title: 剑指offer面试题33 - 把数组排成最小的数
date: 2016-10-01 01:19:07
tags: [oj, 剑指offer]
categories: 
- [oj, 编程训练]
---



### 题目: 把数组排成最小的数

- 热度指数：5068        时间限制：1秒       空间限制：32768K

- 本题知识点： [数组](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=578)


## 题目描述

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。



### 分析:

将输入的数组当成字符串数组来处理, 最小的数放最前面时拼接得到的数最小, 最后将字符串结果输出...

可以用C++11的to_string, 也可用stringstream中的str()函数.



已AC代码:
```cpp
class Solution {
public:
    static bool comp(const string &str1, const string &str2)
    {
        string s1 = str1+str2;
        string s2 = str2+str1;
        return (s1<s2); // 数字字符串按“字典序”从小到大排列
    }
    string PrintMinNumber(vector<int> numbers) {
        string res;
        vector<string> numStr;
        if(numbers.size() == 0) return res;
        for(int i=0; i<numbers.size(); i++)
        {
            stringstream ss;
            ss<<numbers[i];
            numStr.push_back(ss.str());            
        }
        sort(numStr.begin(), numStr.end(), comp);  // 最小的数放最前面时拼接得到的数最小
        for(unsigned int i=0; i<numStr.size(); i++)
        {
            res += numStr[i];  // res.append(numStr[i]); append()可追加字符或字符串
        }
        return res;
    }
};
```
最后循环处输出也可用C++11的风格来写:
```cpp
        for(auto it: numStr)
        {
            res += it;
        }
```

**注意:**
sort中的比较函数comp()要声明为静态成员函数或全局函数，不能作为普通成员函数，否则会报错。

原因: 非静态成员函数是依赖于具体对象的，而std::sort这类函数是全局的，因此无法再sort中调用非静态成员函数。静态成员函数或者全局函数是不依赖于具体对象的, 可以独立访问，无须创建任何对象实例就可以访问。同时静态成员函数不可以调用类的非静态成员。