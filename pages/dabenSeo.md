---
layout: page
title: 大奔SEO
titlebar: 大奔SEO
subtitle: <span class="mega-octicon octicon-organization"></span>&nbsp;&nbsp; 大奔SEO
menu: dabenSeo
css: ['blog-page.css']
permalink: /dabenSeo
keywords: 大奔seo, 极客玩家大白, seo
description: 大奔SEO
---

<div class="row">
    <div class="col-md-12">

        <ul id="posts-list">
            {% for post in site.posts %}
                {% if post.category=='seo' or post.category=='百度' or post.category =='谷歌' or post.categories contains 'seo' or post.keywords contains 'seo' %}
                <li class="posts-list-item">
                    <div class="posts-content">
                        <span class="posts-list-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
                        <a class="posts-list-name bubble-float-left" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
                            <span class='circle'></span>
                    </div>
                </li>
                {% endif %}
            {% endfor %}
        </ul> 

        <!-- Pagination -->
        {% include pagination.html %}

        <!-- Comments -->
       <div class="comment">
         {% include comments.html %}
       </div>
    </div>

</div>
<script>
    $(document).ready(function(){

        // Enable bootstrap tooltip
        $("body").tooltip({ selector: '[data-toggle=tooltip]' });

    });
</script>