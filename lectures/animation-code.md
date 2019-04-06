# CSS animations

<!-- So far the only animations that we’ve had are between states, for
instance when we hover over a tag, we can make a change. So how
do we make animations that automatically play without any user
interaction? We can use CSS animations!
There are two parts to adding a CSS animation — the first is adding a
keyframe which details what the animation is, the second is adding the
keyframe to the tags you want animating in that way.

Keyframes
Think of a keyframe as a timeline of what we want to animate. We
might for instance want to animate the background color between two
colors, or we might just want to fade in a tag on load. Let’s say we want
to fade in a tag. The first thing we need to do is think of a name for our
keyframe. This can be anything that describes it as one word — think
like an HTML class name — so let’s call ours “fadein”.
To start the keyframe, we add it away from any other styles, a little like
adding a media query:
@keyframes fadein {
}

We use “@keyframes” to say we want to define an animation, then name it whatever we like. We then need to say how we are going to animate it between the start and the end of the animation.
To do this we can use percentages of the keyframe. To fade something in, we’d start at 0 percent with not seeing anything, then at 100 percent of the animation, we’d be able to see the tag:
@keyframes fadein {
0% {
opacity: 0;
}
100% {
opacity: 1;
}
}

We can add other percentages in here, for instance if want to start with a tag faded out, then fade in, and then fade back out, we could do:

@keyframes fadeinandout {
0% {
opacity: 0;
}
50% {
opacity: 1;
}
100% {
opacity: 0;
}
}
At the moment, the keyframe lives on its own — we’ve only defined
what we want to do but we haven’t said which tags to apply our
animation to.

The animation rule
Alongside the @keyframes, we need to say which tags have that
animation, how long the animation should take, and how many times it
should happen.
To add the keyframes to a tag, we can use a new CSS rule called the
animation rule. We need to first of all use the name of the keyframe
(e.g. if you named it “fadein” we can use that), then say how long you
want the animation to take: -->

<!-- @keyframes fadein {
0% {
opacity: 0;
}
100% {
opacity: 1;
}
}
header {
animation: fadein 2s;
}
Here we’ve said: add the fadein keyframes to our header and animate over two seconds. Currently this will animate just once, but if we want to loop the animation, lets say if we have a glow on the page, we can add “infinite”:

@keyframes glow {
0% {
background-color: #ff4141;
}
50% {
background-color: #ff8888;
}
100% {
background-color: #ff4141;
}
}

header {
animation: glow 10s infinite;
}
This will repeat the glow keyframe every 10 seconds on a loop.
To delay the animation starting, we add two other things. The first is
delay time. The other (“both”) is to tell the animation to apply the start
of the animation before it runs and keep the styles after it has finished:

@keyframes jumpin {
0% {
opacity: 0;
transform: translate(20px, 0);
}
100% {
opacity: 1;
transform: translate(0, 0);
}
}
header {
animation: jumpin 1s 2s both;
}

This will apply a fade and a movement over one second, with a two
second delay on starting. It will also keep the tag hidden before the
animation, and keep it faded in after the animation.
We can apply the same keyframe on multiple tags too!

@keyframes fadein {
0% {
opacity: 0;
}
100% {
opacity: 1;
}
}
header {
animation: fadein 1s 2s both;
}
section.intro {
animation: fadein 1s 4s both;
}

This will fade in the header after two seconds and then a section with the class of “intro” after four seconds.
Using steps to animate
At the moment, our animation takes place smoothly between various different points. For example, we start at no opacity, and it animates smoothly to full opacity.

Let’s say we want to go in steps rather than go smoothly between two
values, we can add in one more extra to make it stepped:
@keyframes fadein {
0% {
opacity: 0;
}
100% {
opacity: 1;
}
}
header {
animation: fadein 1s steps(4) both;
}

This will tell the header to run the animation over four steps: it will
stay at 0, then after ¼ of a second, it will jump to 0.25 opacity. Then
after ½ a second, it will jump to 0.5 opacity. After ¾ of a second, it
will jump to 0.75 opacity, and finally after 1 second it will finish at full
opacity.
The header will never be 0.6 opacity as it will instantly jump between
0.5 and 0.75.
Also notice that there are only four steps, not five, as we’re not
including the starting step. Think of it like taking a physical step, it’s the
amount of times you move your feet!

We can also use steps in the CSS transition rule as well as animations. -->


https://css-tricks.com/writing-animations-that-bring-your-site-to-life/


A couple of house rules with animations
Have you ever bumped into a site that animates all the things? Wow, those can be jarring. So, here’s a couple of things to avoid when working with animations so our app doesn’t fall into the same boat:

Avoid animating CSS properties other than transform and opacity. If other properties have to be animated, like width or height, then make sure there aren’t a lot of layout changes happening at the same time. There’s actually a cost to animations and you can see exactly how much by referring to CSS Triggers.
Also, just because animations can create perceived performance gains, there’s actually a point of diminishing return when it comes to using them. Animating too many elements at the same time may result in decreased performance.
Now we can get our hands dirty with some code!




## Resources

[CSS Reference for Transitions](https://cssreference.io/transitions/)
[CSS Reference for Animation](https://cssreference.io/animations/)
