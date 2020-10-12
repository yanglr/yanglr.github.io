---
layout: post
date: 2020-09-07 21:18:07
title: FlagCounter被博客园禁用的解决方法
categories:
- [flagcounter,flagcounter插件, flagcounter类似]
# platform: 公众号
# gzhname: 大白技术控
tags: [flagcounter,flagcounter插件, flagcounter类似, 博客园]
excerpt: FlagCounter插件被博客园禁用后，相似的替代工具有哪些?
keywords: flagcounter,flagcounter插件, flagcounter类似
description: FlagCounter插件被博客园禁用后，相似的替代工具有哪些?
topmost: true
original: true
image: https://cdn.jsdelivr.net/gh/yanglr/images/trace-p4.png
---

## FlagCounter被博客园禁用的解决方法

自从博客园禁用大家常用的ip访问统计插件flag counter后，相信大家多少会有点不太适应。
大白试用了各种类似于flagcounter的工具，发现有两个主要的备选方案，即`Tracemyip.org`和`clustrmaps.com`，接下来大白就详细说说具体的用法。

## 1. Tracemyip.org

首先，注册账号 [https://www.tracemyip.org/members/index.php?page=spm_checkout&type=ssub&ntc=1](https://www.tracemyip.org/members/index.php?page=spm_checkout&type=ssub&ntc=1)，类型选"Level 1 Free"

![极客玩家大白p1-Tracemyip.org](https://cdn.jsdelivr.net/gh/yanglr/images/trace-p1.png)

然后拖到页面下方，点"Sign up"



接下来，进入页面:

<https://s3.tracemyip.org/members/index.php?page=projects_codereg&style=1500~1597899418~14)*2~0F5999*F7FFE6*537899*000000~1*1*0*0*0&rgtype=4684NR-IPIB&urlupdate=>

相应短链为: [https://d.oo14.com/bNQc](https://d.oo14.com/bNQc)


不登录时，得到的是:

![极客玩家大白p2-Tracemyip.org](https://cdn.jsdelivr.net/gh/yanglr/images/trace-p2.png)

填完信息时，会要求填email，然后登陆即可~

代码类型选用:
`HTML Code - Compatibility Mode 1`

由于我的博客园博客是[www.cnblogs.com/enjoy233](http://www.cnblogs.com/enjoy233)，所以相应地url需要填: `www.cnblogs.com/enjoy233`.

![极客玩家大白p3-Tracemyip.org](https://cdn.jsdelivr.net/gh/yanglr/images/trace-p3.png)


得到代码后，贴到博客园设置后台的**博客侧边栏公告**中:


比如，我的是:

```html
<div style="line-height:16px;text-align:center;">
    <a title="Joomla hits ip traffic statistics"
        href="https://www.tracemyip.org/tools/website-visitors-counter-traffic-tracker-statistics/">
        <img src="//s3.tracemyip.org/tracker/1500~1597898865~14*2~0F5999*F7FFE6*537899*000000~1*1*0*1*1/4684NR-IPIB/54026/11/njsUrl/"
            alt="Joomla hits ip traffic statistics" style="border:0px;">
    </a>
</div>
```

效果图如下:

![极客玩家大白p4-Tracemyip.org](https://cdn.jsdelivr.net/gh/yanglr/images/trace-p4.png)

<br>

## 2. clustrmaps.com

注册账号: [https://clustrmaps.com/bl/signup](https://clustrmaps.com/bl/signup)

创建Widget: [https://clustrmaps.com/add](https://clustrmaps.com/add)

![极客玩家大白p1-clustrmaps](https://cdn.jsdelivr.net/gh/yanglr/images/clustrmaps-p1.png)


填入自己的博客园博客地址，比如我的是: 

[https://www.cnblogs.com/enjoy233/](https://www.cnblogs.com/enjoy233/)

然后点"next"按钮即可得到代码:

![极客玩家大白p2-clustrmaps](https://cdn.jsdelivr.net/gh/yanglr/images/clustrmaps-p2.png)

```html
<a href="https://clustrmaps.com/site/1bcz5" title="Visit tracker"><img 
src="//www.clustrmaps.com/map_v2.png?d=Z5dh85VLcC8BLff99dwZ0SHJUomU2T_XMP-WbIcG2wY&cl=ffffff"></a>
```

接下来，将红线框出部分的代码贴到博客园后台的**博客侧边栏公告**中：

![极客玩家大白p3-clustrmaps](https://cdn.jsdelivr.net/gh/yanglr/images/clustrmaps-p3.png)


保存代码，就可以看到效果了~

![极客玩家大白p4-clustrmaps](https://cdn.jsdelivr.net/gh/yanglr/images/clustrmaps-p4.png)

接下来，二选一即可，大功告成~
