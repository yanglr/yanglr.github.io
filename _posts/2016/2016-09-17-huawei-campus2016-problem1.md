---
redirect_from:
  - /2016/09/17/huawei-campus2016-problem1/
title: 华为校招2016.09第1题
date: 2016-10-09 21:02:28
tags: [华为oj]
categories: 
- 校招编程题
original: true
---



## 第1题: 字符串按指定长度重新分割



| 描述:     | 输入M个字符串，请按指定长度N拆分每个字符串，输出新的字符串。长度不是N整数倍的字符串请在后面补数字0。 |
| ------- | ---------------------------------------- |
| 运行时间限制: | 无限制                                      |
| 内存限制:   | 无限制                                      |
| 输入:     | 输入整数M，N；以英文逗号分隔。每行一个字符串,共M个字符串，每行字符串小于50个字符 |
| 输出:     | 按指定长度N拆分每个字符串，输出拆分后字符串                   |
| 样例输入:   | `2,8abc123456789`                        |
| 样例输出:   | `abc000001234567890000000`               |






已AC代码:

```cpp
#include<cstdio>
using namespace std;
void myputs(char* s,int n){
	int k;
	for (k = 0; s[k] != '\0'; k++){
		if (k > 0 && k % n == 0)puts("");
		putchar(s[k]);
	}
	k %= n;
	if (k){
		for (; k < n; k++)
			putchar('0');
	}
	puts("");
}

int main(){
	int m, n;
	scanf("%d%*c%d\n", &m, &n);   // 忽略分隔字符...
	char s[1000];
	for (int k = 0; k < m; k++){
		gets(s);
		myputs(s, n);
	}
}
```



100分
