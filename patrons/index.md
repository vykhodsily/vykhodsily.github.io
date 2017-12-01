---
layout: content
title: Patrons
---

Some text about patrons.
 
{% for p in site.data.patrons %}
{% if forloop.last %}
{{ p }}
{% else %}
{{ p }},
{% endif %}
{% endfor %}
