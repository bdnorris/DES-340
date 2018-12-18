<!-- # Styling with color

> With our newer layout tags in place, we can start moving on from just
plain old typography. We can start adding more color and backgrounds
to our web pages. We’re going to start with two more CSS rules that we
can use to style our pages. Observant readers may have noticed that we
used a rule called color earlier, where we styled up a `<a>` link tag and
make the text color red:

```css
a {
color: red;
}
```

> There are several text color values that we can use. Most of them are
just plain old color names like “yellow”, “white”, “black”, etc. But what if
the color we want isn’t just plain red — what if it’s a pale reddy-orange
color? We can’t just put that into our style sheet. We need to add in a
very particular color. To do this, we use a hex value.

# Hex values

> A hex value is short for a hexadecimal value. Sounds nerdy, right?
In everyday terms, we can count from 1 to 9 and after that we don’t
have any more single numbers left to use. The single numbers we can use are 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. There are 10 of them — this is called a decimal system (decem is Latin for 10).

> By contrast, computers count from 1 to 9, then have more single numbers because they can use a, b, c, d, e and f as well. The number after 9 in computer counting is actually a. Weird, right? And what’s after that? No surprise it’s “b”.

> So the computer number system is 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e and f.
What’s after “f”, the last “number” computers can count with? “10”. What’s after “19”? Say hello to “1a”! What’s after “1f”? “20”.
So the human version of 10 and the computer version of 10 are two different numbers — humans would have counted from 1 to 17. So the number system a computer uses isn’t “decimal” but “hexadecimal” (“hexa” + “deca” are Ancient Greek for 6 and 10).
As computers count in these hexadecimal numbers, our colors are represented by six of these hexadecimal numbers, which looks like:

```
#ff0099
```

The first character, the “hash”, is just to denote that this is a color. The next six are what the color is.

> The first two (“ff”) represent the red channel, the second two (“00”) represent the green channel, and the last two (“99”) represent the blue channel. Most computer screens use red, green and blue light to
mix colors together.

> The minimum value for each one is “00” (fully off) and the maximum
value is “ff” (fully on as “f” is the top number). The mid point is around
“88” as 8 is halfway between “00” and “ff” — not 0 and 9.
It might be hard to know what exact color this represents, but we can
take a rough guess. If for the #ff0099 value, we can tell that the red is
fully on, the green is fully off and the blue is about half way on,
we’d know it’d be roughly two parts red and one part blue, so a pinky
purple color.

> There are a lot of online resources for picking colors (see the tresources
section at the back), but one I particularly like can be found here:
https://color.hailpixel.com


Transparency with
opacity and rgba
colors
In some web designs we might want to make parts of our page slightly
transparent. There are two ways to do this. The first is using a CSS rule
called opacity. By default, every tag is full opacity (“1”). We can hide tags
by making them have no opacity (“0”), or we can pick somewhere in
between.
Let’s say we want to make an <h1> tag 30 percent opaque (or mostly
see-through), we can add:
h1 {
opacity: 0.3;
}
We can even make it so we can have it fade back into full opacity
on hover:
h1 {
opacity: 0.3;
transition: opacity 0.5s;
}

h1:hover {
opacity: 1;
}
In this example we’ve even added a transition so we can fade it over half a second.
The opacity CSS rule will make the whole tag transparent, including the background and the content inside it. However, sometimes we might just want the background to be see-through, or the text to be slightly transparent.
To do this we need to talk about rgba colors.

rgba colors
Usually in our colors we use hex values, as discussed previously. We start with a hash, then six numbers or letters.
header {
background-color: #ff0099;
}
Forgetting the hash tag, the first two letters denote red, the next two denote green and the last two denote blue, but there’s no way to add a transparency effect in here.

However we can use a different style of color called rgba, which stands
for red, green, blue and alpha.
This works slightly differently to hex values. Instead of writing in
computer counting, we can add human/Arabic numbers from 0 to 255
(or “ff” in computer speak) to determine each separate color. We can
then add a value from 0 to 1 for how much opacity the color should
have.
We can convert the color above and make it half see-through:
header {
background-color: rgba(255, 0, 153, 0.5);
}
It’s not something I can easily convert just by looking at the hex value, I
generally use an online tool, Photoshop or Sketch to work out what the
hex value’s colors are.

Remember this will just change the background’s opacity, not the
content. We can use a hover state to transition between two rgba colors
in the same way:

header {
background-color: rgba(255, 0, 153, 0.5);
transition: background-color 0.5s;
}
header:hover {
background-color: rgba(255, 0, 153, 1);
}

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
