# Hover and Transitions

## Hover states

Pretty much any HTML element can be styled when the user's cursor is above it. We call that the "hover" state. To add hover styles, we just need to use the "hover" pseudo-class.

```css
/* Selects any <a> element when "hovered" */
a {
  color: #2727e6;
  text-decoration: none;
}
a:hover {
  color: #111118;
  text-decoration: underline;
}
```

You won't need to repeat anything in the second ruleset, just change the styles you need to, they'll overwrite what came before.

You can do this with any selector, not just links.

```css
header {
  background-color: red;
}
header:hover {
  background-color: yellow;
}
```

Of course, this isn't the best example, the intention of hover is often to let the user know they are clickable, or otherwise that some kind of interaction is possible.

By the way, you can use this with classes or any other selectors as well. 

```css
.header {
  background-color: red;
}
.header:hover {
  background-color: yellow;
}
```


### Mobile caveats

Before web capable devices with touch screens, it was also common to use hover to show or hide some information. You could make stateful interactions with just CSS and no Javascript. However, hover is unreliable on mobile devices. Some devices have a "soft-touch" capability, where they distinguish between a light touch on the screen and an intentional tap, sometimes showing the hover state. 

But this is unreliable. Best to only use hover for desktop enhancements, and make sure your page doesn't _need_ it to function.

## Transitions

> Transitions enable you to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.

&mdash; [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

Transitions are the first type of animation we'll look at in CSS. With them, you can transition between two sets of styles, based on the "state". 

There aren't a lot of options for changing state without Javascript. However, `hover` is one of them, so we'll look at how to set up a transition along with hover.

Currently, if we have a hover style, the change in CSS happens immediately. With a transition, we can set the change up to take place over a given amount of time.

```css
a {
  color: #2727e6;
  text-decoration: none;
  transition: color 0.5s;
}
a:hover {
  color: #111118;
}
```

Here, we've used the `transition` property and told it we want to transition the color property over half a second. 

<!-- 

One question you may have is, “why did we put the transition rule into the default style rather than the hover style?” Surely we want it to fade when we hover, right? Yes we do! But we also want the fade to happen when we move away from the tag, so we put the transition in the
116 Learn to Code Now
default style to have it in all instances — in this case, both hovering over
the tag and moving away from the tag with our mouse.
What if we want to transition more than one thing? Let’s say a
background color and a text color? Instead of the name of the attribute
(e.g. “color”), we can just say “all”:
header {
color: black;
background-color: white;
transition: all 2s;
}
header:hover {
color: red;
background-color: yellow;
}
In this case, we’re changing both the header’s background color and the
text color over two seconds (“2s”). -->


