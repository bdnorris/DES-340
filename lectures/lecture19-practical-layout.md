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



## Making grids

### Another note on Grid

So let's mention CSS Grid one more time. It's pretty great, and will absolutely solve a lot of your layout problems. However, I'm not lecturing on it, since I still think it will be easier to figure out Flexbox first.

However, I absolutely encourage you to check out some CSS Grid stuff on your own if you're interested. Here are some resources to get you started.

...
https://css-tricks.com/snippets/css/complete-guide-grid/
grid game like froggy
https://www.youtube.com/watch?v=jV8B24rSN5o <- vet this
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

### Combining max-widths and percentages

### adding gutters

### First and last child

### using order

## Nesting for success-ting