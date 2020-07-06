---
layout: post
title:  LeetCode面试系列 第2天：No.136 - 只出现一次的数
tagline: by 萌较瘦
category: Leetcode面试题
copyright: python
excerpt: Leetcode面试题系列
---

LeetCode面试题题系列的上一篇文章，我们介绍了**位操作**的一个典型题。

今天呢，咱们来聊聊哈希表(字典)，这是另一种典型面试题。哈希表实际上就是用内存空间换时间，即消耗额外的一点内存，但可将数据读取的时间大大降低，其时间复杂度几乎是常数时间(O(1))。

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

比较典型的一个问题是 Leetcode 上第 **136** 号问题，

Leetcode 136. single number

在线提交地址: <https://leetcode-cn.com/problems/single-number/>

<!--more-->

<br>

### 题目描述

------

给定一个**非空**整数数组，除了某个元素只出现一次以外，其余每个元素均出现**两次**。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1:**
```
输入: [2,2,1]
输出: 1
```

**示例 2:**
```
输入: [4,1,2,1,2]
输出: 4
```

------

- 贡献者: LeetCode

- 题目难度:  **Easy**

- 相关话题 
  - [位运算](https://leetcode-cn.com/tag/bit-manipulation/)
  - [哈希表](https://leetcode-cn.com/tag/hash-table/)

- 相似题目
  - [只出现一次的数字 II](https://leetcode-cn.com/problems/single-number-ii/)  难度:  中等
  - [只出现一次的数字 III](https://leetcode-cn.com/problems/single-number-iii/) 难度:  中等
  - [缺失数字](https://leetcode-cn.com/problems/missing-number/) 难度:  简单
  - [寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/) 难度:  中等
  - [找不同](https://leetcode-cn.com/problems/find-the-difference/) 难度:  简单

------

**解题思路:**

**解法1:** 

使用 dict 存储每一个整数出现的次数，如果当前数在 dict 中不存在，则添加之，出现的次数设置成1，否则每再出现一次，次数加1。最后从里面挑出第一个出现次数为1的 KeyValuePair 的Key值即可。

**解法2:** 

使用按位异或。

由于异或操作^具有如下几个性质：

- a^a = 0

- a^0 = a

- a^b = b^a

那么，将原 nums 数组里的所有数进行按位异或，每两个相等的数都异或为 0 而抵消了，最后剩下的数与 0 异或得到的是它本身，即为只出现过一次的数。

**方法1**的已 AC 代码(Python 3):

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        res = 0
        d = dict()
        for num in nums:
            if num not in d:
                d[num] = 1
            else:
                d[num] += 1
        res = next(k for k, val in d.items() if val == 1)
        return res
```

如果需要在本地测试，需要先在代码开头引入`from typing import List`。完整代码如下:

```python
from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        res = 0
        d = dict()
        for num in nums:
            if num not in d:
                d[num] = 1
            else:
                d[num] += 1
        res = next(k for k, val in d.items() if val == 1)
        return res

#以下是测试
sol = Solution()
print(sol.singleNumber([6, 4, 6, 2, 4]))
```

执行用时: `104 ms`, 在所有 Python3 提交中击败了`43.71%`的用户。

**方法2**的已 AC 代码(Python 3):

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        r = 0
        for i in nums:
            r ^= i
        return r
```
如果需要本地测试，其方法与 方法1 类似，只需要替换 class 部分即可。

**运行结果:**

执行用时: `84 ms`, 在所有 Python3 提交中击败了`99.96 %`的用户。

显然，对于此题，`位运算`依然更胜一筹。

<br>

示例代码:
<https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-136>