---
layout: content
title: Patrons
---
<section>
<p>
  Some text about patrons.
</p>
<p>
  {% for p in site.data.patrons %}
  {% if forloop.last %}
  {{ p }}
  {% else %}
  {{ p }},
  {% endif %}
  {% endfor %}
</p>
</section>
