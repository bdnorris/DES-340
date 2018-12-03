---
prev: false
---

# E1: HTML Bio

## Your first HTML

In class: no points

We're going to get you started with some basic HTML by making a short bio in Codepen.

### Step 1

You've created your [Codepen](https://codepen.io) account, right? Login and make a new "pen". Name it E1: HTML Bio

Make sure to hit the "Save" button along the way. Codepen doesn't autosave.

### Step 2: Add a profile image

Add a picture of yourself. You can't upload photos directly to Codepen, so try using [postimage](https://postimg.cc) to upload a modestly sized image of yourself (~200px square) to use. After it's uploaded, copy the "Direct Link".

Start your pen with an `<img>` tag in the HTML panel of the pen. 

It's the tag we use to show images in an HTML document. It works like:

``` html{4}
<img width="200" height="200" src="https://i.postimg.cc/XN2Rr5v3/brian-norris-head.png" alt="Brian Norris" />
```

_width_ and _height_ are set in pixels. You will almost never have to use these attributes and they're 100% optional, but I'm including them for now.

_src_ means "source" and should point to the image file in question. It can be a relative path or an absolute path, which we will talk more about later. Here, since we're linking to another domain, we have to use the _absolute_ path, which means we need to have the entire URL including the "https". 

_alt_ is also optional, but its a best practice to try and include it. It's the text that is displayed if your image fails to load, and assistive technology for the blind will read it to describe the image for users who can't actually see it. It can also help with Search Engine Optimization (SEO).

**All of the above** are called _HTML Attributes_. They're parts of the "Tag" and are sometimes required, and sometimes optional and always in the format `="something"`. Understanding these and their tags are essential to understanding HTML. 

Image tags don't wrap around text, so it's proper to include a `/` at the end of the tag to indicate it's complete (this is called a "self-closing" tag).

### Step 3: Add a heading

Next, you'll include a heading with your name. Heading tags go from `<h1>` (top of the hierarchy) down to `<h6>`.

``` html{4}
<h1>Brian Norris</h1>
```

Heading tags wrap some text, so they need to be closed at the end. Only a few "self-closing" tags like `<img>` would not have this. Most of the time, you need to close your tags using the opening tag with a `/` in front.

### Step 4: Add an E-mail link

Links are a key feature of the Web and are the key component of the idea of [Hypertext](https://en.wikipedia.org/wiki/Hypertext), the "HT" in "HTML".

Often we will be linking to either another website, or a different page on our own website, but here we'll make a "mailto" link. 

Create a mailto link, linking to your own student e-mail as shown.

```html{4}
<a href="mailto:briannorris@missouristate.edu">briannorris@missouristate.edu</a>
```

_a_ here actually stands for "Anchor". This tag was originally meant to link within a document. Imagine a long Word document, with the ability to click around from one part of the document to another, these tags would "anchor" tags to those different parts. This is still 100% possible, but they've mostly been repurposed to create links between documents.

_href_ stands for "Hypertext Reference." You can forget that information right now, just know that this is where we would put the identifier for what resource the browser should go to when the text inside the tag is clicked. Often, it would be URL like `https://google.com`. Here though, we're prepending an e-mail address with `mailto:` which will cause the user's default e-mail client to create a new e-mail with that address in the "To:" field.

### Step 5: Add a few sub-headings

Add your hometown and your major and emphasis (for most of you this will be "Graphic Design and Illustration" or one or the other, but if yours is different, I'd really like to know) as `h3` tags.

```html{4}
<h3>Springfield, MO</h3>
<h3>Graphic Design</h3>
```

### Step 6: Add your goals for the class

To let me know a bit about what you're looking to get out of this class, add a goals section. Start off with an `h2` tag.

```html{4}
<h2>My Goals</h2>
```

Then, add a `p` tag to summarize or introduce your goals. The "P" stands for _paragraph_.

```html{4}
<p>I want to imbue great wisdom to my students and also teach them HTML and CSS.</p>
```

Then, we'll make a _Unordered List_ of some specific goals (at least 2 items please). 

```html{4}
<ul>
    <li>Teach HTML</li>
    <li>Teach CSS</li>
    <li>Teach web design concepts</li>
</ul>
```

You'll see that the HTML structure of a list actually has a parent/child relationship. This is of utmost importance. A complicated HTML document will have tags nested inside tags inside tags inside tags... This structure is important to enabling the use of CSS effectively to layout your page.  

_ul_ starts and ends the list. _li_ stands for "list item" and creates a bullet point for each _li_ tag.

### Step 9: Let's style something real quick

Ok, we did a bunch of HTML, but let's go ahead and use CSS to style one thing. 

In the CSS part of the pen, type the following code.

```css{4}
h1, h2, h3 {
    color: tomato;
}
```

That's your first CSS ruleset. _color_ mostly affects text items, and here, I'm using a "named" CSS color. Typically, we would use "hex codes" or RGB values, but CSS named colors are a quick shortcut. Check out this [list of CSS colors](https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/) and pick your own. 

We'll go over this in detail soon, but basically, with that CSS, we're saying any tag called h1, h2, or h3 we want to be the given color. 

### Step 8: Send your pen my way

Codepen URLs are the same for editing as they are for viewing, so just copy the URL out of your browser's address bar and send it to me via Slack.
