---
title: 剑指offer面试题36 - 数组中的逆序对
date: 2016-10-03 22:13:18
tags: [oj, 剑指offer]
category: oj
---


### 题目: 数组中的逆序对

- 热度指数：4735      时间限制：1秒        空间限制：32768K
- 本题知识点： [数组](http://www.nowcoder.com/questionCenter?questionTypes=000100&mutiTagIds=578)


## 题目描述

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007 

**输入描述:**`题目保证输入的数组中没有的相同的数字数据范围：`

```
对于%50的数据,size<=10^4;
对于%75的数据,size<=10^5;
对于%100的数据,size<=2*10^5
```


**输入例子:**`1,2,3,4,5,6,7,0`

**输出例子:**`7`



### 分析:

使用归并排序...



统计逆序对的过程：**先把数组分隔成子数组， 先统计出子数组内部的逆序对的数目，然后再统计出两个相邻子数组之间的逆序对的数目。在统计逆序对的过程中，还需要对数组进行排序(二路归并)。**

合并数组，合并时，出现前面的数组值array[i]大于后面数组值array[j]时；则前面数组array[i]~array[mid]都是大于array[j]的，count += mid+1 - i .

当count较大时，将其对1000000007取余.



### 遇到的坑: 

1.估计很多人最开始提交都会超时，我是因为在递归中重复创建辅助空间，参考《剑指 offer 》可以通过传 copy 数组解决，辅助空间只创建一次;

2.getCount()的返回值用int型会越界, 用long型就过了...



已AC代码:

```cpp
class Solution {
public:    
    long getCount(vector<int> &data, vector<int> &copy, long start, long end){
        if(start == end)  // copy: 辅助数组
        {
            return 0 ;  // 递归终止条件
        }
        
        long mid = (start + end)/ 2 ;
        long lCount = getCount(copy, data, start, mid); // 递归，归并排序，并计算本次逆序对数 
        long rCount = getCount(copy, data, mid+1, end);
        long crossCount = 0 ;       // 记录交叉的逆序对数
        long i = mid, j = end, tempIdx = end;  //i：前半部分的下标，j：后半部分的下标，tempIdx：辅助数组的下标
        
        while(i >= start && j > mid) {   // 存在交叉的逆序对，先统计一下，然后依次将较大值放进辅助数组
            if (data[i] > data[j]) {   
                copy[tempIdx--] = data[i--];
                crossCount += j - start - (mid-start);
            } else {
                copy[tempIdx--] = data[j--];   // 不存在交叉的逆序对，依次将较大值放进辅助数组 
            }
        }
        while(i >= start) {
            copy[tempIdx--] = data[i--];
        }
        while(j > mid) {
            copy[tempIdx--] = data[j--];
        }        
        return (lCount + rCount + crossCount) % 1000000007; //数值过大时求余, 防止溢出
    }
    
    int InversePairs(vector<int> data) {
        if(data. size() == 0) return 0 ;
        else if(data. size() == 1) return 1;
        else {
            vector<int> copy(data);
            return getCount(data, copy, 0 , data.size()- 1);
        }
    }
};
```
