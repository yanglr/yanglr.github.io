---
title: 剑指offer面试题41(a) - 和为S的两个数字
date: 2016-09-30 20:47:40
tags: [oj, 剑指offer]
categories: 
- 编程训练
---

### 题目: 和为S的两个数字

- 热度指数：5650     时间限制：1秒    空间限制：32768K


## 题目描述

输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。 

输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。 




**输出描述:** `对应每个测试案例，输出两个数，小的先输出。`

在线提交网址:

http://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b?tpId=13&tqId=11195&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

### 分析:

牢牢记住数组是递增的这一特征, 从数组两端向中间查找满足条件的两个数. 
设头尾两个指针分别为front和back, front后移, back前移, 也能保证array[front]<array[back] .

1.当array[front]+array[back] = S时, 将array[front], array[back]依次添加到vector中;

2.当array[front]+array[back] < S时, front++, 前段向后移动，两数和向S靠拢;

3.当array[front]+array[back] > S时, back- -, 尾端向前移动，两数和向S靠拢.


已AC代码:

```cpp
class Solution {
public:
    vector<int> FindNumbersWithSum(vector<int> array, int sum) {
        vector<int> res;
        if(array.size() == 0) return res;
        int front=0, back=array.size() - 1;
        while(front < back)
        {
            if(array[front] + array[back]==sum)
            {
                res.push_back(array[front]);
                res.push_back(array[back]);
                break;  // 将找到的第一对放入vector中, 停止
            }
            else if(array[front] + array[back] < sum) front++;
                else back--;
        }
        return res;
    }
};
```


