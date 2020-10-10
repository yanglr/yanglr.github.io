---
layout: post
date: 2012-08-24 10:28:35
title: 百度搜索框提示功能 - 百度搜索帮助中心
categories:
- [百度SEO, 大奔seo]
tags: [百度SEO, 大奔seo]
excerpt: 转载自 http://www.baidu.com/search/sug/sugcode.html
keywords: 百度SEO, 大奔seo
description: 百度搜索框提示功能, 转载自 http://www.baidu.com/search/sug/sugcode.html
topmost: true
image: https://pic.rmb.bdstatic.com/bjh/bb51f88b0090674ff086ad80162b7083.png
---

## 百度搜索框提示功能 - 百度搜索帮助中心

**免费获取百度搜索框提示功能帮助**
[功能介绍](http://www.baidu.com/search/sug/sugcode.html#intro)  [法律声明](http://www.baidu.com/search/sug/sugcode.html#law)  [立即获取](http://www.baidu.com/search/sug/sugcode.html#get)  [常见问题](http://www.baidu.com/search/sug/sugcode.html#qa)
[帮助中心](http://http://www.baidu.com/search/jiqiao.html)


**搜索框提示功能介绍**

- 百度向站长开放免费“百度搜索框”代码和“百度搜索框提示”代码。
- 只需进行简单的设置，即可将“百度搜索框（带提示功能）”功能快速加入到您的网页中。
- 或者为您已有的“百度搜索框”或其他输入框添加“百度搜索框提示”的新功能。
- 您的网站即可获得同百度搜索引擎一样强大的搜索功能！



[点击查看样例效果](http://www.baidu.com/search/sug/demo.html)

![极客玩家大白-样例](https://pic.rmb.bdstatic.com/bjh/27cc1510036eab07e29a83741515f4d3.png "极客玩家大白")


**法律声明**

- 百度搜索框提示功能信息是根据广大网民使用百度产品及百度技术而产生的信息汇集，百度对提示信息汇集享有相应的合法权益，包括但不限于通过合理方式获取访问数据的权利。
- 若引用百度搜索框开放提示功能，请务必使用如下“立即获取”中的三种方式进行，且不得做出限定范围外的修改。若使用其他方式获取与百度搜索框提示同样的信息，造成百度合法权益损失的，我公司将采取相应的法律措施予以制止。



### 立即获取
根据不同类型的网站需求，我们一共提供三种引入方式供您选择：

- **简单方式**——方便的将“百度搜索框（带提示功能）”直接加入到您的网页中。
- **添加方式**——快速的为页面中已有的“百度搜索框”或其他文本输入框添加“百度搜索框提示”功能。
- **高级方式**——提供“百度搜索框提示”API，打造您的个性化搜索框提示功能！

**简单方式**
**
将以下代码加入到您的网页中，即可获得带有“搜索框提示”功能的百度搜索框。


HTML代码：


```html
<form action="http://www.baidu.com/baidu" target="_blank">
<table bgcolor="#FFFFFF"><tr><td>
<input name=tn type=hidden value=baidu>
<a href="http://www.baidu.com/"><img src="http://img.baidu.com/img/logo-80px.gif" alt="Baidu" align="bottom" border="0"></a>
<input type=text name=word size=30 baiduSug=1>
<input type="submit" value="百度搜索">
</td></tr></table>
</form>
```


Javascript代码：


```javascript
<script charset="gbk" src="http://www.baidu.com/js/opensug.js"></script>
```

**提示：** Javascript代码请添加到网页中标签的后面。 如使用utf-8编码，则需要在HTML代码中加入，同时务必在script标签中设置charset=gbk属性，否则搜索关键词和提示词会出现乱码。


[查看样例效果](http://www.baidu.com/search/sug/demo.html)

![极客玩家大白-样例效果](https://pic.rmb.bdstatic.com/bjh/bb51f88b0090674ff086ad80162b7083.png "极客玩家大白")

### 添加方式
**第一步**
为需要添加“百度搜索框提示”功能的<input>标签添加baiduSug属性。例如：
<input type="text" name="word" baiduSug="1|2">
当设置baiduSug=1时，用户选中sug词条时默认执行表单提交动作；
当设置baiduSug=2时，用户选中sug词条时不执行表单提交动作。


**第二步**
在网页中引入Javascript文件：
```javascript
<script charset="gbk" src="http://www.baidu.com/js/opensug.js"></script>
```


**提示：**
如果网页中有多个输入框需要添加“百度搜索框提示”功能，请为每个输入框都加上baiduSug属性。
Javascript代码请添加到网页中</body>标签的后面。
如使用utf-8编码，请务必在script标签中设置charset=gbk属性，否则搜索提示词会出现乱码。
[查看样例效果](http://www.baidu.com/search/sug/demo1.html)

### 高级方式
**
**第一步**
在网页中引入Javascript文件：
```javascript
<script charset="gbk" src="http://www.baidu.com/js/opensug.js"></script>
```


**第二步**
在Javascript程序中调用BaiduSuggestion.bind()方法将“百度搜索框提示”功能和页面上的元素进行绑定。
BaiduSuggestion.bind()的具体形式为：


**BaiduSuggestion.bind(inputObj|inputId,[params],[confirmCallback]);**
**
**inputObj|inputId:**
为需要绑定搜索框提示功能的input对象或input对象的id。
**params:**
绑定搜索框提示功能时用到的参数，必须以Json形式给出,例如：
```json
{
    "XOffset":0, //提示框位置横向偏移量,单位px
    "YOffset":0, //提示框位置纵向偏移量,单位px
    "width":350, //提示框宽度，单位px
    "fontColor":"#03c", //提示框文字颜色
    "fontColorHI":"#FFF", //提示框高亮选择时文字颜色
    "fontSize":"12px", //文字大小
    "fontFamily":"宋体", //文字字体
    "borderColor":"#03c", //提示框的边框颜色
    "bgcolorHI":"#fd0", //提示框高亮选择的颜色
    "sugSubmit":false //选中提示框中词条时是否提交表单
}
```


**confirmCallback(txt):**
当用户选择提示中具体选项时的回调函数，txt为用户选择的内容。


**提示：**
Javascript代码请添加到网页中</body>标签的后面。
如使用utf-8编码，请务必在script标签中设置charset=gbk属性，否则搜索提示词会出现乱码。
Javascript文件的应在BaiduSuggestion.bind()方法被调用之前引入。
[查看样例效果](http://www.baidu.com/search/sug/demo2.html)


**
**常见问题**

1. **使用“百度搜索框提示”功能将给站长带来哪些收益？**
据数据统计，有50％的百度用户在搜索时使用了搜索框提示功能，这节省了用户至少30％的输入成本。
“百度搜索框提示”功能可以有效降低用户输入成本，提升用户搜索体验，增加网站的用户粘性。
1. **“百度搜索框提示”功能相对同类产品的优势是什么？**
百度提供的搜索框提示数据提炼于百度搜索的热门词，具有较高的时效性和准确性。
“百度搜索框提示”功能能够提供较同类产品更加稳定、快速、权威的服务。
1. **“百度搜索框提示”功能是否只能和百度提供的搜索框进行绑定？**
不是。本功能是开放的，您网页中的任何INPUT输入框均可使用百度提供的搜索框提示功能。
1. **本免费代码所提供功能的浏览器兼容性如何？**
本代码源于百度正式发布的产品，已通过各项严格的测试，能够良好的支持IE、Firefox、Safari、Chrome、Opera浏览器的主流版本。
1. **引入搜索框提示功能是否会影响网页中的原有功能？**
1、不会。“百度搜索框提示”功能采用闭包设计，不会污染原有页面代码，因此不会影响您页面中的原有功能。
2、为了防止功能冲突，如果您的搜索框已经绑定了其他提示功能，请先取消原有的功能后再绑定“百度搜索框提示”功能。
1. **我能否根据自己站点的需要，对“百度搜索框提示”功能进行个性化的样式定义？**
可以。在“高级方式”中提供了相应的API，您可以根据需要进行个性化定制。
1. **如果我的网页中有多个输入框需要绑定“百度搜索框提示”功能，是否支持？**
支持。本功能支持单页面中的多实例，请按照“添加方式”中的说明进行操作。
1. **如果我的网站规模较大，是否可以直接引用百度搜索框开放提示功能？**
出于对系统服务稳定性的考虑，若您的网站预计每日使用搜索框开放提示功能超过200万次，则需先与[zhanzhang@baidu.com](http://mailto:zhanzhang@baidu.com)取得联系，邮件标题注明“申请搜索框提示服务”。


**时光机:**
[http://www.baidu.com/search/sug/sugcode.html](http://www.baidu.com/search/sug/sugcode.html)
