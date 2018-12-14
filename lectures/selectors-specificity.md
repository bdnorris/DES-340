# CSS Selectors, Specificit and the Cascade

> By default, the browser gives them a style that looks like the web would have looked in the late 1980s — a simple white background with black text in a default font. At the time this simple styling was fine for scientific research and basic websites, but as the Web became more popular, the Web’s authors wanted to tweak the look and feel of their sites.

Over a few years between 1989 and 1996, to change the style, authors used plenty of “hacks” — non-standard ways to get around the limitations of the code they could play with. HTML started getting more complicated as more hacks were added, to the point where HTML started to look unusable to normal people.
Now, remember that HTML was made so regular folks could write it. The people that were making and updating the web browsers at the time decided enough was enough. They needed a new way to Make Coding Great Again, something for the people.
Back at CERN, one of Tim Berners-Lee’s colleagues, a Norwegian called Håkon Wiem Lie, had an idea based on other word processing programs. The idea that if you were using a header or a paragraph in several places across a website, you probably want them to lookconsistent. The idea that you could make the colors and typography
consistent until you wanted to overwrite something later on.
Håkon had come up with the idea of Cascading Style Sheets (or CSS
for short).
The cascading part of CSS is the idea that you begin to style your site on
a general basis, then get more particular as you get into the nitty-gritty.
For instance, you might want to make the typeface Arial across the
whole site, except for headers where you prefer Georgia.
So it’s always good to keep this in mind. Start off thinking about styling
in the most generic way possible. What is the most used color? What is
the most used typeface?

```css
h1 {
    font-size: 48px;
    font-family: Arial;
}
```

The selector in this case is the word “h1” — we’re picking all the <h1> tags across our website. We’re then using an open curly bracket “{“ to start selecting. There are two rules in the style, the first telling the font size to be 48 pixels large and the second telling the typeface to be Arial. We’re then finished with styling so we use a close curly bracket “}” to tell the browser to stop styling.
How rules work is you have a defined list of what you can change about the styling (more on them later), then you add a colon “:” to say do this rule, then give it a particular value depending on the rule. We then finish the rule with a semi-colon “;” to let the browser know we’re done and we can move on to the next rule — think of it like a period or full stop when we finish a sentence. Like this. Or. This.


## Basic Selectors

### Body

```css
body {
font-family: Arial;
font-size: 16px;
color: black;
}
h1 {
font-size: 24px;
}
```
In this example, we have two styles, one for the whole of the page, then
one style just for the <h1> tags. To add a third, we can just do it at the
bottom of the file.

What typeface will the <h1> tag be? We haven’t explicitly said in the
style sheet. The answer is it would be Arial because we said in the
stylesheet that all the content should be Arial in the “body” selector. The
styles get passed down into all tags until we overwrite them.
What font size would a <p> tag in our HTML be? Well, by default again
we said the “body” selector has a size of 16 pixels, so everything in the
HTML will be that size until we overwrite it. We have overwritten the
default 16px font size in the “h1” selector by making our heading 24
pixels high.
Remember we can put tags inside other tags? What font size would an
italic <i> tag inside a <p> paragraph tag be? Same as the paragraph — all
the styles get passed down to the tags inside bigger tags.
