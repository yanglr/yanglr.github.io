---
title: 剑指offer面试题42(a)之翻转单词顺序列
date: 2016-09-28 23:48:56
tags: [剑指offer, oj]
categories: 
- 编程训练
---


### 题目: 翻转单词顺序列

- 热度指数：5140     时间限制：1秒     空间限制：32768K
- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579)


## 题目描述

牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？

在线提交网址: 
http://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3?tpId=13&tqId=11197&rp=1

### 分析:
逐个字符进行读取, 如果遇到空格则进行字符串的反向拼接, 否则保持当前单词中的字符顺序, 最后将结果输出即可.


下面是AC后代码:
```cpp
#include<cstdio>
#include<iostream>
#include<string>
using namespace std;

class Solution {
public:
    string ReverseSentence(string str) {
        string res, temp; // temp表示当前单词, res表示最后输出的字符串       
        for(unsigned int i=0; i != str.size(); i++)
        {
            if(str[i] == ' ')
            {
            res = " " + temp + res; // 反向进行拼接
            temp = "";               
            }
            else temp += str[i]; // 保持当前单词中的字符顺序
        }        
        if(temp.size() != 0)
            res = temp + res;
        return res;
    }
};

int main()
{       
    Solution sol;
    string str;
    cin>>str;
    string res = sol.ReverseSentence(str);
    for(auto i: res)
        cout<<i;    
    return 0;
}
```
