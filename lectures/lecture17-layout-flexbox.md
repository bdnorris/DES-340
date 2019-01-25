# CSS Layout and Flexbox

## Floats, and why we're skipping them

I mentioned floats when we discussed images. In the early web, there was no real layout methods. The web was really supposed to just be text documents with image support, sort of like a Word file. The hack was to use the `<table>` element to layout web pages. When responsive design became a thing, CSS floats were used instead. Still a hack. 

There's a new(ish) kid on the block though, and it's called Flexbox. 

The trick of Flexbox is that since it's newish, it can be difficult to support older browsers, like Internet Explorere. However, there are ways, that we'll discuss at the end of this lecture. 

Since we have Flexbox now, and it's support is pretty good, we no longer need floats. But, if you're searching around the internet, or looking at someone else's code, you might still see this method hanging around. 

## Flexbox

You. are. so. lucky. Flexbox might seem tough, but keep in mind, we had nothing before it. The entire web was a lie, every website you ever used was basically doing incredible things with hacks on top of hacks. You get Flexbox.

**So what is it?** Flexbox is a set of CSS properties that allow for one-directional layout where a parents children can be set to automatically fill the parents space. It also gives us some really great alignment tools. 

From CSS Tricks...

> The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

> The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

> Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

> **Note:** Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the _Grid_ layout is intended for larger scale layouts.

The key to understanding Flexbox is understanding that it's a parent-child relationship. To activate Flexbox, I can use the display property.

```html
<section>
  <div>
    <p>Lorem</p>
  </div>
  <div>
    <p>Ipsum</p>
  </div>
  <div>
    <p>Lorem</p>
  </div>
</section>
```

```css
section {
  display: flex;
}
```

In this case, I've declared the `<section>` element to be a flex parent, making all of the `<div>` elements flex children. That relationship doesn't go past this parent child relationship, so your markup is very important here.

Flex children can also be flex parents though. We'll look at this in a bit.

The easiest way to use flexbox is just to declare it on the parent. There a bunch of defaults that come into play, and you will automatically create a vertical row of boxes that flex to fill the space of the parent. That's just one line of CSS!

But, the complete flexbox spec is huge, and has a lot of properties, so it takes a bit of time to learn. This CSS Tricks article on this is indispensable, and you should refer to it often while you're learning, and even for quite a while after you learn the basics.

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

The left column shows all the properties of flex parents, and the right column shows all the properties of flex children.

 ## Flex parents

Making a flex parent is as simple as...

```css
section {
  display: flex;
}
```

### Direction






<!-- # CSS Layout: An Introduction
Flexbox

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

## Resources

[CSS Reference for Flexbox](https://cssreference.io/flexbox/)