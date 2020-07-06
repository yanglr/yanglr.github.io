---
layout: post
category: Leetcode面试题
title:  LeetCode面试系列 第11天：No.645 - 错误的集合
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
---

上一篇 LeetCode 面试题中，我们分析了一道简单的几何数学题。今天我们来分析一道集合相关的数学题。

<!--more-->

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **645** 号问题，

LeetCode - 645. 错误的集合

<https://leetcode-cn.com/problems/set-mismatch/>

### 题目描述

集合 `S` 包含从 1 到 `n`  的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。

给定一个数组 `nums` 代表了集合 `S` 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

**示例 1:**

```
输入: nums = [1,2,2,4]
输出: [2,3]
```

**注意:**

1. 给定数组的长度范围是 [2, 10000]。
2. 给定的数组是无序的。

- 题目难度：简单
- 通过次数：7.3K
- 提交次数：18.5K
- 贡献者：LeetCode

- 相关标签 

  - 哈希表
    <https://leetcode-cn.com/tag/hash-table>
  - 数学
    <https://leetcode-cn.com/tag/math>
- 相似题目 

  - 寻找重复数

    <https://leetcode-cn.com/problems/find-the-duplicate-number>

------

**解题思路:**

由于给定输入是无序的数组，且每个数的范围是 `[1, n]` ，排序后便于后续处理。

如何得到**重复的数**？

- 只需要使用 set 中元素互不相等的特性，得到去除重复后的数组
- 对原数组求和，再对去重后的数组求和，所得两个和的差极为重复的数



如何得到**缺失的数**？

- 使用一个对比序列 stdList，放有: 1, 2 ... n 等元素 (从 1 到 n)
- 将原数组转为 set，再将对比序列转为 set。两个 set 的差集中的元素只有一个，取出就是缺失的数。 

最后将 **重复的数 **和 **缺失的数** 一起放进 list 中即可。



已`AC`的代码为:

```python
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        res = list()
        nums.sort()
        stdList = range(1, len(nums) + 1)  # len(nums) = n
        repeatedNum = sum(nums) - sum(set(nums))     
        res.append(repeatedNum)
        missingNum =  (set(stdList) - set(nums)).pop()
        res.append(missingNum)
        return res
```

执行用时: `276 ms`, 在所有 python3 提交中击败了 `60.58 %` 的用户.

![Leetcode645](http://www.justdopython.com/assets/images/2019/python/leetcode645.jpg)

示例代码: <https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-645>