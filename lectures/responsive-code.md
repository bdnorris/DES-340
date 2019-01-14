# Coding for responsive design and Media Queries

Talked about the design part, how do you code it?

This is a huge subject. 

Classic articles from 2010-11
https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/
https://alistapart.com/article/responsive-web-design

Modern guide from Google
https://developers.google.com/web/fundamentals/design-and-ui/responsive/

Design and code intersect
Past everything was fixed width
Solution, keep everything flexible
Code provides tools and techniques

Media queries are the heart
Breakpoints
major ones often for common devices
minor ones where you need them
Min-width and Max-width are the bookends
Percentage and vh VW are the units

clear floats to stack
or let things wrap
showing and hiding with display none and media queries

Work on site: Browser tools for responsive
Navigation
Home Page
Assignment 2 -> Images


Fluid images
	crop, or cover or flexible
	width: 100%
	height: auto
	put in a wrapper, wrapper determines width
	deliver images at max size

Maybe try Bootstrap and Foundation
	
Coding Responsively
Relative, Viewport, and Percentage Units
Relative (%, em, rem) / Viewport (vw, vh, vmin, vmax)
Min-widths, Max-widths, Min-height, Max-height
Media Queries for your Breakpoints


> What we’ll add to our CSS is a new concept called “media queries”.
Essentially, we’ll be turning on or off particular CSS styles depending
on the size of the browser itself.

> Very early in this guide, we talked about the idea that we can put
HTML tags inside other tags — Pimp my Ride style. We can do
something similar in CSS. We can say “if the browser is smaller than
600px then do these styles ... if not, ignore”.

> Let’s show an example where we have the whole site having a font size
of 18px. On a smaller browser, the font size might look too big, so we
want to reduce it to 14px if the browser is smaller than 600px wide:

```css
body {
	font-size: 18px;
}
@media (max-width: 600px) {
	body {
		font-size: 14px;
	}
}
```

> Notice how we have an @ (or ampersand) with the word “media”
straight after it. This is telling CSS to do a browser check. In our
rounded brackets, our check is to ask: “Is the browser 600px or less?”.
If it is, then add the styles. We can put multiple styles within a media
query too:

```css
body {
font-size: 18px;
}
h1 {
font-size: 32px;
}
@media (max-width: 600px) {
body {
font-size: 14px;
}
h1 {
font-size: 21px;
}
}
```

>You can also have multiple media queries in the same style sheet. Let’s say we want to have a mid point below 900px and above 600px where the font size should be 16px:

```css
body {
font-size: 18px;
}
@media (max-width: 900px) {
body {
font-size: 16px;
}
}
@media (max-width: 600px) {
body {
font-size: 14px;
}
}
```

> The order of the media queries matters, as the second one overwrites
the first. If they were the other way around, the font size would 16px if
the browser was less than 900px and less than 600px too.

Media queries for layouts
> Media queries are heavily used to turn multi-column layouts into
single-column layouts in responsive design. Let’s take a two-column
desktop layout in HTML:

<!-- ```css
<section>
<div class="main">
Here is the main content
</div>
<div class="side">
Here is a sidebar
</div>
</section>
``` -->

<!-- In your desktop version of your CSS, you’d have something like:
section {
overflow: hidden;
width: 920px;
margin: 0 auto 0 auto;
}
div.main {
width: 600px;
float: left;
}

div.side {
width: 300px;
float: right;
} -->


<!-- This will make your background image 200px across by 100px down.
Blurry backgrounds and retina screens
If you’re on a retina screen, for instance on a new iPhone or a new
MacBook, you may notice your background images looking blurry
by default.
104 Learn to Code Now
Non-retina screens have three sub-pixels per pixel (one red, one green
and one blue sub-pixel, remember the hex colors!). On retina screens,
to make the screen look crisper, they have 12 sub-pixels per pixel (four
red, four green and four blue).
With images, each pixel always has three sub-pixels, so when you view
a “normal” image on a retina screen, it’ll look a bit blurry. To fix this
we need to double the size of the image to give it more definition on
those screens.
One good technique to do this is, if we’re making an image that would
fill 300px by 200px on a retina screen, we export the image from
Photoshop or Sketch as twice the size (600px by 400px), then in our
CSS, we make it half the size again to give it a higher density of pixels:
header {
background-size: 300px 200px;
}
Exporting the image at double size and halving the size in CSS will
stop any blurring. -->
