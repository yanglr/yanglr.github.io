---
layout: page
title: Kubernetes相关
titlebar: k8s
subtitle: <span class="mega-octicon octicon-organization"></span>&nbsp;&nbsp; K8S你用上了吗?
menu: k8s
css: ['blog-page.css']
permalink: /k8s
---

<div class="row">

    <div class="col-md-12">

        <ul id="posts-list">
            {% if post.category=='k8s' or post.category=='kubernetes' or post.keywords contains 'Kubernetes' %}
                {% if post.category=='life' %}
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