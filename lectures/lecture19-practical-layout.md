# Practical Layout Techniques

The focus of this lecture will be to describe and offer some sample code for some real world layout problems.

## What do I mean by "Layout"

A lot of the hacks I've mentioned, like tables and floats, were all about how to get our elements to live next to each other on the same line (or maybe a better term is "row"). Flexbox and Grid solve this issue, but there's a lot of nuances and gotcha's I want to talk about, as well as how all of this works with Responsive Web Design (RWD).

## Mixing percentages and standard units

In RWD, we need to be flexible, so often, we'll want to describe our widths in percentages or vw's or other flexible units. However, we might also want to control our whitespace like margins and padding with inflexible, exact units. How can we mix them?

## The calc() function

The `calc()` CSS value can be used pretty much anywhere you would use a number, and it lets you mix units. 

```css
.my-element {
  width: calc(50% - 1em);
}
```

That CSS would tell the browser to compute 50% of its parent and subtract 1em. I can add with `+`, subtract with `-`, divide with `/`, or multiply with `/`.

The following would be a completely valid alternative way to write `width: 33.333%`.

```css
.my-element {
  width: calc(100% / 3);
}
```

There's a lot of power here. Here's something I've done to create an asymetrical layout using a calculated left margin...

```css
.my-text-container {
  margin-left: calc((100vw - 1240px)/2);
}
```

I took the max-midth of my imagined container that would normally be centered, but instead subtract that from 100vw, then divide by two. I'm essentially figuring out how far from the left my content would be if I was centereing the whole layout, when I was actually just centering 1 side.

[Calc Examples CodePen](https://codepen.io/bdnorris/pen/aXYvaj)

## Making columns

The general principal for making columns of elements is the "row/column" method. Basically you have a block level container as your row, and you use Flexbox to set items inside that row. Your container will usually have a `max-width` set, so your columns do not expand indefinitely. How many containers you need depends on your background.

**Transparent background, or background that only goes out to your max-width**: if you don't need the row to have a background you can get away with one wrapper.

**Full width background**: you'll need three containers, one that expands indefinitely and another one with a max-width set.

....

As you can also see in this pen, you can easily use flexbox settings to change how many items per row at different breakpoints by overwriting your settings inside media queries.




## RWD Layout Patterns

... grids and layout codepen ...

Going back to when we first talked about RWD, here's some examples of some of those responsive layout patterns.

### Mostly Fluid pattern

... cp

### Column Drop pattern

... cp

<!-- ### Combining max-widths and percentages

Let's look a little closer. A really common pattern I use would be to combine a container's max-width with  -->

### Adding gutters

Here's where things get tricky. CSS Grid has a gutter concept built in, but let's see how we can make this work with Flexbox. 

Now, we can, with Flexbox, use `justify-content` to space out our items. So a feasible solution would be to specify our children with less of a percentage than we normally would, automatically creating our gutters.

```css
.my-parent {
  display: flex;
  justify-content: space-between;
}
.my-children {
  flex: 0 0 22%;
}
```

Here, we are telling our flex-parent to distribute extra whitespace between our child boxes, then, we are telling our boxes to be 22%, instead of 25%. We are also telling them not to grow or to shrink, since percentages shrink and grow anyway. If I have 4 flex children, that gives me 88% of our parents width I'm using up with boxes, leaving 12% left over for whitespace. With 4 items, I need three gutters, and 12/3 is 4%. So I automatically get 4% between each item. 

However, what if I don't want flexible gutters? What if I want my boxes to flex, but my gutters to be a stable number. This is where a couple of new selectors come into play as well as the `calc()` function.

### First and last child

We'll get more into "psuedo-classes" later, but I want to introduce two right now, They are `first-child` and `last-child`. We use pseeud-classes by placing an `:` after our selector.

First and last child select the first child of a parent, and the last child of a parent, leaving the rest alone.

```html
<ul>
  <li>Aardvark</li>
  <li>Anteater</li>
  <li>Elephant</li>
</ul>
```

```css
ul > li {
  margin-left: 1em;
  margin-right: 1em;
}
ul > li:first-child {
  margin-left: 0;
}
ul > li:last-child {
  margin-right: 0;
}
```

Using the above code, no matter how many items were inside the `<ul>`, they would all get a `margin-left` and `margin-right`, except the first item gets it's left margin reset to 0, and the last item gets it's margin reset to 0. 

We can combine this idea with the `calc()` function to control our rows of items.

```css
.row {
  display: flex;
}
.row > .column {
  flex-basis: 0 0 calc(25% - 0.75em);
  margin: 0 0.5em 1em 0.5em;
}
.row > .column:first-child {
  margin-left: 0;
}
.row > .column:last-child {
  margin-right: 0;
}
```

So we have to do some arithmetic here... 4 items per row means 3 gutters, because I want no spacing on the outside for now. If I want 1em of spacing in the 3 gutters, I'll use left and right margins of 0.5em. 

My total space I want is still 3em, so each box should be 25% - 3/4 ems. Giving me, `calc(25% - 0.75em)`. Complicated, but it's the kind of thing you only need to figure out once, then you can use over and over again. Here's a CodePen showing some options.

... cp

But what if I want to have a wrapping grid of items, `first-child` and `last-child` won't work. There is no pseudo-class for first and last in a row of wrapping flex-children.

### Grid again?

The solution to that is to use Grid, it's what it was made for. We'll look at it later! For now, here's a Flexbox solution, instead of compensating for the left and right margin with pseudo classes, we'll just allow our container to be a bit larger than the container above it. 

The second solution in this CodePen is based on another pseudo selector called `nth-child()`, that works like `first-child` and `last-child`, but lets us specify things like "every third item" or "every sixth item", etc. We'll look at these closer in another lecture.

... cp

### Using order

We can use the Flexbox `order` property to let us flip things around in our RWD patterns.

## Nesting for success-ting

## Using `display` in media queries

showing and hiding with display none and media queries

## Frameworks

Maybe try Bootstrap and Foundation

Media queries for layouts
> Media queries are heavily used to turn multi-column layouts into
single-column layouts in responsive design. Let’s take a two-column
desktop layout in HTML:

<!-- ```css
<section>
<div class="main">
Here is the main content
</div>
<div class="side">
Here is a sidebar
</div>
</section>
``` -->

<!-- In your desktop version of your CSS, you’d have something like:
section {
overflow: hidden;
width: 920px; 
margin: 0 auto 0 auto;
}
div.main {
width: 600px;
float: left;
}

div.side {
width: 300px;
float: right;
} -->

### Text columns

### Yet another note on Grid

So let's mention CSS Grid one more time. It's pretty great, and will absolutely solve a lot of your layout problems. However, I'm not lecturing on it, since I still think it will be easier to figure out Flexbox first.

However, I absolutely encourage you to check out some CSS Grid stuff on your own if you're interested. Here are some resources to get you started.

...
https://css-tricks.com/snippets/css/complete-guide-grid/
grid game like froggy
https://www.youtube.com/watch?v=jV8B24rSN5o <- vet this
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

