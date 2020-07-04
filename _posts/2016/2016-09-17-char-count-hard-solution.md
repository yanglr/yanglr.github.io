---
title: 华为oj之字符统计(按出现次数由多到少的顺序进行输出)
date: 2016-09-17 14:38:48
tags: [oj]
categories:
- 编程训练
---

### 题目: 字符统计

- 热度指数：875    时间限制：1秒   空间限制：32768K

- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579) [排序](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=590)

## 题目描述

如果统计的个数相同，则按照ASII码由小到大排序输出 。如果有其他字符，则对这些字符不用进行统计。

实现以下接口：
输入一个字符串，对字符中的各个英文字符，数字，空格进行统计（可反复调用）
按照统计个数由多到少输出统计结果，如果统计的个数相同，则按照ASII码由小到大排序输出
清空目前的统计结果，重新统计

调用者会保证：
输入的字符串以‘\0’结尾。


##### **输入描述:**
输入一串字符。

##### **输出描述:**

对字符中的各个英文字符（大小写分开统计），数字，空格进行统计，并按照统计个数由多到少输出,如果统计的个数相同，则按照ASII码由小到大排序输出。如果有其他字符，则对这些字符不用进行统计。


##### **输入例子:**
```
aadddccddc
```

##### **输出例子:**

```
dca
```

在线提交网址: http://www.nowcoder.com/practice/c1f9561de1e240099bdb904765da9ad0?tpId=37&tqId=21325&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking

### 分析:

使用一个hash表(unordered_map)存储 `<字符, 出现次数>` 的键值对, 然后按出现次数count进行排序(C++算法库中的sort函数), 排序时注意当统计的个数相同时, 按照ASII码由小到大顺序输出. 

下面是已AC代码:
```cpp
#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

bool comp(pair<char,int> a, pair<char,int> b)  // 重载sort函数的自定义比较函数comp
{
    if(a.second > b.second)
		return true;
	else if(a.second == b.second && a.first < b.first)
		return true;
	else return false;
}

int main()
{
    string str;
	unordered_map<char, int> countMap;

    while(getline(cin,str))
	{
	for(int i=0; i <= str.length()-1; i++)
		{
             if(countMap.find(str[i]) == countMap.end())
            {
                countMap[str[i]] = 1;
            }
            else
            {
                countMap[str[i]]++;
            }        
		}

    vector<pair<char, int>> elems(countMap.begin(), countMap.end());
	sort(elems.begin(), elems.end(), comp);  // 使用sort对hash表进行排序

	for(vector<pair<char, int>>::iterator it=elems.begin(); it != elems.end(); it++)
	{
		cout<<it->first;
	}
	cout<<endl;
	countMap.clear();
	}
    return 0;
}
```

```
测试用例1: 8v26ktzk069lm400061m0v965we88850o6omqi532ktir6esb55t0kqm026y8rk63aj82kcx48gd1tiylvs0xo32zem65q7z5ce2185d2ascz62a2p3ajr45h637t2p290lc043gicp5ldzzmx2

测试用例2:
aadddccddc
```

参考:
http://stackoverflow.com/questions/31323135/sort-an-unordered-map-using-sort
