---
title: 华为oj之字符串分割
date: 2016-09-18 16:39:32
tags: [oj]
categories:
- 编程训练
---

### 题目: 字符串分隔

- 热度指数：6139     时间限制：1秒     空间限制：32768K
- 本题知识点： [字符串](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=579)


## 题目描述

•连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；

•连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
•长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。

##### **输入描述:**

```
连续输入字符串(输入2次,每个字符串长度小于100)

```

##### **输出描述:**

```
输出到长度为8的新字符串数组

```

##### **输入例子:**

```
abc
123456789
```

##### **输出例子:**

```
abc00000
12345678
90000000
```

在线提交网址:
http://www.nowcoder.com/practice/d9162298cb5a437aad722fccccaae8a7?tpId=37&tqId=21227&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking

### 分析:
根据字符串长度, 分length>8, <8, =8 三种情况即可, 另外还有一种递归的方法可以解决.

已AC代码:

```cpp
#include<cstdio>
#include<iostream>
#include<string>
#include<algorithm>
using namespace std;
 
int main()
{
    string str;
    while(getline(cin, str))
    {
        if(str.empty()) return 0;
        if(str.length() == 8) cout<<str<<endl;
        else if(str.length() < 8 && str.length()>0)
        {
            cout<<str;
            for(int i = 0; i <= 8-str.length()-1; i++) cout<<'0';
            cout<<endl;
        }
        else if(str.length() > 8)
        {  
            int lastlen=str.length() % 8;
            int frontlen = str.length()-lastlen;
            for(int i = 0; i <= frontlen - 1; i++)
            {
                if(i==0 || i%8 != 7) cout<<str[i];
                if(i%8 == 7)
                {
                    cout<<str[i]<<endl;
                    continue;
                }
            }                 
            for(int j = 0; j <= lastlen-1; j++) cout<<str[frontlen+j];
            if(lastlen>0)
            {
                for(int i = 0; i <= 8-lastlen-1; i++)
                    cout<<'0';
            	cout<<endl;                
            }
        }         
    }     
    return 0;
}
```

递归解法:
```cpp
#include <iostream>
#include <string>
using namespace std;
void process(string str) {
    if (str == "")
        return;
    if (str.size() <= 8) {
        str.append(8 - str.size(), '0');
        cout << str << endl;
        return;
    }
    cout << str.substr(0, 8) << endl;
    process(str.substr(8, str.size()));
}
int main() {
    string str1, str2;
    cin >> str1 >> str2;
    process(str1);
    process(str2);
    return 0;
}
```
