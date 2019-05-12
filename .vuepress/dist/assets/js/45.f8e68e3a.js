(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{271:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"practical-layout-techniques"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#practical-layout-techniques","aria-hidden":"true"}},[t._v("#")]),t._v(" Practical Layout Techniques")]),t._v(" "),s("p",[t._v("The focus of this lecture will be to describe and offer some sample code for some real-world layout problems.")]),t._v(" "),s("h2",{attrs:{id:"what-do-i-mean-by-“layout”"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-do-i-mean-by-“layout”","aria-hidden":"true"}},[t._v("#")]),t._v(" What do I mean by “Layout”")]),t._v(" "),s("p",[t._v("A lot of the hacks I've mentioned that we used to use for layout, like tables and floats, were all about how to get our elements to live next to each other on the same line (or maybe a better term is \"row\"). Flexbox and Grid solve this issue, but there's a lot of nuances and gotcha's I want to talk about, as well as how all of this works with Responsive Web Design (RWD).")]),t._v(" "),s("h2",{attrs:{id:"mixing-percentages-and-standard-units"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixing-percentages-and-standard-units","aria-hidden":"true"}},[t._v("#")]),t._v(" Mixing percentages and standard units")]),t._v(" "),s("p",[t._v("In RWD, we need to be flexible, so often, we'll want to describe our widths in percentages, "),s("code",[t._v("VW")]),t._v("'s or other flexible units. However, we might also want to control our whitespace like margins and padding with inflexible, exact units. How can we mix them?")]),t._v(" "),s("h2",{attrs:{id:"the-calc-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-calc-function","aria-hidden":"true"}},[t._v("#")]),t._v(" The calc() function")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("calc()")]),t._v(" CSS value can be used pretty much anywhere you would use a number, and it lets you mix units.")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("calc")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("50% - 1em"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("That CSS would tell the browser to compute 50% of its parent and subtract 1em. I can add with "),s("code",[t._v("+")]),t._v(", subtract with "),s("code",[t._v("-")]),t._v(", divide with "),s("code",[t._v("/")]),t._v(", or multiply with "),s("code",[t._v("*")]),t._v(".")]),t._v(" "),s("p",[t._v("The following would be a completely valid alternative way to write "),s("code",[t._v("width: 33.333%")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("calc")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100% / 3"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("There's a lot of power here. Here's something I've done to create an asymmetrical layout using a calculated left margin...")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v(".my-text-container")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin-left")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("calc")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vw - 1240px"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/2"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("I took the max-width of my imagined container that would normally be centered, but instead subtract that from "),s("code",[t._v("100vw")]),t._v(", then divide by two. I'm essentially figuring out how far from the left my content would be if I was centering the whole layout when I was actually just centering 1 side.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/aXYvaj",target:"_blank",rel:"noopener noreferrer"}},[t._v("Calc Examples CodePen"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"making-columns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#making-columns","aria-hidden":"true"}},[t._v("#")]),t._v(" Making columns")]),t._v(" "),s("p",[t._v("The general principle for making columns of elements is the “row/column” method. Basically, you have a block level container as your row, and you use Flexbox to set items inside that row. Your container will usually have a "),s("code",[t._v("max-width")]),t._v(" set, so your columns do not expand indefinitely. How many containers you need depends on your background.")]),t._v(" "),s("p",[s("strong",[t._v("Transparent background, or background that only goes out to your max-width")]),t._v(": if you don't need the row to have a background you can get away with one wrapper.")]),t._v(" "),s("p",[s("strong",[t._v("Full-width background")]),t._v(": you'll need two containers, one that expands indefinitely and another one with a max-width set.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/GzwNpz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flexbox Column CodePen"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("As you can also see in this pen, you can easily use Flexbox settings to change how many items per row at different breakpoints by overwriting your settings inside media queries.")]),t._v(" "),s("h3",{attrs:{id:"adding-gutters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-gutters","aria-hidden":"true"}},[t._v("#")]),t._v(" Adding gutters")]),t._v(" "),s("p",[t._v("Here's where things get tricky. CSS Grid has a gutter concept built in, but let's see how we can make this work with Flexbox.")]),t._v(" "),s("p",[t._v("Now, we can, with Flexbox, use "),s("code",[t._v("justify-content")]),t._v(" to space out our items. So a feasible solution would be to specify our children with less of a percentage than we normally would, automatically creating our gutters.")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v(".my-parent")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("display")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" space-between"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v(".my-children")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("flex")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 22%"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("Here, we are telling our flex-parent to distribute extra whitespace between our child boxes, then, we are telling our boxes to be 22%, instead of 25%. We are also telling them not to grow or to shrink since percentages shrink and grow anyway. If I have 4 flex children, that gives me 88% of our parents width I'm using up with boxes, leaving 12% left over for whitespace. With 4 items, I need three gutters, and 12/3 is 4%. So I automatically get 4% between each item.")]),t._v(" "),s("p",[t._v("However, what if I don't want flexible gutters? What if I want my boxes to flex, but my gutters to be a stable number. This is where a couple of new selectors come into play as well as the "),s("code",[t._v("calc()")]),t._v(" function.")]),t._v(" "),s("h3",{attrs:{id:"first-and-last-child"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-and-last-child","aria-hidden":"true"}},[t._v("#")]),t._v(" First and last child")]),t._v(" "),s("p",[t._v('We looked a bit at "pseudo-classes" earlier in the CSS Selectors lecture, but I want to re-introduce two right now, They are '),s("code",[t._v("first-child")]),t._v(" and "),s("code",[t._v("last-child")]),t._v(". We use pseudo-classes by placing an "),s("code",[t._v(":")]),t._v(" after our selector.")]),t._v(" "),s("p",[t._v("First and last child select the first child of a parent, and the last child of a parent, leaving the rest alone.")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Aardvark"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Anteater"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Elephant"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v("ul > li")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin-left")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin-right")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v("ul > li:first-child")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin-left")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v("ul > li:last-child")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin-right")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("Using the above code, no matter how many items were inside the "),s("code",[t._v("<ul>")]),t._v(", they would all get a "),s("code",[t._v("margin-left")]),t._v(" and "),s("code",[t._v("margin-right")]),t._v(", except the first item gets it's left margin reset to 0, and the last item gets it's margin reset to 0.")]),t._v(" "),s("p",[t._v("We can combine this idea with the "),s("code",[t._v("calc()")]),t._v(" function to control our rows of items.")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v(".row")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("display")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v(".row > .column")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("flex-basis")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 "),s("span",{attrs:{class:"token function"}},[t._v("calc")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("25% - 0.75em"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0.5em 1em 0.5em"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v(".row > .column:first-child")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin-left")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v(".row > .column:last-child")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin-right")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("So we have to do some arithmetic here... 4 items per row means 3 gutters because I want no spacing on the outside for now. If I want 1em of spacing in the 3 gutters, I'll use left and right margins of 0.5em.")]),t._v(" "),s("p",[t._v("My total space I want is still 3em, so each box should be 25% - 3/4 ems. Giving me, "),s("code",[t._v("calc(25% - 0.75em)")]),t._v(". Complicated, but it's the kind of thing you only need to figure out once, then you can use over and over again. Here's a CodePen showing some options.")]),t._v(" "),s("p",[t._v("But what if I want to have a wrapping grid of items, "),s("code",[t._v("first-child")]),t._v(" and "),s("code",[t._v("last-child")]),t._v(" won't work. There is no pseudo-class for first and last in a row of wrapping flex-children.")]),t._v(" "),s("p",[t._v('You can implement "nth child" patterns as well, targeting even or odd items to make this work, '),s("em",[t._v("if")]),t._v(" you know how many items you have total. But, if your not sure how many items you have and you want a grid, CSS Grid may be more useful.")]),t._v(" "),s("h2",{attrs:{id:"grids-of-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grids-of-items","aria-hidden":"true"}},[t._v("#")]),t._v(" Grids of items")]),t._v(" "),s("p",[t._v("It is possible to use Flexbox to make grids of items, however, it can be tricky to use margins (although, not impossible). Grid offers a better solution. The following CodePen demonstrates the issues:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/oOjLjv",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grid of items CodePen"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"rwd-layout-patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rwd-layout-patterns","aria-hidden":"true"}},[t._v("#")]),t._v(" RWD Layout Patterns")]),t._v(" "),s("p",[t._v("Going back to when we first talked about RWD, here are some examples of some of those responsive layout patterns.")]),t._v(" "),s("h3",{attrs:{id:"mostly-fluid-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mostly-fluid-pattern","aria-hidden":"true"}},[t._v("#")]),t._v(" Mostly Fluid pattern")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/oOLVWM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mostly Fluid CodePen"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"column-drop-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#column-drop-pattern","aria-hidden":"true"}},[t._v("#")]),t._v(" Column Drop pattern")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/BEzbma",target:"_blank",rel:"noopener noreferrer"}},[t._v("Column Drop CodePen"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"responsive-css-grid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#responsive-css-grid","aria-hidden":"true"}},[t._v("#")]),t._v(" Responsive CSS Grid")]),t._v(" "),s("p",[t._v("CSS Grid has the benefit of several new values and functions that allow some responsiveness without media queries.")]),t._v(" "),s("p",[t._v("Grid "),s("code",[t._v("auto-fit")]),t._v(" is an awesome value for this. It fills your row with as many columns it can fit.")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  "),s("span",{attrs:{class:"token property"}},[t._v("display")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("repeat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auto-fit, "),s("span",{attrs:{class:"token function"}},[t._v("minmax")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("140px, 1fr"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("grid-gap")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more about "),s("code",[t._v("auto-fit")]),t._v(" and "),s("code",[t._v("auto-fill")]),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v('You can also use "grid area" to great effect combined with media queries.')]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/rbepeP",target:"_blank",rel:"noopener noreferrer"}},[t._v("Responsive Grid CodePen"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"using-order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-order","aria-hidden":"true"}},[t._v("#")]),t._v(" Using order")]),t._v(" "),s("p",[t._v("We can use the Flexbox "),s("code",[t._v("order")]),t._v(" property to let us flip things around in our RWD patterns.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/PLagZW",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex Order CodePen"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"using-display-in-media-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-display-in-media-queries","aria-hidden":"true"}},[t._v("#")]),t._v(" Using "),s("code",[t._v("display")]),t._v(" in media queries")]),t._v(" "),s("p",[t._v("Sometimes you might need very different components to show in different breakpoints. For instance, differing navigation for mobile and desktop might not always work with just different styles. Different HTML may be required. This is pretty simple to do with the "),s("code",[t._v("display")]),t._v(" property.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/VNjRyq",target:"_blank",rel:"noopener noreferrer"}},[t._v("Display and Media Queries CodePen"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"nesting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nesting","aria-hidden":"true"}},[t._v("#")]),t._v(" Nesting")]),t._v(" "),s("p",[t._v("The real trick of layout is to figure out your boxes. Sometimes I like to do by printing out a black and white copy of the design, and with a red pen, draw my boxes. Remember, CSS is all about boxes.")]),t._v(" "),s("p",[t._v("A combination of Flexbox and the right nesting of elements can often get you the layout you need.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/wZWVgJ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nesting Example CodePen"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Remember, you can nest both Grid and Flexbox. Grid children and Flex children can also be Grid and Flex containers.")]),t._v(" "),s("h2",{attrs:{id:"frameworks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frameworks","aria-hidden":"true"}},[t._v("#")]),t._v(" Frameworks")]),t._v(" "),s("p",[t._v("CSS Frameworks are essentially JS and CSS files you include as a base, prior to defining your custom styles. They have built-in grid systems and lots of pre-fab styles to get you running quickly.")]),t._v(" "),s("p",[t._v("Ultimately, you'll learn more by doing it yourself, but frameworks can be a good way to get started making websites since they can fill in gaps in your knowledge.")]),t._v(" "),s("p",[t._v("An extremely popular one is "),s("a",{attrs:{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap"),s("OutboundLink")],1),t._v(", made by the developers at Twitter.")]),t._v(" "),s("p",[t._v("Personally, I've always been partial to "),s("a",{attrs:{href:"https://foundation.zurb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Foundation"),s("OutboundLink")],1),t._v(" from Zurb.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/bdnorris/pen/yrJmPE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Framework CodePen"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("You can quickly build grids using these by using the frameworks pre-defined utility classes.")]),t._v(" "),s("h2",{attrs:{id:"text-columns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-columns","aria-hidden":"true"}},[t._v("#")]),t._v(" Text columns")]),t._v(" "),s("p",[t._v("Yes! You can do traditional text columns in CSS. I find them lacking sometimes because they don't often stand up to good typographic practices.")]),t._v(" "),s("p",[t._v("This CSS-Tricks article explains how to use them pretty well.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://css-tricks.com/guide-responsive-friendly-css-columns/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Guide to Responsive-Friendly CSS Columns"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"in-class-exercise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-class-exercise","aria-hidden":"true"}},[t._v("#")]),t._v(" In class exercise")]),t._v(" "),s("p",[t._v("Please find a layout you'd like me to try, take a screenshot and the URL, and send to me via Slack. I will set aside some time next class to pick one, and attempt to code it live.")]),t._v(" "),s("h2",{attrs:{id:"learn-from-patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learn-from-patterns","aria-hidden":"true"}},[t._v("#")]),t._v(" Learn from patterns!")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://responsivedesign.is/patterns/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Responsive Design Patterns"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gridbyexample.com/patterns/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grid by Example Patterns"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Developers Responsive Patterns"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://bradfrost.github.io/this-is-responsive/patterns.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Brad Frost Responsive Patterns"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://labs.jensimmons.com/2016/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jen Simmons Layout Lab"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Look Ma, No Media Queries! Responsive Layouts Using CSS Grid"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auto-Sizing Columns in CSS Grid: "),s("code",[t._v("auto-fill")]),t._v(" vs "),s("code",[t._v("auto-fit")]),s("OutboundLink")],1)])])},[],!1,null,null,null);n.options.__file="lecture20-practical-layout.md";e.default=n.exports}}]);