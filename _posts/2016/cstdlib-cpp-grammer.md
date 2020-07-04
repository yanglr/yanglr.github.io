---
title: C语言中你可能不熟悉的头文件<cstdio>(stdlib.h)
date: 2016-10-02 01:46:53
tags: [cpp, cstdlib]
categories: 
- 认识C标准库
---

## **C语言中你可能不熟悉的头文件&lt;cstdlib&gt;(stdlib.h)**

C Standard General Utilities Library (header)

C标准通用工具库(头文件)

此头文件定义了一些通用功能函数，包括动态存储器管理，随机数生成，与操作系统环境通信，整数算术，搜索，排序和转换。 

## 函数:

### 字符串转换

- [**atof**](http://www.cplusplus.com/reference/cstdlib/atof/)
  将字符串(char[])转换为double类型数, 即(char) array-> float(函数)

- [**atoi**](http://www.cplusplus.com/reference/cstdlib/atoi/)
  字符串转换为整型(函数)

- [**atol**](http://www.cplusplus.com/reference/cstdlib/atol/)
  字符串转换为long类型(函数)

- [**atoll**](http://www.cplusplus.com/reference/cstdlib/atoll/) (c++11)
  字符串转换为长整型long long类型(函数)

- [**strtod**](http://www.cplusplus.com/reference/cstdlib/strtod/)
  字符串转换为double类型(函数)

- [**strtof**](http://www.cplusplus.com/reference/cstdlib/strtof/) (c++11)
  字符串转换为浮点类型(函数)

- [**strtol**](http://www.cplusplus.com/reference/cstdlib/strtol/)
  字符串转换为long integer类型(函数)

- [**strtold**](http://www.cplusplus.com/reference/cstdlib/strtold/) (c++11)
  字符串转换为long double类型(函数)

- [**strtoll**](http://www.cplusplus.com/reference/cstdlib/strtoll/) (c++11)
  字符串转换为long long integer类型(函数)

- [**strtoul**](http://www.cplusplus.com/reference/cstdlib/strtoul/)
  字符串转换为无符号long integer类型(函数)

- [**strtoull**](http://www.cplusplus.com/reference/cstdlib/strtoull/) (c++11)

  字符串转换为无符号long long integer类型(函数)

- ### 函数(非标准)：

  [**itoa**](http://www.cplusplus.com/reference/cstdlib/itoa/)

  将整数转换为字符串.

  **注:** itoa并不是一个标准的C函数，它是Windows特有的，如果要写跨平台的程序，请用sprintf。

### 伪随机序列生成

- [**rand**](http://www.cplusplus.com/reference/cstdlib/rand/)
  产生一个伪随机数(函数)

- [**srand**](http://www.cplusplus.com/reference/cstdlib/srand/)

  初始化随机数生成器, 为伪随机数生成器设置种子(函数)

### 动态内存管理

- [**calloc**](http://www.cplusplus.com/reference/cstdlib/calloc/)

  分配内存且用 0 数组初始化(函数)

- [**free**](http://www.cplusplus.com/reference/cstdlib/free/)

  释放内存(函数)

- [**malloc**](http://www.cplusplus.com/reference/cstdlib/malloc/)

  分配内存(函数)

- [**realloc**](http://www.cplusplus.com/reference/cstdlib/realloc/)

  重分配内存(函数)

### 系统环境

- [**abort**](http://www.cplusplus.com/reference/cstdlib/abort/)

  使程序异常中止，不会主动释放资源(函数)

- [**atexit**](http://www.cplusplus.com/reference/cstdlib/atexit/)

  注册一个一旦程序发起 `exit` 请求就会调用的函数(函数)

- [**at_quick_exit**](http://www.cplusplus.com/reference/cstdlib/at_quick_exit/) (C++11)

  注册一个一旦程序发起 `quick_exit` 请求就会调用的函数(函数)

- [**exit**](http://www.cplusplus.com/reference/cstdlib/exit/)

  使程序正常中止，主动释放资源(函数)

- [**getenv**](http://www.cplusplus.com/reference/cstdlib/getenv/)

  获取系统环境变量列表(函数)

- [**quick_exit**](http://www.cplusplus.com/reference/cstdlib/quick_exit/) (C++11)

  使程序正常中止，不会主动释放所有资源(函数)

- [**system**](http://www.cplusplus.com/reference/cstdlib/system/)

  执行系统命令(函数)

- [**_Exit**](http://www.cplusplus.com/reference/cstdlib/_Exit/) (C++11)

  使程序正常中止，不会主动释放资源(函数)

### 搜索和排序

- [**bsearch**](http://www.cplusplus.com/reference/cstdlib/bsearch/)

  在数组中进行二分(Binary)查找(函数)

- [**qsort**](http://www.cplusplus.com/reference/cstdlib/qsort/)

  对数组元素进行快速排序(函数)

### 整数算术

- [**abs**](http://www.cplusplus.com/reference/cstdlib/abs/)

  获得整数(Integer)或浮点数(Floating point number)的绝对值(函数)

- [**div**](http://www.cplusplus.com/reference/cstdlib/div/)

  同时获得两数相除的商(Quotient)及余数(Remainder)(函数)

- [**labs**](http://www.cplusplus.com/reference/cstdlib/labs/)

  获得整数的绝对值(函数)

- [**ldiv**](http://www.cplusplus.com/reference/cstdlib/ldiv/)

  同时获得两数相除的商及余数(函数)

- [**llabs**](http://www.cplusplus.com/reference/cstdlib/llabs/)

  获得整数的绝对值(函数)

- [**lldiv**](http://www.cplusplus.com/reference/cstdlib/lldiv/)

  同时获得两数相除的商及余数(函数)

### 多字节(Multibyte)字符

- [**mblen**](http://www.cplusplus.com/reference/cstdlib/mblen/)

  返回下一个多字节字符的字节数(函数)

- [**mbtowc**](http://www.cplusplus.com/reference/cstdlib/mbtowc/)

  将下一个多字节字符转化成宽字符(函数)

- [**wctomb**](http://www.cplusplus.com/reference/cstdlib/wctomb/)

  将一个宽字符转化成对应的多字节字符(函数)

### 多字节字符串

- [**mbstowcs**](http://www.cplusplus.com/reference/cstdlib/mbstowcs/)

  将一个多字节字符串转化成宽字符串(函数)

- [**wcstombs**](http://www.cplusplus.com/reference/cstdlib/wcstombs/)

  将一个宽字符串转化成多字节字符串(函数)

### 宏常数

- [**EXIT_FAILURE**](http://www.cplusplus.com/reference/cstdlib/EXIT_FAILURE/)

  程序失败终止码, 表明一个程序执行失败 (macro)

- [**EXIT_SUCCESS**](http://www.cplusplus.com/reference/cstdlib/EXIT_SUCCESS/)

  程序成功终止码, 表明一个程序非正常完成执行 (macro)

- [**MB_CUR_MAX**](http://www.cplusplus.com/reference/cstdlib/MB_CUR_MAX/)

  多字节字符的最大尺寸 (macro)

- [**NULL**](http://www.cplusplus.com/reference/cstdlib/NULL/)

  空指针 (macro)

- [**RAND_MAX**](http://www.cplusplus.com/reference/cstdlib/RAND_MAX/)

  `std::rand` 可能产生的最大随机数值 (macro)

### 类型(type)

| 类型                                       | 描述                   |
| ---------------------------------------- | -------------------- |
| `div_t`                                  | 结构体类型，由 `div` 函数返回   |
| `ldiv_t`                                 | 结构体类型，由 `ldiv` 函数返回  |
| `lldiv_t`                                | 结构体类型，由 `lldiv` 函数返回 |
| [**size_t**](http://www.cplusplus.com/reference/cstddef/size_t/) | 无符号整型 (type )        |
<br>
参考链接: <http://www.cplusplus.com/reference/cstdlib/>
