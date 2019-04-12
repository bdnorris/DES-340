# Transforms

A newer CSS feature, transforms give you a lot of power to create more advanced effects in the browser. They are also the cornerstone of web animation (animating transforms uses much lower computer resources than animating position, size, etc.)

## The syntax

We can use the `transform` property for all transforms. Like other properties, they will overwrite if re-declared, so we'll look at how to do multiple transformations in a bit. For now, the basic syntax is...

```css
.my-element {
  transform: transformtype(relevantvalue);
}
```

That's just a sample, we'll replace `transformtype` with one of our transforms below, just notice that transforms work as "functions", with parenthesis `()` that you pass some value into.

## Rotations

We can rotate our element using the `rotate` transform and the degree unit. Positive values go clockwise, -negative values go counter-clockwise.

```css
.my-element {
  transform: rotate(10deg);
}
.my-element {
  transform: rotate(-10deg);
}
```

transform: rotateY(50deg);
transform: rotateX(50deg);

## Skewing

Skewing is kind of like _slanting_. Perhaps you've  used the skew tool in Illustrator. 

You can skew in two directions, x (horizontal) and y (vertical). This transform takes degree units as well. You're essentially telling the corners of the element's box to increase or decrease their angles. 

```css
.my-element {
  transform: skew(10deg, 10deg);
}
```

skewX
skewY

...

## Scaling

Sometimes you might want to shrink or grow your element, especially as part of an animation.

Scale can take a relative value, similar to `line-height`. 1 = normal, 2 = twice the normal size, 0.5 = 1/2 size, 0 = scaled to nothing.

```css
.my-element {
  transform: scale(0.5);
}
```

## Translate

"Translate" pretty much just means "move". We can pass it x and y values like skew, but what happens is the item moves. Similar to `position: relative`, but easier to animate. 

```css
.my-element {
  transform: translate(10px, 1em);
}
```

translateX
translateY

## Combining Transforms

To combine transforms, we just need to separate them with spaces.

```css
.my-element {
  transform: rotate(5deg) scale(0.9);
}
```

## Origin

`transform-origin` lets you define at what point of the element the transformation starts from. Normally, it would be `center center`, but you can change that.

```css
.my-element {
  transform: rotate(5deg);
  transform-origin: left top;
}
```

This will rotate your element around the top left corner. You can also use pixel units to the transform origin (across then down) as well as percentages (useful for when you may not be sure of the size of the element). 

```css
.my-element {
  transform: rotate(5deg);
  transform-origin: 25% 25%;
}
```

## 3-D 

transform-style: preserve-3d;

backface-visibility: hidden;

perspective(50px) 
translateZ(100px);
perspective-origin

matrix3d()
translate3d()
translateZ()
scaleZ() 
scale3d() 
rotate3d() =

## Using with transitions



## Resources

https://css-tricks.com/almanac/properties/t/transform/

https://cssreference.io/property/transform/

