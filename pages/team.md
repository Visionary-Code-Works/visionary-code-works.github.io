---
layout: page
title: Team
permalink: /team/
---

## The Minds Behind Visionary Code Works

Our team is the foundation of our success at Visionary Code Works. Comprised of industry experts, creative thinkers, and problem solvers, we are united in our mission to deliver exceptional solutions. Get to know the talented individuals who make it all happen.

### Leadership

- **[Fernando McKenzie]**, CEO
- **[Thaddeus Thomas]**, CTO
  
### Our Team

{% for member in site.data.team %}
#### {{ member.name }}
*{{ member.role }}*
![{{ member.name }}]({{ member.image | absolute_url }})
{{ member.bio }}

{% endfor %}

### Join Our Team

Interested in being a part of our team? Check out our [career opportunities](http://vcwtech.com/careers/).

_Last Updated: 12-23-2023_
