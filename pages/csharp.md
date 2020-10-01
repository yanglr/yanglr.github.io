---
layout: page
title: C#黑科技
titlebar: csharp
subtitle: <span class="mega-octicon octicon-organization"></span>&nbsp;&nbsp; 带你玩转C#黑科技
menu: csharp
css: ['blog-page.css']
permalink: /csharp
keywords: csharp, dotnet, wpf, windows forms, asp.net, .net core
---

<div class="row">

    <div class="col-md-12">

        <ul id="posts-list">
            {% for post in site.posts %}
                {% if post.category=='csharp' or post.keywords contains 'dotnet' or post.categories contains '.NET' or post.categories contains '.Net' or post.categories contains '.net' or post.keywords contains 'C#' %}
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