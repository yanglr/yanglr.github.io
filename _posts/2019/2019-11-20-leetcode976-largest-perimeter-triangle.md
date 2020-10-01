---
layout: post
categories: 
- [leetcode, python, Leetcode面试题]
redirect_from:
  - /2019/11/20/leetcode976-largest-perimeter-triangle/
title:  LeetCode面试系列 第10天：No.976 - 三角形的最大周长
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
excerpt: LeetCode面试No.976 - 三角形的最大周长
---

上一篇 LeetCode 面试题中，我们分析了一道字符串的算法题 - **反转字符串中的元音字母**，今天我们来分析一道简单的几何题吧。

<!--more-->

![Leetcode](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **976** 号问题，

LeetCode - 976. 三角形的最大周长

<https://leetcode-cn.com/classic/problems/largest-perimeter-triangle/>



### 题目描述

给定由一些正数（代表长度）组成的数组 `A`，返回由其中三个长度组成的、**面积不为零**的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 `0`。

**示例 1：**

```
输入：[2,1,2]
输出：5
```

**示例 2：**

```
输入：[1,2,1]
输出：0
```

**示例 3：**

```
输入：[3,2,3,4]
输出：10
```

**示例 4：**

```
输入：[3,6,2,3]
输出：8
```

**提示：**

1. `3 <= A.length <= 10000`
2. `1 <= A[i] <= 10^6`

- 题目难度：**简单**

- 通过次数：8.8K

- 提交次数：16.1K

- 贡献者：LeetCode

- 相关标签

  - 排序
    

  <https://leetcode-cn.com/tag/sort>

  - 数学 

    <https://leetcode-cn.com/tag/math>

- 相似题目

  - 最大三角形面积
  <https://leetcode-cn.com/problems/largest-triangle-area>  难度: **简单**



**解题思路:**

我们知道，平面中构成三角形的充分必要条件是 **3条边中任意两边之和大于第三边**(3次比较)，也即 **较短的两边之和大于最长边即可**(有序情形下只需1次比较)。而要求三角形的最大边长，也就是使得**三边之长最大**，当然是取最长的3个边长了。于是求解此题的具体步骤如下:

- 将数组 A 中的各边长度按从大到小排序
- 遍历排过序的数组中的数，取出相邻的 3 个边长，当第一次满足**较短的两边之和大于最长边**时，则对这3边求和返回即可。



临界情形: 输入的边数不到3个，直接 `return 0`.



已 AC 代码:

```python
   class Solution:
    def largestPerimeter(self, A: List[int]) -> int:
        if (len(A) < 3):
            return 0

        A.sort(reverse=True)
        for i in range(len(A)-2):
            if A[i] < A[i+1] + A[i+2]:  # Can build a triangle
                return A[i] + A[i+1] + A[i+2]
        return 0       
```



**运行结果:**

执行用时: `256 ms`, 在所有 python3 提交中击败了 ` 91.91 %` 的用户.

![leetcode976-result](http://cdn.jsdelivr.net/gh/justdopython/justdopython.github.io/assets/images/2019/python/leetcode976-result.png)



示例代码: <https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-976> .
