# CSS Position, Display and the Box Model

## The Display Property

### Block and Inline

We've previously looked at `inline` vs. `block` tags, but lets take a closer look.

Typically an element using a tag that is either set to **block** via CSS, or block by default, will take up its own vertical space in the document. Sibling elements can only appear above and below. This includes `<div>`, `<h1>`, and `<p>` among others. 

Block elements take on the full box model, including width, height, padding, margin and border.

Elements using a tag that are either set as **inline** via CSS, or inline by default will flow like text. They will appear left to right and wrap downwards when they run of room. They will also honor whitespace in the HTMl, or 1 space anyway. This includes `<a>`, `<img>`, and `<em>` among others.

Inline elements can have box model properties set, like padding, margin and border, but the results may not be what you expect.

> A good rule of thumb is that block tags go down the page and inline tags go across the page.

&mdash; SuperHi

We can set these in CSS with the `display` property, overriding whatever the default of that tag might be:

```css
.my-thing {
  display: block;
  display: inline;
}
```

### Inline block

There's also a property value for display called `inline-block`. Inline block gives you the best of both worlds, allowing elements to flow like inline elements, but giving the access to the full box model.

/ example pen

This allows you a way to pretty easily set block elements next to each other in your layout. The only issue is that since they are behaving like text, they will honor whitespace and place small space characters between them. If you are attempting a very precise layout, this might break things for you.

[inline-block layout](http://learnlayout.com/inline-block-layout.html)

> CSS was invented in the mid 1990s by scientists and little did they think that it would become quite as used as it has. The downside of having scientists make tools used for design is they didn’t really think about how designers would use the tools in 20 years’ time.

> Perhaps the most annoying thing about inline tags like `<a>` and `<span>` is that they don’t listen to a few of the more important CSS rules, mainly width and height.

> If you try and give them a width and height, they’ll just ignore you. Ugh. What’s with that? The reason is inline tags were always meant to act like text, and technically, they should fit to the content inside them and not be sized.
Several years later, the new committee that updates CSS called the W3C (or the World Wide Web Consortium) decided that if they suddenly gave inline tags the power to control width and height, they may break a lot of older websites. So instead they came up with a half-way house: the “inline-block”. A rule that lets tags go across the page, just like inline tags, but can be given widths and heights.

&mdash;SuperHi

### None

`none` is a really useful value for the `display` property. It lets us hide elements completely from the page. 

Why would you want to do this? 

- When we look at media queries (soon) for responsive websites, we can hide and show things based on screen size. Sometimes it's useful to have basically two of the same things in our HTML, and show one on mobile, the other on desktop. A good example is navigation. Often our mobile navigation design differs quite a bit from our desktop, requiring different HTML. 
- Once you get into interaction design, showing and hiding things is a pretty big part of creating a user interface.
- Maybe you're styling something where you don't totally control the template (the HTML), like a shopping cart site. You might decide you don't want that particular element showing up, and instead of having to remove it from the template, you can just hide it with CSS.

Keep in mind, there are other ways to hide things, but `display: block;` is the only way to hide something that completely removes it from the flow of the document.

We can also set `visibility: hidden` on an element. The difference is, this element will still be in the flow of the document, taking up the same space as it normally would. Maybe you want that, so you would use the "visibility" property here.

Similarly, there is `opacity: 0`. Essentially the same as `hidden`, but this property is animate-able, which we'll look at later. Of course `opacity: 0.5` is not at all the same as `hidden` and would just show your element _and everything inside it_ at 50% opacity.

### Flex and Grid

These are our layout display properties that will need their own lectures.

### Other

`display: list-item;`: makes an element act like an `<li>` even if it's not. I don't think I've ever used this. 

`display: table;`: makes an element behave like a `<table>`. Its content and child elements behave like table cells (`<td>`).

`display: table-cell;`: makes an element behave like a `<td>`.

`display: table-row;`: makes an element behave like a `<tr>`.

I could see the above being useful if you wanted to have your element behave like another element on mobile, but not on desktop or visa versa.

Imagine a large data table that looks fine on desktop, but really doesn't fit on a mobile screen. Instead of actually using the `<table>` tag, we could fake a table on desktop, but on mobile lay our content out some other way.

## The Position Property    

The position property might be one of the toughest things to understand and really get right in CSS. It doesn't help that `relative` does more than one thing. Let's try to break it down.

Ultimately positioning has to do with document flow. Normally, something in HTML follows in order down the page. Positioning is how we make adjustments to this flow. 

### Directional properties

Some position settings allow you to set directional properties. These are...

- top
- bottom
- left
- right

What they do depends a bit on the context, so we'll look at some examples soon.

### Z-index

Some position settings allow you to set a `z-index` value. This is a numerical value that allows you to dictate layers in your layout, positioning some items on top of others.

document flow...

### Static

`position: static;` is basically the default of all elements. You would only need to set this if you were trying to overwrite a style that set `position` to something else.

### Relative

`position: relative;` does double duty. Like `static`, this element will remain in the normal flow of the page. But now it can react to directional properties, or `z-index`.

This allows you to adjust a tags position "relative" to it's natural position. This is most useful for "nudging" an element a bit one way or another. **However,** the space the element would normally occupy still stays occupied.

> Moving the tag will leave a “shadow” — basically a gap where the tag
would have usually sat — so even if we move it a large distance, there
will still be a gap where it was originally. 

&mdash;SuperHi

If I wanted to move an element a bit to the left, and a bit up, I could use the CSS...

```css
.my-element {
  position: relative;
  top: -10px;
  left: -10px;
}
```
or...

```css
.my-element {
  position: relative;
  bottom: 10px;
  right: 10px;
}
```

Whichever makes more sense to you.

### Absolute

When we set `position: absolute;` on an element, a couple of things happen. First, it's removed from the normal flow of the document. Next, it is positioned relative to it's **closest ancestor that has a position other than "static"**. So, if you haven't set any position on any of it's anscestors, it will position itself relative to the document. 

So, if I had the following HTML...

```html
<div class="header">
  <h1>Hi there</h1>
</div>
```

and the following CSS...

```css
.header h1 {
  position: absolute;
}
```

My `<h1>` would be positioned relative to whatever anscestor had a position set, possibly all the way up to the document root.

If instead I set positioning on the `.header` element...

```css
.header {
  position: relative;
}
.header h1 {
  position: absolute;
}
```

It will position itself to its parent. Unlike relative positioning, it does not leave a "shadow" of where it would normally be in the flow. Other elements ignore it copletely.

Nothing really happens to the `.header` element here, because even know we set `position: relative;` on it, we didn't specify any directional tags. Setting `relative` here only defines it as something for it's children to position themselves "absolutely" to. 

Back in the pre-responsive days, you could use absolute positioning to basically grid out your designs and by using directional properties assign coordinates for the elements to sit. But, this doesn't work very well with flexible design patterns.

I find myself using `absolute` less and less. Probably the best thing to use `absolute` for is decorative elements or icons. If you had some navigation, and placed an icon in the HTMl to flow naturally, the icon will just kind of show up after the text. If you wanted the icon to always be on the left, regardless of the width of our text, you could absolutely position it to it's box.

// codepen example

> So two rules for absolute positioning, if you want the “co-ordinates” of
the tag (the left, right, top or bottom) based on another tag, put that tag
as a relatively positioned tag. If you want the “co-ordinates” to be based on the whole page, make sure that tag doesn’t have any parent tags which are relatively positioned. Phew. It’s a tough one.

> One thing you might notice with absolute position is that the tag sticks to the page itself when you scroll. But what if you want the tag to be fixed to the browser rather than the page?

&mdash;SuperHi

### Fixed

`position: fixed;` is how we can make things "sticky" with CSS. 

left: 0;
bottom: 0;
top: 0;
right: 0;

works on absolute as well

<!-- 

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

### Using z-index

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

## Resources

[CSS Reference for Display](https://cssreference.io/property/display/)

[CSS Reference for Positioning](https://cssreference.io/positioning/)