<!--





Drop shadows
For both text and tags, we can add drop shadows to apply some subtle
(or not so subtle) effects to our designs. There are two types of drop
shadows we can use, one for the text and one for the tag itself.

Text drop shadows
The CSS rule for text shadows takes four values, the “x” direction, the
“y” direction, the “blur”, then the color of the shadow.
The “x” direction is across the page. If you want to move the shadow to
the right of the tag, you can use a positive number of pixels (e.g. 5px). To
keep the same, just use “0”. If you want to move the shadow to the left,
you can use negative pixels (e.g. -5px). Same thing for the “y” direction,
5px would be further down the page, -5px would be back up the page, 0
would be no difference up or down.
The blur is also a pixel value referring to how far the drop shadow
should be blurred over. If it’s 0, there’s no blur to the shadow and
it looks sharp. The bigger the blur value, the more area the shadow
spreads over and the lighter it will be.
The last is a color value. This can be a hex or rgba value. In fact, rgba
colors are great for drop shadows as they can give them a transparency
that hex values can’t.

Let’s say we want to give our <h1> tag a 50 percent transparent black text shadow that is slightly blurred, straight down and to the right. We would add:
h1 {
text-shadow: 0 5px 2px rgba(0, 0, 0, 0.5);
}
We’re not putting any left value to make it go straight down. Then
we’re putting the value 5px downwards with a 2px blur, then giving
it a rgba color.

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

 <!-- Aligning with block elements
Unlike with “inline” and “inline-block” tags, “block” tags are a little
trickier to align. The problem is that CSS sucks at aligning things down
the page, because technically the page shouldn’t know anything about
browser size. Of course, we sometimes do want to make things look
like they know about the size of the page!
There’s no one right way to do this. You can use margins and paddings
to move tags around which works up to a point. You can use positions
to move tags too.
One way to move the tag into the middle of the page uses positions and
transforms together. We move the top left corner to the center of the
page, then move it back across and up the page with a transform: -->

<!-- section.intro {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
Just using the position absolute (or fixed) to move the tag means the top left corner is right in the middle of the page, not the center of the tag. By using transform we can shift the whole tag upwards by half its height, then across by half its width. -->
