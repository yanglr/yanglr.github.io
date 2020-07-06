---
layout: post
category: Leetcode面试题
title:  LeetCode面试系列 第3天：No.67 - 二进制数求和
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
---

大家都知道 LeetCode 中的第一道题是 Two Sum，比较简单。我们今天决定挑一个与之类似，但难度稍大于之的问题 **二进制之和** 来分析，其中涉及到的主要知识是 Python 中的 **进制转换**，比如后面的解题方法中我们先将二进制转换为十进制，最后又将十进制转换回二进制。

<!--more-->

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **67** 号问题，

LeetCode - 67. Add Binary

<https://leetcode-cn.com/problems/add-binary/>

### 题目描述

------

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为**非空**字符串且只包含数字 1 和 0。

**示例 1:**

```
输入: a = "11", b = "1"
输出: "100"
```

**示例 2:**

```
输入: a = "1010", b = "1011"
输出: "10101"
```

- 贡献者: LeetCode

- 题目难度: **Easy**

- 相关话题
  - [数学](https://leetcode.com/tag/math)
  - [字符串](https://leetcode.com/tag/string)

- 相似题目
  - [两数相加](https://leetcode-cn.com/problems/add-two-numbers/)   难度: 中等
  - [字符串相乘](https://leetcode-cn.com/problems/multiply-strings/)   难度: 中等
  - [加一](https://leetcode-cn.com/problems/plus-one/)   难度: 简单
  - [数组形式的整数加法](https://leetcode-cn.com/problems/add-to-array-form-of-integer/)   难度: 简单

------

**解题思路:**

先使用 `int(var, 2)` 的方式将输入的二进制字符串转为 int，然后相加，得到和 sum 后，再使用 `format(sum, 'b')` 将结果转回二进制字符串，即为所需结果。

已 AC 代码(Python 3):

```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        num1 = int(a, 2)
        num2 = int(b, 2)
        sum0 = num1 + num2
        return format(sum0, 'b')
```

**ps:** 这里和的变量名使用`sum0`是因为 `sum` 是 Python 中内置的关键字。

**运行情况:**

执行用时: `44 ms`, 在所有 Python 3 提交中击败了`96.46%`的用户.

![leetcode67-result](http://www.justdopython.com/assets/images/2019/python/leetcode67-result.png)

如果需要在本地测试，完整代码如下:

```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        num1 = int(a, 2)
        num2 = int(b, 2)
        sum0 = num1 + num2
        return format(sum0, 'b')

# 测试
sol = Solution()
print(sol.addBinary('11', '1101'))
```

<br>

示例代码:
<https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-067>
