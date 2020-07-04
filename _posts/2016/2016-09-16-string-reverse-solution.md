---
title: 华为oj之字符串反转
date: 2016-09-16 16:03:06
tags: [oj]
categories: 
- [oj, 编程训练]
---



### 题目: 字符串反转

- 热度指数：4940   时间限制：1秒    空间限制：32768K

- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579)



## 题目描述

写出一个程序，接受一个字符串，然后输出该字符串反转后的字符串。例如：

##### **输入描述:**

```
输入N个字符
```

##### **输出描述:**

```
输出该字符串反转后的字符串
```

##### **输入例子:**

```
abcd

```

##### **输出例子:**

```
dcba
```

在线提交网址: <http://www.nowcoder.com/practice/e45e078701ab4e4cb49393ae30f1bb04?tpId=37&tqId=21235&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking>

### 分析:
其实使用C++算法库中的reverse()函数即可...

下面是已AC代码:
```cpp
#include<cstdio>
#include<string>
#include<algorithm>
#include<iostream>
using namespace std;

int main()
{
    string str;
    string out;
    while(getline(cin, str))
    {
        reverse(str.begin(), str.end());  // 原址逆序
        cout<<str<<endl;
    }
    return 0;
}
```

用C风格字符串也可这样写:
```c
#include<cstdio>
#include<string>
#include<iostream>
#include<cstring>
using namespace std;

void strrev(char s[])
{
    int length = strlen(s) ;
    char ch;
    int i, j;

    for (i = 0, j = length - 1; i < j; i++, j--)
    {
        ch= s[i];
        s[i] = s[j];
        s[j] = ch;
    }
}

int main()
{
    char str[1000];
    while(scanf("%s", str) != EOF)
    {
        strrev(str);
        cout<<str<<endl;
    }        
    return 0;
}
```



相关参考:

http://stackoverflow.com/questions/198199/how-do-you-reverse-a-string-in-place-in-c-or-c