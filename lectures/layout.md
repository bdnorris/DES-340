<!-- # CSS Layout: An Introduction

## Floats, and why we're skipping them

## Flexbox

## Grid, and why we're skipping it

Overflow
We talked earlier about a new rule called overflow that we didn’t
explain. In this chapter we’ll talk a little more about what overflow
actually is and what it does.
Let’s say we have a <div> tag that’s 300 by 300 pixels. Most of the time
we’d expect our content to fix inside the tag, but what if we have more
content than can do that?
Think of a drinking glass. Most of the time, liquid would fit inside it
comfortably, but if we have too much, what happens? It overflows.
Luckily in CSS, we can control what happens. By default, just like with
a liquid, the content will overspill and escape the container, but we can
change how that works.
If we want to cut off any extra content so it’s clipped, we can give the
<div> tag an overflow of “hidden”:

div {
overflow: hidden;
}
If we decide that within our tag, we want a little scroll bar so a user can
see the rest of the clipped content, we can add:

div {
overflow: scroll;
}
On some web browsers, this will give the <div> tag a permanent scroll bar, even if the content isn’t bigger than the tag. To make it automatically have a scroll bar if the content is bigger and no scroll bar if it’s smaller, we can add the overflow automatically:
div {
overflow: auto;
}
The overflow hack we used in the last chapter for fixing floats works because we’re forcing the parent to stretch around all of the content, floated or not, by using a hidden overflow.
 -->
