---
layout: post
category: Leetcode面试题
title:  LeetCode面试系列 第12天：No.977 - 有序数组的平方
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
---

上一篇 LeetCode 面试题中，我们分析了一道`集合`相关的数学题。现在我们再来看一个`排序`相关的面试题吧~

<!--more-->

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **977** 号问题，

LeetCode - 977. 有序数组的平方

<https://leetcode-cn.com/problems/squares-of-a-sorted-array/>

### 题目描述

给定一个按非递减顺序排序的整数数组 `A`，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

**示例 1：**

```
输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
```

**示例 2：**

```
输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

**提示：**

1. `1 <= A.length <= 10000`
2. `-10000 <= A[i] <= 10000`
3. `A` 已按非递减顺序排序。

- 题目难度：简单
- 通过次数：24.5K
- 提交次数：34.7K
- 贡献者：LeetCode

- 相关标签 

  - 数组

    <https://leetcode-cn.com/tag/array>

  - 双指针

    <https://leetcode-cn.com/tag/two-pointers>

- 相似题目 

  - 合并两个有序数组

    <https://leetcode-cn.com/problems/merge-sorted-array>

  - 有序转化数组

    <https://leetcode-cn.com/problems/sort-transformed-array>

------

**解题思路:**

如果有办法将数组 `A` 中的值按`绝对值`进行递减序排序，那最后只需将排序过的数组中的每个数求个平方依次加入到结果 list 中即可。

恰好 Python 中的 `sorted(array, key = abs)` 可以实现按绝对值排序，所以这个问题就迎刃而解了。

已`AC`的代码为:

```python
class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        B = sorted(A, key = abs) # sort by absolute values
        res = list()
        for elem in B:
            res.append(elem*elem)
        return res
```

执行用时: `268 ms`, 在所有 python3 提交中击败了 ` 87.52 %` 的用户.

![Leetcode645](http://www.justdopython.com/assets/images/2019/python/leetcode977.jpg)

示例代码: <https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-977>