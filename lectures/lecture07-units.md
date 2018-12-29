# CSS Units

## Absolute Units

### Pixels

Oh, boy. What should ultimately be the simplest unit, is actually a bit complicated. The good news is, we mostly just have to worry about what are called "Reference Pixels" or "CSS Pixels". I'll quote from a Smashing magazine article to explain these a bit.

[Towards a Retina Web](https://www.smashingmagazine.com/2012/08/towards-retina-web/)

#### Device Pixels (real screens)

> A **device pixel** (or physical pixel) is the tiniest physical unit in a display. Each and every pixel sets its own color and brightness as instructed by the operating system, while the imperceptible distance between these tiny dots takes care of tricking the eye into perceiving the full image.

> **Screen density** refers to the number of device pixels on a physical surface. It is often measured in pixels per inch (PPI). Apple has coined the marketing term “Retina” for its double-density displays, claiming that the human eye can no longer distinguish individual pixels on the screen from a “natural” viewing distance.

#### CSS/Reference/Device-Independent Pixels (sizing in the browser)

> A **CSS pixel** is an abstract unit used by browsers to precisely and consistently draw content on Web pages. Generically, CSS pixels are referred to as device-independent pixels (DIPs). On standard-density displays, 1 CSS pixel corresponds to 1 device pixel.

```html
<div height="200" width="300"></div>
```

> This would use 200 × 300 device pixels to be drawn on screen. On a Retina display, the same div would use 400 × 600 device pixels in order to keep the same physical size, resulting in four times more pixels, as shown in the figure below.

#### Bitmap Pixels (image)

> A **bitmap pixel** is the smallest unit of data in a raster image (PNG, JPG, GIF, etc). Each pixel contains information on how it is to be displayed, including its position in the image’s coordinate system and its color. Some image formats can store additional per-pixel data, such as opacity (which is the alpha channel).

> Beside its raster resolution, an image on the Web has an abstract size, defined in CSS pixels. The browser squeezes or stretches the image based on its CSS height or width during the rendering process.

> When a raster image is displayed at full size on a standard-density display, 1 bitmap pixel corresponds to 1 device pixel, resulting in a full-fidelity representation. Because a bitmap pixel can’t be further divided, it gets multiplied by four on Retina displays to preserve the same physical size of the image, losing detail along the way.

#### Sorry for that

...but the above will become very important when we start talking about retina graphics later. For now, we can define pixels in CSS very easily by using the 'px' suffix.

```css
.my-div {
    width: 200px;
}
```

## Relative Units

<!-- What is a relative unit?
A relative unit gets sizing from something else. In the specification the relative length units are defined as em, ex, ch and rem. These are font-relative lengths. The specification also defines a % value, which is always relative to another value. Using relative values means that things can scale up and down according to some other value. -->

### Percentages

## em Units

<!-- A container directly inside the viewport with a width of 90% will always be 90% of the available width - whether I am on a phone or high resolution display.

If I have another container inside that first container with a width of 50%, it takes 50% of the width of the parent element and not the viewport. -->

<!-- > An em unit is a size relative to the current font size of that tag. By default, the font size would 16px, so we could use em units instead of px if we’re unsure what pixel size to use but want to make it relative sized:-->

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

<!-- The font relative units em, ex, ch and rem
The first of these units are most of interest when it comes to the typography in your designs. The rem and em units however, while referring to font sizes, can be very useful in creating flexible, scalable designs.

ex
The ex unit refers to the x-height of the font. Typically the size of the letter x in that font.

ch
The ch unit refers to the width of the ‘0’ (zero) character in the font for that element.

em
Using ems as a length unit in layout, and in particular in padding and margins can help to maintain a vertical rhythm. If a user resizes their text or you decide to make font sizes larger or smaller in your stylesheet, the em length unit will scale proportionately. In this example I am using ems for the padding on the box. The padding remains in proportion as I resize the font. -->


<!-- > The pixel size for this `<h1>` tag would be 1.5 times 32px (not 16px), so 48px large in pixel units.

Tough at first, so it will be easier to avoid them while you're learning. However, they can be very powerful.

-->

The best example, would be a standard button. Imagine setting a button's font-size to 2em. Then, you set the margin and padding in Em units as well. If you wanted to make a larger or smaller version, you could just change the fonts size of the button, and all the padding and margins will scale accordingly because Em units are relative to their parents.  




<!-- Using em for the width of elements can ensure that a box containing some text increases in width as the font size increases. If I change the widths on the boxes in the example above to ems the boxes now increase in width as their font size increases. -->
<!-- 
The em size is relative to the font size on the element in question. This can make ems a little tricky to use. If elements are nested or appear in different contexts in your document you can find that text or elements sized with ems can appear much smaller or larger than you imagined. In the example below both nested boxes have the same class, setting a width of 10em. However that 10em is much wider in the second box because the parent has a larger font-size. -->

### rem Units

> Similar to em units, rem units are based on the current font size of the page (not the current tag). In the last example, the header size would be
32px if we had “2em” or “2rem”, but the `<h1>` tag would be 24px if we
were to use “1.5rem” instead of “1.5em”


<!-- rem
The rem (root em) unit is the font-size of the root element, which is usually the html element. As with em, you can use this value as a length unit and it will always remain relative to the root element. You don’t get the nesting issue as we saw with em. This makes it easier for you to set sizes relative to a font size declared on the root element, no matter what context the element is in.

If we change the previous example so that .inner has a width of 20rem the width will be the same for that element no matter what the font-size of the parent is. To change that size we adjust the font size of the html element. -->

## Viewport Percentage Units

<!-- When we describe the viewport we are talking about the visible area of the website at the current time. Viewport units are relative to the viewport. This makes them incredibly useful for sizing fonts relative to the size of the viewport the user has without needing to use media queries. -->

<!-- Viewport units can also be used for certain layout tasks, as I’ve outlined briefly here and we’ll see more use cases in the rest of the course.


### vw, vh, vmin and vmax
We can base our sizes on the “viewport” — essentially the part of our
page that the browser can currently see. If our unit is “1vw”, this is 1
percent of the viewport width, so if our browser is 1200px across, 1vw
is 12px. “vh” is 1 percentage of the viewport height — so if we can only
see 800px of our page in the browser, 1vh is 8px.
Sometimes we might not know how wide or tall our user’s browsers
are, so using “vw” and “vh” units can work well. For instance, having a
section at exactly the height of the browser could be useful for an intro
to the page: -->

<!-- vh: 1/100th of the height of the viewport
This unit makes it easy for us to make an element as tall as the viewport. For example a full screen hero image. -->


<!-- vw: 1/100th of the width of the viewport
You can use the vw unit for simple, flexible grids. The example below demonstrates two columns, one of 30vw and one of 60vw floated left and right. -->

<!-- vmin: equal to the smaller of vh or vw
A value of 10vmin would be equal to 10vh if the viewport was shorter than it is wide, and 10vw if the viewport is taller than it is wide.

vmax: equal to the larger of vh or vw
A value of 10vmax would be equal to 10vh if the viewport was taller than it is wide, and 10vw if it is shorter than it is wide. -->

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

