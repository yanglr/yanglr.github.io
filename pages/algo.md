---
layout: page
title: 算法也可以很有趣
titlebar: algo
subtitle: <span class="mega-octicon octicon-organization"></span>&nbsp;&nbsp; "算法也可以很有趣"
menu: algo
css: ['blog-page.css']
permalink: /algo
---

<div class="row">
    <div class="col-md-12">

        <ul id="posts-list">
            {% for post in site.posts %}
                {% if post.category=='algo' or post.category=='oj' or post.category=='leetcode' or post.categories contains 'oj' or post.keywords contains 'leetcode' %}
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