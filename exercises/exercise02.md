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

Open up your code editor, and make a new file called `index.html`.

Index is a special filename. Pretty much every web server ever will show that file by default in a directory, and it won't clutter up the URL with the filename. We'll look at this more later.

## Required structure

HTML
    head
    body

> One of the key HTML elements we use to build a webpage is the body element. Only content inside the opening and closing body tags can be displayed to the screen. Here's what opening and closing body tags look like:

## Hierarchy is key

> HTML is organized as a collection of family tree relationships. As you saw in the last exercise, we placed <p> tags within <body> tags. When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element.

In the example above, the <p> element is nested inside the <body> element. The <p> element is considered a child of the <body> element, and the <body> element is considered the parent. You can also see that we've added two spaces of indentation (using the space bar) for better readability.

Since there can be multiple levels of nesting, this analogy can be extended to grandchildren, great-grandchildren, and beyond. The relationship between elements and their ancestor and descendent elements is known as hierarchy.

> In this example, the <body> element is the parent of the <div> element. Both the <h1> and <p> elements are children of the <div> element. Because the <h1> and <p> elements are at the same level, they are considered siblings and are both grandchildren of the <body> element.

> Understanding HTML hierarchy is important because child elements can inherit behavior and styling from their parent element. You'll learn more about webpage hierarchy in when you start digging into CSS.