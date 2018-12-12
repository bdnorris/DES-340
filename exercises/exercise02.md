# E3: Your first website

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

## Hierarchy is key

```html
<body>
  <p>My paragraph text.</p>
</body>
```

> HTML is organized as a collection of family tree relationships. As you saw in the last exercise, we placed `<p>` tags within <body> tags. When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element.

> In the example above, the `<p>` element is nested inside the <body> element. The `<p>` element is considered a child of the <body> element, and the <body> element is considered the parent. You can also see that we've added two spaces of indentation (using the space bar) for better readability.

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

Find the index.html file on your computer, and drag it to any web browser.

You should see in the top of you browser tab, the title you placed in the title tag as well as your heading and paragraph.

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

### Where to put your CSS

- The best place is it's own file.
- The second best place is in the head of the document. 
- The third best place is inline with the HTML.

We'll do all three so you can see how it works. 

...

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

## Running a local server

