---
title: 华为oj之句子逆序
date: 2016-09-18 09:47:26
tags: [oj]
categories:
- 编程训练
---

### 题目: 句子逆序

- 热度指数：4483    时间限制：1秒    空间限制：32768K
- 本题知识点： [数组](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=578)

将一个英文语句以单词为单位逆序排放。例如“I am a boy”，逆序排放后“boy a am I”
所有单词之间用一个空格隔开，语句中除了英文字母外，不再包含其他字符


接口说明
```
/**

* 反转句子
  * @param sentence 原句子

  * @return 反转后的句子
    */
    public String reverse(String sentence);
```

##### **输入描述:**

```
将一个英文语句以单词为单位逆序排放。
```

##### **输出描述:**

```
得到逆序的句子
```

##### **输入例子:**

```
I am a boy

```

##### **输出例子:**

```
boy a am I
```



在线提交网址: http://www.nowcoder.com/practice/48b3cb4e3c694d9da5526e6255bb73c3?tpId=37&tqId=21236&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking

### 分析:

有一种比较易实现的思路, 将每次cin的部分放进一个vector中, 然后反向遍历(迭代器auto it = vect.rbegin()), 最后一个元素单独处理, 否则会输出多余的空格.



已AC代码:


```cpp
#include<cstdio>
#include<iostream>
#include<vector>
using namespace std;

int main()
{
    string str;
    vector<string> vect;
    
    while(cin>>str)
    {
        vect.push_back(str);
    }
//    vector<string>::iterator it = vect.rbegin();             // 反向循环
    for( auto it = vect.rbegin(); it != vect.rend()-1;  ++it)
    {
        cout<<*it<<" ";
    }
    cout<<vect[0]<<endl;
    return 0;
}
```


相关链接:

http://stackoverflow.com/questions/3610933/iterating-c-vector-from-the-end-to-the-begin

