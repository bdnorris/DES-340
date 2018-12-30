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