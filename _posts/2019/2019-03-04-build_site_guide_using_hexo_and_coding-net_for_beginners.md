---
layout: post
redirect_from:
  - /2019/03/04/build_site_guide_using_hexo_and_coding-net_for_beginners/
title: 开发小白也毫无压力的hexo静态博客建站全攻略 - 躺坑后亲诉心路历程
date: 2019-03-04 21:01:04

category: it

tags: [hexo, it]
excerpt: 开发小白也毫无压力的hexo静态博客建站全攻略 - 躺坑后亲诉心路历程
---

扯一扯在coding.net上建Hexo静态博客的坑和玩法~


-------------

本文介绍对开发小白也毫无压力的hexo静态博客建站全攻略，`github.io`与`coding.me`的静态博客类似，3年前本人基于本机`Windows`在`github.io`上创建了静态[Github Pages - yanglr](https://yanglr.github.io)，本文以在`Coding pages`上建站为例。

## 基本原理
**配置区**: 用于`hexo`博客的配置，成功部署后原`hexo init`产生的目录下会生成一个`public`的文件夹。

**发布区**: 
事实上，这一部分就是由**配置区**生成的`public`文件夹中的内容。

发布区的代码必须是公开的，配置区的代码看需要了，如果`git`部署时使用的是`repo: https://用户名:密码@仓库地址`这种方式，如果也`push`到公开代码的仓库就会泄漏个人密码了，所以建议配置在自己的电脑上进行，或使用`ssh key`的形式代替明文密码。

## 方法1 - 本机Windows下建站 (力荐)

### 下载安装`node.js`
到[官网](https://nodejs.org/en/blog/release/)下载`nodejs`的最新`LTS`版安装即可。
### 用管理员权限打开命令行，安装`hexo-cli`和`hexo`
```bash
$ npm install hexo-cli -g
$ npm install hexo --save
```
如果安装速度很慢，可以考虑先换淘宝镜像源:
```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
再继续进行安装~

### 下载安装`git`
到[Git官网](https://git-scm.com/)下载Git Windows版，使用默认设置进行安装即可。

### 初始化`hexo`
比如，打算在`D:\`盘进行配置，若将配置的文件夹取名为`blog`，操作如下：
```bash
$ cd D:\
$ hexo init blog
```
文件夹名字任意起，根据个人需要了。

### 使用`hexo generate`生成静态资源
存放`hexo`配置的文件夹`blog`创建好之后，就可以使用`hexo generate`来生成静态资源了，该命令也可简写为"hexo g"。

### 在本地运行`hexo`，看一切是否正常
此时可使用`hexo server`(简写为`hexo s`)来开启本地`web`服务器查看页面效果，默认情况下在浏览器中打开`http://localhost:4000`即可看到如下界面:
![img](https://img2018.cnblogs.com/blog/436938/201903/436938-20190304203706783-1034748400.png)

### 在`Coding.net`创建与用户名相同的项目，并启用代码的`pages`功能
打开网址<https://dev.tencent.com/user/projects/create>，即可创建项目。
由于项目名字与用户名`legege007`一致，所以我的`coding`静态`pages`的访问地址即为 [legege007.coding.me](http://legege007.coding.me/), 你用同样的方法，地址会变成`你的用户名.coding.me`。而如果你的项目名是`blog`, 而用户名不是`blog`，则此时`coding`静态`pages`的访问地址即为`你的用户名.coding.me/blog`, 这样会有一个隐含的问题在，就是如果你要绑定个人域名，会导致静态资源`js、css`等加载失败，即博客会出现有文字但呈现页面混乱的情形。

这里也亲自淌过坑，最终发现有效的处理办法是:
**创建的项目名必须要和用户名一致，创建的项目名必须要和用户名一致，创建的项目名必须要和用户名一致，强调三连~**

### 启用通过`git`将`hexo`部署到远程的功能
完成此项工作，需要先安装`hexo-deployer-git`, 相应需要在命令行中执行:
```bash
$ npm install hexo-deployer-git --save
```
安装途中可能会遇到问题:
`"npm WARN babel-eslint@10.0.1 requires a peer of eslint@>= 4.12.1 but none is installed. You must install peer dependencies yourself. "`,
这里亲自淌过坑，试了很多方法，最终发现有效的处理办法是:
```bash
$ npm install lodash
$ npm install eslint@^4.12.0
```

### 使用`_config.yml`来配置`hexo`
一开始，我们只需要修改`deloy`相关才参数即可.
```yaml
deploy:
	type: git  #上传类型 选择git
	repo: https://legege007:yl15826911621@git.dev.tencent.com/legege007/legege007.git  # 执行 git remote -v 可以获得
	branch: master  # 部署到 Master分支
	#message: update blog # 每次提交的信息 不填默认为当前时间
```
只需要将`repo`改为你的仓库的`ssh`版地址即可。
同时，你还需要在coding项目中加入自己的`公钥`，具体方法为:
打开命令行终端输入`ssh-keygen -t rsa -C <your_email@example.com>`(你的邮箱)，连续点击 Enter 键即可。
```bash
Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter] 
// 此处推荐使用默认地址，也可在密钥后面加后缀,即输入"id_rsa_coding"
```
找到刚才生成的`id_rsa_coding.pub`，将其中的内容贴到`Coding`的公钥信息中：
![img](https://img2018.cnblogs.com/blog/436938/201903/436938-20190304214608470-1076788388.png)
此时，`git`推送应该具有权限了~
目前为止，`_config.yml`配置文件只需要改`deploy`这一处！

### 使用`hexo clean && hexo g && hexo d`发布`hexo`博客
 不出意外的话，等命令完全跑完就能从静态地址`你的用户名.coding.me`看到你的博客内容了。
 
### 域名绑定
先去域名管理系统中加一条`CNAME`记录, 比如我的域名是<https://enjoy233.cn>，此处想绑定到<https://www.enjoy233.cn>，则添加方法如下：
![record1](https://img2018.cnblogs.com/blog/436938/201903/436938-20190304211351308-907087033.png)

将`_config.yml`中的`url`从`http://yousite.com`改为实际用的，比如我设置为:
```yaml
url: //www.enjoy233.cn
root: /
```

然后在`coding pages`的页面中设置如下:
![img2](https://img2018.cnblogs.com/blog/436938/201903/436938-20190304211130778-1132950578.png)
过几分钟后，就能通过域名<https://www.enjoy233.cn>来访问我的博客了。


### 主题使用
个人觉得 `hexo`主题 [Material X](https://xaoxuu.com/wiki/material-x/)还挺不错的，配置文档为 [Material X  - Wiki](https://xaoxuu.com/wiki/material-x/)~
就安装试了一下，首先命令行要做的事情是：
```sh
$ cd blog
$ git clone https://github.com/xaoxuu/hexo-theme-material-x themes/material-x

$ npm i -S hexo-generator-search hexo-generator-feed hexo-renderer-less hexo-autoprefixer hexo-generator-json-content hexo-recommended-posts
```
然后将`_config.yml`中的`theme`(默认是`landscape`)配置为: 
```yaml
theme: material-x
```
此时，再使用`hexo clean && hexo g && hexo d`发布博客，然后刷新博客就能看到使用主题后的效果了。

## 方法2 - Cloud Studio下建站 (力荐)
此处介绍在`Cloud Studio`中使用两个`branch`建站的方法，`master`分支作为发布区，`config`分支作为配置区。如果不另建分支，千万不要使用Cloud Studio的`push`代码的功能，不然上传的会是配置相关的所有文件(真个`blog`文件夹，而不是仅有`public`文件夹下的内容)，会导致博客无法正常使用。
**这里也亲自淌过坑，所以强调一下~**

### 在`Coding.net`创建与用户名相同的项目，并启用`pages`功能
打开网址 <https://dev.tencent.com/user/projects/create>, 开始创建项目。

我的用户名是`legege007`，于是就建了个`legege007`的项目.
![img](https://img2018.cnblogs.com/blog/436938/201903/436938-20190304212259672-990931307.png)

### 使用现有项目创建工作区
打开网址 <https://studio.dev.tencent.com/dashboard/workspace/create>, 即可进入Cloud Studio。
我选择使用了`node.js`的环境来进行配置，同时选中项目`legege007`，然后`创建`即可。
![img](https://img2018.cnblogs.com/blog/436938/201903/436938-20190304212558823-766636642.png)

### 使用命令行配置环境
Cloud studio中默认是`Linux`系统，我习惯于用root的权限来操作，免得后面还需要用`chmod`之类的命令来改权限，一进IDE界面，使用命令`sudo su`切换即可。
```bash
$ sudo su
```
然后新建`config`分支后，配置主要在该分支上进行。
```bash
$ git checkout -b config
```

其他相关命令使用过程具体如下:
```sh
➜  workspace git:(master) sudo su
root@coding:/home/coding/workspace# git checkout -b config

root@coding:/home/coding/workspace# git checkout -b config
Switched to a new branch 'config'

root@coding:/home/coding/workspace# hexo init blog

root@coding:/home/coding/workspace# cd blog/
root@coding:/home/coding/workspace/blog# hexo g

root@coding:/home/coding/workspace/blog# hexo clean && hexo g && hexo d

root@coding:/home/coding/workspace/blog# npm install hexo-deployer-git --save

root@coding:/home/coding/workspace/blog# npm audit fix

root@coding:/home/coding/workspace/blog# npm install lodash

root@coding:/home/coding/workspace/blog# npm install eslint@^4.12.0

root@coding:/home/coding/workspace/blog# npm install hexo-deployer-git --save

root@coding:/home/coding/workspace/blog# hexo clean && hexo g && hexo d

root@coding:/home/coding/workspace/blog# ssh-keygen -t rsa -C "legege007@yeah.net"
root@coding:/home/coding/workspace# cd ~/.ssh
root@coding:~/.ssh# ls
id_rsa  id_rsa.pub  known_hosts
root@coding:~/.ssh# vim id_rsa.pub

root@coding:/home/coding/workspace/blog# hexo clean && hexo g && hexo d
```
上述命令和在`windows`下操作时基本一致遇到问题，解决问题即可~

### `_config.yml`文件的配置、域名绑定、主题使用等等
`_config.yml`文件的配置、域名绑定、主题使用等等，基本上与在`Windows`下安装完全一样，参考Windows下同样的操作即可，就不再赘述了。

安装完主题后的界面是:
![UI](http://img2018.cnblogs.com/blog/436938/201903/436938-20190304224154579-1613298900.png)


另外，值得一提的是:
Cloud Studio还有几个优势，即:
- 可以迅速切换环境，比如`hexo`、`node.js`、`.net Core`、`Ubuntu`、`Java`等互转，速度超快的。
- 可以一键部署，除了`coding.me`的域名可用以外，一键部署后，还提供一个`coding.io`的域名可以访问。如果暂时没买个人域名，这就是个大福利了~

![img6](http://img2018.cnblogs.com/blog/436938/201903/436938-20190304220305918-1069723032.png)

如有帮助，麻烦在右下角"推荐"一下，多谢~

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
