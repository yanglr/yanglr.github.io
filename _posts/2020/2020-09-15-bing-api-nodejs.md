---
layout: post
date: 2020-09-15 10:21:20
redirect_from:
  - /bing-API-nodejs.html
title: 必应API接口node.js版
categories:
- [大奔SEO,seo,Bing]
tags: [seo,Bing, 大奔SEO]
excerpt: 必应搜索的API接口node.js版
keywords: 大奔SEO,seo,Bing,大白SEO
description: 必应API接口node.js版 - 大奔SEO
topmost: true
original: true
image: https://cdn.jsdelivr.net/gh/yanglr/images/bing-api-yanglr.github.io2.png
---

近期，在研究百度、必应、API等的url提交API时，发现有用Go语言做工具的大佬的分享 [利用 API 自动向搜索引擎提交网址(Go语言版) - pyList](https://pylist.com/t/1582821291)。

其中提到bing API提交方法，并给出了Go语言代码:

```go
func Bing() {
    sUrl := "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=xxxxxxxx"
    buf := bytes.NewBufferString(`{
"siteUrl":"https://pylist.com",
"url":"https://pylist.com/t/1581940902"
}`)
    req, err := http.NewRequest("POST", sUrl, buf)
    if err != nil {
        return
    }
    req.Header.Set("Content-Type", "application/json; charset=utf-8")

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return
    }
    defer resp.Body.Close()
}
```

可以保存为: `bing-push.go`, 然后在本地执行哈~



而相比于go语言，我本人对node.js更熟悉一点~



## 必应API接口-单条提交



```js
var request = require('request');
var options = {
    uri: 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=' + 'xxx', /* xxx需替换为你的key */
    method: 'POST',
    json: {
        "siteUrl": "http://yanglr.github.io", /* 替换为你的站点，并且在Bing站长平台中验证过权限 */
        "url": "http://yanglr.github.io/link.html"   /* 替换为你需要推送的url */
    }
};

request(options, function (error, response, body) {
    console.log("Bing response: ", body)
});
```



登录必应站长后台<https://www.bing.com/webmasters>，点右上角的设置按钮(齿轮⚙)，找到你的key：

Step 1:

![大奔SEO_极客白小飞](https://cdn.jsdelivr.net/gh/yanglr/images/bing-api-yanglr.github.io1.png "大奔SEO")

Step 2:

![大奔SEO_极客白小飞](https://cdn.jsdelivr.net/gh/yanglr/images/bing-api-yanglr.github.io2.png "大奔SEO")

然后将上述代码中的xxx替换为你的key。



先保存文件为: `bing-SingleSumbit.js`, 

然后在当前目录下打开命令行，输入 `npm install request`,

接下来改好key, siteurl, url等值后，就可以在命令行中运行:

```
node bing-SingleSumbit.js
```



## 必应API接口-批量提交



### 批量提交 - 版本1

```js
var request = require('request');
var myJson = {
    "siteUrl": "http://yanglr.github.io",
    "urlList": [
        "http://yanglr.github.io/link.html",
        "http://yanglr.github.io/about.html",
        "http://yanglr.github.io/blog/"
    ]
};
request({
    url: 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=' + 'xxx', /* xxx需替换为你的key */
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJson
}, function (error, response, body) {
    console.log(body);
});
```

我记得这里有个跨域的问题, 设置 `json: true` 即可解决。



先将代码保存为: `bing-BatchSumbit.js`.

运行方法，同上~



### 批量提交 - 改进1



在上一版本的基础上可以改进，即：把多条url先按行放进link.txt中，然后读取处理~

```js
var fs = require('fs');
var readline = require('readline');
var path = require('path')

function readFileToArr(fReadName, callback) {
    var arr = [];
    var readObj = readline.createInterface({
        input: fs.createReadStream(fReadName)
    });

    readObj.on('line', function (line) {
        arr.push(line);
    });
    readObj.on('close', function () {
        console.log('readLine close....');
        callback(arr);
    });
}

// var urlsFile = path.resolve(__dirname, 'links.txt').replace(/\\/g, '/');  // For Windows
var urlsFile = path.resolve(__dirname, '..', 'nodejs', 'links.txt'); /* 兼容 Windows/Linux, 这里nodejs为上级文件夹名 */

readFileToArr(urlsFile, function (arr) {
    var request = require('request');
    var myJson = {
        "siteUrl": "http://yanglr.github.io",
        "urlList": arr
    };
    
    request({
        url: 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=' + 'xxx',
        method: "POST",
        json: true,   // <--Very important!!!
        body: myJson
    }, function (error, response, body) {
        console.log(body);
    });
});
```



保存文件为: `bing-BatchSumbit2.js`，

命令行中用cd命令切换到当前目录，然后依次输入:

```bash
npm install fs
npm install readline
npm install path
```

改好key, siteurl, url等值后，并在当前目录创建文件links.txt并填入需要推送的多条url，就可以在命令行中运行:

```bash
node bing-BatchSumbit2.js
```



### 批量提交 - 改进2



上一版本的代码中，links.txt的内容是手动添加的，那我们可不可以从sitemap.xml获取并直接转换为.txt供后面使用呢？当然可以，于是另外写了一段node.js代码做这个事。



```js
var fs = require('fs');
var request = require('request');
const cheerio = require('cheerio');

request('https://yanglr.github.io/sitemap.xml', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html, {
            xmlMode: true
        });

        textFile = 'myLink.txt';
        fs.open(textFile, 'wx', (err, fd) => {
            if (err) {
                if (err.code === 'EEXIST') {
                    console.error('myfile already exists');
                    
                    fs.unlinkSync(textFile);  // Remove file
                }
            }

        });

        const nodes = $('loc');
        var arr = [];
        
        for (i = 0; i < nodes.length; i++) {
            arr[i] = nodes[i].firstChild.data;

            fs.appendFile(textFile, arr[i] + '\r\n', function (err) {
                if (err) {
                    console.error('One line converted failed.'); // append failed
                } else {
                    // console.error('One line converted done!');
                }                
            })
        }

        console.error('Converted done!');
    }
});

// Reference: https://stackoverflow.com/a/25012834/6075331
```

先保存代码为: `sitemapInXMLtoText.js`,

命令行中用cd命令切换到当前目录，然后依次输入:

```bash
npm install fs
npm install request
npm install cheerio
```



改好key, siteurl, url等值后，就可以在命令行中运行:

```bash
node sitemapInXMLtoText.js
```

接下来只需将request调用时的第一个参数改为你的sitemap.xml的网址即可~

最后再到命令行中执行一次:

```bash
node bing-BatchSumbit2.js
```



### Bing还提供了其他API接口

GetKeywordStats - Bing

```
https://ssl.bing.com/webmaster/api.svc/json/GetKeywordStats?q=dog%20beds&country=be&language=nl-BE&apikey=...
```



RSS Feed提交:

<https://bing.com/webmaster/api.svc/json/SubmitFeed>



获取用户验证后的站点信息:

<https://ssl.bing.com/webmaster/api.svc/json/GetUserSites>

有兴趣的朋友可以继续深入研究哈, 欢迎在评论区留言交流~
