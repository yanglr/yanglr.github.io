---
title: 华为oj之(整型)数字颠倒
date: 2016-09-18 10:43:12
tags: [oj]
categories: 
- 编程训练
---

### 题目: 数字颠倒

- 热度指数：5722    时间限制：1秒    空间限制：32768K

- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579)

  ​


## 题目描述

描述：

输入一个整数，将这个整数以字符串的形式逆序输出

程序不考虑负数的情况，若数字含有0，则逆序形式也含有0，如输入为100，则输出为001

 

##### **输入描述:**

```
输入一个int整数
```

##### **输出描述:**

```
将这个整数以字符串的形式逆序输出
```

##### **输入例子:**

```
1516000

```

##### **输出例子:**

```
0006151
```



在线提交网址: http://www.nowcoder.com/practice/ae809795fca34687a48b172186e3dafe?tpId=37&tqId=21234&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking



### 分析:

将整数按照一位一位地进行读入到vector中, 可以用getchar配合`\n`, 也可使用`cin>>char`的方式, 然后对vector进行反转, 再遍历输出即可.



已AC代码:
```cpp
#include<cstdio>
#include<iostream>
#include<algorithm>
using namespace std;

int main()
{
    char ch;
    vector<char> vect;    
    while(cin>>ch)
    {
        vect.push_back(ch);
    }
    reverse(vect.begin(), vect.end());    // 将装有字符的向量反转
    for(auto it: vect)
    {
        cout<<it;
    }
    cout<<endl;
    return 0;
}
```



