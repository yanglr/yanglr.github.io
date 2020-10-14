---
layout: page
title: Wiki
titlebar: 维基
subtitle:  <span class="mega-octicon octicon-person"></span>&nbsp;&nbsp; 人越学越觉得自己无知~
css: ['about.css', 'sidebar-popular-repo.css', '../../bower_components/flag-icon-css/css/flag-icon.min.css', 'gitalk.css']
comments: false
menu: 维基
permalink: /wiki/
---

<style>
    li.listing-item {
    font-size: 18px !important;
    margin: 5px 0 !important;
}
</style>

> 记多少命令和快捷键会让脑袋爆炸呢？

<ul class="listing">
{% for wiki in site.wiki %}
{% if wiki.title != "Wiki Template" and wiki.topmost == true %}
<li class="listing-item"><a href="{{ site.url }}{{ wiki.url }}"><span class="top-most-flag">[置顶]</span>{{ wiki.title }}</a></li>
{% endif %}
{% endfor %}
{% for wiki in site.wiki %}
{% if wiki.title != "Wiki Template" and wiki.topmost != true %}
<li class="listing-item"><a href="{{ site.url }}{{ wiki.url }}">{{ wiki.title }}<span style="font-size:12px;color:red;font-style:italic;">{%if wiki.layout == 'mindmap' %}  mindmap{% endif %}</span></a></li>
{% endif %}
{% endfor %}
</ul>
