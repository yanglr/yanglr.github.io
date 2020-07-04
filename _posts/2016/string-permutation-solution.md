---
title: 剑指offer面试题28 - 字符串的排列
date: 2016-09-27 22:04:24
tags: [oj, 剑指offer]
categories:
- 编程训练
---



### 题目: 字符串的排列

- 热度指数：5777    时间限制：1秒    空间限制：32768K
- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579)


## 题目描述

输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。 结果请按字母顺序输出。 

输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。 结果请按字母顺序输出。


**输入描述:**`输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。`

### 分析: 
方法1: 递归解法

方法2: dfs

方法3: 先对输入的字符串进行重新排序, 然后使用stl算法库中的函数next_permutation()按顺序得到各个字符串, 并依次存入vector中...


按方法3给出的已AC代码:

```cpp
#include <iostream>
#include <vector>
#include<string>
#include <algorithm>
using namespace std;

bool comp(char a, char b)
{
    return a<b;
}  // sort()重载的函数不能写在class Solution的内部, class内部的函数指针和外部的函数指针类型不一样

class Solution {
public:
    vector<string> Permutation(string str) {
	vector<string> vect;
    if(str.length() == 0) return vect;        

    sort(str.begin(), str.end(), comp);
    // 也可使用匿名函数: sort(str.begin(), str.end(), [](char a, char b){return a<b;});    
    do{
		string sstr;
		for(int i=0; i<str.size(); i++)
		{
			sstr += str[i];
		}
		vect.push_back(sstr);
		sstr.clear();
    }
	while(next_permutation(str.begin(), str.end() )); // 使用do...while保证对第一个也有效
    return vect;
    }
};
// 以下为测试
int main()
{
	Solution sol;
	vector<string> res = sol.Permutation("acb");
	for(auto it: res)
		cout<<it<<' ';
    return 0;
}
```

next_permutation() 函数原型:
```cpp
bool next_permutation(
      BidirectionalIterator _First,
      BidirectionalIterator _Last,
      BinaryPredicate _Comp
 );
```

对于第二个重载函数的第三个参数, 默认比较顺序为小于. 如果找到下一个序列, 则返回真, 否则返回假. 

用next_permutation和prev_permutation求排列组合很方便,  但是要记得包含头文件`#include <algorithm>`.

虽然最后一个排列没有下一个排列, 用next_permutation会返回false, 但是使用了这个方法后，序列会变成字典序列的第一个, 如cba变成abc, prev_permutation同理。