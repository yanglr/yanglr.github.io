---
layout: page
title: 工具
titlebar: tools
subtitle: <span class="mega-octicon octicon-organization"></span>&nbsp;&nbsp; 有用的工具
menu: tools
css: ['blog-page.css']
permalink: /tools/
---

<div class="content">

        <article class="post container">
            <ul id="posts-list">
                {% for post in site.posts %}
                    {% if post.category=='tools' %}
                    <li class="posts-list-item">
                        <div class="posts-content">
                            <span class="posts-list-meta" style='left: -180px !important;'>{{ post.date | date: "%Y-%m-%d" }}</span>
                            <a class="posts-list-name bubble-float-left" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
                            <span class='circle'></span>
                        </div>
                    </li>
                    {% endif %}
                {% endfor %}

                    <li class="posts-list-item">
                        <div class="posts-content">
                            <span class="posts-list-meta" style='left: -180px !important;'>2020-07-26 16:28</span>
                            <a class="posts-list-name bubble-float-left" href="/tools/run-liquild-online.html">Run Liquid basic</a>
                            <span class="circle"></span>
                        </div>
                    </li>

                    <li class="posts-list-item">
                        <div class="posts-content">
                            <span class="posts-list-meta" style='left: -180px !important;'>2020-07-26 18:10</span>                
                            <a class="posts-list-name bubble-float-left" href="/tools/run-liquild-online-pro.html">Run Liquid Pro</a>
                            <span class="circle"></span>
                        </div>                      
                    </li>

                    <li class="posts-list-item">
                        <div class="posts-content">
                            <span class="posts-list-meta" style='left: -180px !important;'>2020-09-13 11:30</span>                
                            <a class="posts-list-name bubble-float-left" href="/tools/ejs/">Run ejs</a>
                            <span class="circle"></span>
                        </div>            
                    </li>                            
            </ul>
            
        </article>

        <!-- Pagination -->
        {% include pagination.html %}

        <!-- Comments -->
       <div class="comment">
         {% include comments.html %}
       </div>

</div>

<script>
    $(document).ready(function(){

        // Enable bootstrap tooltip
        $("body").tooltip({ selector: '[data-toggle=tooltip]' });

    });
</script>