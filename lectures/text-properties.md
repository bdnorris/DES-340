# CSS Text properties

## Sizing 

Units, later

## Weight

To make a font bold, we give it a font weight:

```css
p {
    font-weight: 700;
}
```

> This number correlates to a typographic weight. There are essentially nine weights to pick from:
100 thin
200 extra light
300 light
400 regular
500 medium
600 semi bold
700 bold
800 extra bold
900 black

> The default font weight is 400. Watch out, as not all typefaces have all the weights. If that is the case, your text will default to the nearest weight it can find (e.g. if there are only 400 and 700 weights and you select 900, it’ll display as 700).

There are also reserved names of `normal` and `bold`. 

## Family

> To change the typeface of the site, you can change the font’s family:

```css
p {
    font-family: Arial;
}
```

> By default, there are not many fonts to pick from, just the standard
ones such as Arial, Georgia, Helvetica and Times New Roman. We’ll talk
later about how to add web fonts into your site.

## Italics

> To make the font italic:

```css
p {
font-style: italic;
}
```

> To overwrite an italic font and make it normal again:

```css
p {
font-style: normal;
}
```

## Leading or line heights

> To change the ratio between the height of the lines between text, we
change the line height:

```css
p {
    line-height: 1.5;
}
```

> The number is a ratio based on the font size, so for instance if the font size is 16 pixels, the space between each line would be 24 pixels (16 times 1.5). A tight leading would be around 1.2 and a looser leading would be around 1.6.

> You can also use pixel sizes for this:

```css
p {
    line-height: 24px;
}
```

> But it’s better to use ratios as you may change the font size later on.

## Letter spacing or tracking

> To change the distance between characters in text, we can change the letter spacing. To increase the spacing by one pixel per character, we can add:

Illustrator to ems

```css
p {
    letter-spacing: 1px;
}
```

> To reduce the space, we can use negative pixels:

```css
p {
letter-spacing: -1px;
}
```

## Aligning text

> When it comes to aligning text, you’re not really handling the
typography but how the text works, so the rules look slightly different:

```css
p {
text-align: left;
}
```

> There are four different values you can put in: left, center, right and
justify.

## Underlining

> You might want to add underlines to your code:

```css
p {
text-decoration: underline;
}
```

> You may notice that by default links have underlines, if you want to get rid of them, add:

```css
a {
text-decoration: none;
}
```

## Uppercase

> Sometimes you need to make your text shout out! We could just go back to our HTML and delete the content and replace with an upper case version, but there’s no need to rewrite your HTML. Having upper case letters could be a branding style and therefore we could do it
in CSS.

> You can make all the letters upper case by adding:

```css
p {
text-transform: uppercase;
}
```

> You could also make each first letter capitalized too:

```css
p {
text-transform: capitalize;
}
```

<!-- 
Vertical alignment
There are two types of way to vertically align tags, and the best to use really depends on the type of display that your tags has.
Aligning within text
For “inline” and “inline-block” tags, there’s a pretty straightforward way to do this. There’s a rule in CSS called vertical-align that lets you change how the tag sits within text. For instance, if you want to sit a link to the top of a line of text, if we have bigger tags in that line of text, we can add:
a {
vertical-align: top;
}

Other alignments we can use include “middle”, “bottom” and “baseline” (based on where the letters in text sit).
We can also use pixel or percentage units to push the tag up from the baseline:
a {
vertical-align: 10px;
} -->

<!-- We can use negative pixels or percentage units to push the tag down
from the baseline:
a {
vertical-align: -30%;
} -->