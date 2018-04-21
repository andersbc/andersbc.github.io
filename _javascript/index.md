---
layout: default
title: Javascript
published: true
breadcrumb: javascript
---

<p>This should be the index page for javascript. </p>

{% for jspages in site.javascript %}

<h2>
  <a href="{{ jspages.url | prepend: site.baseurl }}">
  {{ jspages.title }}
  </a>
</h2>
<p class="post-excerpt">{{ jspages.description | truncate: 160 }}</p>

{% endfor %}
