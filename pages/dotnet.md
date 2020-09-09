---
layout: page
title: .NET极客玩法, 你值得拥有
titlebar: dotnet
subtitle: <span class="mega-octicon octicon-organization"></span>&nbsp;&nbsp; .NET极客玩法，你值得拥有
menu: dotnet
css: ['blog-page.css']
permalink: /dotnet
keywords: csharp, dotnet, vb, powershell, fsharp, wpf, windows forms, asp.net, .net core
---

<div class="row">
    <div class="col-md-12">

        <ul id="posts-list">
            {% for post in site.posts %}
                {% if post.category=='dotnet' or post.category=='wpf' or post.category=='csharp' or post.keywords contains 'dotnet' %}
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