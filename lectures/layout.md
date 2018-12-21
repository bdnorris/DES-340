<!-- # CSS Layout: An Introduction

## Floats, and why we're skipping them

## Flexbox

Flexbox
So we have four different options: “inline” to act as if text and can
possibly wrap on two lines or more, “inline-block” to act as a box that
goes horizontally and not wrap on two lines, “block” to act as a box
that goes vertically down the page, and “none” to hide tags.
More recently, the nerds at W3C decided to add another display type
to the list. They found that a lot of web sites were being used more for
“web apps” — more complicated web pages that act like desktop apps
— so they added some simple and powerful tools for distributing space
and aligning content in ways that these “web apps” and complex web
pages often need. These are based on a new display type called “flex”. In
the coder community we talk about using “flexbox”, because we’re using
boxes (or tags) that have flex.
Let’s say we have some HTML that looks like:
<section>
<img src="image_1.jpg">
<img src="image_2.jpg">
<img src="image_3.jpg">
<img src="image_4.jpg">
</section>
Most of the time, we’d be using flexbox for more complicated layouts,
but let’s keep it simple for now. To activate flexbox, we use:

section {
display: flex;
}
Flex direction
Next we have a choice about the tags inside our flexboxed section. Do we want the images to be arranged across or down the section?
If we want to add the direction to be across, we’d add:
section {
display: flex;
flex-direction: row;
}

It’s “row” as the image tags would go across the page. If we want to make the direction be down the tag, we’d add:
section {
display: flex;
flex-direction: column;
}
I get “row” and “column” mixed up all the time. The best way to remember which is which is that it’s to do with the tags inside the flexbox and how you want them to sit.

Justify contents
So far, most of what we’ve done can be made with “blocks” and “inline-blocks”. Where flexbox excels is with the next few CSS rules.
We’re going to add justify-contents to say where the image tags should start within the section tag. This depends on whether we’ve picked a row or column in our flex direction.
We’re going to say we have a row, which means the start of the flex would be on the left, and the end of the flex would be on the right (because rows go from left to right).
To make our images start on the left, we can do the default:

section {
display: flex;
flex-direction: row;
justify-contents: flex-start;
}
We could make our images start on the right:
section {
display: flex;
flex-direction: row;
justify-contents: flex-end;
}

Or even the middle:
section {
display: flex;
flex-direction: row;
justify-contents: center;
}
One thing we can’t do with any other display type is make the tags be
justified in two different ways. However, we can add space between all
the tags to make them evenly spaced between but no spacing on
the outside:
section {
display: flex;
flex-direction: row;
justify-contents: space-between;
}
We can also make them have an even space around all sides of the
image tags:

section {
display: flex;
flex-direction: row;
justify-contents: space-around;
}

Notice we’re not doing this CSS style on the images themselves but
on the parent container tag. The section tag is in control over the
layout here.

To wrap or not to wrap
Let’s say our section tag runs out of room on responsive design, what should we do with the images inside it? Do we go on to multiple lines with the images? Should we make them wrap or not?
If we do want to make the images wrap on to multiple lines, we
can add:
section {
display: flex;
flex-direction: row;
justify-contents: space-around;
flex-wrap: wrap;
}
But if we want to force the images to be in one single row, even if it crops the images, we can force the layout not to wrap:

section {
display: flex;
flex-direction: row;
justify-contents: space-around
flex-wrap: nowrap;
}

Aligning in the other direction
So far, we’ve said our images should going across the section tag in a
row, with space around on the “x” direction (the direction across the
page). What happens in the “y” direction, if the section tag is bigger
than the size of the images?
We can control how they work by adding a new CSS rule called
align-items. If we want to align the items at the top of the flex (in this
case, as it’s a row, the top), we can do:
section {
display: flex;
flex-direction: row;
justify-contents: space-around;
flex-wrap: wrap;
align-items: flex-start;
}

If we want to align at the bottom (or right if it’s a column), we can add:

section {
display: flex;
flex-direction: row;
justify-contents: space-around;
flex-wrap: wrap;
align-items: flex-end;
}

If we want to align in the middle:
section {
display: flex;
flex-direction: row;
justify-contents: space-around;
flex-wrap: wrap;
align-items: center;
}
We can even make the items stretch from the top to the bottom (or left to right on a column direction):
section {
display: flex;
flex-direction: row;
justify-contents: space-around;
flex-wrap: wrap;
align-items: stretch;
}

Multiple lines of content
If we have a few lines of content after we turn on the wrap, how should
those individual items look? We can add align-content.
The difference between align-content and align-items is that
the latter is based on how each individual wrapped row should act,
whereas align-content is how all the rows should act.
These use the same five options as justify-content and align-items.
The options are flex-start, flex-end, center, space-between and
space-around:

section {
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
align-items: stretch;
align-content: space-around;
}
Phew, that’s a lot! For images in a section, we’re done, but if we want
more complex layout, we can also use one more rule to make layouts.

Flex on items itself
Let’s say we have a more complex layout in our HTML, for instance something like:
<header>
<h1>Logo</h1>
<p>Tag line</p>
<nav>
<a href="login.html">Log in</a>
<a href="signup.html">Sign up</a>
</nav>
</header>
The idea of flexbox itself is to let tags directly inside the flexbox have some flexibility in their width or height (depending on the direction of your flex-flow rule). For instance we might be trying to make a sidebar and a main content which has the ratio of 1:4. We can also make them stretch to fit the whole of the container — something that’s particularly tricky to do with just floats alone.
Let’s say we have a section tag with two div tags inside:

<section>
<div class="sidebar">
Here goes our sidebar...
</div>
<div class="content">
Here’s our content...
</div>
</section>
Usually, we could add in floating and widths to give it some layout,
but if one of our divs has more content than the other, it doesn’t
stretch both of them to fit. To show this, let’s give the main container a
minimum height:

section {
display: flex;
flex-flow: row;
align-items: stretch;
min-height: 400px;
}
div.sidebar {
flex: 1;
background-color: red;
}

div.content {
flex: 4;
background-color: blue;
}
Not only will our two divs stretch to fit the height of the section tag,
they will also have flexible widths at a ratio of 1:4.

Flex and static
Where flexible tags come in useful is when we want to mix set pixel
widths with flexible ones. Let’s say we want our sidebar to always be
200 pixels wide but our content div tag to change — there isn’t a way
to know how wide this is going to be, so let’s make the browser do the
hard work!
We can keep the section CSS the same as before. We just need to change
the sidebar to a set width and our content to fill the space:
section {
display: flex;
flex-flow: row;
align-items: stretch;
min-height: 400px;
}

div.sidebar {
width: 200px;
background-color: red;
}
div.content {
flex: 1;
background-color: blue;
}

Flex grow, shrink and basis
We can add some more information into our flex rule. If we just give it a single number, this will be the amount it can grow (e.g. 1:4 ratio from before), but let’s say we don’t want our sidebar to be less than 200 pixels wide. We can add some more information into our flex rule.
We can add up to three values into the rule: the ratio of flexible growth, the ratio of flexible shrinking and then the basis size for the tag.
For our sidebar, we’re happy for it to stretch at a ratio of 1:4 bigger than 200px, but we don’t want it shrinking at any ratio at all under 200px:
div.sidebar {
flex: 1 0 200px;
background-color: red;
}

div.content {
flex: 4;
background-color: blue;
}
What this is now doing is saying to the browser, at sizes bigger than 1000px (1 + 4 ratio times 200px minimum), be in a ratio of 1:4, but at under 1000px, keep the sidebar at 200px and make the content size flexible. At very small browser sizes, our content tag could be very small too, while our sidebar stays the same!




## Grid, and why we're skipping it

Overflow
We talked earlier about a new rule called overflow that we didn’t
explain. In this chapter we’ll talk a little more about what overflow
actually is and what it does.
Let’s say we have a <div> tag that’s 300 by 300 pixels. Most of the time
we’d expect our content to fix inside the tag, but what if we have more
content than can do that?
Think of a drinking glass. Most of the time, liquid would fit inside it
comfortably, but if we have too much, what happens? It overflows.
Luckily in CSS, we can control what happens. By default, just like with
a liquid, the content will overspill and escape the container, but we can
change how that works.
If we want to cut off any extra content so it’s clipped, we can give the
<div> tag an overflow of “hidden”:

div {
overflow: hidden;
}
If we decide that within our tag, we want a little scroll bar so a user can
see the rest of the clipped content, we can add:

div {
overflow: scroll;
}
On some web browsers, this will give the <div> tag a permanent scroll bar, even if the content isn’t bigger than the tag. To make it automatically have a scroll bar if the content is bigger and no scroll bar if it’s smaller, we can add the overflow automatically:
div {
overflow: auto;
}
The overflow hack we used in the last chapter for fixing floats works because we’re forcing the parent to stretch around all of the content, floated or not, by using a hidden overflow.
 -->

