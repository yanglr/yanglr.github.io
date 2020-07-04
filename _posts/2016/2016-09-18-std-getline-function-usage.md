---
title: C++中std::getline函数的用法
date: 2016-09-18 21:23:07
tags: [oj]
categories:
- C++常用语法
---

# std::getline

 

在头文件 <string> 中定义.

`getline`从输入流中读取字符, 并把它们转换成字符串.

1) 的行为就像[`UnformattedInputFunction`](http://zh.cppreference.com/w/cpp/concept/UnformattedInputFunction), 除了`input.gcount()`不会受到影响.在构造和检查岗哨对象的, 执行以下操作：

1) 调用str.erase()

2) `input`并把它们添加到`str`的字符提取出来, 直到发生以下情况之一中列出的顺序进行检查

a) 上`input`文件结束的条件, 在这种情况下, `getline`套[eofbit](http://zh.cppreference.com/w/cpp/io/ios_base/iostate)和回报.

b) 下一个可用的输入字符`delim`, Traits::eq(c, delim), 在这种情况下, 分隔符是从`input`提取进行了测试, 但不会追加到`str`.

c) str.max_size()字符, 在这种情况下, 已经被存储`getline`集[failbit](http://zh.cppreference.com/w/cpp/io/ios_base/iostate)并返回.

3) 如果没有字符提取任何理由（甚至没有被丢弃的分隔符）, `getline`套[failbit](http://zh.cppreference.com/w/cpp/io/ios_base/iostate), 并返回.

2) 同getline(input, str, input.widen(’\n’)), 默认的分隔符是'\n'字符.



### 参数

 **input**  -     流中获取数据
 **str**    -     把数据转换成字符串 
 **delim**  -     分隔符       

### 返回值

`input`



### Notes

When used immediately after whitespace-delimited input, e.g. after int n; [std::cin](http://en.cppreference.com/w/cpp/io/cin) >> n;, `getline` consumes the endline character left on the input stream by [operator>>](http://en.cppreference.com/w/cpp/io/basic_istream/operator_gtgt), and returns immediately. A common solution is to ignore all leftover characters on the line of input with cin.ignore([std::numeric_limits](http://en.cppreference.com/w/cpp/types/numeric_limits) < [std::streamsize](http://en.cppreference.com/w/cpp/io/streamsize) >::max(), '\n'); before switching to line-oriented input.



### 示例

下面的例子陈述了如何使用getline函数来读取用户输入, 以及如何按行处理文件内容. 

```cpp
#include <string>
#include <iostream>
#include <sstream>
 
int main()
{
    // greet the user
    std::string name;
    std::cout << "What is your name? ";
    std::getline(std::cin, name);
    std::cout << "Hello " << name << ", nice to meet you.\n";
 
    // read file line by line
    std::istringstream input;
    input.str("1\n2\n3\n4\n5\n6\n7\n");
    int sum = 0;
    for (std::string line; std::getline(input, line); ) {
        sum += std::stoi(line);
    }
    std::cout << "\nThe sum is: " << sum << "\n";
}
```



可能的输出:

```
What is your name? John Q. Public
Hello John Q. Public, nice to meet you.
 
The sum is 28
```
