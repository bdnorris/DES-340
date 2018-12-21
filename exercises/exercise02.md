# E2: Your first website

## Quick and minimal walkthrough of the bones of a website

In class: no points

## The limits of Codepen

As a class, we'll use Codepen a lot. It's super convenient because we don't have to go through all of the setup we normally would to make a site. However, real websites require a lot of setup. We'll get more detailed later, but for this exercise, we will walkthrough the bare minimum's that are required to make a real website that will run on pretty much any computer or server. 

At the end, I'll point you to some base files you can use to get started on in the future, but for now, we'll walk through each piece so you will know what everything does.

## The document : What is HTML anyway?

A quick reminder of the "web front-end trinity": 
* HTML is the structure
* CSS is the style
* Javascript is the actions

This course will only be focusing on the first two, and this exercise is meant to get us going.

_HTML_ stands for Hypertext Markup Language. Every `.html` file can be referred to as a document. Hypertext refers to it's linking powers (which is why it's called "The Web"), and Markup refers to the idea that we're taking content (text and images) and "marking it up" with tags (defines the structure and _some_ presentation). The tags say what that particular piece of content is. A paragraph gets a _P_ tag, a heading gets an _H1_ tag, a sub-heading gets a _H2_ tag, etc. 

We can refer to the HTML file itself as a "document." It becomes clearer if you remember that the beginning of the web was just a network of computers sitting at major universities. HTML was just a language to easily make academic documents with the power of linking them together. Everything that happens on the web is an extension of that initial design.

## Where do I put it

All code files are more or less just text files. Technically, you could use notepad or textedit, but you'll want to use a specialized code editor for a host of reasons. 

* Syntax Highlighting (language awareness): Different color schemes for different parts of your code, making it easier to read.
* Specialized functions geared towards writing code (rather than writing paragraphs)
* Robust "Find and Replace" functions
* Built-in or extendable preview tools
* Many many other features and tools

So your HTML just lives in a file, like `myfile.html`

It makes sense to name your html files in reference to the content, e.g. an about page would `about.html`.

There's a special filename called `index.html`. Pretty much every web server ever will show that file by default in a directory, and it won't clutter up the URL with the filename. We'll look at this more later.

## Required structure

- `<html>`
  - `<head>`
  - `<body>`

These are the key required elements that need to be present in every HTML file. `<html>` is a wrapper for the whole page and `<head>` is where you put tags to load in CSS, set meta data describing the document, and a plethora of other items we'll discuss later. 

The `<body>` element is where content you actually want to show up on the page lives. If you want it to show up, it has to be between the opening and closing `<body>` tags.

```html
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <h1>Hey there!</h1>
  </body>
</html>
```

## Hierarchy is key

```html
<body>
  <p>My paragraph text.</p>
</body>
```

> HTML is organized as a collection of family tree relationships. As you saw in the last exercise, we placed `<p>` tags within `<body>` tags. When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element.

<!-- > In the example above, the `<p>` element is nested inside the <body> element. The `<p>` element is considered a child of the <body> element, and the <body> element is considered the parent. You can also see that we've added two spaces of indentation (using the space bar) for better readability. -->

> Since there can be multiple levels of nesting, this analogy can be extended to grandchildren, great-grandchildren, and beyond. The relationship between elements and their ancestor and descendent elements is known as __hierarchy__.

> Understanding HTML hierarchy is important because child elements can inherit behavior and styling from their parent element. You'll learn more about webpage hierarchy in when you start digging into CSS.

--Codecademy HTML (Introduction to HTML)

However you describe it, the nesting/hierarchy/parent-child relationships of our element is important. The first concern is describing the document. You want to section items off in a logical way. The second concern is styling and layout, which depend a lot on the relationships of your elements in HTML. 

## Get started

Make an empty folder anywhere on your computer, then open that folder in your code editor. 

In your code editor, create a new file called index.html. Remember, naming our file index makes sure it's the default html loaded on our site.

:::tip filenames
It's best to keep your filenames "web-safe." URLs can only contain certain characters, so sticking to those is best. To be extra safe, use all lowercase, with no spaces or special characters. Use hyphens and underscores to separate words instead.
:::

Type and `<html>` start and end tag, then put `<head>`, and `<body>` opening and closing tags inside the `<html>` tag.

Next, put some kind of text element inside body, a heading and a paragraph. Doesn't mater what they are, we're just messing around.

Now, in the `<head>` tag, add a new tag called `<title>` and put some text inside it.

> We’ve also added one more tag, the `<title>` tag, that lives in the `<head>` tag. The title isn’t included within the page’s content, but you’ll see the phrase “My website” in your browser tab and for your page’s headline in Google results.

Find the index.html file on your computer, and drag it to any web browser.

You should see in the top of you browser tab, the title you placed in the title tag as well as your heading and paragraph.

## Running a local server

Running a local webserver will speed up your development, since it allows you to preview what you're working on live, and in the context of how it will be treated when its deployed on a server. There's several ways to do this, but the easiest is to add an extension to your code editor. 

...

Now, this will launch in your browser, and will automatically update when you save.

## CSS 

CSS Stands for "Cascading Style Sheets". We'll talk a lot about how that cascade works, and it's pros and cons, but for now, let's just talk about it's basic structure, and where you actually put it in your code editor.

The first thing we do is similar to how we make HTML files. Instead
of having a file that ends in “.html”, we just make one with “.css”. The
name doesn’t matter too much, whatever makes sense to you. I like to
call my style sheets something like “style.css” so it’s very obvious. You
could break your files up into smaller style sheets later on, e.g.
“about.css” and “homepage.css”, but it’s personal preference.
The next thing to know is that CSS is not HTML. It looks different
because it does a completely different job. It’s not marking up content,
it’s describing what content should look like.

### Anatomy of CSS

There are two main parts to CSS: selectors and rules. The selector picks which part of HTML you want to style, then the rules tell the HTML how to look.

Given the following CSS...

```css
p {
  color: red;
  text-align: center;
}
```

Together, this is called a rule-set. 

The `p` is called a **selector** because it selects the HTML element to style. 

`color: red;` is called a **declaration**.

`color` is a **property**, `red` is a **value**. 

The real power of CSS comes from the selectors, which we'll talk more about later. There are a lot of CSS properties we'll discuss as well, and each property has a range of acceptable values. 

If you get a property wrong, it won't work. If you get a value wrong, it won't work. But, CSS is pretty forgiving, if you mess up, your page will still display, the browser will just ignore things it doesn't understand. 

### Where to put your CSS

1. it's own file.
2. in the head of the document. 
3. inline with the HTML.

We'll do all three so you can see how it works. 

There are a couple of ways to add a CSS file to your project, but the most common is to use the `<link>` tag. Start by making a file in your project called `style.css`. You can do this through your code editor.

Then, in your index.html file, add the following tag:
```html
<link href="style.css" rel="stylesheet">
```

You're familiar with the href attribute now. In this case, it would usually be a relative URL, but it could be an absolute URL (one with HTTP://... etc.). The `rel` attribute stands for "relationship". There are other uses for the link tag, but we'll stick to using it for CSS for now.

On every page of our website, we can place this link tag, and we will pull in the exact same CSS file on every page, making this one CSS file able to style our entire site. If we make one change to this file, it will be a global change, which is typically what you'd want.

You can also include multiple CSS files by adding more link tags.

> The order of the stylesheet is only important if you’re overwriting styles in more than one file — the bottom file will be the one that overwrites styles in the top one.

Now, in your style.css file, write a simple CSS ruleset:
```css
body {
  background-color: #dedede;
  font-size: 16px;
  margin: 0;
  color: #334;
  font-family: sans-serif;
}
p {
  color: inherit;
}
```

Selecting the body tag lets us set global styles for our entire document. If your live server is working, or you have dropped our index.html into a browser and refresh, you should see some style changes to your document. 

Next, lets put some CSS at the head of the document. 

In your index.html file, inside the `<head>` tag, add the following code.

```html
<style type="text/css">
body {
  background-color: pink;
}
p {
  color: blue;
}
</style>

```

These styles in the page are considered a higher priority than the linked file. If your styles do not conflict, both will be applied. If there's a conflict, your linked files styles will be overwritten. 

Now, on your paragraph tag in your htmle file, add this attribute.

```html
style="color: green;"

```

That's an "inline style", and it has the highest priority. It will always overwrite conflicting styles.

### Best Practices

CSS and HTML are extremely open languages. They're forgiving and there are always a dozen ways to solve one problem. There's very little enforcement on how you organize your document and styles.

Because of this, it's very easy for things to get out of control. If you're using styles in the head of the document, or inline styles, consider if you really need to, because later, if you need like to overwrite an inline style in your external CSS file, you're in big trouble. 

We'll talk more about this when we discuss "specificity". 

