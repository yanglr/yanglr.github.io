---
layout: post
category: leetcode
redirect_from:
  - /2018/06/02/aimed-at-offer-the-first-character-which-only-appear-once-csharp/
title:  C#版 - 剑指Offer 面试题35：第一个只出现一次的字符 解题报告
tagline: by 萌较瘦
tags: leetcode
excerpt: 剑指Offer 面试题35：第一个只出现一次的字符

keywords: .NET, leetcode
description: C#版 - 剑指Offer 面试题35：第一个只出现一次的字符 解题报告
# topmost: true
author: bravo_yeung
date: 2018-06-02 11:18:46
image: https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/edison-gzh1.png
---

在线提交网址：
<https://www.nowcoder.com/practice/e896d0f82f1246a3aa7b232ce38029d4?tpId=37&tqId=21282>


### 题目描述

找出字符串中第一个只出现一次的字符 

### 输入描述:

```
输入一个非空字符串
```

### 输出描述:

```
输出第一个只出现一次的字符，如果不存在输出-1
```

示例1

#### 输入

```
asdfasdfo
```

#### 输出


```
o
```


示例2

#### 输入

```
aabb
```

#### 输出


```
—1
```

**思路**：使用Dictionary&lt;char, int>存储每一个字符出现的次数即可，然后从里面挑出第一个出现次数为1的KeyValuePair的Key即可。

满足题意的代码如下：
```csharp
using System.Collections.Generic;
using System.Linq;

namespace AimedAtOffer35
{
    public class Program
    {
        public static char FirstNotRepeatingChar(string str)
        {
            char res = new char();
            Dictionary<char, int> dict = new Dictionary<char, int>();
            if (str.Length == 0)
                return '\0';

            for (int i = 0; i < str.Length; i++)
            {
                if (!dict.ContainsKey(str[i]))
                    dict.Add(str[i], 1);
                else
                    dict[str[i]]++;
            }
            res = dict.FirstOrDefault(p => p.Value == 1).Key; //LINQ是C#3.0中引入的，可以直接用，目前C#已到7.0版

            return res;
        }

        public static void Main()
        {
            string line;
            while ((line = System.Console.ReadLine()) != null)
            {
                string str= line;
                var ch = FirstNotRepeatingChar(str);
                if (ch == '\0')
                {
                    System.Console.WriteLine(-1);
                }
                else System.Console.WriteLine(ch);
            }
        }
    }
}
```

顺利AC。

如果输出写成这样代码将输出字符的ASCII码数字，最后无法pass。
```csharp
    var res = (FirstNotRepeatingChar(str) == '\0') ? -1 : FirstNotRepeatingChar(str);
    // var即使改为dynamic，在WriteLine时均会输出其ASCII码数字
    System.Console.WriteLine(res);
```

关于牛客网OJ中的C#输入，**可参考**：

牛客网在线判题系统使用帮助 *站内公告* - 牛客网 

<https://www.nowcoder.com/discuss/276>
