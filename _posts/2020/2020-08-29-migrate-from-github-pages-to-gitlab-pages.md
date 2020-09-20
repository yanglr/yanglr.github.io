---
layout: post
redirect_from:
  - /2020/08/29/migrate-from-github-pages-to-gitlab-pages/
title: 在GitLab pages上快速搭建Jekyll博客
date: 2020-08-29 18:23:52
categories: [gitlab pages, github pages, jekyll]
tags: [gitlab, github]
excerpt: 从github pages快速迁移Jekyll博客到gitlab pages的完全指南。
description: 从github pages快速迁移Jekyll博客到gitlab pages的完全指南。 - 大白技术控
keywords: gitlab pages, github pages, jekyll
topmost: true
---

## 在GitLab pages上快速搭建Jekyll博客

前一段时间将我的Jekyll静态博客从github pages镜像部署到了 `zeit.co`(现vercel)上了一份，最近偶然发现gitlab pages也不错，百度也会正常抓取，于是动手倒腾，将github pages快速迁移Jekyll博客到[gitlab pages](https://web.geekplayers.com)，中途遇到了不少坑，管他呢，一把刷。

于是有了下文的 **从github pages快速迁移Jekyll博客到gitlab pages的完全指南。**

<br/>

## Step1: 导入已有项目

登陆[gitlab.com](https://gitlab.com)，点击`New Project`, 

![screenshot1](https://cdn.jsdelivr.net/gh/yanglr/images/1598757602233-a850ea96-39a9-4cff-bdf9-c320d5d2d744.png)


点击`Import projects`, 

![image.png](https://cdn.jsdelivr.net/gh/yanglr/images/1598757844067-819530aa-262f-4971-bead-71c9c1b6abac.png)


比如，我的jekyll blog对应的代码仓库是: <https://github.com/yanglr/yanglr.github.io>,

由于我绑定了github账号yanglr，系统会将我在github下所有的分支都load进来，接下来，我选择[yanglr/yanglr.github.io](https://github.com/yanglr/yanglr.github.io),这个仓库，当然Import进来之前要记得改名为: gitlab-username.gitlab.io, 接下来等待导入完成即可。



或点击`Repo by URL`, 

![image.png](https://cdn.jsdelivr.net/gh/yanglr/images/1598758018132-66be5558-b6cb-424f-9b5f-62d422cf9f13.png)

<br/>

## Step2: 为gitlab生成ssh密钥

```bash
bravo@localhost MINGW64 /d/coding/Gitlab.com

$ cd ~/.ssh

bravo@localhost MINGW64 ~

$ ssh-keygen -t rsa -b 2048 -C "email@example.com"
```



然后复制id_rsa.pub的内容，贴到gitlab profile的 settings -> ssh key中，具体入口为: <https://gitlab.com/profile/keys>



![image.png](https://cdn.jsdelivr.net/gh/yanglr/images/1598759369549-f23ad8d1-68f8-4f97-97d8-380c00fdb743.png)

如果怕github的密钥文件与gitlab的弄混，可以在执行ssh-keygen -t rsa -b 2048 -C ""时，文件名取为: `id_rsa_gitlab`



然后到 .ssh 文件夹下创建一个文件名为`config`的文件，内容如下:

```
# github
    Host github.com
    Hostname github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa

# gitlab
    Host gitlab.com
    Hostname gitlab.com
    User legege007
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gitlab
```

<br/>

## Step3: Clone代码

设置好ssh key后，我们就可以克隆代码到本地了，命令如下: 

```bash
git clone https://gitlab.com/legege007/legege007.gitlab.io.git
```



**git clone非常慢的解决方法:**

在自己的PC上git clone太慢了，clone地址换https的速度还可以~

有能力科学地上网的小伙伴可以想办法解决。



还可以在git clone时，去掉末尾的.git

<br/>

## Step4: 创建 CI/CD配置文件

这部分可以直接参考gitlab官方给的 jekyll 示例 <https://gitlab.com/pages/jekyll> 来做。



具体做法是，在本地克隆下来的代码仓库的根目录中创建文件 `.gitlab.ci.yml`, 然后贴入如下代码:

```yaml
image: ruby:latest

variables:
  JEKYLL_ENV: production
  LC_ALL: C.UTF-8

before_script:
  - gem install bundler
  - bundle install

test:
  stage: test
  script:
  - bundle exec jekyll build -d test
  artifacts:
    paths:
    - test
  except:
  - master

pages:
  stage: deploy
  script:
  - bundle exec jekyll build -d public
  artifacts:
    paths:
    - public
  only:
  - master
```

来源: <https://gitlab.com/pages/jekyll/-/blob/master/.gitlab-ci.yml>

同理，如果你的静态博客选用的框架是hexo, 请参考项目<https://gitlab.com/pages/hexo> 下的CI/CD配置文件<https://gitlab.com/pages/hexo/-/blob/master/.gitlab-ci.yml>，gitbook 项目请用 <https://gitlab.com/pages/gitbook/-/blob/master/.gitlab-ci.yml>。


如果想对gitlab CI/CD有更多的了解，请参看:

<https://gitlab.com/help/ci/quick_start/README>

<br/>

## Step5: 等待build，2到3分钟build完成后即可访问

点击页面左侧菜单中的 CI/CD,

![image5](https://cdn.jsdelivr.net/gh/yanglr/images/1598758942346-5b456249-ea92-4ff9-8919-c83ac7c9067c.png)

大概2到3分钟build完成后即可访问，pipelines中会出现一个状态为 passed 的记录，这时就可以访问你的静态博客(pages)了，访问地址是：[legege007.gitlab.io](https://legege007.gitlab.io)，由于gitlab是为gitlab.io默认提供ssl证书的，所有此时也可以访问https版本: <https://legege007.gitlab.io>。

<br/>

## Step6: 绑定域名

现在，我们来绑定自己的域名。



回到项目 刚才的代码仓库，比如我的是: <https://gitlab.com/legege007/legege007.gitlab.io>，点击左侧 Settings -> pages，会发现右上角有个`New Domain`, 


![image6](https://cdn.jsdelivr.net/gh/yanglr/images/1598759747911-24a52910-8a9f-46e6-8470-a2454a915fda.png)


比如，我想绑定到: `geekplayers.com`，填进去，点"Create New Domain"即可。

![image7](https://cdn.jsdelivr.net/gh/yanglr/images/1598759978763-86f36d62-1a3f-4e6d-9f8e-0d55b4dc06f8.png)


接下来会看到以下界面:

![image8](https://cdn.jsdelivr.net/gh/yanglr/images/1598760055832-ed221625-27e7-4eeb-91fa-9606b235f19f.png)


此时，需要在域名管理网站(比如，我在腾讯云上买的域名，我需要登陆 <https://console.cloud.tencent.com/cns>)，然后在里面先后分别添加一条类型为TXT和一条类型为CNAME的记录。



| 主机记录                            | 记录类型 | 线路类型 | 记录值                                                       | MX优先级 | TTL（秒） | 最后操作时间        | 操作         |
| ----------------------------------- | -------- | -------- | ------------------------------------------------------------ | -------- | --------- | ------------------- | ------------ |
| _gitlab-pages-verification-code.web | TXT      | 默认     | gitlab-pages-verification-code=319ec4807facc9d92c6c62ba4efd1ccf |          |           |                     |              |
| blog                                | CNAME    | 默认     | legege007.gitlab.io.                                         | -        | 600       | 2020-08-30 11:03:33 | 修改暂停删除 |



TXT那一条加完之后，可以点击 Verify Status 右侧的 红色按钮旁边的 ↶ ↺ ⟲ 按钮验证网站所有权，该按钮会变成绿色，接下来点击页面下方的"Save Changes"。

<br/>

## Step7: 坐等自动下发SSL证书

最后就是等gitlab自动下发ssl证书。

大概再需要等6分钟左右，页面上的Domain会从http版的 <http://blog.geekplayers.com> 变为: <https://blog.geekplayers.com>，表明SSL证书已成功获取。

至此，gitlab pages构建完毕。如有疑问，欢迎在评论区提问交流~
