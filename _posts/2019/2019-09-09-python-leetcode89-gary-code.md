---
layout: post
redirect_from:
  - /2019/09/09/python-leetcode89-gary-code/
title:  Leetcode面试系列 第1天：No.89 - 格雷码
tagline: by 萌较瘦
categories: 
- [leetcode, python]
tags: [leetcode, python]
copyright: python
excerpt: Leetcode面试题系列第1天
image: https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/LeetCode.png
---

最近，打算花点时间写个 Python 解决 Leetcode 题的系列文章~

大家是否还记得电影黑客帝国中的数字雨林的场景？事实上，计算机底层数据的存储和运算都是二进制的，因而面试题环节中面试官也经常会问到二进制相关问题。

![matrix](https://cdn.jsdelivr.net/gh/justdopython/justdopython.github.io/assets/images/2019/python/matrix-01.gif)

比较典型的一个问题是 Leetcode 上第 89 号问题，

Leetcode 89. Gray Code

在线提交地址: <https://leetcode-cn.com/problems/gray-code/>
<!--more-->

<br>

### 题目描述

------

格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

给定一个代表编码总位数的非负整数 n，打印格雷码序列。格雷码序列必须以 0 开头。

例如，给定 *n* = 2，返回 **[0,1,3,2]**。其格雷编码是：

```
00 - 0
01 - 1
11 - 3
10 - 2
```

**说明:**

对于给定的 *n*，其格雷编码的顺序并不唯一(因此返回结果的顺序不重要，可使用 Vector 或 List )。

例如 [0,2,3,1] 也是一个有效的格雷编码顺序。

------

- 题目难度:  **Medium**

- 相关话题 [回溯算法](https://leetcode-cn.com/tag/backtracking)

- 相似题目 [1比特与2比特字符](https://leetcode-cn.com/problems/1-bit-and-2-bit-characters)

------

**解题思路:**

格雷码有个相应的数学公式，整数 *i*  的格雷码是 i^(i/2) 。而此题并没要求返回结果中的值的严格顺序。

![grayCode](http://cdn.jsdelivr.net/gh/justdopython/justdopython.github.io/assets/images/2019/python/grayCode.png)

于是只需遍历从 0 到 2^n - 1 的所有整数 *i*，使用公式将其转换为格雷码，添加到 List 中即可。

已AC代码(Python 3):

```python
class Solution:
    def grayCode(self, n: int) -> List[int]:
        res = [] 
        for i in range(1 << n): 
            res.append((i >> 1) ^ i) 
        return res
```

![code](http://cdn.jsdelivr.net/gh/justdopython/justdopython.github.io/assets/images/2019/python/leetcode89-code.jpg)

如果需要在本地测试，需要先在代码开头引入`from typing import List`，然后实例化 `Solution`，最后调用相应的 method 即可。完整代码如下:

```python
from typing import List

class Solution:
    def grayCode(self, n: int) -> List[int]:
        res = [] 
        for i in range(1 << n): 
            res.append((i >> 1) ^ i) 
        return res
        
# 以下是测试代码
obj = Solution()
print(obj.grayCode(2))
```

**运行结果:**

执行用时: `48 ms`, 在所有 Python3 提交中击败了`87.40%`的用户。

<br>

示例代码:
<https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-089>

<br>

**参考:**

[LeetCode] Gray Code - 穆穆兔兔 - 博客园
<https://www.cnblogs.com/diegodu/p/4371807.html>
