# Prepping, compressing and using Images on the web

## Types

There are several different file types that are valid to use in browsers. You're probably familiar with most of them, but let's look into the pros and cons of each in a little more detail.

### Jpeg

The king of photography compression is still the <abbr title="Joint Photographic Experts Group">JPEG</abbr> or the `.jpg` file. It's backward compatibility and it's variable compression make it useful not just for the web and the browser, but for file storage and transmission. 

Add a small amount of compression, and a JPEG can retain a lot of its quality and still be printed in high-resolution. Add a lot more compression and it's a great format for the web.

JPEGs work best for photos. Images with a lot of detail, blurs, gradients, etc. work well in JPG because that's what it's compression was designed for, allowing for small files that you don't even really notice were compressed.

JPEG compression works on a variable range. The higher you turn up the compression, the smaller the image, but the more likely you are to get "artifacts" that might be noticeable. Artifacts are much more visible to the naked eye around sharp and contrasty areas like text or graphics. That's why generally we use PNG for graphics and JPEG for photography.

When in doubt, use `.jpg` for photos.

### Gif

However you pronounce it, <abbr title="Graphics Interchange Format">GIF</abbr>s or `.gif` files are now primarily used for animation. There are better ways of doing animation on the web, but GIFs can still be a good choice because they're so easy to implement and work just about anywhere.

When creating an animated GIF, you're basically creating a frame-based animation file. This means it's a series of full graphics. For this reason, long or large GIFs can actually get pretty large.

There were uses for non-animated `.gif` files. They are compressed even more than `.jpg` files because they had a strictly limited color pallette. They also supported some transparency. However, those benefits have mostly been duplicated and improved by PNG files.

### Png

Where JPEG files are "lossy", meaning you actually loose data when compressed, <abbr title="Portable Network Graphics">PNG</abbr> or `.png` files are "lossless" meaning that no data is actually lost (think of a `.zip` file). They gained support much later than JPGs and GIFs and were intended to be the best of both. 

The main strength of PNGs is they allow for "alpha transparency". The transparency in GIFs was binary, a pixel was either opaque or transparent. In a PNG, any given pixel can have its own opacity, allowing for fading and partial transparency effects, making it extremely versatile.

There are two flavors of PNG: PNG-24 refers to "true color" variant. PNG-8 refers to "palette" variant, which supports only 256 colors similar to GIF, allowing for smaller files.

PNG-24s don't suffer from compression artifacts like JPGs, making them great for graphics like logos and icons. The transparency allows them to be placed on any color background. 

On the other hand, a given photograph in PNG format versus a compressed JPG might look similar to the naked eye, but the JPG will be significantly smaller.

When in doubt, use PNG for graphics.

### SVG

There are also SVG, "scalable vector graphics". With SVG, you can use vector graphics for the web. Think of it like an `eps` or `ai` file, but "uncompiled." SVG files are made of human-readable code. This means you can not only create them in Illustrator or Sketch, but you can author them too.

SVGs also have a super-power, the can actually be placed right inside your HTML as well as accessed via an `<img>` tag. This means you can actually ***style them with CSS**. For this reason, they're great for icons, since you can manipulate their colors and other properties through CSS. This also makes them able to be **animated via CSS**.

They tend to be small, especially when used for icons and small graphics. However, adding gradients or complicated patterns can quickly bloat them.

SVGs are awesome, but they're a large subject that I'm afraid we just don't have a lot of time for. But I will show you how to export and prepare a simple one.

## Exporting and compressing

Exporting techniques are going to vary widely on what software you're using and how your design is built. If you're a developer working with a designer, or a designer working with a developer, this process can be painful and involve some particular nuances I won't be able to predict. But as a developer/desiger, you, at least, have control over the entire process.

Let's cover some basics and demo using the most obvious methods from our common Adobe tools.

If you have a complex design, there is no magic way to get the design asset from a full design to a file. It's best to prepare and crop your images and graphics **before** you place them into Photoshop or Illustrator. However, I find this is not common practice. 

So there is no formula for how to get the correct graphic out of a design. It really depends on the design and what you need. But, I can show you how to **properly** save your files so they will look good and be small.

### File dimensions

Deciding how big (dimension-wise, as in the number of pixels) your image can  be can be difficult as well. In responsive design, the size of your image can change. We'll talk more about this when we talk about responsive coding, but we also want to worry about "Retina" screens. 

A good rule of thumb is to determine the maximum size your image will be in the browser, then double that for retina. So if an image flexes in size, but it's maximum size is 560px wide, I'd save it at 1120px wide. 

However, depending on the image, this could be overkill, but for most images it will be a safe way to save a high-quality image that will look great on any screen. If you compress...

### From Photoshop

From the sized image in Photoshop, choose `File > Export > Export As`

The tool that pops up has all you need to find the best file type and compression for your image. It will give you a live preview of the result.

On the left, you can change the scale. This is an easy way to reduce, but you shouldn't use this enlargement unless you are saving from a file with a smart object or vector graphics/shapes/etc.. 

Under "format" you can switch which image type you want to use and depending on the type, you will have different options. JPG will give you that variable compression dropdown to adjust the compression, showing you a live preview.

PNG will allow you to turn transparency on and off, and switch to PNG-8 if you want.

You can also change the image size right here, or crop the canvas.

You can also right-click(ctrl-click) on a layer and choose `Export As` here to export just one layer from a document.

You can do the same thing on a layer folder. As you can imagine, if you're designing in Photoshop, properly managing your layers can make exporting your images much easier.

Selecting multiple layers or folders will bring up the "Export As" tool with each layer or layer folder on the left, allowing more of a "batch" process.

There's one more cool trick in Photoshop for generating assets from layers or groups. Go to `File > Generate > Image Assets`. This is either checked on or off. Now, name a layer with a file extension, like `logo.png` and save your file. If you look in your Finder now, next to the Photoshop file you'll see ann assets folder with your file based on the layer. It will re-generate everytime you hit save.

[Export artboards, layers, and more](https://helpx.adobe.com/photoshop/using/export-artboards-layers.html)

### From Illustrator

Illustrator has a few options for exporting assets, none are very good.

I highly recommend when using Illustrator for digital design, to prep your images in Photoshop first, place them as links in Illustrator, then only using Illustrator for vector graphics, elements that will be built with CSS (buttons, borders, etc.) and type.

However, there aren't a lot of rules here, there's just what works.

You can go to `File > Export > Export As`, but this is really just for whole artboards. This is the best place for you to export your designs for presentation though.

Illustrators new export tool is the "Asset Export" panel. Find it by going to `Window > Asset Export`. Here, you can drag elements or groups of elements to the panel. You can name them, and set your parameters for exporting. Then, select or multi-select which items you want to export, and hit the "export" button in the bottom right. This will export everything all at once. Convenient if you make some changes that affect several items since they will stay up to date.

However, currently there's a flaw here, that will perhaps be fixed in a later version. If I add anything with a mask, which is common practice in Illustrator, it will try and export the entire mask, with just additional transparency. Not cool.

If this happens, you can bring the image into Photoshop and choose `Image > Trim` to trim off transparent pixels.

[Collect assets and export in batches](https://helpx.adobe.com/illustrator/using/collect-assets-export-for-screens.html)

[Asset Export should respect clipping mask](https://illustrator.uservoice.com/forums/601447-illustrator-bugs/suggestions/34968397-asset-export-should-respect-clipping-mask)

### From XD

I am a beginner in XD, the same as you. Read this article.

[Exportin Design Assets](https://helpx.adobe.com/xd/help/export-design-assets.html)

## Further compression

Please note, always use an "Export" option when you are saving from an Adobe program, not just "Save-As". However, Adobe is kind of a baby when it comes to compression. I almost never stop at what Adobe programs put out. 

Here's a list of a few applications and websites you can try further compression. They're listed in order of aggressiveness.

1. [TinyPNG (it does JPGs too)](https://tinypng.com/)
2. [Compressor.io](https://compressor.io/)
3. [ImageOptim](https://imageoptim.com/mac)

These are all free, there are others, and probably some good paid options. 99% time, I get great results from TinyPNG.

I recommend always saving your original file exports in a separate folder. TinyPNG, in particular, is very aggressive, and sometimes it will turn a PNG-24 into a PNG-8. So, you cannot assume the files that come out of these compressors could be re-opened in Photoshop and edited.

The worst case scenario is, your file doesn't look good, you can always go back and try a less aggressive approach.

## SVG preparation

SVGs can be a bit complicated, but I can give you some basic guidelines.

Number one rule of SVG is to keep them simple. Avoiding complex masks, gradients, and objects with a ton of points. Expand your shapes (Object > Expand Appearance) and outline your fonts. Both strokes and fills are valid, but you would get unexpected results if you had any complex outlines or brushes unless you expand them.

Just like a JPG or PNG, an SVG has dimensions that are based on the artboard. In SVG this is called the "viewbox". Make sure your SVG fits inside your artboard. I also recommend you make your SVG artboards even numbers, it will make it easier to calculate changes later. 

Since the artboard is so important, I actually don't recommend using Illustrator's Asset Export panel for this either. I would keep each SVG as a separate AI file, and to make an exception for what I said before, choose File > Save As and choose SVG from the filetype (not SVGZ). 

### Using SVGs

The easiest way to use an SVG, is just use the `<img>` tag and control it's sizing with CSS.

But, I would also encourage you to explore opening the SVG in a text editor, copying the code, and just pasting it into your HTML. You can assign styles and classes to the SVG code, and control it with CSS. Here's a super simple example of what that would look like...

Here's a black circle 20px &times; 20px, saved from Illustrator as an SVG:

```html
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g>
	<circle cx="10" cy="10" r="10"/>
</g>
</svg>
```

Right away, if we're going to include this directly in our HTML, we can get rid of the doctype declaration and the Adobe Illustrator comment.

```html
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g>
	<circle cx="10" cy="10" r="10"/>
</g>
</svg>
```

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g>
	<circle cx="10" cy="10" r="10"/>
</g>
</svg>

So, as you can see, this looks a bit like HTML. It's made up of tags. The surrounding `<svg>` tag has attributes related to the document. The viewBox attribute sets the size of the "artboard" and all of the other numbers in the document are in reference to that.

Inside that is a `<g>` tag, just standing for "group". Inside that is the `<circle>` element. There are several different shape elements available with SVG, including: ‘circle’, ‘ellipse’, ‘line’, ‘path’, ‘polygon’, ‘polyline’ and ‘rect’.

I could add a class to my circle, by either adding it directly, or I could add it to the group. 

```html
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g class="my-circle">
	<circle cx="10" cy="10" r="10"/>
</g>
</svg>
```

And then I could style it like so...

```css
.my-circle > circle {
  fill: blue;
}
```

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<g >
	<circle style="fill:blue" cx="10" cy="10" r="10"/>
</g>
</svg>

We could talk about all we could do with SVGs for a while, but it's a bit beyond the scope of this class, so we'll leave it there for now. But, I hope you can see how powerful this could be, with SVG, we get a new language to draw with, that can be used inside of our HTML.

## How big is too big?

## Using images on your site

### Background or Content?

<!-- One question that’s trickier to answer is, what kind of image should we
use when we’re designing our sites? We talked about the <img> tag that
we can use in HTML earlier in the guide, but now we’ve introduced the
background-image in CSS. Which should we use? It depends.

The way that I like to answer the question is to ask: “Does the image
form part of the content of the website, or does it form part of the
design?”. For example, let’s say we have an online store, I would say that
the image of the products are part of the content of the website, as our
customers would expect to see what they’re buying, whereas a pattern
on the header of the site isn’t part of the content, but would be part of
the design. If we redesigned the site in a year, I doubt customers would
require it before they made a purchase.

Another way to think about this issue would be to consider if you’d
want the images to appear in a Google image search. Google will look
at the <img> tags on your website because they’re content of your
site, but not at the background images in the CSS because they’re not
content.

Again, there’s no right or wrong answer to this. Remember that HTML
and CSS are design tools, it’s up to the author how they use them.
Whatever works best for you is the real answer. -->

### It's a ratio, has inherent height!

### Floats



