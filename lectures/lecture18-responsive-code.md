# Coding for responsive design and Media Queries

We've talked a lot about the design part of Responsive Web Design (RWD), but how do you code it? This is a pretty big subject, but the main key to making all of this work is the use of "media queries". Media Queries allow us to write breakpoints into our CSS. 

In the past most web design consisted of pretty much everything being set at a fixed width. Once a plethora of web-enabled devices started hitting the market  "responsive" came along as the new web development buzzword. The thing was, a lot of the tools already existed. Flexible units like percentages had been in CSS from the beginning, min-width and max-width were introduced in IE 7. Media queries were the last needed piece. Without them, our designs couldn't "respond" to the width of the viewport. They were introduced as an official standard in June 2012 and were supported all major browsers. 

## Classic articles from 2010-11

[Responsive Web Design](https://alistapart.com/article/responsive-web-design)

[Guidelines for Responsive Web Design](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

Most of the technique's listed here are pretty similar to what you would use today, with the exception being there was no Flexbox or Grid.

## Media queries

...media queiry codepen ...

Media queries are the heart of responsive coding. They're how we set our breakpoints in our code. They let you turn particular CSS styles on and off depending on the size of the viewport.

```css
body {
	font-size: 14px;
}
@media screen and (min-width: 600px) {
	body {
		font-size: 16px;
	}
}
```

Our media query is a wrapper for our CSS. It starts with the @ sign, then the word "media". "screen" means we only want these styles to apply to screens, rather than print stylesheets (when you hit the print button). 

This CSS says our default font-size is `14px`. However, if the browser viewport is at least 600px wide the base font-size should be `16px`.

There's a lot you can do with media queries other than check viewport width, but we're going to stick to that for now. Here's a few options for how you could setup your media queries.

```css
body {
	font-size: 14px;
} 
@media screen and (min-width: 768px) {
	/* medium */
	body {
		font-size: 16px;
		color: blue;
	}
}
@media screen and (min-width: 1024px) {
	/* large */
	body {
		font-size: 18px;
	}
}
```

There, we used two media queries to adjust our font size. But what about that `color` property? It would _cascade_ up to from 768px into our desktop. Our font-size will work because the large setting is **after** the medium styles, meaning it will overwrite them. If you want to limit a media query to a specific range, you'll have to use both `min-width` and `max-width` (this also means when someone hit's print, they're printing the mobile version).

You can think of min-width and max-width like the bookends of your CSS code. 

```css
body {
	font-size: 14px;
} 
@media screen and (min-width: 768px) and (max-width: 1023px) {
	/* medium */
	body {
		font-size: 16px;
		color: blue;
	}
}
@media screen and (min-width: 1024px) {
	/* large */
	body {
		font-size: 18px;
	}
}
```

Notice I didn't use `max-width: 1024px`, that would case our style sets to overlap on that one pixel width, which can be hard to notice when you make a mistake.

### Mobile-first

The order of our queries matter, styles further down our file will overwrite previous styles, if match the query.

I'm taking advantage of that and using a "mobile-first" coding approach...not to be confused with "mobile-first" design. Writing my CSS mobile first means I write my mobile styles outside my media queries, and write my medium, then large styles inside my media queries. I prefer this method, since mobile styles are usually simpler it means I'm less likely to have to write unnecessary overwrites.

## Retina Images

...image codepent ...

If you're on a "Retina" screen (Apple's branded name for pixel dense screens), you'll notice that images might look a little blurry.

> If you’re on a retina screen, for instance on a new iPhone or a new MacBook, you may notice your background images looking blurry
by default.

> Non-retina screens have three sub-pixels per pixel (one red, one green and one blue sub-pixel, remember the hex colors!). On retina screens, to make the screen look crisper, they have 12 sub-pixels per pixel (four red, four green and four blue). With images, each pixel always has three sub-pixels, so when you view a “normal” image on a retina screen, it’ll look a bit blurry. To fix this we need to double the size of the image to give it more definition on those screens.

&mdash; SuperHi

So how do you fix this. Basically, we need to export our images at twice the size we are setting them in CSS. For responsive images, this might mean twice the size of it's _largest_ size that appears in the browser.

So, if we have an image that appears in the browser at 300px &times; 200px, we'll export it out of our design program, or otherwise size it to 600px &times; 400px. Then in our CSS, we could...

```css
.my-class {
	width: 300px;
	height: 200px; /* optional */
}
	.my-class img {
		width: 100%;
		height: auto;
	}
```

This would force the image's container to be half the size of the image, making our image sharp on a Retina screen. But be careful, we still need to watch our image's size. Sometimes you have to balance quality and filesize to give an overall good experience to your user.

Remember, setting the style of the `<img>` tag here can be done globally, so images always fill their containers. In fact, height may not be necessary at all.

In the case of background images, we could do something similar. Let's say the biggest size the image will be in the browser is 2000px &times; 500px. We export an image that is 4000px &times; 1000px.

```css
.my-class {
	background-size: 2000px 500px;
	/* or */
	background-size: cover;
}
```

Explicitly setting the background size will keep the background size that size no matter what, even if it gets cropped by the container some, setting it to `cover` will make it fit the container, but either way, it will look sharp.

The importance of these techniques depend on the image. Some photographs and backgrounds may not need it. SVGs will never need it, since they're scalable by nature. You really want your graphics to look sharp, so using SVGs for icons and logos is recommended, or, double sized PNGs. 

Just remember, whatever type of screen you have, it's good to find other types of screens to view your website's on, so you can adjust and optimize. 


## Percentage and VW

... percentage and vw codepen ...


## Resources

[RWD Guide from Google](https://developers.google.com/web/fundamentals/design-and-ui/responsive/)


http://giona.net/tools/css3-mediaquery-generator/


