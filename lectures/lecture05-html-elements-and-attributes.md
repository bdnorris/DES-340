# HTML Elements and Attributes

This is not a comprehensive guide of **every** HTML element, but, the ones you will use most often. 

## Inline vs Block

Every HTML element has a default "display" property, either "inline" or "block". 

### Inline

Inline elements behave like text. They sit next to each other, and honor whitespace to the left and right. They will respect left and right margins and padding, but not top and bottom. They cannot have width and height set. We'll discuss this more when we talk about the "Box Model."

### Block

Block elements force a line break whenever they're used. You can set width, height, margin and padding on all sides. 

### Setting via CSS

The browser has a default for each element, but you can overwrite this by setting these propertes, as well as other display properties, in CSS.

```css
display: block;
display: inline;
display: inline-block; /* combination of above, sets items next to each other "inline" but honors all heights, widths, margins, and paddings. */
display: none; /* removes the item from the layout entirely */
display: flex;
display: grid;
```

### Examples

In this example, the `<p>` tag is block, but the `<span>` tag is inline.

<p><span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```html
<p><span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

But, if I overwrite the default behavior of span via CSS...
<p><span style="display: block;">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```html
<p><span style="display: block;">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

## Typographic elements

### Headings
`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` are our heading tags. H1 indicates the highest in the hierarchy and by default will be set to the larges size. Headings also all have `font-weight: bold` applied to them. They are **block** elements.

### Paragraphs
The `<p>` tag is what we use to markup our paragraphs. They're **block** elements that by default will have some margin set above and below. 

### Strong, Em
In the early days of the web, we used tags called `<bold>` and `<italic>`. But, as the web has progressed, moving our style decisions out of our HTML has been a goal. The idea being, HTML should describe the content, and CSS should be doing all of the styling. So, those tags were replaced by `<strong>` and `<em>`. `<strong>` by default is **bold**. However, you could re-style this tag to simply be a different color, or, even italic and bold, and the meaning of the tag still makes sense. `<em>` stands for "emphasis" and is italic by default, but of course, can be re-styled however you like. Both of these tags are **inline** eleemnts.

### Span
`<span>` is a generic tag used to seperate some section of text. You can add a class and style it easily (change color, weight, etc.). It is **inline** by default.

### Lists

We looked at lists a bit before. They are nested element made up of a wrapper, and items inside. They are really useful for organizing items, but they have a lot of default styles that need to be overwritten. 

`<ul>` stands for "Unordered List." By default, these are bulleted.

`<ol>` stands for "Ordered List." By default, these are numbered.

Both are **block** tags. 

You nest `<li>` tags, "List Items", inside these. List items are **block** as well. 

## Organizational

There are bunch of tags we can use to organize our content that don't actually have much default styling, so they can be what we want. They come with some meaning, but are still very flexible. All of these tags are **block** by default.

On some of these, I'm just going to include the actual specifications from the [W3C](https://www.w3.org). However, the specs are not hard rules, and you can technically repourpose these tags if you'd like. But pay attention to how assistive technologies (primarily, but not limited to screen readers used by the blind) use these tags. It would be inappropriate and unfornate to use a `<nav>` tag for something other than navigation.

### div

The main generic tag is a `<div>` for "division." It has no default styling. When in doubt, use a `<div>`.

### section

> The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading (h1-h6 element) as a child of the section element.

### article

> The article element represents a complete, or self-contained, composition in a document, page, application, or site. This could be a magazine, newspaper, technical or scholarly article, an essay or report, a blog or other social media post.

> A general rule is that the article element is appropriate only if the element’s contents would be listed explicitly in the document’s outline. Each article should be identified, typically by including a heading(h1-h6 element) as a child of the article element.

### aside

> The aside element represents a section of a page that consists of content that is tangentially related to the content of the parenting sectioning content, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.

> The element can be used for typographical effects like pull quotes or sidebars, for advertising, for groups of nav elements, and for other content that is considered separate from the main content of the nearest ancestor sectioning content.

### nav

> The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

> Assistive Technology may convey the semantics of the nav to users. This information can provide a hint to users as to the type of content. For example the role of the element, which in this case is "navigation", can be announced by screen reader software when a user navigates to an nav element. User Agents may also provide methods to navigate to nav elements.

### header

> The header element represents introductory content for its nearest ancestor main element or sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids.

> When a header element’s nearest ancestor sectioning root element is the body element, and it is not a descendant of the main element or a sectioning content element, then that header is scoped to the body element and represents introductory content for the page as a whole.

### footer

> The footer element represents a footer for its nearest ancestor main element or sectioning content or sectioning root element. A footer typically contains information about its section, such as who wrote it, links to related documents, copyright data, and the like.

> A footer element can also contain entire sections representing appendices, indexes, long colophons, verbose license agreements, and other such content.

<!-- > Sometimes you want to collect a bunch of HTML tags together and style them separately. For instance, you might have a header on your page that looks different to the main content, or you might have content in your footer that you want to have a smaller font size.

> To do this we can group our tags together using more HTML tags. We have a few specialized tags and then some more generic tags to do this. All of the tags we use are “block” tags — ones that fill the width of
the page. -->
<!-- 
> The first tag we have is the `<header>` tag and its job unsurprisingly is
to hold content for a header. This could contain just text or other tags
too. A good example of a `<header>` tag in action would be:

```html
<header>
<h1>Rik Lomas</h1>
<p>Coder for SuperHi</p>
</header>
```

> Inside our `<header>` tag, we’ve got a heading and a paragraph tag.
The `<header>` tag itself has no styling whatsoever until we give it
something, so at the moment it looks the same with or without it. The
reason why we would add the tag is so we can style it with CSS.
How do we pick the `<header>` in CSS? Same as all the other tags:

```html
header {
font-family: Georgia;
}
``` -->

<!-- > This would mean that the `<h1>` and the `<p>` tags inside the header
would be in different typefaces. Pretty useful and it stops us repeating
ourselves.

> Whenever you’re looking to add navigation to your site, the `<nav>` tag is the perfect one to add:

```html
<nav>
<a href="about.html">About</a>
<a href="blog.html">Blog</a>
<a href="contact.html">Contact</a>
</nav>
``` -->
<!-- 
> You can add a `<nav>` tag within a `<header>` tag or separately in the page — whatever makes sense to you. It also doesn’t have to be at the top of the page, you could have multiple navigations on the page, so add as many as you like.

> The footer tag

> Unsurprisingly, the opposite end of a page to the header would be the footer. That has a tag too. And unsurprisingly this is the `<footer>` tag:

```html
<footer>
<a href="https://www.instagram.com">Instagram</a>
<a href="https://www.facebook.com">Facebook</a>
<a href="https://www.twitter.com">Twitter</a>
</footer>
```

> And to style it up, we’d select it with the footer selector:

```html
footer {
font-size: 14px;
}
``` -->

<!-- > The section tag
> Within the page itself, between the header and footer, you might want
divide the page up into sections. To do this, there’s the section tag:

```html
<section>
<h2>Education</h2>
<h3>Durham University</h3>
<p>I went to...</p>
</section>
```

> To style this up in CSS, you’d use the “section” selector.

> General block tag, the `<div>` tag

> If you have part of a page that doesn’t really fit as a header, section
or footer, but you still want to divide it up somehow, there’s a more general “block” tag called the `<div>` tag, “div” being short for “division” or “divider”, and which doesn’t have any special meaning: -->

<!-- ```html
<div>
<h3>References</h3>
<p>Holly Holmes</p>
</div>
```

> To style it up in CSS, use the “div” selector. -->

## Search engine friendliness

<!-- > If `<header>`, `<section>`, `<footer>` and `<div>` don’t actually style up the page, then why use them? Well, not only does it make it easier in the long term (more on this later), but search engines like Google want to know how you’re labeling your content. They’ll rank you higher in search results if they can better understand your HTML content, so it’s good to use `<header>` for all your header content and `<footer>` for your footer content.
 -->

## Comments

```<!-- -->```

`/* */`