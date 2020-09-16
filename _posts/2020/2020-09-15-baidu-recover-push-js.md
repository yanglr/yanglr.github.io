---
layout: post
date: 2020-09-15 20:05:10
title: 百度自动推送不能用了吗?你错了，刚恢复了！
categories:
- [百度自动推送,百度, SEO,百度自动推送js, 百度js自动推送代码]
# platform: 公众号
# gzhname: 大白技术控
tags: [flagcounter,flagcounter插件, flagcounter类似, 博客园]
excerpt: 百度自动推送不能用了吗?你错了，刚恢复了！
keywords: 百度自动推送, 百度自动推送js, 百度js自动推送代码
description: 百度自动推送不能用了吗?你错了，刚恢复了！再也不要考虑"怎么关闭百度首页推送"了~
topmost: true
---

在 **百度搜索线上公开课** 的第二期公开课中百度的产品运营小姐姐 **李文菊** 提到自动推送`push.js`接口过一段时间会恢复上线的。

![百度自动推送恢复-极客玩家大白](https://cdn.jsdelivr.net/gh/yanglr/images/pushjs-recove-p1.png "极客玩家大白")


![百度自动推送恢复-极客玩家大白](https://cdn.jsdelivr.net/gh/yanglr/images/pushjs-recove-p2.png "大奔SEO")

视频回放地址: <http://mbd.baidu.com/webpage?type=live&action=liveshow&source=h5pre&room_id=3789761765>, 就是在时间点`03:04`的。

这不，今天就恢复上线了~



今天进入 [资源搜索平台时](//ziyuan.baidu.com) 时，发现"自动推送"的入口已恢复，有图有真相！

![百度自动推送恢复-极客玩家大白](https://cdn.jsdelivr.net/gh/yanglr/images/pushjs-recove-p3.png "极客玩家大白")


具体的代码如下:

```html
<script>
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>
```

各位小伙伴，赶紧加回来吧，你的网站收录情况一定会越来越好喔~
