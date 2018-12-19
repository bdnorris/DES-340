<!-- Widths and heights
So far, we’ve been able to change the colors, backgrounds and typography of our web pages. In the next few chapters, we’ll move on to the layout of web pages. As we’re talking about how our site looks, rather than the content or the actions, we’ll be doing all the layout in our style sheets.
One of the easier things to pick up in terms of layouts is how to size things. We can add widths and heights to any block tag (<header>, <div> and <p> are examples of block tags) but not inline tags (<a>, <b> and <u> examples of inline tags). We’ll talk later in the book about how to give inline tags width and height, but for now, we’ll concentrate on block tags.
To add width to any block tag, we can add in:
p {
width: 500px;
}
This

style will make any paragraph tag 500 pixels wide. We can add different units into this, not just pixel units. For example, if we wanted our paragraph to be half its current width:
p {
width: 50%;
}

Unsurprisingly to add heights, we would add:
header {
height: 100px;
}
For mobile-friendly designs, we can also add in a minimum and
maximum width to each:
header {
min-width: 500px;
max-width: 1000px;
}

And we can do the same for heights too:
header {
min-height: 300px;
}
footer {
max-height: 500px;
}
We’ll talk more about mobile-friendly web design later in the guide,
where we’ll use some of these rules.

Margins and paddings
A lot of web design in our pages will use spacing — the idea that there
will be some distance between different tags, or there’s some buffer
around the tag.
If we want to move tags away from each other, we’ll use a new CSS rule
called “margin”.
If we want to add a buffer around the tag, we’ll use a new CSS rule
called “padding”.

Margins
Let’s say we want to add a 20 pixel space at the top and bottom of all
our paragraphs so our content is easier to read. We want to push other
tags away from each individual paragraph tag:

<p>
Going freelance means...
</p>
<p>
The first step is...
</p>
<p>
I’m not a fan...
</p>
For our users, we want there to be a gap between the first <p> tag and the second <p> tag, then a gap between the second <p> tag and the third <p> tag. If we add a fourth <p> tag later, we want there to be a gap too.

What we need to do is add a margin. In CSS, our margin takes four values: top, right, bottom, left. We start at the top and go clockwise around the tag. Some people remember the order as “TRouBLe” too (the capitals TRBL for the directions).
For our paragraphs, we want 20 pixels at the top and 20 pixels at the bottom. We’re not too fussed about the left or right having a margin so we can make them have zero margin:
p {
margin: 20px 0 20px 0;
}

We have four values in our margin rule, all separated by spaces.
136 Learn to Code Now
If we decided that in fact we did want the left and the right sides to
have the same margin as the top and bottom, we’d then have:
p {
margin: 20px 20px 20px 20px;
}
This can be shortened to just:

p {
margin: 20px;
}
Having one value means all sides will have the same margin.
One thing to remember with margins is that the gap between two tags
is an overlap not an addition. For example, if we have two paragraphs,
each with 20 pixels margin, the gap between them is 20 pixels, not
40 pixels.
However if we have a header with a 30 pixel margin next to a paragraph
with just a 20 pixel margin, the gap between would be 30 pixels, as
whichever is the larger will push further.

Paddings
Margins push other tags further away from each other, but some of the time you might not want this to happen, but instead increase the size of the tag:
header {
background-color: red;
}
In our style sheet, we have a <header> tag with the background color red. The background will fill the space that the content fits into — it will stretch across the width of the tag and fill vertically, depending on the amount of content inside the tag. If we want to add a buffer around the content of the tag to make the red background color extend, we can use the padding rule.
This rule uses the same format as the margin rule — four values to go clockwise from the top to denote the top, right, bottom then left (remember “TRouBLe”):
header {
background-color: red;
padding: 50px 100px 50px 100px;
}
In this rule, we are now making the background color have a buffer around the edge of any header tags.

Again we can use just one value if we’re using the same padding around every side:
header {
background-color: red;
padding: 50px;
}
I personally prefer to use all four values for both margins and paddings when I’m making web sites. A lot of web design is trial and error, so I’m constantly tweaking the layout, and it makes sense for me to tweak with four values rather than have to switch between four and one.

Combining margins and paddings
Margins and paddings aren’t a battle of “this or that”, you can use them both together in a lot of circumstances:
<p>
Going freelance means...
</p>
<p class="highlight">
The first step is...
</p>

<p>
I’m not a fan...
</p>
I’ve taken the same HTML as before and added a class of “highlight” to
the middle paragraph.
I want all my paragraphs to have a gap between them — 20 pixels on
the top and bottom, 0 on the left and right.
With the middle paragraph, I want this to increase the gap between the
other two, then have a yellow background with a buffer around it:
p {
margin: 20px 0 20px 0;
}

p.highlight {
margin: 30px 0 30px 0;
padding: 40px 40px 40px 40px;
background-color: yellow;
}
By using a class attribute, I’ve increased the margin to 30 pixels at the
top and the bottom on the highlight <p> tags, then added a 40 pixel
buffer around the whole tag with a yellow background on it.

For tags without a background, the visual difference between margin
and paddings will be pretty much the same, either you’re extending a
see-through background or you’re pushing away by that distance. In the next section we will talk about borders which will make a difference to
which you pick.

Automatic Margins
Margins combined with widths are good for pushing block tags like
<header> and <div> into the middle of other tags or the whole page,
but sometimes we may not know how much margin we need.
For example, if we want the whole page to have a set width and to be
in the center of the browser, we won’t know how much margin the
whole page needs on the left and on the right. A user’s browser could
be 900 pixels or 1900 pixels wide, so how do we tell the browser to add
a margin that we don’t know the size of? We use the word “auto”.
Let’s say we want the page to be 800 pixels wide, we can move it into
the middle by combining the width and the left and right margins:
body {
width: 800px;
margin: 0 auto 0 auto;
}

Unfortunately, “auto” only works for the left and right margin and it’s
a bit trickier to move content vertically into the middle of page — we’ll
talk more about that later.

Borders
To add borders to our tags, we can add a border rule in CSS. A border takes three values: a width, a border style and a color.
The width of the border is similar to the pixel values that we’ve been using so far. A thin border would be 1px, whereas a thicker border could be 10px.
The border styles we can use are dotted, dashed and solid. Almost all the time we’ll be using a solid one.
To add a thin solid white border to our <header> tag, we add:
header {
border: 1px solid white;
}
If we want to add a thicker solid bright yellow border to our <p> tags, we can add:

p {
border: 10px solid #fff182;
}

Specifying borders
You may not want borders around every part of the tag. You may
just want a border on the left or on the bottom. You can be more
specific by using the border-top, border-right, border-bottom and
border-left rules:
p {
border-bottom: 1px solid #eeeeee;
}
header {
border-left: 5px solid #ff4141;
}
footer {
border-right: 10px solid white;
border-top: 1px solid #9900ff;
}

In our example, we’re giving our <p> tags a thin light grey bottom
border, our <header> tags a thicker solid red left border, then our
<footer> tags a thick white right border and a thin purple top border.

Using borders for underlined links
One of the more common ways to use borders is for underlines on links. Usually a link’s underline is a thin 1px border which is the same color as the text. By turning off the default underline (using the text-decoration rule) and replacing it with a border on the bottom, we can have a lot more control over how the underline looks.
We can even use transitions to make the border fade between two colors on hover:

a {
text-decoration: none;
border-bottom: 2px solid white;
transition: border-bottom 0.5s;
}
a:hover {
border-bottom: 2px solid red;
}
Sometimes we want to fade in a border from nothing on hover. We would want to transition between a border with no color but a width, to a border with color and the same width:

a {
text-decoration: none;
border-bottom: 2px solid transparent;
transition: border-bottom: 0.5s;
}
a:hover {
border-bottom: 2px solid red;
}
The box model — borders, paddings and
margins

If we combine borders, paddings and margins, the border will go
around the buffer zone of the padding but not change with the size of
the margin.
If we start from the very outer edge of the tag, we start by applying the
margin, then add the border, apply a background if there is one, then
add in the padding’s buffer zone, and then we have our actual content
inside that.
The technical name for this is the box model — it’s how the boxes (or
tags) of HTML are styled up and in what order.

Rounded corners with border radius
Most of the web design we’ve done so far has been in rectangles and squares, but sometimes we want to add rounded rectangles and circles.
Let’s say we want to make our <header> tag have slightly rounded corners, we can use the CSS rule border-radius to round the corners of our tag. Most of the time we would want our tag to have all rounded corners the same, so all we need to do is add one size value:
header {
background-color: red;
border-radius: 10px;
}
In rarer cases, we might want to have all four corners rounded differently. Similarly to paddings and margins, we can add in four values. These values start in the top left corner and go around clockwise to the top right, bottom right then bottom left:
header {
background-color: red;
border-radius: 10px 0 0 20px;
}

This example will give a rounded corner to just the top left (10px) and the bottom left (20px).

Making a circle
Let’s say we have a <div> tag and we give it a set height of 100px and
a width of 100px. Without any border radius, we just have a square.
When we start increasing our radius, the corners get further and
further rounded. Once we hit 50px, half the height and half the width,
our corners are so rounded that the whole tag will look circular:
div {
width: 100px;
height: 100px;
background-color: red;
border-radius: 50px;
}
If we try an even higher value, there’s no more corner to round, so it
will still look like a 50px border radius, even if it says 200px.

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
