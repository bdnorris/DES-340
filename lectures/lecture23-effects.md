# CSS Effects

## Shadows

There are two kinds of shadows we can use. One for text, and the other for elements (boxes).

### Text shadows

You can define shadows on your text by using the `text-shadow` property, and giving it four values. 

```css
p { 
  text-shadow: 1px 1px 1px #000;
}
```

The first value is the x, or horizontal offset, the second is the y, or vertical offset. Positive values push the shadow right, then down respectively. You can specify 0s here for no offset, or negative numbers to move left and up. 

The third value is the blur. A higher number here results in a more diffuse shadow.

The last value is the color. It's actually pretty useful to use RGBA or HSLA values here, so you can have transparent shadows.

```css
p { 
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4); 
}
```

You can stack shadows with commas, leading to some more elaborate effects. Obviously, there's a lot of good reasons to not use shadows with your type, and I would rarely recommend them for body fonts. But, they can be good to add to headers and larger text to achieve certain effects, or if you're not sure what kind of background the text might appear on.

Keep in mind, you can use lighter colors too, achieving more of a glow effect.

## Resources

https://css-tricks.com/almanac/properties/t/text-shadow/



<!--


Outer drop shadow
The other drop shadow effect is the “box-shadow” — instead of just being on the text, it’s on the overall tag itself. It has pretty much the same values, “x”, “y”, blur and color, just this time it’s a different rule, the “box-shadow” rule:
h1 {
box-shadow: 0 5px 2px rgba(0, 0, 0, 0.5);
}
As before, we’re having a shadow that goes straight down by 5px with a 2px blur and a 50 percent transparent black color.

Glow effect
We can use box-shadow to give a tag a glow effect too. All we’d need
to do is not move the shadow down or to the left, then give it a large
blur. In this example, we’ll blur by 15px with a 40 percent transparent
white color:
header {
box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

Inner shadows
Most shadows go around the edge of the tag itself, but we can add
one more value to make the box shadow go from the outer edge to
the inner edge. All we do is add the word “inner” to the start of our
box-shadow rule.
header {
box-shadow: inner 0 0 15px rgba(255, 255, 255, 0.4);
}


 -->
<!--

Filters
Recently Adobe started added some of their own code to how CSS works to let us use some of the powerful Photoshop filters in our browsers. Because they are so new they may not work in some older browsers. For 90 percent of users they will work fine, but for those using older computers it may look as if these filters were never there. So for the moment, use sparingly until everyone else catches up (or buys new laptops).
We’re going to add a new rule called filter to our CSS. The first one lets us blur tags. Blur tags have a pixel unit, the larger the number, the more blur we have:
img {
filter: blur(2px);
}
We can also fade our image to gray by increasing another filter
called grayscale:

img {
filter: grayscale(100%);
}
The default for this is 0% grayscale (so normal), but we can fade to gray by increasing the percentage to 100%.

Instead of gray, we could fade our image out to an antique sepia effect
by using a similar filter:
img {
filter: sepia(50%);
}
Similar to grayscale, we can increase the saturation of the image too:
img {
filter: saturation(200%);
}
100% is the default saturation and anything less than 100% will reduce
the saturation in the same way that grayscale works.
We can also change the contrast of the image in a similar way
to saturation:

img {
filter: contrast(500%);
}
This will increase the contrast by five times the original. We can also
change the brightness of the image:
img {
filter: brightness(200%);
}

We can invert the color of the tag too by adding an invert filter:
img {
filter: invert(100%);
}
We can also combine filters:
img {
filter: contrast(200%) grayscale(100%) blur(3px);
}
Where filters can come in really useful is in hover effects, for instance if we wanted to fade an image from gray into full color:
img {
filter: grayscale(100%);
transition: filter 1s;
}

img:hover {
filter: grayscale(0);
}
 -->