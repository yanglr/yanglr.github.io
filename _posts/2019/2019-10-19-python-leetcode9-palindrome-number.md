---
layout: post
category: Leetcode面试题
title:  LeetCode面试系列 第6天：No.9 - 回文数
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
---

上一篇面试题中，我们使用了 **埃拉托斯特尼筛法** 去统计给定范围内质数的个数(LeetCode No.204)，还是有点烧脑的。今天我们来分析一道相对轻松的字符串面试题吧，恰好大家从Python 100天中学到的字符串知识可以派上用场。

<!--more-->

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **9** 号问题，

LeetCode - 9. 回文数

<https://leetcode-cn.com/problems/palindrome-number/>

#### 题目描述

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例 1:**

```
输入: 121
输出: true
```

**示例 2:**

```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例 3:**

```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

- 题目难度：**简单**
- 通过次数：182.9K
- 提交次数：322.9K
- 贡献者：LeetCode

- 相关话题
  - 数学
    <https://leetcode.com/tag/math>

- 相似题目
  - 回文链表
    <https://leetcode-cn.com/problems/palindrome-linked-list>  难度: **简单**

------



**解题思路:**

1. 先将原数转为字符串 `str0`
2. 反转步骤1中的字符串 `str0` 得到字符串 `reversedStr`，判断其是否与反转前相等。而 Python 中字符串反转有如下两种常用方法:
   - 使用切片功能，即`reversedStr = str0[::-1]`
   - 使用 `reversed` 函数，`reversedStr = ''.join(list(reversed(str0)))`
3. 解决特殊情况
   - 输入的数为负的，前面有`-`，反转后显然不相等

已`AC`的代码为:

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        else:
            str0 = str(x)
            reversedStr = str0[::-1]
            if reversedStr == str0:
                return True
        return False        
```

执行用时: `64 ms`, 在所有 python3 提交中击败了`98.39%`的用户.

![result](http://www.justdopython.com/assets/images/2019/python/leetcode009-sol.png)

示例代码: <https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-009>
