---
layout: post
category: Leetcode面试题
title:  LeetCode面试系列 第8天：No.58 - 最后一个单词的长度
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
---

上一篇 LeetCode 面试题中，我们分析了一道将数学和字符串结合起来的的面试题，今天我们再来分析了一道轻松的字符串面试题吧~

<!--more-->

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **58** 号问题，

LeetCode -  58. 最后一个单词的长度

<https://leetcode-cn.com/classic/problems/length-of-last-word/>

### 题目描述

给定一个仅包含大小写字母和空格 `' '` 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

**说明：**一个单词是指由字母组成，但不包含任何空格的字符串。

**示例:**

```
输入: "Hello World"
输出: 5
```

- 题目难度： `简单`
- 通过次数：49.1K
- 提交次数：156.4K
- 贡献者：LeetCode

<br>

- 相关标签 

  - 字符串

    <https://leetcode-cn.com/tag/string>

**解题思路:**

这道字符串题目可以使用直接法~

- 删掉首尾部的换行、`\t`、空格等字符，使用 `strip()` 函数可以完成
- 寻找最后一个空格
  - 如果不存在空格，直接返回字符串的长度
  - 若存在空格，用长度 减去 最后一个空格的位置

已AC代码:

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int: 
        newStr = s.strip()       
        lastSpacePos = newStr.rfind(' ')
        if lastSpacePos == -1:
            return len(newStr)
        else:
            return len(newStr) - lastSpacePos - 1
```

执行用时: `28 ms`, 在所有 python3 提交中击败了 `99.83%` 的用户

示例代码: <https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-058>
