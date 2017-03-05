---
layout: default
title: Javascript
---

{% for jspages in site.javascript %}


<a href="{{ jspages.url | prepend: site.baseurl }}">
        <h2>{{ jspages.title }}</h2>
</a>

<p class="post-excerpt">{{ jspages.description | truncate: 160 }}</p>

{% endfor %}  
