# CSS Selectors and the Cascade

https://thecssworkshop.com/css-basics#module-css-selectors

> By default, the browser gives them a style that looks like the web would have looked in the late 1980s — a simple white background with black text in a default font. At the time this simple styling was fine for scientific research and basic websites, but as the Web became more popular, the Web’s authors wanted to tweak the look and feel of their sites.

> Over a few years between 1989 and 1996, to change the style, authors used plenty of “hacks” — non-standard ways to get around the limitations of the code they could play with. HTML started getting more complicated as more hacks were added, to the point where HTML started to look unusable to normal people.

<!-- Now, remember that HTML was made so regular folks could write it. The people that were making and updating the web browsers at the time decided enough was enough. They needed a new way to Make Coding Great Again, something for the people. -->

> Back at CERN, one of Tim Berners-Lee’s colleagues, a Norwegian called Håkon Wiem Lie, had an idea based on other word processing programs. The idea that if you were using a header or a paragraph in several places across a website, you probably want them to lookconsistent. The idea that you could make the colors and typography
consistent until you wanted to overwrite something later on.
Håkon had come up with the idea of Cascading Style Sheets (or CSS
for short).

> The cascading part of CSS is the idea that you begin to style your site on
a general basis, then get more particular as you get into the nitty-gritty.
For instance, you might want to make the typeface Arial across the
whole site, except for headers where you prefer Georgia.

> So it’s always good to keep this in mind. Start off thinking about styling
in the most generic way possible. What is the most used color? What is
the most used typeface?

## The Cascade

### Inheritance

```css
body {
    font-family: sans-serif;
    font-size: 16px;
    color: #222233;
}
h1 {
    font-size: 22px;
}
```

In this example, we have a starting body rule-set, and a header rule-set.

Remember, body is the wrapping tag for all content on the page. That means, everything in the page will inherit it's style. What typeface will the `<h1>` be? It will be sans-serif, unless you specify. Child tags will always inherit (some) properties from their parents unless they are overwritten.

What font-size will the `<h1>` be? 22px, because specified it on the rule-set for all H1 tags.

### Order

```css
p {
    font-family: Arial;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
}
```
In CSS rule-sets, the order of the rules doesn't matter, as long as you don't have conflicting rules. 

```css
p {
    font-size: 14px;
    font-size: 16px;
}
```

In the above case, the font-size will be 16px, because it comes later and will overwrite what comes before.

## Basic Selectors

### Element Selectors

The most basic selector is an **element** selector. We've mostly been using these for our examples. They select any HTML Element specified. 

```css
p { }
```
This selector would select every instance of the `<p>` tag on our site, even if we were more specific later.

### Class Selectors

We've mentioned classes before, but let's look a bit closer. In the HTML, we can add a class like so...

```html
<p class="introduction">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. </p>
```

To style this is CSS, we would use a `.` before the classname. 

```css
.introduction {
    font-size: 18px;
    font-weight: bold;
}
```

You can also combine an element and a class selector, like...

```css
p.introduction {
 /* ... */
}
```

The first selector says "these rules apply to every element with the class 'introduction'". The second selector says, "these rules apply to every *p* element with the class 'introduction'". The second one is more specific, which we'll talk about in a bit.

### ID Selectors

You can also give elements "IDs" with the `id` attribute. In theory, every ID should be unique. 

```html
<p id="introduction-but-more-specific" class="introduction"></p>
```

You use the in CSS with a `#` like...

```css
#introduction-but-more-specific {
    color: purple;
}
```

We'll talk more about it in a bit, but IDs are *very* specific. So specific, that you need to be really careful when using them. They should only be used when you absolutely only want to write styles for one thing that you'll never re-use again.

## Combinators

## Descendent Selectors

Given the following HTML...

```html
<p class="introduction">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et 
dolore magna aliqua.</p>
```

...We can use the following CSS selector to select _only links inside elements with the "introduction" class.

```css
.introduction a {
    color: tomato;
}
```

Simply using a space between the selectors implies a ansecstor/descendent relationship. With a descendent selector, it isn't just children that will be styled, but all links that are inside something with the "introduction" class, no matter how deep it's nested.

You can also have more than one descendant in a list.

```css
.introduction ul li {
    margin-left: 1em;
}
```

In this case, li's that are inside ul's that are inside elements with the class "introduction" will be styled.

Keep in mind though, the longer you make these chains, the more specific they get, and hence become difficult to overwrite later on.

### Child Selector

Since using the descendent selector (a space) targets all the descendents, the need arises to target just the immediate children of an element. We use the greater than symbol for this (`>`).

```css
.introduction > a {
    color: tomato;
}
```

In this case, only `<a>` tags that are the _immediate children_ of elements with the class "introduction" will be targeted.

### Sibling Selectors

#### Adjacent Sibling

The plus (`+`) sign indicates an adjacent sibling. Given the following CSS...

```css
h2 + p {
    font-size: 1.5em;
}
```

... would apply the rule-set to  any `<p>` element that appears _directly after_ an `<h2>`. These only work forwards though, you couldn't target `<h2>`s that occured before a `<p>`.

#### General Sibling

The `~` character lets us target general siblings.

```css
h2 ~ p {
    font-size: 1.5em;
}
```

That selector would target any `<p>` elements that were siblings of an `<h2>`. It still only works forwards though. For example...

```html
<p>text ...</p>
<h2>Heading</h2>
<p>text ...</p>
<p>text ...</p>
```

... only the last two paragraphs would be targeted.

<!-- Classes
We’re going to add one last level of complexity to our selectors. I
promise it’ll be the last bit of complexity you’ll need in a selector for
99.9% of whatever you do.
Let’s look at some more HTML:
<section>
<h2>Experience</h2>
</section>
<section>
<h2>Education</h2>
</section>
<section>
<h2>References</h2>
</section>
Most of the time I want to make both sections look the same — the
same typography, the same color scheme, the same spacings. But let’s
say we want to change one of the sections very, very slightly. I want to
change the Education section to have a different background color to
bring attention to it.
None of the selectors I’ve used so far make sense to use, as using
“section” in CSS would change all of the <section> tags. I don’t want to
do anything with hover either.

One way around it could be to change the <section> tag to another tag, but it would need a lot of duplicate code in my style sheet to do two tags looking mostly the same.
The more sensible and more common way is to use a “class” attribute.
We want to add a hook into our HTML to say we want to style this up in a particular way. The hook we’ll add doesn’t add any styles until we style it up in CSS.

How to add class attributes in HTML
We talked about attributes earlier in the guide when we talked about the “href” attribute for link tags and the “src” attributes for image tags. Attributes are extra information for the web browser to use — for “href” it’s for the browser to know where to send the user next, for “src” it’s to know which file to pull into the page.
With the “class” attribute, we’re adding a hook into our HTML for our CSS to use later on.
To add a class attribute, we add the extra information on to the opening HTML tag:
<section>
<h2>Experience</h2>
</section> -->

<!-- <section class="highlighted">
<h2>Education</h2>
</section>
<section>
<h2>References</h2>
</section>
In this example, we’ve added a class attribute called “highlighted”
to the middle tag. We can call the attribute whatever makes sense to
us to use. Remember, the user doesn’t see the name of this. The only
rules you have to remember is no spaces and it has to be letters,
numbers and dashes.
If a user looked at the web page at the moment, it would look exactly
the same as it did without a class attribute. It doesn’t do anything until
we style it.
You can reuse the class attribute on multiple tags too, for instance:
<section class="highlighted">
<h2>Experience</h2>
</section>
<section class="highlighted">
<h2>Education</h2>
</section> -->

<!-- <section>
<h2>References</h2>
</section>
Here, I’ve added the class attribute of “highlighted” on to the first two tags but not the last tag.

Adding CSS class selectors
So far we’ve added some class attributes into our HTML but they’re unused at the moment, so let’s hook some CSS up to them.
In our CSS, if we want to style up all three section tags, we would do so like this:
section {
background: white;
color: black;
}
However, if we then wanted to overwrite the background color of the sections with the class attribute “highlighted”, we would need to select them separately to all the sections. To do this, we would pick all the <section> tags, then filter them by their class using a “.” (period or full stop), then the name of the class attribute: -->

<!-- section {
background: white;
color: black;
}
section.highlighted {
background: yellow;
}
Our highlighted sections have a yellow background color, and because
we’re not overwriting the text color, this is black from the default
section style.
We can use the class attributes in lots of different ways. For instance in
our HTML we could have: -->

<!-- <p class="intro">
In this example...
</p>
<p>
However, you may notice...
</p>
Then to style up the <p> tag with the class attribute, we could do in our
CSS style sheet:

p.intro {
font-size: 18px;
font-weight: 700;
} -->

<!-- Combining class attributes with
hover states
Okay, just one more complicated selector. I promise.
In the last example, where we had a <p> tag with the class attribute of “intro”, what if we wanted to do something when a user hovered the <p> tag? We’d combine the selectors:
p {
font-size: 16px;
}
p.intro {
font-size: 18px;
font-weight: 700;
}
p.intro:hover {
color: red;
} -->

<!-- Here we have three styles. The first is picking any <p> tag. The second
is picking any <p> tag, then filtering for any with the class attribute of
“intro”. The last one is picking any <p> tag, then filtering for the class
attribute of “intro” and then only applying the style on hover. Phew!
So for this style sheet, the tag with <p class=”intro”> would be font
size 18px and bold font weight (or 700 weight) by default. Then we
apply the red color only on hover. -->

<!-- Multiple classes
We can also add more than one class on to a tag. The way we do this is
by using a space between the two class names:
<p class="highlighted large">
I’m a large and highlighted paragraph
</p>
We can now select this style by using either class name. Both “p.highlighted”
and “p.large” will select this tag. We could also be incredibly
particular and select any paragraphs with both classes by adding to
our CSS:
p.highlighted.large {
font-size: 24px;
background-color: yellow;
} -->

