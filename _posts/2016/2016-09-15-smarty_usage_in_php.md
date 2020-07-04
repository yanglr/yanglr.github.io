---
title: PHP中Smarty引擎的常用语法
date: 2016-09-15 15:07:22
tags: PHP
---


smarty在PHP项目开发中用得挺多的, 主要用于实现前后端分离, 本文来总结一下常见的用法.



输出今天的日期:

```smarty
{$smarty.now|date_format:"%H:%M %A, %B %e, %Y"}
```
实际上用到了PHP的time()函数

明天Date of Tomorrow:
```
{"tomorrow"|date_format:"%A, %B %e, %Y"}
```

后天Date of the day after tomorrow (Day+2):
```
{"+2 days"|date_format:"%A, %B %e, %Y"}
```

(Day+3):
```
{"+3 days"|date_format:"%A, %B %e, %Y"}
```
相关链接:

How to do to print out date of tomorrow (day+1) with Smarty? - v1.x Store Design & Templates - CS-Cart Community Forums  http://forum.cs-cart.com/topic/8070-how-to-do-to-print-out-date-of-tomorrow-day1-with-smarty/ 

## foreach
```
    {foreach from=$workDetails key=key item=workDetail}
        <td>{$workDetail['name']}</td>
    {/foreach}
```
## if, else
```
{if $weekDay neq 0 and  $weekDay neq 6}

{else}

{/if}
```


## 调用php函数
`{$monthDay|substr:'5':'9'}`
```
{if $weekDay neq 0 and  $weekDay neq 6}
    <th>
        <div style="text-align: center; width:{$tableTdWidth * ($groupMaxCostData['groupMaxCostTimes'][$monthDay] + 1)}px">{$monthDay|substr:'5':'9'}<div>
    </th>
{else}
    <th style="background-color: gray;">
        <div style="width:{$tableTdWidth * ($groupMaxCostData['groupMaxCostTimes'][$monthDay] + 1)}px">{$monthDay|substr:'5':'9'}<div>
    </th>
{/if}
```

## 相等与不等
eq、neq
和shell的写法接近

```
$var eq 5
```

## 是否有值
```
{if $var}
```