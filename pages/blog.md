---
layout: default  # or any other layout you have for pages
title: Blog
permalink: /blog/
---

Welcome to our blog page. Here you'll find our latest posts and updates.

{% for post in site.posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>Posted on {{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url }}">Read more...</a>
  </article>
{% endfor %}
