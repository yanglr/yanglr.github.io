---
layout: post
categories: 
- [leetcode, python, Leetcode面试题]
redirect_from:
  - /2019/11/13/leetcode345-reverse-vowels-of-a-string/
title:  LeetCode面试系列 第9天：No.345 - 反转字符串中的元音字母
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
excerpt: LeetCode面试No.345 - 反转字符串中的元音字母
---

上一篇 LeetCode 面试题中，我们分析了一道相对轻松的字符串面试题 - **最后一个单词的长度**。今天，我们接着来看另一道字符串的算法题吧。

<!--more-->

![Leetcode](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **345** 号问题，

LeetCode - 345. 反转字符串中的元音字母

<https://leetcode-cn.com/problems/reverse-vowels-of-a-string>

### 题目描述

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

**示例 1:**

```
输入: "hello"
输出: "holle"
```

**示例 2:**

```
输入: "leetcode"
输出: "leotcede"
```

**说明:**
元音字母不包含字母"y"。

- 题目难度：**简单**

- 通过次数：17.9K

- 提交次数：37.2K

- 贡献者：LeetCode

- 相关标签

  - 双指针
  
    <https://leetcode-cn.com/tag/two-pointers>

  - 字符串

    <https://leetcode-cn.com/tag/string>

- 相似题目

  - 反转字符串

    <https://leetcode-cn.com/problems/reverse-string>  难度: **简单**

  - 删去字符串中的元音
    
    <https://leetcode-cn.com/problems/remove-vowels-from-a-string>  难度: **简单**

**解题思路:**

本题的意思很简单，就是给定一个只含有英文字母的字符串，将其中的元音字母在元音字母原有的位置上进行位置反转，而非元音字母的位置保持不变。

需要注意的一点是：元音字母应把 a, e, i, o, u 的小写和大写都考虑在内。

具体的操作如下:

- 将原字符串遍历一次，取出其中的元音字母放进一个 list (比如，变量名用 vList) 中
- 调用函数 reverse() 将 vList 进行反转，得到反转后的 vList
- 重新遍历原字符串，遇到非元音字母直接输出；遇到元音字母，则从已反转的 vList 中取出需要的元音字母。

已 AC 代码:

```python
class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
        vList = list()
                
        vCount = 0
        for index in range(len(s)):  
            if s[index] in vowels:
                vList.append(s[index])

        res_str = ''        
        vList.reverse()

        vOutCount = 0
        for index in range(len(s)):
            if s[index] not in vowels:
                res_str += s[index]
            else:                
                res_str += vList[vOutCount]
                vOutCount += 1

        return res_str
```

**运行结果:**

执行用时: `84 ms`, 在所有 python3 提交中击败了 `48.79%` 的用户.

示例代码: <https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-345>

![Leetcode](http://cdn.jsdelivr.net/gh/justdopython/justdopython.github.io/assets/images/2019/python/leetcode345.png)
