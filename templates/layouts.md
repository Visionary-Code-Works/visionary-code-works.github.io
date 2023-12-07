# Layouts

The following html content is the cumulative html documents from the _layouts directory

```html
# home.html

---
layout: default
---
<div class="home">
    <section class="intro">
        <h2>Welcome to {{ site.title }}</h2>
        <p>{{ site.description }}</p>
    </section>
    <section class="recent-posts">
        <h2>Recent Posts</h2>
        <ul class="post-list">
            {% for post in site.posts limit:5 %}
            <li>
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
            </li>
            {% endfor %}
        </ul>
    </section>
    <!-- Additional sections as needed -->
</div>

# default.html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>{{ page.title | escape }} - {{ site.title | escape }}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css">

  {% include seo.html %} <!-- SEO Tags -->
  {% include analytics.html %} <!-- Analytics -->
</head>

<body>
  {% include header.html %} <!-- Site Header -->
  {% include navigation.html %} <!-- Navigation Menu -->

  <main role="main" class="container">
    {{ content }} <!-- Main Content of the Page -->
  </main>

  {% include sidebar.html %} <!-- Sidebar Content -->

  {% include footer.html %} <!-- Site Footer -->
  {% include social-links.html %} <!-- Social Media Links -->
  {% include comments.html %} <!-- Comments Section -->

  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.7/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.6.0/js/bootstrap.min.js"></script>
  <!-- Additional scripts -->
</body>

</html>

# archive.html

---
layout: default
---
<div class="archive">
    <h1>Archive</h1>
    {% for post in site.posts %}
        {% unless post.previous %}
            <h2>{{ post.date | date: '%Y' }}</h2>
            <ul>
        {% endunless %}

        <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a> ({{ post.date | date: "%b %-d, %Y" }})
        </li>

        {% if post.next %}
            {% unless post.next.date | date: '%Y' == post.date | date: '%Y' %}
                </ul>
                <h2>{{ post.next.date | date: '%Y' }}</h2>
                <ul>
            {% endunless %}
        {% else %}
            </ul>
        {% endif %}
    {% endfor %}
</div>

# category.html

---
layout: default
---
<div class="category-page">
    <h1>Posts in '{{ page.category }}' category</h1>
    <ul class="post-list">
        {% for post in site.categories[page.category] %}
        <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        </li>
        {% endfor %}
    </ul>
</div>

# page.html

---
layout: default
---
<article class="page-content">
    <header class="page-header">
        <h1 class="page-title">{{ page.title }}</h1>
    </header>
    <section class="page-body">
        {{ content }}
    </section>
</article>

# tag.html

---
layout: default
---
<div class="tag-page">
    <h1>Posts tagged with '{{ page.tag }}'</h1>
    <ul class="post-list">
        {% for post in site.tags[page.tag] %}
        <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        </li>
        {% endfor %}
    </ul>
</div>

# post.html

---
layout: default
---
<article class="post">
    <header>
        <h1>{{ page.title }}</h1>
        <p class="post-meta">Posted on {{ page.date | date_to_string }}</p>
    </header>
    <section>
        {{ content }}
    </section>
</article>

# portfolio.html

---
layout: default
---
<div class="portfolio">
    <h1>My Portfolio</h1>
    <div class="portfolio-items">
        {% for item in site.data.portfolio %}
        <div class="portfolio-item">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <a href="{{ item.url }}">Learn more</a>
            <!-- Additional content like images or videos could be added here -->
        </div>
        {% endfor %}
    </div>
</div>

# custom.html

---
layout: custom
---

<div class="custom-page">
    <header class="custom-header" style="background-image: url('{{ page.header_image }}');">
        <div class="header-content">
            <h1>{{ page.title }}</h1>
            {% if page.subtitle %}
            <h2>{{ page.subtitle }}</h2>
            {% endif %}
        </div>
    </header>

    <section class="intro-section">
        <div class="container">
            {{ content }}
        </div>
    </section>

    {% if page.featured_sections %}
    <section class="featured-sections">
        {% for section in page.featured_sections %}
        <div class="featured-section">
            <h3>{{ section.title }}</h3>
            <p>{{ section.description }}</p>
            {% if section.image %}
            <img src="{{ section.image }}" alt="{{ section.title }}">
            {% endif %}
            {% if section.link %}
            <a href="{{ section.link }}" class="more-link">Learn more</a>
            {% endif %}
        </div>
        {% endfor %}
    </section>
    {% endif %}

    {% if page.testimonials %}
    <section class="testimonials">
        <div class="container">
            <h3>What People Say</h3>
            <ul>
                {% for testimonial in page.testimonials %}
                <li>
                    <blockquote>{{ testimonial.quote }}</blockquote>
                    <cite>{{ testimonial.author }}</cite>
                </li>
                {% endfor %}
            </ul>
        </div>
    </section>
    {% endif %}

    <!-- Additional custom sections as needed -->
</div>
```

## index.html

```html
---
layout: default
---

<!-- Main Content of the Homepage -->
<div class="container">
  <!-- Hero Section -->
  <section class="hero">
    <h1>Welcome to Visionary Code Works</h1>
    <p>Leading the way in innovative digital solutions.</p>
  </section>

  <!-- Features Section -->
  <section class="features">
    <h2>Our Services</h2>
    <div class="row">
      <div class="feature-card">
        <div class="card-content">
          <h3>Web Development</h3>
          <p>Creating modern, responsive, and effective websites.</p>
        </div>
      </div>
      <div class="feature-card">
        <div class="card-content">
          <h3>UI/UX Design</h3>
          <p>Designing intuitive and user-friendly interfaces.</p>
        </div>
      </div>
      <div class="feature-card">
        <div class="card-content">
          <h3>Digital Marketing</h3>
          <p>Strategies that elevate your brand's online presence.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Recent Blog Posts Section -->
  <section class="recent-posts">
    <h2>From Our Blog</h2>
    <ul>
      {% for post in site.posts limit:3 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
      </li>
      {% endfor %}
    </ul>
    <a href="/blog/">View all posts</a>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonialsCarousel" class="carousel slide" data-ride="carousel">
    <h2>Client Testimonials</h2>
    <div class="testimonial">
      <blockquote>"Visionary Code Works helped us transform our online presence with their innovative solutions."
      </blockquote>
      <cite>- Happy Client</cite>
    </div>
    <!-- Additional testimonials -->
  </section>

  <!-- Call to Action Section -->
  <section class="call-to-action">
    <h2>Start Your Project with Us</h2>
    <p>Contact us today to discuss how we can help bring your vision to life.</p>
    <a href="/contact/" class="btn">Contact Us</a>
  </section>
</div>
```
