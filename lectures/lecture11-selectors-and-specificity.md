# Specificity in CSS

> Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors.

&mdash; [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

Understanding specificity in CSS is another key to working with this language and writing maintainable, understandable and sane code. When your layouts get complicated, and your stylesheets get large, specificity will get harder and harder.

We've talked previously about how certain CSS rules that conflict will overwrite other rules. The ways we've looked already have to do with the cascade.

## Lets review "The Cascade"

### Where the CSS is

Inline CSS is the most specific.

```html
<div style="font-weight:bold;">
    Inline CSS is the most specific
</div>
```

A style tag in the HTML document is second.

```html
<style>
    .my-class {
        /* A style tag in the HTML document is second */
    }
</style>
```
A linked stylesheet is last, but prefered.

```html
<link href="a-linked-style-sheet-is-last.css" rel="stylesheet">
```

### Order

We've also discussed how order matters. When rules conflict, CSS that is further down in the document, or loaded last in an external sheet, will overwrite previous styles.

```html
<link href="style.css" rel="stylesheet">
<link href="overwrite.css" rel="stylesheet">
```

or

```css
p {
    color: red;
}

p {
    color: blue; /* blue wins */
}
```

## Selector specificity

The other major way CSS is specific is the selctors themselves. Majorly powerful, and a major pain.

Take the following Code.

```html
<div class="my-class second-class" id="my-id">
    Lorem
</div>
```

```css
#my-id {
    color: pink;
}

div.my-class.second-class {
    color: purple;
}

div.my-class {
    color: orange;
}

.my-class {
    color: blue;
}

div {
    color: red;
}
```

I purposfully reversed the order here to show that order doesn't matter as much as specificity in the selector. 

The id selector at the top is most specific. Id selectors trump everything.

The best way to understand this, is to play with this [specificity calculator](https://specificity.keegan.st/). 

As you'll see, you can think of the "specificty score" of a selector as a three digit number. Ids are in the 100 spot, classes, attributes and pseudo classes are in the 10 spot, elements and psuedo elements (we haven't discussed those yet) are in the 1 spot.

```css
div {} /* 1 */
.my-class /* 10 */
div.my-class {} /* 11 */
div#my-id {} /* 101 */
div#my-id > p {} /* 102 */
```

So, if you used an id, you would need to add 100 classes to overwrite it.

One way to avoid this with IDs is to use an attribute selector instead.

```css
[id="my-id"] {} /* 10 */
```

10 is less than 100. 

Sometimes when building a website, you might build a too specific style. It's best to avoid, and I'll give you some tips to help, but everyone makes mistakes, and this is a common problem. 

Other times, you'll be working on something where you only have access to part of the styles. You might be working on a theme for some kind of web based product, and it lets you add your own stylesheet, but not change the original. 

In these cases you can use `!important`, it makes your rule the most important, no matter what.

```css
div {
    color: red !important;
}
```

But be careful, now you're stuck if you need to ever overwrite this style.

## Working with specificity

You do not need to do this math in your head everytime you use a selector. It's more about developing good selector habits. Soon they'll be second nature and your mistakes will be minimal.

Remember, classes are meant to be re-usable, so getting more specific with your selectors, _intentionally_ will be the key to writing **general** styles first, then getting more specific **on purpose** to keep your code from having too much repetition, making it hard to maintain.

We'll talk about strategies to manage this stuff in a future lecture. For now, just avoid Ids and you'll probably be fine.

We'll also soon talk about how to use your browser's developer tools to identify when you have specificity problems.

## Resources

[Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
[CSS Specificity: Things You Should Know](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)