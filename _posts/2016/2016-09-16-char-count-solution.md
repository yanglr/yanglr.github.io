---
title: 华为oj之字符个数统计
date: 2016-09-16 23:42:35
tags: [oj]
categories: 
- 编程训练
---

### 题目:字符个数统计

- 热度指数：4720时间限制：1秒空间限制：32768K
- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579)


## 题目描述

编写一个函数，计算字符串中含有的不同字符的个数。字符在ACSII码范围内(0~127)。不在范围内的不作统计。

##### **输入描述:**

```
输入N个字符，字符在ACSII码范围内。
```

##### **输出描述:**

```
输出范围在(0~127)字符的个数。
```

##### **输入例子:**

```
abc

```

##### **输出例子:**

```
3
```



在线提交网址: http://www.nowcoder.com/practice/eb94f6a5b2ba49c6ac72d40b5ce95f50?tpId=37&tqId=21233&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking



### 分析: 

此题可用hash表的思想, 既可以用C++中的`unordered_map`、`set`, 也可用数组来实现...



已AC代码:
```cpp
#include <cstdio>
#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int main()
{
    string str;
    getline(cin,str);
    unordered_map<char, int> countMap;
    
    int diffCh = 0;
    for(int i=0; i <= str.length()-1; i++)
    {   
        if( (int)str[i]>=0 && (int)str[i]<=127)
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
    }
     for(int i=0; i <= countMap.size()-1; i++)
     {
         if(countMap[str[i]] >= 1)
         {
             diffCh++;
         }
     }
    cout<<countMap.size()<<endl;
    return 0;
}
```

更简洁的写法:
```cpp
#include<iostream>
#include<set>
using namespace std;
int main()
{
    char ch;
    set<char> s;
    while(cin>>ch){
        if(ch>=0 && ch<=127){
            s.insert(ch);
        }
    }
    cout << s.size()<<endl;
}
```
