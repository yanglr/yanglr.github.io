---
title: 华为校招2016.09第2题
date: 2016-10-09 21:06:10
tags: [华为oj]
categories: 
- [oj, 编程训练]
---



## 第二题: 字符串查找

**描述:** 输入两个字符串，查找字符串1中与字符串2最先匹配的内容，将匹配的字符串输出。字符串2支持?通配符，?代表任意一个字符。 已知字符串2不可能出现只有?的情况。 字符串1和字符串2的最大长度为128。 

| 参数 | 要求 |
| ------- | ---------------------------------------- |
| 运行时间限制: | 无限制                                      |
| 内存限制:   | 无限制                                      |
| 输入:     | 待查找字符串,关键字字符串                            |
| 输出:     | 输出字符串                                    |
| 样例输入:   | `abcdefabcdeg,a?c??f`                    |
| 样例输出:   | `abcdef`                                 |



已AC代码:

```cpp
#include <cstdio>
#include <cstring>
using namespace std;
#define N 1000
int mystrncmp(char* s, char* t,int n){
	for (int k = 0; k < n; k++){
		if (s[k] == t[k] || t[k] == '?');
		else return 0;
	}
	return 1;
}
int main(){
	char str[N],s[N],t[N];
	scanf("%s",s);
	char* pch = strtok(s, ",");
	strcpy(s, pch);
	pch=strtok(NULL, ",");
	strcpy(t, pch);

	int m = strlen(s);
	int n = strlen(t);
	char* p = s;
	for (int k = 0; k <= m - n; k++){
		if (mystrncmp(p, t, n)){
			p[n] = '\0';
			puts(p);
			break;
		}
		else{
			p++;
		}
	}
	return 0;
}
```

200 分