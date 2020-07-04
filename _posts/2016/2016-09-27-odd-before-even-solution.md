---
title: 剑指offer面试题14 - 调整数组顺序使奇数位于偶数前面
date: 2016-09-27 15:14:55
tags: [剑指offer, oj]
categories: 
- 编程训练
---



###  题目: 调整数组顺序使奇数位于偶数前面

- 热度指数：11843    时间限制：1秒     空间限制：32768K
- 本题知识点： [数组](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=578)


### 题目描述

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。



在线提交网址:

http://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593?tpId=13&tqId=11166&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking




### 分析: 

不考虑空间损耗, 可以考虑使用odd和even两个vector分别存放基数和偶数, 然后使用copy函数将odd向量的内容和even向量的内容依次填入原array数组即可. 其中有个小技巧: 使用按位与&判断奇偶性比%运算更快一些...


已AC代码:

```cpp
#include<cstdio>
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

class Solution {
public:
    bool isOdd(int x)
    {
        // if(x % 2 == 1)
		if(x & 1 != 0)
			return true;
        return false;
    }    
    void reOrderArray(vector<int> &array) {
        vector<int> odd;
        vector<int> even;
        int len=array.size();
        for(int i=0; i != len; i++)
        {
            if(isOdd(array[i])) odd.push_back(array[i]);
            else even.push_back(array[i]);
        }
        int len1 = odd.size();
        array.clear();
        array.resize(len);
        copy(odd.begin(), odd.end(), array.begin());
        copy(even.begin(), even.end(), array.begin()+len1);        
    }
};
// 以下为测试
int main()
{
	Solution sol;
	int arr[] = {1,2,3,4,5,6};
	vector<int> vect(arr, arr+6);
	sol.reOrderArray(vect);
	for(auto i: vect)
		cout<<i;
	return 0;
}
```
