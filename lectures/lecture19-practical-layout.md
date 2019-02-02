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

## Making columns

The general principal for making columns of elements is the "row/column" method. Basically you have a block level container as your row, and you use Flexbox to set items inside that row. Your container will usually have a `max-width` set, so your columns do not expand indefinitely. How many containers you need depends on your background.

Transparent background, or background that only goes out to your max-width: if you don't need the row to have a background you can get away with one wrapper.

Full width background: you'll need three containers, one that expands indefinitely and another one with a max-width set.

....

As you can also see in this pen, you can easily use flexbox settings to change how many items per row at different breakpoints by overwriting your settings inside media queires.




## RWD Layout Patterns

... grids and layout codepen ...

Percentage and vh VW are the units

clear floats to stack
or let things wrap

### Combining max-widths and percentages

### adding gutters

### First and last child

### using order

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

### Another note on Grid

So let's mention CSS Grid one more time. It's pretty great, and will absolutely solve a lot of your layout problems. However, I'm not lecturing on it, since I still think it will be easier to figure out Flexbox first.

However, I absolutely encourage you to check out some CSS Grid stuff on your own if you're interested. Here are some resources to get you started.

...
https://css-tricks.com/snippets/css/complete-guide-grid/
grid game like froggy
https://www.youtube.com/watch?v=jV8B24rSN5o <- vet this
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

