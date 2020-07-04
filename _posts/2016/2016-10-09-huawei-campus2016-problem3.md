---
title: 华为校招2016.09第3题
date: 2016-10-09 21:06:10
tags: [华为oj]
categories: 
- [oj, 校招编程题]
---



## 第3题: 装满篮子

**描述:**  假设一个篮子最大载重为W，要求从多个不同重量物品中挑选出部分，使得其重量之和刚好等于W。输入若干个正整数，其中第一个数值为篮子载重，后面若干个数值表示不同物品的重量，请判断是否存在方案能刚好装满篮子。存在装满篮子的方案则输出YES，并按照输入顺序输出装入篮子的物品重量，以空格隔开；若不存在则输出NO。备注：本题中只存在一种装载方案。



**输入:**  输入若干个正整数，其中第一个数值为篮子载重，后面若干个数值表示不同物品的重量。为了编程方便，限定输入的整数个数不超过20个。  

**输出:**  存在刚好装满篮子方案则输出YES，并按照输入顺序输出装入篮子的物品重量，以空格隔开；不存在则输出NO。



|      参数         |    说明        |
| ------------- | ---------- |
| 运行时间限制: | 无限制     |
| 内存限制:     | 无限制     |
| 样例输入:     | `10 4 5 6` |
| 样例输出:     | `YES 4 6`  |




测试用例AC比例: 7/8

```cpp
#include <cstdio>
using namespace std;

typedef long long int64;
int64 fit(int x, int64* w){
	int64 s = 0;
	int k = 0;
	while (x){
		if (x & 1) s += w[k];
		k++;
		x >>= 1;
	}
	return s;
}
void put(int x, int64* w){
	int k = 0;
	while (x){
		if (x & 1) printf(" %lld", w[k]);
		k++;
		x >>= 1;
	}
	puts("");
}
int main(){
	int64 w[100];
	int n = 0;
	int64 W;
	scanf("%lld", &W);
	while (scanf("%lld", &w[n++]) != EOF);
	int N = 1 << n;
	int find = 0;
	for (int k = 0; k < N; k++){
		if (W == fit(k, w)) {
			find = 1;
			printf("YES");
			put(k, w);
			break;
		}
	}
	if (!find) puts("NO");

	return 0;
}
```



264分



