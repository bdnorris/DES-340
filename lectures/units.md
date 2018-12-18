# CSS Units

## Pixels

## Percentages

## em Units

> An em unit is a size relative to the current font size of that tag. By default, the font size would 16px, so we could use em units instead of px if we’re unsure what pixel size to use but want to make it relative sized:

This is similar to Em spaces and Em dashes that you are already familiar with.

```css
header {
    font-size: 2em;
}
```

> By default, that would be twice 16px (32px). However, if we have something inside the header and use em units, it would be now based on 32px sizes:

```css
header h1 {
    font-size: 1.5em;
}
```


> The pixel size for this `<h1>` tag would be 1.5 times 32px (not 16px), so 48px large in pixel units.

Tough at first, so it will be easier to avoid them while you're learning. However, they can be very powerful.

The best example, would be a standard button. Imagine setting a button's font-size to 2em. Then, you set the margin and padding in Em units as well. If you wanted to make a larger or smaller version, you could just change the fonts size of the button, and all the padding and margins will scale accordingly because Em units are relative to their parents. 

## rem Units

> Similar to em units, rem units are based on the current font size of the page (not the current tag). In the last example, the header size would be
32px if we had “2em” or “2rem”, but the `<h1>` tag would be 24px if we
were to use “1.5rem” instead of “1.5em”

## vw, vh, vmin and vmax
We can base our sizes on the “viewport” — essentially the part of our
page that the browser can currently see. If our unit is “1vw”, this is 1
percent of the viewport width, so if our browser is 1200px across, 1vw
is 12px. “vh” is 1 percentage of the viewport height — so if we can only
see 800px of our page in the browser, 1vh is 8px.
Sometimes we might not know how wide or tall our user’s browsers
are, so using “vw” and “vh” units can work well. For instance, having a
section at exactly the height of the browser could be useful for an intro
to the page:

```css
section {
    height: 100vh;
}
```

> The “vmin” units look at the sizes of “vh” and “vw” and see which one of
the two is the smallest. The “vmax” unit does the same, except looking
for the larger of “vh” and “vw”.

## Degrees

> For some CSS rules, we might use angles, such as in background gradients or rotations. To use degrees we use “deg”. For instance, “5deg” is rotate from the top by 5 degrees clockwise. We can use the opposite direction by making it negative, i.e. “-5deg”.

## Multipliers

> Some CSS rules can also take multiplier numbers, such as line heights and scale. This would be just a single number, which might include decimal places. For instance:

```css
body {
    line-height: 1.5;
}
```

> This means make the line height (or leading), 1.5 times the current
font size.

## Zero is zero

> Some students ask, what’s the difference between using “0” and “0px”
or “0em”. The answer is nothing — no pun intended — zero is zero no
matter what unit you use!

## New Grid Unit "fr"

