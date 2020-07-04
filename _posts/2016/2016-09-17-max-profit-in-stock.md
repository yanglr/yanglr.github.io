---
title: 携程校招2017编程题之股票最大利润
date: 2016-09-17 21:58:36
tags: [oj] 
categories:
- 编程训练
---

 ![携程校招2017编程题1](http://geekplayers.com/assets/images/2016/ctrip_ex1.png)  <!-- 本地: ![携程校招2017编程题1](../images/ctrip_ex1.png) -->

### 题目: 股票利润


## 题目描述

有一个数组来存储一支股票每天的价格，例如第i天的股票价格为prices[i]。 
现在我们至多做一次股票交易，最多买入一次，卖出一次，设计一个算法求我们买股票能得到的最大收益。

##### **输入:**

```
价格序列, 用,隔开
```

##### **输出:**

```
最大的可能利润
```

##### **输入例子:**

```
2,3,2,4
```

##### **输出例子:**

```
2
```



### 分析:

只需要找出最大的差值即可, 即max(prices[j] - prices[i]), i<j . 遍历一遍即可, 在遍历的时间用遍历low记录prices[0...i]的最小值, 就是当前位置的最低售价, 时间复杂度为O(n) .



注意: 输入用, 隔开, 需要用getchar()来保存`,`, scanf("%d", &n)来读入每一个整数值.



已AC代码:

```cpp
#include<cstdio>
#include<vector>
#include<iostream>
using namespace std;

int maxProfit(vector<int>& prices) {
    int len=prices.size();
    if(len==0||len==1)
        return 0;
    int min=prices[0];
    int sum=0;
    for(int i=1;i<len;i++)
    {
        if(prices[i]<min)
            min=prices[i];
        else if(prices[i]>min)
        {
            int temp=prices[i]-min;
            if(temp>sum)
                sum=temp;
        }
    }
    return sum;
}

int main()
{
	int n;
	vector<int> vec;
	while(scanf("%d", &n))
	{
		vec.push_back(n);
		char ch = getchar();
		if(ch == '\n') break;
	}

	// for(int i: vec)
	//	cout<<i;

	cout<<maxProfit(vec)<<endl;
	vec.clear();
	return 0;
}
```



相关链接: http://blog.csdn.net/DERRANTCM/article/details/47651235

