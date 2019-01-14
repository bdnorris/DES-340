<!-- Hover states
So far, the way we’ve selected our HTML tags in CSS has been pretty straightforward — whatever the tag name is, that’s the CSS selector. If we’re picking all our <a> tags, we select them with “a”, if we’re picking all our <section> tags, we select them with “header”, but what if
we’re doing something more complex? How about if we want to style them only when a user hovers the tag? We’re going to introduce the hover state — a new CSS selector — that styles tags only when a user hovers it.
Let’s say we want to style up our links on the page. We want to make the default look a blue color with no underline:
a {
color: #2727e6;
text-decoration: none;
}
Whenever a link has no underline, it might make it more difficult for users to notice that this link is a link — without the underline they may just think it’s another bit of text. Let’s make any of the links change color when we hover them.
To select an <a> tag on hover, we need to select the “a” first, then only on hover. To do this we use the selector “a:hover”. If we want to select a <section> tag on hover, we’d use “section:hover”. No space between the colon and “hover”.
112 Learn to Code Now
In our CSS, we’d need two styles, the first being the default from above
— this is what it looks like normally. Then we need a second style to
overwrite what we want to change — in this case, from blue text to
black text:
a {
color: #2727e6;
text-decoration: none;
}
a:hover {
color: #111118;
}
Notice in the second rule that we don’t need to repeat the text
decoration rule. We only need to overwrite the things we want
to change.
In some circumstances, we might want to overwrite a default that isn’t
there. For instance, we might want to add a background only on hover
— the default styling would just be transparent and then the hover state
would be a background color:
header {
color: red;
}
header:hover {
background-color: yellow;
}

In this case, on our header the default styling would be a red text
color and no background color, then on hover, we are overwriting the
background color to be yellow. The text color stays red on default and
on hover.


Transitions
At the moment, whenever we change between states of default and hover, we get an instant flick of change. In a lot of instances, this can look jarring to users, especially if the user is hovering over a large area. Wouldn’t it be great if we could add a fade effect? To do this, we can add a CSS transition.
Let’s say we want to fade our link’s text color from blue to black again, but this time we want to fade it between the two colors over half
a second:
a {
color: #2727e6;
text-decoration: none;
transition: color 0.5s;
}
a:hover {
color: #111118;
}
Here we’ve transitioned the color rule over 0.5 seconds (“0.5s”).
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