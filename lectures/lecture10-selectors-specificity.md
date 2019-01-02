# CSS Selectors, Specificity and the Cascade

https://thecssworkshop.com/css-basics#module-css-selectors

<!--
> By default, the browser gives them a style that looks like the web would have looked in the late 1980s — a simple white background with black text in a default font. At the time this simple styling was fine for scientific research and basic websites, but as the Web became more popular, the Web’s authors wanted to tweak the look and feel of their sites.

Over a few years between 1989 and 1996, to change the style, authors used plenty of “hacks” — non-standard ways to get around the limitations of the code they could play with. HTML started getting more complicated as more hacks were added, to the point where HTML started to look unusable to normal people.
Now, remember that HTML was made so regular folks could write it. The people that were making and updating the web browsers at the time decided enough was enough. They needed a new way to Make Coding Great Again, something for the people.
Back at CERN, one of Tim Berners-Lee’s colleagues, a Norwegian called Håkon Wiem Lie, had an idea based on other word processing programs. The idea that if you were using a header or a paragraph in several places across a website, you probably want them to lookconsistent. The idea that you could make the colors and typography
consistent until you wanted to overwrite something later on.
Håkon had come up with the idea of Cascading Style Sheets (or CSS
for short).
The cascading part of CSS is the idea that you begin to style your site on
a general basis, then get more particular as you get into the nitty-gritty.
For instance, you might want to make the typeface Arial across the
whole site, except for headers where you prefer Georgia.
So it’s always good to keep this in mind. Start off thinking about styling
in the most generic way possible. What is the most used color? What is
the most used typeface?

```css
h1 {
    font-size: 48px;
    font-family: Arial;
}
```

The selector in this case is the word “h1” — we’re picking all the <h1> tags across our website. We’re then using an open curly bracket “{“ to start selecting. There are two rules in the style, the first telling the font size to be 48 pixels large and the second telling the typeface to be Arial. We’re then finished with styling so we use a close curly bracket “}” to tell the browser to stop styling.
How rules work is you have a defined list of what you can change about the styling (more on them later), then you add a colon “:” to say do this rule, then give it a particular value depending on the rule. We then finish the rule with a semi-colon “;” to let the browser know we’re done and we can move on to the next rule — think of it like a period or full stop when we finish a sentence. Like this. Or. This.


## Basic Selectors

### Body

```css
body {
font-family: Arial;
font-size: 16px;
color: black;
}
h1 {
font-size: 24px;
}
```

> In this example, we have two styles, one for the whole of the page, then
one style just for the `<h1>` tags. To add a third, we can just do it at the
bottom of the file.

> What typeface will the `<h1>` tag be? We haven’t explicitly said in the
style sheet. The answer is it would be Arial because we said in the
stylesheet that all the content should be Arial in the “body” selector. The
styles get passed down into all tags until we overwrite them.
What font size would a `<p>` tag in our HTML be? Well, by default again
we said the “body” selector has a size of 16 pixels, so everything in the
HTML will be that size until we overwrite it. We have overwritten the
default 16px font size in the “h1” selector by making our heading 24
pixels high.

> Remember we can put tags inside other tags? What font size would an
italic `<i>` tag inside a `<p>` paragraph tag be? Same as the paragraph — all
the styles get passed down to the tags inside bigger tags.

> Remember you can add several of these rules together in one style or
across multiple styles:

```css
p {
font-family: Arial;
font-weight: 900;
font-size: 16px;
line-height: 1.5;
text-align: center;
}
```

> The order of the rules doesn’t matter as long as you don’t include two of
the same rule. If you do, the latter one will take effect. For example:

```css
p {
font-size: 14px;
font-size: 16px;
}
```

> The font size will be 16 pixels as the first one gets overwritten by
the second.


Child selectors
Let’s look at some typical HTML:
<header>
<a href="index.html">Rik Lomas</a>
</header>
<nav>
<a href="index.html">Home</a>
<a href="contact.html">Contact</a>
<a href="blog.html">Blog</a>
</nav>
It’s pretty normal to have links in a few different places on a page. Here we have one link in a <header> tag and three in a <nav> tag. But in our design, our header could look vastly different to our navigation, so that could mean our header’s links could look vastly different to our navigation’s links too. How do we pick and choose the correct styles?
Remember, CSS stands for cascading style sheets — the cascading bit means we can go into tags and overwrite styles when we need to. We can also use the cascading part of CSS to select particular tags too.
Let’s say we just want to select the header’s links. We would first of all select our <header> tag. Within the <header> tag we would then want to just select our <a> tags. The way we do this in CSS is by using a space between each selector. We select “header”, then we select “a”:
118 Learn to Code Now
header a {
color: red;
}
If we want to select all the links within the navigation, we’d select the
“<nav>” then the “<a>” tags inside the navigation:
nav a {
color: blue;
}
It’s quite common to do this in CSS, you’ll see selectors that look like
“section p”, “header img”, “footer a” and more.
Adding hover states to child selectors
Sometimes you’ll want to do tasks like when a user hovers just the
links inside the header. We have all the tools we need to do this, we just
need to combine them.
When we want to do a hover state on any link we would do:
a:hover {
color: blue;
}
Chapter 5 119
And if we want to select just the links inside the header, hovered
or not:
header a {
color: red;
}
To combine them together, we would do:
header a:hover {
color: white;
}
In this example, we’re first of all picking the <header> tag. Next we want to go inside the header tag so we add a space. Then we’re picking the link in a hovered state — no spaces in the selector here!

Classes
We’re going to add one last level of complexity to our selectors. I
promise it’ll be the last bit of complexity you’ll need in a selector for
99.9% of whatever you do.
Let’s look at some more HTML:
<section>
<h2>Experience</h2>
</section>
<section>
<h2>Education</h2>
</section>
<section>
<h2>References</h2>
</section>
Most of the time I want to make both sections look the same — the
same typography, the same color scheme, the same spacings. But let’s
say we want to change one of the sections very, very slightly. I want to
change the Education section to have a different background color to
bring attention to it.
None of the selectors I’ve used so far make sense to use, as using
“section” in CSS would change all of the <section> tags. I don’t want to
do anything with hover either.

One way around it could be to change the <section> tag to another tag, but it would need a lot of duplicate code in my style sheet to do two tags looking mostly the same.
The more sensible and more common way is to use a “class” attribute.
We want to add a hook into our HTML to say we want to style this up in a particular way. The hook we’ll add doesn’t add any styles until we style it up in CSS.

How to add class attributes in HTML
We talked about attributes earlier in the guide when we talked about the “href” attribute for link tags and the “src” attributes for image tags. Attributes are extra information for the web browser to use — for “href” it’s for the browser to know where to send the user next, for “src” it’s to know which file to pull into the page.
With the “class” attribute, we’re adding a hook into our HTML for our CSS to use later on.
To add a class attribute, we add the extra information on to the opening HTML tag:
<section>
<h2>Experience</h2>
</section>

<section class="highlighted">
<h2>Education</h2>
</section>
<section>
<h2>References</h2>
</section>
In this example, we’ve added a class attribute called “highlighted”
to the middle tag. We can call the attribute whatever makes sense to
us to use. Remember, the user doesn’t see the name of this. The only
rules you have to remember is no spaces and it has to be letters,
numbers and dashes.
If a user looked at the web page at the moment, it would look exactly
the same as it did without a class attribute. It doesn’t do anything until
we style it.
You can reuse the class attribute on multiple tags too, for instance:
<section class="highlighted">
<h2>Experience</h2>
</section>
<section class="highlighted">
<h2>Education</h2>
</section>

<section>
<h2>References</h2>
</section>
Here, I’ve added the class attribute of “highlighted” on to the first two tags but not the last tag.

Adding CSS class selectors
So far we’ve added some class attributes into our HTML but they’re unused at the moment, so let’s hook some CSS up to them.
In our CSS, if we want to style up all three section tags, we would do so like this:
section {
background: white;
color: black;
}
However, if we then wanted to overwrite the background color of the sections with the class attribute “highlighted”, we would need to select them separately to all the sections. To do this, we would pick all the <section> tags, then filter them by their class using a “.” (period or full stop), then the name of the class attribute:

section {
background: white;
color: black;
}
section.highlighted {
background: yellow;
}
Our highlighted sections have a yellow background color, and because
we’re not overwriting the text color, this is black from the default
section style.
We can use the class attributes in lots of different ways. For instance in
our HTML we could have:

<p class="intro">
In this example...
</p>
<p>
However, you may notice...
</p>
Then to style up the <p> tag with the class attribute, we could do in our
CSS style sheet:

p.intro {
font-size: 18px;
font-weight: 700;
}

Combining class attributes with
hover states
Okay, just one more complicated selector. I promise.
In the last example, where we had a <p> tag with the class attribute of “intro”, what if we wanted to do something when a user hovered the <p> tag? We’d combine the selectors:
p {
font-size: 16px;
}
p.intro {
font-size: 18px;
font-weight: 700;
}
p.intro:hover {
color: red;
}

Here we have three styles. The first is picking any <p> tag. The second
is picking any <p> tag, then filtering for any with the class attribute of
“intro”. The last one is picking any <p> tag, then filtering for the class
attribute of “intro” and then only applying the style on hover. Phew!
So for this style sheet, the tag with <p class=”intro”> would be font
size 18px and bold font weight (or 700 weight) by default. Then we
apply the red color only on hover.

Multiple classes
We can also add more than one class on to a tag. The way we do this is
by using a space between the two class names:
<p class="highlighted large">
I’m a large and highlighted paragraph
</p>
We can now select this style by using either class name. Both “p.highlighted”
and “p.large” will select this tag. We could also be incredibly
particular and select any paragraphs with both classes by adding to
our CSS:
p.highlighted.large {
font-size: 24px;
background-color: yellow;
}
 -->
