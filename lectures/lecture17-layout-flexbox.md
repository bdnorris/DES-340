# CSS Layout and Flexbox

## Floats, and why we're skipping them

I mentioned floats when we discussed images. In the early web, there was no real layout methods. The web was really supposed to just be text documents with image support, sort of like a Word file. The hack was to use the `<table>` element to layout web pages. When responsive design became a thing, CSS floats were used instead. Still a hack. 

There's a new(ish) kid on the block though, and it's called Flexbox. 

The trick of Flexbox is that since it's newish, it can be difficult to support older browsers, like Internet Explorere. However, there are ways, that we'll discuss at the end of this lecture. 

Since we have Flexbox now, and it's support is pretty good, we no longer need floats. But, if you're searching around the internet, or looking at someone else's code, you might still see this method hanging around. 

// http://learnlayout.com/toc.html

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

The first big parent property we want to look at is `flex-direction`. This lets us say whether we want our flow to be horizontal or vertical. If you want your flex children to display horizontally, you would use...

```css
section {
  display: flex;
  flex-direction: row;
}
```

"row" is also the default, so you can get away without specifying it at all. If we wanted our flex children to go down the page, we would use...

```css
section {
  display: flex;
  flex-direction: column;
}
```

### Justify

The `justify-content` property lets us specify how the children should use the space in our parent. Remember, these properties don't actually affect the dimensions of the children, just how whitespace is distributed.

Here our your options...

```css
section {
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* default, since we're in a row, this means left */
  justify-content: flex-end; /* row = right, column = bottom */
  justify-content: center; 
  justify-content: space-between; /* this makes gutters between our children, and the first and last children will be pushed to the edges */
  justify-content: space-around; /* this puts gutters on all sides of our children, even the first and last children, the margins are doubled between children */
  justify-content: space-evenly; /* this differs from space-around, instead of doubling margins between children, it distributes the space evenly at the start, end and in-between. */
}
```

Notice, a lot of flexbox property values are direction agnostic. So we say `flex-start` instead of "left" for a row. That's because if our direction was `column`, `flex-start` would be "top", not left.

### Wrap

Flexbox is one-dimensional, meaning the properties really only work one way, "row" or "column". However, we can allow for wrapping, making grids of items workable.

By default, flex children will all try to fit onto one line. You can allow the items to wrap with the `flex-wrap` property.

```css
section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap; /* default is nowrap */
}
```

What's tricky here is what I call the "Last Row Problem". Using wrap lets you create extra rows or columns, but, you don't have a lot of control over the rows individually. You have to be really careful about how you use `justify-content` with wrapping. Using `justify-content: space-between` will affect the last row differently if there are a different number of children.

### Alignment

One of the coolest things about flexbox is all the alignments it gives us. The `align-items` property gives us control over alignment on the "cross-axis", that is, the axis other than the main one. If you have `flex-direction` set to "row", then the cross-axis is the vertical axis.

```css
section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch; /* (default) the children will stretch along the cross-axis */
  align-items: flex-start; /* aligns to "top" if row and "left" if column */
  align-items: flex-end; /* aligns to "bottom" if row and "right" if column */
  align-items: center; /* vertically centers */
  align-items: baseline; /* aligns on the first line of text's baseline, regardless of type size */
}
```

"stretch" is really useful, it's one of the few ways we could keep different items the same height, even if they have differing content, without explicitly setting the height.

"center" is also very useful. Sometimes I use flexbox with just one parent and item, just because of how easy it is to center.

```html
<section>
  <div>center me</div>
</section>
```

```css
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

The above would perfectly center the `<div>` inside of the `<section>`, regardless of how big either of them is.

### Align Content

The `align-content` property lets you space out your rows in different ways when using wrapping in flexbox. I'm using the word "rows" here, but if using the column direction, you can substitute the word "columns".

```css
section {
  align-content: flex-start; /* rows pack into the start of the cross-axis */
  align-content: flex-end; /* rows pack into the end of the cross-axis */
  align-content: center; /* rows center together in the middle of the cross-axis */
  align-content: space-between; /* rows space apart to fill the parent container */
  align-content: space-around; /* rows space evenly apart with equal space around each */
  align-content: stretch; /* all children stretch to fill the cross axis */
}
```
## Flex children

<!-- 
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

## Margins and padding with flexbox

## Grid

There's another CSS specification for layout called Grid. As you can guess from the name, it allows us to define grids, and gives us power over columns, rows and gutters!. We'll get to it if we have time, but I'm skipping it for now, because so many of it's properties are very similar to flexbox's. It's just simply easier to learn grid _after_ you've learned flexbox.  

## Resources

[CSS Reference for Flexbox](https://cssreference.io/flexbox/)

flexbox froggy