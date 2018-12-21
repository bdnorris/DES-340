# HTML Elements and Attributes

## Inline

<!-- Question
> This exercise 27 says that <span> elements are used to “separate small pieces of content”. Why would we want to separate small pieces of content?

Answer
> It’s not that we necessarily want to separate content so much as we want to “mark it up” so that we can target it more specifically. There are all kinds of reasons for targeting specific pieces of content. For example, we may wish to use CSS to style the <span> content differently than the other content of a page. -->


## Block

<!-- > It's best to use a <span> element when you want to target a specific piece of content that is inline, or on the same line as other text. If you want to divide your content into blocks, it's better to use a <div>. -->

## Typographic

H1-H6

P

Span

Strong, Em

UL, OL

<!-- > Ordered lists (<ol>) are like unordered lists, except that each list item is numbered. They are useful when you need to list different steps in a process or rank items for first to last.

> You can create the ordered list with the <ol> tag and then add individual list items to the list using <li> tags. -->

## Organizational

div

section

article

nav

header

footer


> Sometimes you want to collect a bunch of HTML tags together and style them separately. For instance, you might have a header on your page that looks different to the main content, or you might have content in your footer that you want to have a smaller font size.

> To do this we can group our tags together using more HTML tags. We have a few specialized tags and then some more generic tags to do this. All of the tags we use are “block” tags — ones that fill the width of
the page.

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
```

> This would mean that the `<h1>` and the `<p>` tags inside the header
would be in different typefaces. Pretty useful and it stops us repeating
ourselves.

> Whenever you’re looking to add navigation to your site, the `<nav>` tag is the perfect one to add:

```html
<nav>
<a href="about.html">About</a>
<a href="blog.html">Blog</a>
<a href="contact.html">Contact</a>
</nav>
```

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
```

> The section tag
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
or footer, but you still want to divide it up somehow, there’s a more general “block” tag called the `<div>` tag, “div” being short for “division” or “divider”, and which doesn’t have any special meaning:

```html
<div>
<h3>References</h3>
<p>Holly Holmes</p>
</div>
```

> To style it up in CSS, use the “div” selector.

## Search engine friendliness

<!-- > If `<header>`, `<section>`, `<footer>` and `<div>` don’t actually style up the page, then why use them? Well, not only does it make it easier in the long term (more on this later), but search engines like Google want to know how you’re labeling your content. They’ll rank you higher in search results if they can better understand your HTML content, so it’s good to use `<header>` for all your header content and `<footer>` for your footer content.
 -->

## Comments

```<!-- -->```

`/* */`