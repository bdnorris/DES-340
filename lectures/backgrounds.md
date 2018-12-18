<!-- Background colors
For changing the background color of the tags, you need to use a new
rule called background-color:
footer {
background-color: #998899;
}
Chapter 5 99
This will give the footer a background color of mid grey.
Remember you can mix and match your text and background colors:
section {
background-color: #111118;
color: #ffffff;
}
This gives our section tags a background color of near black and a text
color of white.

Background images
Some of the time when designing your website, you might not want
to use a solid background color. The first thing you need to do is make
sure you have some images in your site that you can pull into the site.
Remember you can only use particular image types that browsers can
use, such as “.jpg”, “.gif”, “.png” and “.svg” files.
To add an image saved as “sally.jpg” into the background of a tag:
header {
background-image: url(sally.jpg);
}
Notice the “url(...)” around the file name. This is so the browser knows
to pull it from a URL into the page. There are other types of background
images we can add, such as linear gradients, that we’ll come to later.

Background-repeat
By default, if your image is smaller than the tag of which it’s the
background, the image will tile. You can control the way it repeats, or
turn off the tiling altogether.
To turn off tiling:
Chapter 5 101
header {
background-repeat: no-repeat;
}
To only repeat horizontally across the page:
header {
background-repeat: repeat-x;
}
It’s repeat “x” because the “x” direction in mathematics is horizontal (or
from left to right).
To only repeat vertically down the page:
header {
background-repeat: repeat-y;
}
If “x” is across the page, the “y” direction in mathematics is vertical (or
from top to bottom).
If you ever want to put the tiling effect back on:
header {
background-repeat: repeat;
}

Background-position
Now you’ve added your image and controlled how it tiles, you
want to control where it’s placed within the tag. To do this you use
“background-position”.
This takes two values, the first being the “x” direction (across the page)
and the second being the “y” direction (down the page).
If you want to move it 20px across the page, then 40px down the page
you can do:
header {
background-position: 20px 40px;
}
There are some cheats if you want to do things like place it in the top,
left, bottom, right or center of the tag. For instance, if you want to place
it on the right hand side in the center you can add in:
header {
background-position: right center;
}
If you want to place it right in the middle of the tag, you can put it in
the center horizontally and in the center vertically:
header {
background-position: center center;
}
Chapter 5 103
You can also use percentages, if you want to be specific. For instance
you can move it 80 percent across and 20 percent down by adding in:
header {
background-position: 80% 20%;
}
Background-size
You can also control how the background image is sized by using the
background-size rule. This also takes two values — the horizontal size
(“x”) then the vertical size (“y”) — just like with background-position:
header {
background-size: 200px 100px;
}
This will make your background image 200px across by 100px down.
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
stop any blurring.
Stretch the background
There are some special values in the background-size rule we can use
if we don’t know the specific size the image is meant to be.
Chapter 5 105
Sometimes we might want to stretch our background image to
completely fill the tag’s background at any size, as we might not know
how wide the header is or how high the section tag.
If we’re not too precious about the edges of the image, we might want
to crop some of the background image. To do this, we add in:
header {
background-size: cover;
}
If we do want to keep the whole image with no cropping, but resize to
fit, we can add in:
header {
background-size: contain;
}
Both “cover” and “contain” are special values for background-size
that we can use to great effect.
Parallax effect by fixing the background
to the browser
Usually when we place a background image, it stays with the tag when
we scroll up and down the page.
106 Learn to Code Now
In some circumstances, we might want to attach the background image
to the browser itself, rather than the tag. Why? Sometimes we might
want to add in a “wipe” effect on the background. Some designers call
this the parallax effect. It’s a pretty basic version of parallax but it can
be highly effective.
To add it in we use a new rule called “background-attachment” as
we’re changing where the background is attached (the browser rather
than the tag):
header {
background-attachment: fixed;
}
Combining them all together
We can combine all the background rules together to get some
decent effects:
header {
background-color: #9900ff;
background-image: url(field.jpg);
background-repeat: no-repeat;
background-position: center top;
background-size: cover;
background-attachment: fixed;
}
Chapter 5 107
This will give us a background which is the image “field.jpg”, not
repeated, positioned in the top center, stretched and fixed to the
browser scroll.
Background gradients
One last thing we can add into our backgrounds is a gradient. Weirdly
this doesn’t use “background-color”, as that can only take solid colors.
We have to use “background-image” to do this. Bit of a strange one, but
hey, that’s what we were given, so let’s do it.
To keep this simple, we’re going to use the default colors like “red”
and “yellow” rather than hex values. We can use hex values in our code
though.
Let’s say we want to add a gradient of yellow to red that goes across the
page, we can add it in as:
header {
background-image: linear-gradient(90deg, yellow, red);
}
Bit more complicated than usual, but it should read fairly well. We’re
adding a background image that isn’t a URL as usual, but a linear
gradient that goes at a 90 degree (or “90deg”) angle from left to right,
starting at yellow and ending at red.
108 Learn to Code Now
The commonly used degrees for web design are:
0deg from top to bottom
90deg from left to right
180deg from bottom to top
270deg from right to left
We can add multiple colors into our gradient. Let’s say we want to have
a gradient that starts at the top as red, goes to pink, then goes to white
at the bottom:
header {
background-image: linear-gradient(0deg, red, pink,
white);
}
Remember we can be more particular with our colors by using hex
values instead of default colors:
header {
background-image: linear-gradient(30deg, #000000,
#666666);
} -->
