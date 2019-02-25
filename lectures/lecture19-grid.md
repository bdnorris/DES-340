# CSS Grid

Similar to Flexbox, but with two dimensions at once, the Grid specification allows true flexible layouts, combining both the best aspects of responsive design and traditional page layout.

## Caveats

I've hesitated a lot on whether this is the right course and the right time to dig into the CSS Grid specification. However, after working through examples of how to do layout with Flexbox, I've realized a lot of my techniques, although resilient and useful, are difficutl to explain. Grid solves a lot of these problems.

There are two reasons I hesitated, one is the size of the Grid spec. There are so many properties, new units, and completely new syntax that you don't see in other CSS properties.

The other is that's so new. Partly this leads to a lack of patterns of the kinds of things you can do with Grid. But the biggest reason is that there is virtually no support in older browsers. Because of this, I simply don't have very much experience with Grid, because supporting Internet Explorer and older versions of Safari isn't optional. 

However, Grid is just too powerful, too useful, and I'm deciding to bet on the idea that as students who are new to CSS, Grid is just a more straight forward way to layout web pages.

## History

[The Story of CSS Grid from its Creators](https://alistapart.com/article/the-story-of-css-grid-from-its-creators)

Historically, new features of HTML, CSS or Javascript are slow to be implemented. One reason is that the specifications can take a while to get standardized. Flexbox suffered from this, leading to older browsers using different versions of it. Also different browser makers all have to implement a feature before one can safely use that feature. 

The people trying to define the Grid spec wanted to avoid the same mistakes that were made with Flexbox, so everything came out relatively fast as a fully formed whole. Hitting the newest browsers in a very complete state. The folks at Microsoft actually spearheaded this movement, mostly so they could build more stuff with web technologies. 

[CanIUse: Grid](https://caniuse.com/#search=grid)

Now, with pretty good support, Grid is ready, if you don't have to support Internet Explorer. 

## To Flexbox or to Grid

The main difference between Flexbox and Grid is that although we have the `flex-wrap` property, Flexbox was really only ever meant to work in one direction. Grid is meant to work it two directions, with both columns and rows. 

One thing that Grid can do is it can let you assign content to areas of the grid regardless of that items order in your HTML. This would allow you to prioritize mobile for your HTML order, but really change stuff on larger screens. 

Another thing Grid does that is really useful, is that it comes ith it's own explicit gutter property called `grid-gap`. This is really nice, since using margins and paddings with Flexbox can be a bit painful.

Grid doesn't necessarily replace Flexbox, sometimes flexbox is easier. But when you find ourself straining to make Flexbox work, Grid might be your answer.

So when to use Grid...when Flexbox isn't enough.

## How to Grid?

Instead of covering the entire Grid specification, I'm going to focus on the most used and most useful properties. In the next lecture, we'll look at some practical uses for these. It will be up to you to go further with Grid if you want, there are a ton of resources at the end of this lecture.

Remember the CSS Tricks article showing all of the Flexbox properities. Well, check out the one for Grid...

[CSS-Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

Any quotes in this lecture that aren't referenced are from this CSS-Tricks guide.

> CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS has always been used to lay out our web pages, but it's never done a very good job of it. First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance). Flexbox helped out, but it's intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.

It's huge, there really is a lot here. Let's dig in...

## Terminology

Similar to Flexbox, Grid follows a parent child relationship. We'll refer to the parents as **Grid Containers** and the children as **Grid Items**.

One slightly confusing thing about Grid is the idea of lines. **Grid Lines** are numbered and referenced in your code and keeping track of them can be tricky.

> The dividing lines that make up the structure of the grid. They can be either vertical ("column grid lines") or horizontal ("row grid lines") and reside on either side of a row or column.

[!Grid Line](/assets/img/terms-grid-line.svg)

**Grid Track** The "track" is actually referencing the column or the row.

> The space between two adjacent grid lines. You can think of them like the columns or rows of the grid.

[!Grid Track](/assets/img/terms-grid-track.svg)

**Grid Cell** A unit made up of the intersection one column and one row.

> The space between two adjacent row and two adjacent column grid lines. It's a single "unit" of the grid.

[!Grid Cell](/assets/img/terms-grid-cell.svg)

**Grid Area** The actual item in the grid you place your content into. An area can be one cell, or multiple cells.

> The total space surrounded by four grid lines. A grid area may be comprised of any number of grid cells.

[!Grid Area](/assets/img/terms-grid-area.svg)

## Grid Examples

[Example CodePen for this Lecture](https://google.com)

## Grid Containers

We'll use the following HTML for these examples. 

<!-- ```html
<div class="parent-container">
  <div>lorem</div>
  <div>lorem ipsum</div>
  <div>lorem ipsum dolor</div>
  <div>lorem ipsum dolor sit</div>
  <div>lorem ipsum dolor sit amet</div>
  <div>lorem ipsum dolor sit amet consectetuer</div>
  <div>lorem</div>
  <div>lorem ipsum</div>
  <div>lorem ipsum dolor</div>
</div>
``` -->

You can create a grid container simply by setting the `display` property to `grid`.

```css
.parent-container {
  display: grid;
}
```

The most used properties on grid containers are `grid-template-columns` and `grid-template-rows`.

```css
.parent-container {
  grid-template-columns: 50px auto 80px 100px;
  grid-template-rows: 5em 200px;
}
```

Basically, we define a space-separated list of values for the columns, then the same for rows. Additional items will be pushed onto new rows, and those new rows will get the `auto` value.

Like the Flexbox's `flex-basis` property, we can use the keyword `auto`. Columns and rows will expand to fill the available space.

<!-- <div class="parent-container" style="display:grid;grid-template-columns:50px auto 80px 100px;grid-template-rows: 5em 200px;">
  <div style="border: 2px solid #ccd">lorem</div>
  <div style="border: 2px solid #ccd">lorem ipsum</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor sit</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor sit amet</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor sit amet consectetuer</div>
  <div style="border: 2px solid #ccd">lorem</div>
  <div style="border: 2px solid #ccd">lorem ipsum</div>
  <div style="border: 2px solid #ccd">lorem ipsum dolor</div>
</div> -->

### The fr Unit

We get to use a new unit in grid called `fr` which stands for "fraction" or "fractional". We can use to very explicitly 

### The Auto keyword

### Functions

#### minmax()

#### repeat()

### Content

min-content

max-content

### Aligning content

align-items

justify-items

### Aligning the grid

justify-content

align-content

### Areas

grid-template-areas

## Grid items

### Placing items

grid-column-start
grid-column-end
grid-column

grid-row-start
grid-row-end
grid-row

grid-area

### item alignments

justify-self

align-self

## Back to the parents for a second...

### Auto columns and rows

grid-auto-columns

grid-auto-rows 

### Flow

grid-auto-flow


### Gutters aka "Gaps"

We get some new features to define our gutters, and since we're not using margin, they only show up between columns and cells, just like you would expect.

```css
.parent-container {
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
```

> The gutters are only created between the columns/rows, not on the outer edges.

### Implicit vs Explicit Grid

### Inspecting in the browser

## Summary

It's not necessarily important for you to become an expert in this, or to memorize these properties, what's important, especially in your role as a designer, is that you take away from Grid, Flexbox and other layout principles what is possible to do on the web. 

## Resources

http://cssgridgarden.com/

https://gridbyexample.com/

https://tympanus.net/codrops/css_reference/grid/

http://jensimmons.com/post/feb-27-2017/learn-css-grid

  https://www.youtube.com/watch?v=0Gr1XSyxZy0

  https://www.youtube.com/watch?v=hs3piaN4b5I

  https://www.youtube.com/watch?v=lZ2JX_6SGNI&list=PLbSquHt1VCf3rmXD2BymC_ZOGDEIu0OWP
  https://www.youtube.com/watch?v=ZPtpzuRajzM&ut=
  https://www.youtube.com/watch?v=mVQiNpqXov8

  https://www.youtube.com/watch?v=EEOJZy_Gge4

  https://www.youtube.com/watch?v=tFKrK4eAiUQ&t
  https://www.youtube.com/watch?v=qNtJ5p3h2A4

  https://www.youtube.com/watch?v=7msERxu7ivg&t=1s

https://www.youtube.com/watch?v=tY-MHUsG6ls

https://www.youtube.com/watch?v=HgwCeNVPlo0&feature=youtu.be

https://www.youtube.com/watch?v=bI1wNuvuFxo

https://aneventapart.com/news/post/real-art-direction-on-the-web-by-jen-simmons-an-event-apart

https://aneventapart.com/news/post/css-grid-layout-by-rachel-andrewan-event-apart-video

https://www.smashingmagazine.com/2017/07/enhancing-css-layout-floats-flexbox-grid/

https://alistapart.com/article/practical-grid

https://www.mozilla.org/en-US/developer/css-grid/

https://www.mozilla.org/en-US/developer/css-grid/

http://jensimmons.com/post/feb-28-2017/benefits-learning-how-code-layouts-css

http://jensimmons.com/post/feb-27-2017/learn-css-grid

https://www.youtube.com/watch?v=7kVeCqQCxlk

https://www.slideshare.net/mor10/css-grid-changes-everything-about-web-layouts-wordcamp-europe-2017