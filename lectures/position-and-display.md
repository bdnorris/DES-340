# CSS Position, Display and the Box Model

## Box Model

### Margin

### Padding

## The Display Property

> All the tags we’ve talked about so far are kind of bigger boxes of content. Visually they’d go across the whole page and the next tag would go below them. Your header is at the top, then a paragraph below, then another paragraph below that.
These tags are called block tags because they fill the width of the page and make the next tag go beneath them.
Most tags are block tags, but there are other tags where you don’t want to fill up the whole width of the page. For example, you might just want to highlight one or two words in a paragraph.
There are a few tags that can work within a line of text, these are called inline tags.
An example is a bold tag, the `<b>` tag. You might only want to highlight one or two words in the paragraph.

A good rule of thumb is that block tags go down the page and inline tags go across the page.

<!-- Earlier in this guide, we talked about different tags having different types — some tags were “blocks” that push other tags down the page, others were “inline” that follow along the usual style of text.
Some examples of “block” tags are <header>, <h1>, <p> and <div>. When we place them next to each other, they go down the page (ignoring any floats we might do).
Some examples of “inline” tags are <a>, <img>, <b> and <span>.
When we place these inline tags next to each other, they go across the page and on to the next line if they can’t fit, just like words in a sentence would.
Sometimes we may want to change the type of tag in CSS depending on its context. A good example of this is when we have links in a navigation. On a desktop layout, we may want the links next to each other, but on a mobile, it may make more sense to have them go down the page instead. -->

<!-- Let’s take an example piece of HTML:
<nav>
<a href="about.html">About</a>
<a href="blog.html">Blog</a>
<a href="contact.html">Contact</a>
</nav>
On a desktop layout, it would make sense for this to go across the page
and we can let our users read from left to right.
However, on a mobile device, we might not have enough room to
display them from left to right. We can switch how these links look
from their default “inline” display to looking like a “block” tag. To do
this we will use a CSS rule called display to change how the tag acts.
First of all we’ll set a media query for mobile only at around 600px
browser width, then select the links in the nav, and change how
they act:
@media (max-width: 600px) {
nav a {
display: block;
}
} -->

<!-- Making buttons with inline-block
CSS was invented in the mid 1990s by scientists and little did they think that it would become quite as used as it has. The downside of having scientists make tools used for design is they didn’t really think about how designers would use the tools in 20 years’ time.
Perhaps the most annoying thing about inline tags like <a> and <span> is that they don’t listen to a few of the more important CSS rules, mainly width and height.
If you try and give them a width and height, they’ll just ignore you. Ugh. What’s with that? The reason is inline tags were always meant to act like text, and technically, they should fit to the content inside them and not be sized.
Several years later, the new committee that updates CSS called the W3C (or the World Wide Web Consortium) decided that if they suddenly gave inline tags the power to control width and height, they may break a lot of older websites. So instead they came up with a half-way house: the “inline-block”. A rule that lets tags go across the page, just like inline tags, but can be given widths and heights.
So where would be good places to use this? For me, this would be
for buttons.
Let’s take an example of some HTML:

<nav>
<a href="about.html">About</a>
<a href="login.html">Log in</a>
<a href="signup.html">Sign up</a>
</nav>
Let’s say I want to highlight the sign up link. At the moment, all the
links would look the same, so the first thing I’d want to do is add a class
to the sign up link. We’ll call the class “button”, but you could call it
anything you like (e.g. “signup”, “attention”, etc):
<nav>
<a href="about.html">About</a>
<a href="login.html">Log in</a>
<a href="signup.html" class="button">Sign up</a>
</nav>
Now in our CSS we can make this look more like a button. We can
give it a width, some padding, make the text centered, rounded corners
and more!

nav a {
text-decoration: none;
color: black;
}

nav a.button {
display: inline-block;
width: 100px;
background-color: red;
color: white;
text-align: center;
padding: 10px 20px 10px 20px;
border-radius: 5px;
}
Just by adding in the “inline-block” we have a lot more control over how it looks. -->

<!-- Hiding tags completely
Alongside the option to change the display type of tags between “inline”, “inline-block” and “block”, we also have the option of completely hiding the tag.
A first question may be, why not just delete the content from the HTML? Yes, you could if you’re not going to need it any more, but what if you want to be selective? What if you want to see something on a desktop screen but not a mobile?
Let’s say we want to remove any <section> tag with the class of “timeline” on a mobile screen. Roughly we want to say, at around 600px or less on the browser width, hide this completely.

We don’t want to make its opacity zero as the area will still be taken up
by a see-through box. We want to pretend it wasn’t there at all, as if it
wasn’t in the HTML:
@media (max-width: 600px) {
section.timeline {
display: none;
}
}
We could do the opposite too, which would be to hide on a desktop but
show on the mobile browser:
section.timeline {
display: none;
}
@media (max-width: 600px) {
section.timeline {
display: block;
}
}
This way we start with the default (totally hidden), then show it when
we’re on a mobile version of the site. -->


## The Position Property    

<!-- When making more complex layouts, sometimes we might have to use styles that don’t fit into the usual floated layout pattern.
As designers, we want to be able to do more with our designs!
We’re going to talk about three different ways to change our design. Some of this gets a bit complex and weird so don’t worry if you don’t understand it straight away. -->

<!-- Relative positioning
Sometimes we may want to move a tag based on where it currently is.
Let’s say we want to adjust a <header> tag by moving it relative to its
normal position, to be down 10 pixels and further right by 20 pixels.
We can use some new CSS rules to achieve this. They are the position
rule, the top rule and the left rule. We’re positioning the tag relative to
where it would usually be, then moving it from the top by 10 pixels,
then moving it from the left by 20 pixels:
header {
position: relative;
top: 10px;
left: 20px;
}
We can also move it in the opposite direction by using two other rules
called “bottom” and “right”: -->

<!-- header {
position: relative;
bottom: 10px;
right: 20px;
}
Moving the tag will leave a “shadow” — basically a gap where the tag
would have usually sat — so even if we move it a large distance, there
will still be a gap where it was originally. 

If we don’t want a shadow, we can use the next type of positioning, called absolute positioning.-->

<!-- Absolute positioning
Absolute positioning means that we are positioning the tag not based on its normal place but relative to two things: the first is based on whether it’s inside a relatively positioned tag. For example, if we have some HTML that looks like this:
<header>
<h1>Hi there</h1>
</header>
If we have any relative positioning on the <header> tag, any absolute positioning on the <h1> will be based on the internal coordinates of the <header> tag:

header {
position: relative;
top: 0;
left: 0;
}

h1 {
position: absolute;
top: 20px;
right: 20px
}
Even if we add no movement to the header here, our <h1> will be
moved without a shadow of where it once was to the top right corner
of the <header> tag.
The second rule of absolute positioning is the absolutely position
tag isn’t inside any relative tag, it will be positioned to the whole
page itself.

If our CSS was simply:
h1 {
position: absolute;
top: 20px;
right: 20px;
}
The <h1> would say bye-bye to the <header> tag and attach itself to the
whole page to the top right corner, even if the header was nowhere near
the top right corner of the page. Crazy, right?
So two rules for absolute positioning, if you want the “co-ordinates” of
the tag (the left, right, top or bottom) based on another tag, put that tag
as a relatively positioned tag. If you want the “co-ordinates” to be based

on the whole page, make sure that tag doesn’t have any parent tags which are relatively positioned. Phew. It’s a tough one.
One thing you might notice with absolute position is that the tag sticks to the page itself when you scroll. But what if you want the tag to be fixed to the browser rather than the page? -->

<!-- Fixed positioning (or how to make things sticky)
You may have seen a lot of the next CSS rule on the Internet. The idea of having tags that follow you down the page. Facebook and Twitter both have “sticky” headers.
We talked a little about how to fix things to the browser back in CSS backgrounds, when we used “background-attachment: fixed” to fix the background to the browser itself rather than the tag. We can use the similar idea of “fixed” in the tag’s position too:
header {
position: fixed;
top: 0;
left: 0;
}
This will attach the tag to the page in the top left corner and keep it there, even if scrolling up and down the page. -->

<!-- One thing you might noticed is that when you take the tag out of the usual context of the page, it might lose its width. That’s because it has no clue about what size it should be. If you want to fill up the whole width of the browser, you can add in:
header {
position: fixed;
top: 0;
left: 0;
width: 100%;
}
This will stretch the header across the whole of the page. We could
also start to add heights, background colors and more to this header
to fill it out. -->

<!-- Combining positions and floats
One thing you might be tempted to do is start building your layouts using positions rather than floats, because it looks easier — it’s similar to design programs like Photoshop and Sketch where you set an “x” and “y” position and away you go. But resist the temptation. Floats are a more powerful tool, especially when it comes to responsive design. The more positioning you use, the more tangles you’ll end up in, when it comes to fixing your layout for mobile. -->

<!-- We can however combine positions and floats in great ways. Let’s say
we want a sticky header where our title is on the left and navigation is
on the right. Our HTML would look something like: -->

<!-- <header>
<h1>Boyce</h1>
<nav>
<a href="portfolio.html">Portfolio</a>
<a href="about.html">About</a>
<a href="contact.html">Contact</a>
</nav>
</header>

So first we want to fix our header to the top of the page. Next we want
to move our title to the left, then we want to move our navigation to the
right. Remember, because we’re floating everything inside the header,
we need to fix the layout with a hidden overflow:
header {
position: fixed;
top: 0;
left: 0;
overflow: hidden;
} -->

<!-- h1 {
float: left;
}
nav {
float: right;
}
It might be very tempting to make the floats into absolute positions, but don’t do this as it makes it harder when we move to responsive later! -->

<!-- Overlapping positions
Sometimes you might have tags that overlap due to using position rules in lots of ways. The default order is based on whatever tag is further down in the HTML but sometimes you want to switch them out.
As we said earlier in the guide, going across the page is called the “x” direction and going down the page is called the “y” direction. There’s one more direction, the “z” direction, which is to do with how close a tag is to the user.
By default, every tag is at the base level, zero, and then sorted by the order of the HTML. We can change that by increasing the “z-index” of the tag. The higher the “z-index”, the “closer” to the user the tag will seem. -->

<!-- To change the z-index, just increase or decrease the number:
header {
z-index: 1;
}
nav {
z-index: 2;
}
This would make the nav be always above the header. Both would be
always above any tag without a z-index as the default is 0. -->

