---
layout: post
category: Leetcode面试题
title:  LeetCode面试系列 第7天：No.13 - 罗马数字转整数
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
---

上一篇 LeetCode 面试题中，我们分析了一道轻松的字符串面试题 - **回文数**。今天我们来分析一道将数学和字符串结合起来的的面试题。

<!--more-->

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **13** 号问题，

LeetCode - 13. 罗马数字转整数

<https://leetcode-cn.com/problems/palindrome-number/>



#### 题目描述

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做 `II` ，即为两个并列的 1。12 写做 `XII` ，即为 `X` + `II` 。 27 写做  `XXVII`, 即为 `XX` + `V` + `II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 `IIII`，而是 `IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 `IX`。这个特殊的规则只适用于以下六种情况：

- `I` 可以放在 `V` (5) 和 `X` (10) 的左边，来表示 4 和 9。
- `X` 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。 
- `C` 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

**示例 1:**

```
输入: "III"
输出: 3
```

**示例 2:**

```
输入: "IV"
输出: 4
```

**示例 3:**

```
输入: "IX"
输出: 9
```

**示例 4:**

```
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

**示例 5:**

```
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

- 题目难度：**简单**

- 通过次数：108.7K

- 提交次数：183K

- 贡献者：LeetCode

- 相关标签 
  - 数学
    <https://leetcode-cn.com/tag/math>
  
  - 字符串
    <https://leetcode-cn.com/tag/string>

- 相似题目
  - 整数转罗马数字
     <https://leetcode-cn.com/problems/integer-to-roman>  难度: **中等**

------

**解题思路:**

只要考虑以下两种情况：

- 使用字典存储每个罗马字母表示的数，比如，'V' - 5, 'X' - 10
- 如果当前位的字母是最后一位，或者它后一位字母对应的数比它对应的数小的话，则加上当前位的字母对应的数
- 其他情况则减去当前位的字母对应的数.

已`AC`的代码为:

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        d = dict()
        d = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        sum0 = 0
        for i in range(len(s)):
            currentValue = d[s[i]]
            
            if i == len(s) -1 or d[s[i+1]] <= currentValue:  # d[s[i+1]]: nextValue
                sum0 += d[s[i]]
            else:
                sum0 -= d[s[i]]
        
        return sum0 
```

示例代码: <https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-013>