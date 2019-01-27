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

AKA "flex items", the children of items with `display: flex` set have their own set of properties.

The trikiest one is the `flex-grow`, `flex-shrink`, and `flex-basis` properties. You can set them individually, but it's reccommended you use the shorthand `flex` property instead, since it will set the other values intelligently.

```css
.item {
  flex: <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ;
  flex: 0 1 auto; /* default if you don't set anything */
  flex: none; /* equivalant to setting "flex: 0 0 auto" */
  flex: auto; /* equivalant to setting "flex: 1 1 auto" */
}
```

> This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.

&mdash;CSS Tricks

> The idea of flexbox itself is to let tags directly inside the flexbox have some flexibility in their width or height (depending on the direction of your flex-flow rule). For instance we might be trying to make a sidebar and a main content which has the ratio of 1:4. We can also make them stretch to fit the whole of the container...

&mdash;SuperHi

```html
<section>
  <div class="sidebar">
    Here goes our sidebar...
  </div>
  <div class="content">
    Here’s our content...
  </div>
</section>
```

```css
section {
  display: flex;
  flex-flow: row;
  align-items: stretch;
  min-height: 400px;
}
div.sidebar {
  flex: 1;
}
div.content {
  flex: 4;
}
```

These two divs will stretch to fit the height of the section tag and they will  have flexible widths at a ratio of 1:4.

You can also mix widths and heights with grow and shrink.

```css
section {
  display: flex;
  flex-flow: row;
  align-items: stretch;
  min-height: 400px;
}

div.sidebar {
  width: 200px;
}
div.content {
  flex: 1;
}
```

Here, the `.sidebar` element would stay at 200px wide, but the `.content` element would shrink. 

`flex-basis` is a good alternative to setting widths. The "basis" is the initial main size of a flex child. It can then grown and shrink from there. It's default value is "auto".

```css
div {
  flex: 1 0 200px;
}
```

That div is allowed to grow to fill space according to it's parent's rules, but it isn't allowed to shrink, so it's minimum size (width or height) is effectively 200px.

You can use any unit value for flex-basis, or you can use the keyword "auto".

```css
div {
  flex: 1 1 50%;
}
```

This div can grow and shrink, but will try to be 50%. This means if it's siblings are set the same and it's parent allows wrapping, it will allow 2 per row. If there were 3 and wrapping was not allowed, it would end up being 33.333%. You'll see more about how this stuff works in the next lecture.

Although setting different values other than 1 or 0 for flex-grow and flex-shrink is a pretty powerful tool, I don't really use it. I find percentages are easier for me to grasp, and I simply use either 0 or 1 to basically turn shrinking and growing to on or off.

### Order

`order` is a wonderful property that lets you shuffle flex children around. This can be really useful if you want different orders in items between desktop and mobile. 

```html
<section>
  <div class="one">Lorem</div>
  <div class="two">Ipsum</div>
</section>
```

```css
section {
  display: flex;
}
div.one {
  flex: 1 1 50%;  
}
div.two {
  flex: 1 1 50%;
}
```

Normally, here we'd get "Lorem" then "Ipsum" on the same line. But if I added the order property...

```css
section {
  display: flex;
}
div.one {
  flex: 1 1 50%;  
  order: 2;
}
div.two {
  flex: 1 1 50%;
  order: 1;
}
```

Now I would get "Ipsum" then "Lorem". The default is 0, so technically, I would only have to give a flex child an order of 1 to make it appear after everything else. We'll look at some practical uses for this later.

### align-self

`align-self` will allow the default alignment (or the one specified by align-items on the flex parent) to be overridden for individual flex items. This means if the parent had `align-items: flex-start`, but the child had `align-self: flex-end`, that one particular child would appear at the bottom or right of the flex parent, instead of the top or left (depending on `flex-direction`).

## Grid, and why we're skipping it

There's another CSS specification for layout called Grid. As you can guess from the name, it allows us to define grids, and gives us power over columns, rows and gutters!. We'll get to it if we have time, but I'm skipping it for now, because so many of it's properties are very similar to flexbox's. It's just simply easier to learn grid _after_ you've learned flexbox.  

## Resources

[CSS Reference for Flexbox](https://cssreference.io/flexbox/)

This is a pretty great way to learn flexbox properties. You should really try it: 
[Flexbox Froggy](https://flexboxfroggy.com/)

Probably the best way to learn Flexbox is to try and build something with it, and keep this open in a browser tab to refer to:
[CSS Tricks: A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[MDN Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)