# The CSS Box Model

> CSS Basic Box Model is a module of CSS that defines the rectangular boxes—including their padding and margin—that are generated for elements and laid out according to the visual formatting model.

&mdash;[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)

> At the risk of over-repeating myself: every element in web design is a rectangular box. This was my ah-ha moment that helped me really start to understand CSS-based web design and accomplish the layouts I wanted to accomplish. We've talked about the positioning of these boxes a bit, and about their behavior. 

&mdash;Chris Coyier (CSS-Tricks)

## The Box

So far, we've just talked about colors, typography, etc.&mdash;styling our content. But now we need to get into actual layout, and things are going to get a bit more complicated. 

All block elements on your page can be thought of as boxes (except inline elements like `<span>`, `<a>`, `<em>`, etc.)

![The Box](/assets/img/box-model.png)

The "box-model" describes these boxes. Here's what you get with a box in CSS...

- width
- height
- padding (whitespace inside the box)
- border
- margin (whitespace outside of the box)

You can describe these with the following CSS properties:

```css
div {
    width: 500px;
    height: 200px;
    padding: 1em;
    border-width: 2px;
    border-color: gray;
    border-style: solid;
    margin: 1em;
}
```

## Width and height

For responsive design, there are also min and max widths and heights:

```css
div {
    min-width: 200px; /* there's also min-height */
    max-width: 600px; /* there's also max-height */
    width: 100%; /* You can use percentages, but their best for widths, probably avoid them for heights */
}
```

That box would try to be as wide as possible, but with contraints on how small and how large it can be. 

## Margin and padding

Margins and padding are the key way we create space in our designs. Padding creates whitespace within our element, seperating the content from its borders, Margin creates whitespace around the element. 

### Margin

If we have a `<p>` tag, we can use a few different properties to add margin. We'll need to choose wisely, to make sure specificity works like we'd want it to.

```css
p {
    margin: 1em; /* one value means all sides will have the same margin */
}
```

If our font-size was 16px, then 16px = 1em, so we'd get 16px of white space on **all sides** of our element. If we want to have different margins on different sizes of our element, we can separate them two ways...

```css
p {
    margin-top: 1em;
    margin-right: 10px;
    margin-bottom: 1.2em;
    margin-left: 0;
    /* or we can use the shorthand property */
    margin: 1em 10px 1.2em 0; /* 
}
```

Both margin and padding's shorthand properties follow the pattern _top, right, bottom, left_ (clockwise). Some people remember this as “TRouBLe” (TRBL). 

Whenever you use a shorthand property, you will be setting all of the margins size, if you use a specific margin property, you're only setting one side, leaving the rest to be either default or inherit those settings.

We can also set top/bottom and left/right like...

```css
p {
    margin: 1em 0;
}
```

### Margin collapse

One not so obvious thing to remember about margins is the concept of "margin collapse". If we have two elements on top of each other, with the top element having a bottom margin of 20px and the bottom element having a top margin of 20px, the space between them will be 20px. Margins will basically overlap when stacked. 

If we had an element with 30px at the bottom, and one with 20px at the top, the larger one will win, making the gap 30px total.

[Mastering Margin Collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

If you think about it, this is actually useful, especially for text blocks and paragraphs. If we want our text elements, like headings and paragraphs, to be interchangeable, it would be useful if we could style the vertical space between them to adjust to whatever order items happen to flow in. If you want 20px of space on the top and bottom of your paragraphs, that probably doesn't mean you want 40px when you put two paragraphs together. But the first and last paragraphs in a block will still get the 20px on either side.

### Auto margins

Margins have a super-power that aids us in centering content. They can be set to "auto". An easy way to center something is to use the following CSS...

```css
.my-element {
    margin: 0 auto;
    width: 400px;
}
```

This sets the top and bottom margin to 0, and the left and right to auto. The trick is, this only works on the left and the right, and you must have some kind of set width. 

We'll need flexbox to help us center vertically, which we'll talk about later.

### Padding

Padding properties work similarly to margin ones and still follow the clockwise style of using the shorthand property.

```css
div {
    padding-top: 1em;
    padding-right: 10px;
    padding-bottom: 1.2em;
    padding-left: 0;
    /* or we can use the shorthand property */
    padding: 1em 10px 1.2em 0; /* 
}
```

One of the key differences between margin and headings is how borders and backgrounds relate. Padding puts space between the border and the content, creating "white" space that will be filled with background color, while margin adds space outside of the borders and backgrounds.

Given the following HTML and CSS...

```html
<div class="wrapper">
    <div>Lorem ipsum dolor sit amet...</div>
</div>
```

```css
.wrapper {
  background-color: #eee;
}
.wrapper > div {
  background-color: #333;
  color:white;
  padding: 1em;
  border: 1px solid red;
  margin:1em;
}
```
We get the following result. 

<div style="background-color: #eee;">
    <div style="background-color: #333;color:white;padding: 1em;border: 1px solid red;margin:1em;">Lorem ipsum dolor sit amet...</div>
</div>

As you can see, the dark gray box we set the margin and padding on, shows its background for 1em around the content, where it then has a border, and outside that, a margin where you see the containing div's lighter background color.

## Borders

Borders in CSS can be applied to any block element, just like padding and margin. They need three values, width, style, and color.

Width can be any value, but you'll usually use pixels. To add a thin gray border, you would use the CSS:

```css
div {
    border-width: 1px;
    border-style: solid;
    border-color: gray; /* You could use an rgba color here for transparency */
    /* or use the shorthand */
    border: 1px solid gray;
}
```

You can also specify borders on just some sides (top, right, bottom and left), or change the properties for certain sides of the box...

```css
div {
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: gray;
    /* or the shorthand */
    border-left: 1px solid gray;
}
```

If you wanted a border on all sides except one, it would be easier to first apply them to all sides, then use the keyword `none` to turn off one side...

```css
div {
    border: 1px solid gray;
    border-bottom: none;
}
```

Border styles can be...
- dotted
- dashed
- solid

Most of the time, you'll just want to use solid. You won't have the kind of control over dots and dashes as you would in Adobe Illustrator. 

Technically, you can also apply borders to inline elements as well. You could use a bottom-border instead of an underline, allowing you to use a different color or make a thicker underline, by using the CSS...

```css
a {
    text-decoration: none; /* turns off the default underline style on links */
    border-bottom: 1px solid blue;
}
```

### Border radius

We can round the corners of our boxes with the `border-radius` property. You don't actually have to have a border width or style to use this, every box has a border (even if it's 0 width), and it's corners can be rounded.

```css
div {
    border-radius: 4px; /* applies to all corners */
    border-radius: 4px 5px 6px 7px; /* Top-Left, TR, BR, BL */
}
```

The shorthand property goes clockwise starting at the top left corner.

You can use this to make circles out of your boxes.

```css
div {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: rgb(56, 196, 165);
}
```

creates...

<div style="width: 100px;height: 100px;border-radius: 50px;background-color: rgb(56, 196, 165);"></div>

You can also try...

```css
div {
    border-radius: 50%;
}
```

But either way, the item would need to be a square to create a perfect circle.

## Box-sizing

Now we've got to get into something a little convoluted, so we'll step through this carefully.



## Overflow

## Resources