---
layout: content
title: Patrons
---
<section>
<p>Massive respect to everyone who supported us on Patreon showing their love
for the Vykhod Sily project:</p>
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
