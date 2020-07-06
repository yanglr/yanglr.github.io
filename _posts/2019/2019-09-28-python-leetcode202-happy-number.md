---
layout: post
category: Leetcode面试题
title:  LeetCode面试系列 第4天：No.202 - 快乐数
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
---

或许你不知道的是，Leetcode 中是有很多 *数学题* 的，本文要解析的题 **快乐数** 就是其中到一个典型问题，本题将基于数据结构 `set` 来求解。

<!--more-->

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **202** 号问题，

LeetCode - 202. 快乐数

<https://leetcode-cn.com/problems/happy-number/>

#### 题目描述

编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

**示例:**

```
输入: 19
输出: true
```

**解释:** 

1<sup>2</sup> + 9<sup>2</sup> = 82

8<sup>2</sup> + 2<sup>2</sup> = 68

6<sup>2</sup> + 8<sup>2</sup> = 100

1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1

- 贡献者: LeetCode

- 题目难度: **Easy**

- 相关话题
  - [数学](https://leetcode.com/tag/math)
  - [哈希表](https://leetcode.com/tag/hash-table) 

- 相似题目
  
  - [各位相加](https://leetcode-cn.com/problems/add-digits/)   难度: 简单
  - [丑数](https://leetcode-cn.com/problems/ugly-number/)   难度: 简单

------

**解题思路:**

中学数学中我们学到一个概念**集合**(英文是 set)，集合的最大特点是**元素不能重复**。Python中，set 是一组 key 的集合。

于是可以使用迭代法和 set 这种数据结构来求解此题。

具体操作为: 迭代地求给定数的各位数字的平方和，维护一个 set，迭代循环的出口是平方和为1或已在 set 中出现过。

已`AC`的代码为:

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        unhappy = set()
        while n not in unhappy and n != 1:
            unhappy.add(n)
            n = self.GetSquareSum(n)
        return n == 1    

    def GetSquareSum(self, n: int) -> bool:
        sum0 = 0
        while n > 0:
            r = n - int(n/10)*10
            n = int(n/10)
            sum0 += r * r
        return sum0
```

**运行结果:**

执行用时 : `36 ms`, 在所有 Python3 提交中击败了`99.72%`的用户.

相应的，如需测试，本地可执行的代码为:

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        unhappy = set()
        while n not in unhappy and n != 1:
            unhappy.add(n)
            n = self.GetSquareSum(n)
        return n == 1    

    def GetSquareSum(self, n: int) -> bool:
        sum0 = 0
        while n > 0:
            r = n - int(n/10)*10
            n = int(n/10)
            sum0 += r * r
        return sum0

sol = Solution()
print(sol.isHappy(19))
```

<br>

示例代码:
<https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-202>
