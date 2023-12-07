analytics.html: Contains the site's web analytics code (like Google Analytics), which can be included in the layout templates to appear on every page.

{% if site.google_analytics %}
<script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ site.google_analytics }}');
</script>
{% endif %}

comments.html: For integrating a comments section (like Disqus) into your blog posts.

{% if page.comments %}
<div id="disqus_thread"></div>
<script>
    var disqus_config = function () {
        this.page.url = '{{ page.url | absolute_url }}';
        this.page.identifier = '{{ page.id }}';
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://{{ site.disqus.shortname }}.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}

footer.html: The site's footer content. This can include copyright notices, links to privacy policy or terms of service, and social media links.

<footer class="site-footer">
    <div class="container">
        <p>&copy; {{ site.time | date: '%Y' }} {{ site.title }}. All rights reserved.</p>
        {% if site.footer_links %}
            <ul class="footer-links">
                {% for link in site.footer_links %}
                    <li><a href="{{ link.url | relative_url }}">{{ link.title }}</a></li>
                {% endfor %}
            </ul>
        {% endif %}
        {% include social-links.html %}
    </div>
</footer>

header.html: Contains the site's header section. This typically includes the navigation bar and may also contain site branding or identity.

<header class="site-header">
    <div class="container">
        <div class="site-branding">
            <a href="{{ '/' | relative_url }}">{{ site.title }}</a>
        </div>
        {% include navigation.html %}
    </div>
</header>

navigation.html: Defines the navigation menu of the site. It's often included in header.html or directly in default.html.

<nav class="site-navigation">
    <ul>
        <li><a href="{{ '/' | relative_url }}">Home</a></li>
        <li><a href="{{ '/about/' | relative_url }}">About</a></li>
        <li><a href="{{ '/blog/' | relative_url }}">Blog</a></li>
        <li><a href="{{ '/contact/' | relative_url }}">Contact</a></li>
        <!-- Additional navigation items here -->
    </ul>
</nav>

seo.html: If you're using additional SEO tags and scripts, they might be included in this file for easy inclusion in your layouts.

<meta name="description" content="{{ page.description | default: site.description }}">
<link rel="canonical" href="{{ page.url | absolute_url }}">
<meta property="og:title" content="{{ page.title | default: site.title }}">
<meta property="og:description" content="{{ page.description | default: site.description }}">
<meta property="og:url" content="{{ page.url | absolute_url }}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ page.title | default: site.title }}">
<meta name="twitter:description" content="{{ page.description | default: site.description }}">
<!-- Additional SEO tags as needed -->

sidebar.html: For sites with a sidebar, this file contains its contents, which might include a search box, list of recent posts, or advertisements.

<aside class="sidebar">
    <!-- Search Box -->
    <section class="search">
        <form action="{{ '/search/' | relative_url }}" method="get">
            <input type="text" name="q" placeholder="Search...">
            <button type="submit">Search</button>
        </form>
    </section>

    <!-- Recent Posts -->
    <section class="recent-posts">
        <h3>Recent Posts</h3>
        <ul>
            {% for post in site.posts limit:5 %}
            <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
        </ul>
    </section>

    <!-- Categories -->
    <section class="categories">
        <h3>Categories</h3>
        <ul>
            {% for category in site.categories %}
            <li><a href="{{ '/categories/' | append: category[0] | relative_url }}">{{ category[0] }}</a></li>
            {% endfor %}
        </ul>
    </section>

    <!-- Tags -->
    <section class="tags">
        <h3>Tags</h3>
        <ul>
            {% for tag in site.tags %}
            <li><a href="{{ '/tags/' | append: tag[0] | relative_url }}">{{ tag[0] }}</a></li>
            {% endfor %}
        </ul>
    </section>

    <!-- Advertisement Section -->
    <section class="ads">
        <h3>Advertisement</h3>
        <div class="ad-content">
            <!-- Your ad code or image link -->
            <a href="https://example.com/ad-link">
                <img src="https://example.com/path-to-your-ad-image.jpg" alt="Advert">
            </a>
            <!-- More ads can be added here -->
        </div>
    </section>

</aside>

social-links.html: A snippet for social media links, which can be included in the footer or header.

<ul class="social-links">

    <!-- Twitter -->
    {% if site.twitter_username %}
    <li><a href="https://twitter.com/{{ site.twitter_username }}" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
    {% endif %}

    <!-- Facebook -->
    {% if site.facebook_username %}
    <li><a href="https://www.facebook.com/{{ site.facebook_username }}" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
    {% endif %}

    <!-- Instagram -->
    {% if site.instagram_username %}
    <li><a href="https://www.instagram.com/{{ site.instagram_username }}" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
    {% endif %}

    <!-- LinkedIn -->
    {% if site.linkedin_username %}
    <li><a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
    {% endif %}

    <!-- YouTube -->
    {% if site.youtube_username %}
    <li><a href="https://www.youtube.com/{{ site.youtube_username }}" aria-label="YouTube"><i class="fab fa-youtube"></i></a></li>
    {% endif %}

    <!-- Pinterest -->
    {% if site.pinterest_username %}
    <li><a href="https://pinterest.com/{{ site.pinterest_username }}" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a></li>
    {% endif %}

    <!-- Snapchat -->
    {% if site.snapchat_username %}
    <li><a href="https://snapchat.com/add/{{ site.snapchat_username }}" aria-label="Snapchat"><i class="fab fa-snapchat-ghost"></i></a></li>
    {% endif %}

    <!-- TikTok -->
    {% if site.tiktok_username %}
    <li><a href="https://www.tiktok.com/@{{ site.tiktok_username }}" aria-label="TikTok"><i class="fab fa-tiktok"></i></a></li>
    {% endif %}

    <!-- Reddit -->
    {% if site.reddit_username %}
    <li><a href="https://www.reddit.com/user/{{ site.reddit_username }}" aria-label="Reddit"><i class="fab fa-reddit-alien"></i></a></li>
    {% endif %}

    <!-- Discord -->
    {% if site.discord_link %}
    <li><a href="{{ site.discord_link }}" aria-label="Discord"><i class="fab fa-discord"></i></a></li>
    {% endif %}

    <!-- Vimeo -->
    {% if site.vimeo_username %}
    <li><a href="https://vimeo.com/{{ site.vimeo_username }}" aria-label="Vimeo"><i class="fab fa-vimeo-v"></i></a></li>
    {% endif %}

    <!-- Flickr -->
    {% if site.flickr_username %}
    <li><a href="https://www.flickr.com/photos/{{ site.flickr_username }}" aria-label="Flickr"><i class="fab fa-flickr"></i></a></li>
    {% endif %}

    <!-- Tumblr -->
    {% if site.tumblr_username %}
    <li><a href="https://{{ site.tumblr_username }}.tumblr.com" aria-label="Tumblr"><i class="fab fa-tumblr"></i></a></li>
    {% endif %}

    <!-- Spotify -->
    {% if site.spotify_username %}
    <li><a href="https://open.spotify.com/user/{{ site.spotify_username }}" aria-label="Spotify"><i class="fab fa-spotify"></i></a></li>
    {% endif %}

    <!-- SoundCloud -->
    {% if site.soundcloud_username %}
    <li><a href="https://soundcloud.com/{{ site.soundcloud_username }}" aria-label="SoundCloud"><i class="fab fa-soundcloud"></i></a></li>
    {% endif %}

    <!-- Additional social media links as needed -->
</ul>
