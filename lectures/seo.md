# Search Engine Optimization
<!-- 
We talked earlier about the <title> tag and how it is used in search engines to say what your page is in search results. It’s also really important to make sure the content in your title tag is relevant to what people are searching for. Google uses the title tag in ranking search results. If for example you’re selling children’s clothes, make sure you put that in your <title> tag too:
<head>
<title>SuperHi — children’s hand-made clothes</title>
</head>
The second most important thing is to add a new tag called the <meta> tag. Meta is the Greek word for “post” or “after”, but it’s come to mean self-referential. In this case we’re adding some more information about the page itself — content describing the content!

The first meta tag is the description. Google and other search engines will use this to add a little description under a search result:
<head>
<title>SuperHi — children’s hand-made clothes</title>
<meta name="description" content="We made organic...">
</head>
Google doesn’t consider this in its search ranking, but it’s useful for potential visitors to our site to know what the site is about before
they click.

Facebook social tags
We can also add some tags called Open Graph tags that Facebook and
some other social networks use to display a “card” when users share
your page. We can add them into our <head> and change according:
<meta property="og:title" content="SuperHi online
course">
<meta property="og:type" content="article">
<meta property="og:url" content="http://superhi.com/">
<meta property="og:image" content="http://superhi.com/
image.jpg">
<meta property="og:description" content="Learn to
code...">
<meta property="og:site_name" content="SuperHi" />
Notice the use of the attribute “property” inside of “name” for this one.
I’m not sure what the reasoning is as most other <meta> tags just use
the name “attribute” for everything!

Twitter social tags
For Twitter cards, we can use something very similar to Facebook’s
meta tags:

<meta name="twitter:card" content="summary_large">
<meta name="twitter:site" content="@superhi_">
<meta name="twitter:title" content="SuperHi online course">
<meta name="twitter:description" content="Learn to code...">
<meta name="twitter:image" content="http://superhi.com/image.jpg">
There are some tools online for testing your “cards” on both Twitter and Facebook — just search for “Facebook Sharing Debugger” and “Twitter Sharing Debugger”. -->