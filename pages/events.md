---
layout: page
title: Upcoming Events
permalink: /events/
---

At Visionary Code Works, we believe in the power of community and knowledge sharing. Join us at our upcoming events, workshops, and conferences.

## Featured Upcoming Events

{% for event in site.data.events %}
### {{ event.title }}
**Date**: {{ event.date }}
**Location**: {{ event.location }}
**Description**: {{ event.description }}
[More Information](http://vcwtech.com{{ event.link }})

{% endfor %}

### Get Involved

Interested in participating, speaking, or sponsoring? [Contact us](http://vcwtech.com/contact) for more details.

### Stay Informed

Subscribe to our newsletter or follow us on social media to stay updated on our latest events.

_Last Updated: 12-23-2023_
