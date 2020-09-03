---
redirect_from:
  - /2016/09/18/word-reverse-print-solution/
title: 华为oj之【中级】单词倒排
date: 2016-09-18 20:15:26
tags: [oj]
categories:
- 编程训练
---

### 题目: 【中级】单词倒排

- 热度指数：1593时间限制：1秒空间限制：32768K
- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579) [排序](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=590)


## 题目描述

对字符串中的所有单词进行倒排。

说明：

1、每个单词是以26个大写或小写英文字母构成；

2、非构成单词的字符均视为单词间隔符；

3、要求倒排后的单词间隔符以一个空格表示；如果原字符串中相邻单词间有多个间隔符时，倒排转换后也只允许出现一个空格间隔符；

4、每个单词最长20个字母；

##### **输入描述:**

```
输入一行以空格来分隔的句子
```

##### **输出描述:**

```
输出句子的逆序
```

##### **输入例子:**

```
I am a student
```

##### **输出例子:**

```
student a am I
```



在线提交网址: http://www.nowcoder.com/practice/81544a4989df4109b33c2d65037c5836?tpId=37&tqId=21254&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking



### 分析:

先使用getline()进行按行读入到vector中, 将其中的非字母字符赋值为空格, 注意还得将多个连续空格替换为单空格(使用 `sstream` 库中的 `istringstream` ), 然后对vector进行反向遍历, 输出即可.



已AC代码:

```cpp
#include<cstdio>
#include<iostream>
#include<sstream>
#include<vector>
#include<string>
using namespace std;

int main()
{
	string str;
	vector<string> vect;
	string line;
	while(getline(cin, line))
	{
		istringstream ss(line);
		while(ss >> str)
		{
			for (int i = 0; i != str.length(); i++)
			{
				if (!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')))
					str[i] = ' ';
			}

			istringstream temp(str);   // 类似于cin, 以空格为分隔符将原字符串中的子字符串保存
			while(temp>>str) 
			{
				vect.push_back(str);
			}
		}
		for(auto it = vect.rbegin(); it != vect.rend() - 1; ++it)
		{
			cout << *it << " ";
		}
		cout << vect[0] << endl;
		vect.clear();
	}
	return 0;
}
```
