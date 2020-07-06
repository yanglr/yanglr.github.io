---
layout: post
category: Leetcode面试题
title:  LeetCode面试系列 第5天：No.204 - 统计质数
tagline: by 萌较瘦
tags: 
  - LeetCode面试题系列
---

在上篇算法题的文章中，我们介绍了 LeetCode 中的一道*数学题* - **快乐数** 。今天，我们来聊聊**质数**(英文是Prime，也称为素数)相关的面试题。以前很多编程书上会有个经典问题，即**判断一个数是否是质数**，在那之后大家应该对判定质数的逻辑有了一定的认识。今天呢，我们来解决一个进阶问题，如何计算一个区间内素数(质数)的数量。

<!--more-->

![Leetcode](http://www.justdopython.com/assets/images/2019/python/LeetCode.png)

今天要给大家分析的面试题是 LeetCode 上第 **204** 号问题，

LeetCode - 204. 统计质数

<https://leetcode-cn.com/problems/count-primes/>

#### 题目描述

统计所有小于非负整数 *n* 的质数的数量。

**示例:**

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

- 贡献者: LeetCode

- 题目难度: **Easy**

- 通过率: `30.23%`

- 相关话题
  - [数学](https://leetcode.com/tag/math)
  - [哈希表](https://leetcode.com/tag/hash-table) 

- 相似题目
  - [丑数](https://leetcode-cn.com/problems/ugly-number/)   难度: **简单**
  - [丑数 II](https://leetcode-cn.com/problems/ugly-number-ii/)  难度: **中等**
  - [完全平方数](https://leetcode-cn.com/problems/perfect-squares/)  难度: **中等**

------

**解题思路:**

1. 遍历每个数，判断它是否为素数。

基于传统教科书中的算法 `IsPrime`(其流程见下图)来做，即在 `IsPrime`算法外套一个循环来做，由于下面流程的时间复杂度 T(n) = O(n*log n)，于是整体算下来整个算法最后的时间复杂度为 O(n * n * log n)，这个算法的时间复杂度是不达标的。
  ![check_prime](http://www.justdopython.com/assets/images/2019/python/check_prime.png)

2. 使用一个筛子，把每一个是合数的数干掉，记录其状态 isDelete，用isDelete=true表示不是质数，已被删掉，而fasle表示留下了，是质数。这个方法被称为**筛法**(Sieve Method)。

![Sieve_of_Eratosthenes_animation](http://www.justdopython.com/assets/images/2019/python/sieve_of_eratosthenes_animation.gif)

**筛法**又分为**埃拉托斯特尼筛法（埃筛）**和**欧拉筛（线性筛）两种**。**埃筛**是用一个数组标记是否为素数，然后依次筛去这个素数的倍数，其时间复杂度是O(n*log n)。而**欧拉筛**是在埃筛的基础上，让每一个合数都只被他的最小质因子筛去，从而减小时间。**欧拉筛**的复杂度几乎是O(n)，由于其代码相对比较难理解，就不详细介绍了。

下面我们使用**埃筛**来统计质数数量，具体操作是从2开始维护一个bool数组isDelete来记录该数是否被删掉，依次删掉当前索引 **i** 的倍数，最后数组中未被删掉的值(其isDelete值为false)都是素数。

已AC代码 解法1:

```python
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 2:
            return 0
        else:
            isDelete = [False]*n
            max0 = int(math.sqrt(n))
            count = 0
            for i in range(2, n):
                if isDelete[i] == True:
                    continue
                count += 1

                if i > max0:
                    continue

                for j in range(i*i, n, i):
                    isDelete[j] = True
        return count            
```

ps: 由于这段代码使用了数学库函数`sqrt()`，于是本地测试需要在开头引入`math`库，其代码如下:

```python
import math
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 2:
            return 0
        else:
            isDelete = [False]*n
            max0 = int(math.sqrt(n))
            count = 0
            for i in range(2, n):
                if isDelete[i] == True:
                    continue
                count += 1

                if i > max0:
                    continue

                for j in range(i*i, n, i):
                    isDelete[j] = True
        return count  

sol = Solution()
print(sol.countPrimes(5566))
```

![sol1](http://www.justdopython.com/assets/images/2019/python/sol1.png)

执行用时 : `492 ms`, 在所有 Python3 提交中击败了`47.44 %`的用户.

已AC代码 解法2:

```python
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 2:
            return 0
        else:
            isPrime = [1]*n  # isPrime = not deleted
            isPrime[0] = 0
            isPrime[1] = 0

            for i in range(2, int(n**0.5) + 1):
                if isPrime[i]:
                    isPrime[i*i:n:i] = [0]*((n-1-i*i)//i + 1)   # slice: a[start:stop:step] # items from the beginning through stop-1
        return sum(isPrime)
```

![sol2](http://www.justdopython.com/assets/images/2019/python/sol2.png)

执行用时 : `100 ms`, 在所有 Python3 提交中击败了`94.27 %`的用户.

<br>

示例代码:
<https://github.com/JustDoPython/leetcode-python/tree/master/leetcode-204>

**参考资料:**

Eratosthenes筛法(埃式筛法)时间复杂度分析 - Gavin_Nicholas的博客 - CSDN博客
<https://blog.csdn.net/Gavin_Nicholas/article/details/88974079>