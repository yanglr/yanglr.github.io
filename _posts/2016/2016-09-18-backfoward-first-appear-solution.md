---
title: 华为oj之提取不重复的整数
date: 2016-09-18 12:56:52
tags: [oj]
categories:
- 编程训练
---

### 题目: 提取不重复的整数

- 热度指数：4740    时间限制：1秒    空间限制：32768K
- 本题知识点： [数组](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=578)


## 题目描述

输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。

##### **输入描述:**

```
输入一个int型整数
```

##### **输出描述:**

```
按照从右向左的阅读顺序，返回一个不含重复数字的新的整数
```

##### **输入例子:**

```
9876673

```

##### **输出例子:**

```
37689
```



在线提交网址:

http://www.nowcoder.com/practice/253986e66d114d378ae8de2e6c4577c1?tpId=37&tqId=21232&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking



### 分析:

先将该输入的字符串进行逆序, 使用一个vector存储每一个字符, 存入要求是当vector中没有该字符(使用算算法库中的find()函数). 最后遍历该向量, 输出即可.



已AC代码:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;
int main()
{
	string str;
	vector<char> vect;
	while(getline(cin,str))
	{
		reverse(str.begin(), str.end());		
		for(int i=0;i<str.length();i++)
		{
			if(find(vect.begin(),vect.end(), str[i]) == vect.end())
			{
				vect.push_back(str[i]);  
			}
		}
		for(auto it: vect)
			cout<<it;

		cout<<endl;    // 如果用set, set会用一个字符最后一次出现的地方覆盖之前的, 此处不能用
		vect.clear();
	}
	return 0; 
}
```





