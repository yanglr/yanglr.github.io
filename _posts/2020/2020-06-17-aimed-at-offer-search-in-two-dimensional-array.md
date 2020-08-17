---
layout: post
title: 剑指Offer | 二维数组中的查找
categories: 
- [.NET, leetcode, 算法面试]
tags: [.NET, leetcode]
excerpt: 剑指Offer的C#实战之二维数组中的查找

keywords: .NET, 剑指Offer
description: 剑指Offer的C#实战之二维数组中的查找
author: edison_zhou
platform: 公众号
gzhname: 恰童鞋骚年
date: 2020-06-17 07:30:00
---

由 Edison Zhou公众号「恰童鞋骚年」授权发表~

------

![大白技术控geekplayers](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/edison-gzh1.png)

刚刚结束了《[每天5分钟用C#学习数据结构](http://mp.weixin.qq.com/s?__biz=MzA4NzQzNTg4Ng==&mid=2651731421&idx=1&sn=f97cc4cd59e60f23341c8548c304fdc8&chksm=8bc3eadcbcb463cabb6bb6e8f3bdb01dd1cd2cc6963300bc36843d9aac6bedb1280e3c667c62&scene=21#wechat_redirect)》的学习之旅，今天开始我们来用之前学到的数据结构知识来刷《剑指Offer》的一些核心题目（精选了其中30+道题目），希望对你有帮助！本文是第一篇，题目为：二维数组中的查找。

画外音：后台回复`offer`，pdf下载链接。

## 1.题目介绍

在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

例如下面的二维数组就是每行、每列都递增排序。如果在这个数组中查找数字7，则返回true；如果查找数字5，由于数组不含有该数字，则返回false。

![大白技术控geekplayers](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/edison-gzh2.png)

## 2.解题思路

怎么样，有思路吗？

![大白技术控geekplayers](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/edison-gzh3.png)

首先选取数组中右上角的数字。如果该数字等于要查找的数字，查找过程结束；如果该数字大于要查找的数字，剔除这个数字所在的列；如果该数字小于要查找的数字，剔除这个数字所在的行。也就是说如果要查找的数字不在数组的右上角，则每一次都在数组的查找范围中剔除一行或者一列，这样每一步都可以缩小查找的范围，直到找到要查找的数字，或者查找范围为空。

例如，我们要在上述的二维数组中查找数字7的步骤如下图所示：

![大白技术控geekplayers](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/edison-gzh4.jpg)

　　（矩阵中加阴影背景的区域是下一步查找的范围）

## 3.解决问题

**代码实现**

当然是用我们最熟悉的C#代码来实现一下：

```csharp
// 二维数组matrix中，每一行都从左到右递增排序，
// 每一列都从上到下递增排序
public static bool Find(int[,] matrix, int rows, int columns, int number)
{
    bool isFind = false;

    if (matrix != null && rows > 0 && columns > 0)
    {
        // 从第一行开始
        int row = 0;
        // 从最后一列开始
        int column = columns - 1;
        // 行：从上到下，列：从右到左
        while (row < rows && column >= 0)
        {
            if (matrix[row, column] == number)
            {
                isFind = true;
                break;
            }
            else if (matrix[row, column] > number)
            {
                column--;
            }
            else
            {
                row++;
            }
        }
    }

    return isFind;
}
```



在前面的分析中，我们每一次都是选取数组查找范围内的右上角数字。同样，我们也可以选取左下角的数字。但我们不能选择左上角或者右下角。以左上角为例，最初数字1位于初始数组的左上角，由于1小于7，那么7应该位于1的右边或者下边。此时我们既不能从查找范围内剔除1所在的行，也不能剔除1所在的列，这样我们就**无法缩小查找的范围**。



## 4.单元测试

代码实现之后，我们需要写一定的单元测试来验证我们的代码实现：

（1）要查找的数字在数组中


```csharp

[TestMethod]
public void FindTest1()
{
    //  1   2   8   9
    //  2   4   9   12
    //  4   7   10  13
    //  6   8   11  15
    // 要查找的数在数组中
    int[,] matrix = { { 1, 2, 8, 9 }, { 2, 4, 9, 12 }, { 4, 7, 10, 13 }, { 6, 8, 11, 15 } };
    // 可以通过GetLength()方法获取行数和列数
    //Assert.AreEqual(Program.Find(matrix, matrix.GetLength(0), matrix.GetLength(1), 7), true);
    Assert.AreEqual(Program.Find(matrix, 4, 4, 7), true);
}
```

（2）要查找的数不在数组中

```csharp
[TestMethod]
public void FindTest2()
{
    //  1   2   8   9
    //  2   4   9   12
    //  4   7   10  13
    //  6   8   11  15
    // 要查找的数不在数组中
    int[,] matrix = {% raw %}{{% endraw %}{1, 2, 8, 9}, {2, 4, 9, 12}, {4, 7, 10, 13}, {6, 8, 11, 15} {% raw %}{{% endraw %};
    Assert.AreEqual(Program.Find(matrix, 4, 4, 5), false);
}
```

（3）要查找的数是数组中最小的数字

```csharp
[TestMethod]
public void FindTest3()
{
    //  1   2   8   9
    //  2   4   9   12
    //  4   7   10  13
    //  6   8   11  15
    // 要查找的数是数组中最小的数字
    int[,] matrix = { { 1, 2, 8, 9 }, { 2, 4, 9, 12 }, { 4, 7, 10, 13 }, { 6, 8, 11, 15 } };
    Assert.AreEqual(Program.Find(matrix, 4, 4, 1), true);
}
```

（4）要查找的数是数组中最大的数字
```csharp
[TestMethod]
public void FindTest4()
{
    //  1   2   8   9
    //  2   4   9   12
    //  4   7   10  13
    //  6   8   11  15
    // 要查找的数是数组中最大的数字
    int[,] matrix = { { 1, 2, 8, 9 }, { 2, 4, 9, 12 }, { 4, 7, 10, 13 }, { 6, 8, 11, 15 } };
    Assert.AreEqual(Program.Find(matrix, 4, 4, 15), true);
}
```

（5）要查找的数比数组中最小的数字还小

```csharp
[TestMethod]
public void FindTest5()
{
    //  1   2   8   9
    //  2   4   9   12
    //  4   7   10  13
    //  6   8   11  15
    // 要查找的数比数组中最小的数字还小
    int[,] matrix = { { 1, 2, 8, 9 }, { 2, 4, 9, 12 }, { 4, 7, 10, 13 }, { 6, 8, 11, 15 } };
    Assert.AreEqual(Program.Find(matrix, 4, 4, 0), false);
}
```

（6）要查找的数比数组中最大的数字还大


```csharp
[TestMethod]
public void FindTest6()
{
    //  1   2   8   9
    //  2   4   9   12
    //  4   7   10  13
    //  6   8   11  15
    // 要查找的数比数组中最大的数字还大
    int[,] matrix = { { 1, 2, 8, 9 }, { 2, 4, 9, 12 }, { 4, 7, 10, 13 }, { 6, 8, 11, 15 } };
    Assert.AreEqual(Program.Find(matrix, 4, 4, 16), false);
}
```

（7）鲁棒性测试，输入空指针

```csharp
[TestMethod]
public void FindTest7()
{
    // 鲁棒性测试，输入空指针
    Assert.AreEqual(Program.Find(null, 0, 0, 16), false);
}
```

最终单元测试的结果：

![大白技术控geekplayers](//cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/2020/edison-gzh5.png "单元测试")

## 5.参考资料

何海涛，《剑指Offer》

后台回复：`offer`，即可获得pdf下载链接哟！
