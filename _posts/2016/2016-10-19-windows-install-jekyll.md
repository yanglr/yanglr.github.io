---
title: Windows下安装Jekyll及启动遇到的问题
tags: [jekyll]
layout: post

categories: [jekyll, Windows, Ruby]
tags: [jekyll, Windows, Ruby]
excerpt: Windows下安装Jekyll及启动遇到的问题, 转载自 'https://silocean.github.io/2016/10/19/windows-install-jekyll/' by silocean (rainbow/rinbow.github.io).
keywords: silocean, jekyll, Windows, Ruby
description: Windows下安装Jekyll及启动遇到的问题 - https://silocean.github.io/2016/10/19/windows-install-jekyll/
date: 2016-10-19
---

想在本地预览 Jekyll 博客，需要安装 Jekyll，刚倒腾了半天，说说我在 Win10 系统下安装 Jekyll 的惨痛经历吧。

## 安装 Jekyll

- 安装集成好的 [RubyInstaller](http://rubyinstaller.org/)
- 安装 RubyGems（gem 是一个 Ruby 的包管理系统，可以用 gem 很方便的在本地安装 Ruby 应用），解压下载到的压缩包到任意位置，进入文件根目录，执行命令 `ruby setup.rb` 就可以了。
- 安装好 gem 之后就可以开始安装 Jekyll 了，在命令行输入 `gem install jekyll`，但你可能会发现下载速度很慢，因为 RubyGems 的镜像源在国内很难访问到，所以要把镜像源切换到我们国内的，[Ruby China](http://gems.ruby-china.org/) 就是这样一个镜像源，执行以下命令：
  ```shell
  gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
  # 把自带镜像源替换成我们自己的
  gem sources -l
  *** CURRENT SOURCES ***
  http://gems.ruby-china.org
  # 确保只有 gems.ruby-china.org
  ```
  注意在执行第一行命令的时候可能会出现如下错误：
  ```shell
  Error fetching https://gems.ruby-china.org/:
          SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://gems.ruby-china.org/specs.4.8.gz)
  ```
  这是 SSL 证书的问题，我们直接用 `http://gems.ruby-china.org` 就好了。

  然后执行 `gem install jekyll` 就可以了。安装完成后，执行 `jekyll -v`，出现版本号就证明 Jekyll 已经成功安装了。

## 启动 Jekyll serve

在博客根目录下用命令行执行 `jekyll serve` 的时候可能会遇到以下几个问题：

- 执行 `jekyll serve`，这时候可能会提示某些模块 not found，不要着急，根据提示一个一个 install 即可。不过有一种比较蛋疼的提示是：
  ```shell
  ERROR:  Error installing XXXXXXXXXXX:
              The 'XXXXXXXXXXXX' native gem requires installed build tools.
         
      Please update your PATH to include build tools or download the DevKit
      from 'http://rubyinstaller.org/downloads' and follow the instructions
      at 'http://github.com/oneclick/rubyinstaller/wiki/Development-Kit'
  ```
  解决方案是去 [http://rubyinstaller.org/downloads](http://rubyinstaller.org/downloads) 下载 dev kit，按照 [http://github.com/oneclick/rubyinstaller/wiki/Development-Kit](http://github.com/oneclick/rubyinstaller/wiki/Development-Kit) 安装 dev kit。

  主要步骤是：

  - 如果原系统已经安装了旧版的 dev kit，删除它。
  - 下载上面链接的 dev kit。
  - 解压下载下来的文件到任意目录，如 `e:/ruby/devkit` （目录不能有空格）。
  - 在安装目录下执行 以下命令：
    ```shell
    ruby dk.rb
    ruby dk.rb init
    ruby dk.rb install
    ```
  - 执行 `gem install rdiscount --platform=ruby` 来测试是否成功。
- 缺失的模块都安装完毕后，再次执行 `jekyll serve` 还可能会出现这样一个错误：
  ```shell
  Liquid Exceptions: No repo name found. Specify using PAGES_REPO_NWO environment variables,repository in your configuration, or set up origin git remote pointing to your github.com repository.
  ```
  解决方案是:
  > If you don't have a git remote available, you have two other options:
  >
  > 1. Set the environment variable `PAGES_REPO_NWO` to your repository name with owner, e.g. `"jekyll/github-metadata"`. This is useful if you don't want to commit your repository to your git history.
  > 2. Add your repository name with organization to your site's configuration in the `repository` key.
  >
  > ```
  > repository: username/repo-name
  > ```
  > 来源链接：[https://github.com/jekyll/github-metadata](https://github.com/jekyll/github-metadata)
- 这个问题解决之后还不算完，还可能有一个权限问题：
  ```shell
  SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
  ```
  就是上边这个玩意儿，解决办法是去 [https://curl.haxx.se/ca/cacert.pem](https://curl.haxx.se/ca/cacert.pem) 把文件保存到本地，重名为 `.pem` 结尾的文件，然后打开 我的电脑 -> 高级系统设置 -> 环境变量，创建一个新的系统变量：

  SSL_CERT_FILE: your_path\cacert.pem
  重启命令行，再次执行 `jekyll serve`，如果碰到这样一个错误：

  ```shell
    Please report a bug if this causes problems.
    C:/Ruby23-x64/lib/ruby/gems/2.3.0/gems/bundler-1.13.5/lib/bundler/runtime.rb:40:in `block in setup': You have already activated jekyll-sass-converter 1.4.0, but your Gemfile requires jekyll-sass-converter 1.3.0. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)
  ```
  执行 `bundle exec jekyll serve` 就好了 (╯▽╰)。



## 安装完成

打开 `http://127.0.0.1:4000/` 就可以本地预览博客了。

此处略去一万个`我靠`。。。



> *原文发表于*: [Windows 下安装 Jekyll 及启动遇到的问题](https://silocean.github.io/2016/10/19/windows-install-jekyll/) - https://silocean.github.io/2016/10/19/windows-install-jekyll/



现访问地址: <https://rinbow.github.io/2016/10/19/windows-install-jekyll.html>


本文的[markdown](https://cdn.jsdelivr.net/gh/Rinbow/rinbow.github.io/_posts/2016-10-19-windows-install-jekyll.md).
