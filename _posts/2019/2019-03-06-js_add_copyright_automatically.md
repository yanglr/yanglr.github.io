---
layout: post
redirect_from:
  - /2019/03/06/js_add_copyright_automatically/
title: JS实现页面复制文字时自动加版权

category: it

tags: [js, copyright]
excerpt: JS实现页面复制文字时自动加版权
---

经亲自实践，尝试了各种方法，目前可行的方法主要有如下两种：
可以在任何运行使用`js`代码的网站中使用，比如本人在自己的[博客园博客](https://www.cnblogs.com/enjoy233/)中实现了一下，读者您可亲自在本人博客上测试。

### 方法1：
```javascript
<script language="javascript" type="text/javascript">
jQuery(document).on('copy', function(e)
	{
	  var selected = window.getSelection();
	  var selectedText = selected.toString().replace(/\n/g, '<br>');  // Solve the line breaks conversion issue
	  var pageInfo = '<br>---------------------<br>著作权归作者所有。<br>' 
	                        + '商业转载请联系作者获得授权，非商业转载请注明出处。<br>'
	                        + '作者：Bravo Yeung<br> 源地址：' + document.location.href
	                        + '<br>来源：博客园cnblogs<br>© 版权声明：本文为博主原创文章，转载请附上博文链接！';
	  var copyHolder = $('<div>', {id: 'temp', html: selectedText + pageInfo, style: {position: 'absolute', left: '-99999px'}});
	    
	  $('body').append(copyHolder);
	  selected.selectAllChildren( copyHolder[0] );
	  window.setTimeout(function() {
	      copyHolder.remove();
	  },0);
	});
</script>
```

### 方法2:
```javascript
<script type="text/javascript">
    var ua = navigator.userAgent.toLowerCase();
    if (window.ActiveXObject) {  /* 兼容旧版的IE */
        document.body.oncopy = function () {
            event.returnValue = false;
            var selectedText = document.selection.createRange().text;
            var pageInfo = '<br>---------------------<br>著作权归作者所有。<br>'
                + '商业转载请联系作者获得授权，非商业转载请注明出处。<br>'
                + '作者：Bravo Yeung<br> 源地址：' + document.location.href
                + '<br>来源：博客园cnblogs<br>© 版权声明：本文为博主原创文章，转载请附上博文链接！';
            clipboardData.setData('Text', selectedText.replace(/\n/g, '<br>') + pageInfo);
        }
    }
    else {
        function addCopyRight() {
            var body_element = document.getElementsByTagName('body')[0];
            var selection = window.getSelection();
            var pageInfo = '<br>---------------------<br>著作权归作者所有。<br>'
                + '商业转载请联系作者获得授权，非商业转载请注明出处。<br>'
                + '作者：Bravo Yeung<br> 源地址：' + document.location.href
                + '<br>来源：博客园cnblogs<br>© 版权声明：本文为博主原创文章，转载请附上博文链接！';
            var copyText = selection.toString().replace(/\n/g, '<br>') + pageInfo;  // Solve the line breaks conversion issue
            var newDiv = document.createElement('div');
            newDiv.style.position = 'absolute';
            newDiv.style.left = '-99999px';
            body_element.appendChild(newDiv);
            newDiv.innerHTML = copyText;
            selection.selectAllChildren(newDiv);
            window.setTimeout(function () {
                body_element.removeChild(newDiv);
            }, 0);
        }
        document.oncopy = addCopyRight;
    }
</script>
```

### 方法3:
```javascript
<script  type="text/javascript">
    var selfLogin = false;
    var follow = $('#profile_block').find('#p_b_follow');
    var block = follow.length >= 1 ? follow[0] : "";
    var followText = (block != null && block != undefined) ? block.innerHTML : "";
    if(followText == "") selfLogin = true;

    var pageInfo = '\r\n---------------------\r\n著作权归作者所有。\r\n'
        + '商业转载请联系作者获得授权，非商业转载请注明出处。\r\n'
        + '作者：Bravo Yeung\r\n源地址：' + document.location.href
        + '\r\n来源：博客园cnblogs\r\n© 版权声明：本文为博主原创文章，转载请附上博文链接！';

    document.addEventListener('copy', function (ev) {
        var targetHTML = $.trim($(ev.target).html());
        // console.log("targetHTML:" + targetHTML)
        if (targetHTML == "") return;
        if (!(targetHTML.startsWith('<table class="hljs-ln"') && targetHTML.endsWith('</table>')) || !selfLogin)  // isLogined
        {
            var selected = window.getSelection();
            var selectedText = selected.toString();  
            let copyRightStr = (selectedText + pageInfo).replace(/\n/g, '\r\n'); // Solve the line breaks conversion issue

            ev.clipboardData.setData('text/plain', `${copyRightStr}`);
            ev.preventDefault();
        }
    });
</script>
```
<br>
目前本人博客使用了**方法3**.

**方法1** 最初发表在本人的博客园文章中：
<https://www.cnblogs.com/enjoy233/p/10328361.html#复制正文文字时自动加版权>

<https://segmentfault.com/q/1010000003986612/a-1020000018332118/>

<br>

<hr>

欢迎在留言区留下你的观点，一起讨论提高。如果今天的文章让你有新的启发，学习能力的提升上有新的认识，欢迎转发分享给更多人。

<br>

欢迎各位读者加入 **.NET技术交流群**，在公众号后台回复**“加群”**或者**“学习”**即可。


<br>

![dotNET匠人 公众号名片](https://images.cnblogs.com/cnblogs_com/enjoy233/1389971/o_qrcode_daBai.jpg)


### 文末彩蛋

> 微信后台回复“**asp**”，给你：一份全网最强的ASP.NET学习路线图。
>
>
>
> 回复“**cs**”，给你：一整套 C# 和 WPF 学习资源！
>
>
>
> 回复“**core**”，给你：2019年dotConf大会上发布的.NET core 3.0学习视频！
