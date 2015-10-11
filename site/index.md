---
layout: page
title: 【笑点】- 虫虫才色
tagline: 笑点-虫虫才色，不是笑点太高，而是笑点太低，你笑，我笑，大家都爱笑。因为我们都爱笑。幽默的笑，低俗的笑，色色的笑，开心的笑...
---
{% include JB/setup %}

{% for post in site.posts %}
<div class = "card">
		<div  class = "date_label">
			<div class="day_month">
      			{{ post.date | date:"%m/%d" }}
      			</div>
      			<div class="year">
      			{{ post.date | date:"%Y" }}
      			</div>
      		</div> 
		{{ post.content  | | split:'<!--break-->' | first }}
	<div class = "read_more">
		<a class="fa fa-link" href="{{ BASE_PATH }}{{ post.url }}">  查看全文&hellip;</a>
	</div>
	
</div>

{% endfor %}

