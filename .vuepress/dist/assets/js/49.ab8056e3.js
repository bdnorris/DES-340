(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{238:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"transforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transforms","aria-hidden":"true"}},[s._v("#")]),s._v(" Transforms")]),s._v(" "),a("p",[s._v("A newer CSS feature, transforms give you a lot of power to create more advanced effects in the browser. They are also the cornerstone of web animation (animating transforms uses much lower computer resources than animating position, size, etc.)")]),s._v(" "),a("p",[s._v("Transforms are also nice because they do not affect neighboring elements, so you can scale and move and rotate without worrying about how it will affect your page layout.")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/bdnorris/pen/xezeXd",target:"_blank",rel:"noopener noreferrer"}},[s._v("Lecture CodePen"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"the-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-syntax","aria-hidden":"true"}},[s._v("#")]),s._v(" The syntax")]),s._v(" "),a("p",[s._v("We can use the "),a("code",[s._v("transform")]),s._v(" property for all transforms. Like other properties, they will overwrite if re-declared, so we'll look at how to do multiple transformations in a bit. For now, the basic syntax is...")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("transformtype")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("relevantvalue"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("That's just a sample, we'll replace "),a("code",[s._v("transformtype")]),s._v(' with one of our transforms below, just notice that transforms work as "functions", with parenthesis '),a("code",[s._v("()")]),s._v(" that you pass some value into.")]),s._v(" "),a("h2",{attrs:{id:"rotations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rotations","aria-hidden":"true"}},[s._v("#")]),s._v(" Rotations")]),s._v(" "),a("p",[s._v("We can rotate our element using the "),a("code",[s._v("rotate")]),s._v(" transform and the degree unit. Positive values go clockwise, -negative values go counter-clockwise.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("rotate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("10deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("rotate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-10deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),s._v(" "),a("h2",{attrs:{id:"skewing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skewing","aria-hidden":"true"}},[s._v("#")]),s._v(" Skewing")]),s._v(" "),a("p",[s._v("Skewing is kind of like "),a("em",[s._v("slanting")]),s._v(". Perhaps you've used the skew tool in Illustrator.")]),s._v(" "),a("p",[s._v("You can skew in two directions, x (horizontal) and y (vertical). This transform takes degree units as well. You're essentially telling the corners of the element's box to increase or decrease their angles.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("skew")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("10deg, 20deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("You can also skew in only one direction...")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("skewX")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("10deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("skewY")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("20deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"scaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling","aria-hidden":"true"}},[s._v("#")]),s._v(" Scaling")]),s._v(" "),a("p",[s._v("Sometimes you might want to shrink or grow your element, especially as part of an animation.")]),s._v(" "),a("p",[s._v("Scale can take a relative value, similar to "),a("code",[s._v("line-height")]),s._v(". 1 = normal, 2 = twice the normal size, 0.5 = 1/2 size, 0 = scaled to nothing.")]),s._v(" "),a("p",[s._v("You can provide one value for overall scale, or two values for x, then y.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scale")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.5"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scale")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.5, 1.5"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("And again, you can scale in only one direction if you wish...")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scaleX")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.5"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scaleY")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1.5"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"translate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#translate","aria-hidden":"true"}},[s._v("#")]),s._v(" Translate")]),s._v(" "),a("p",[s._v('"Translate" pretty much just means "move". We can pass it x and y values like skew, but what happens is the item moves. Similar to '),a("code",[s._v("position: relative")]),s._v(", but easier to animate.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("translate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("10px, 1em"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("And again, you can move in only one direction if you wish...")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("translateX")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("10px"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("translateY")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1em"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"combining-transforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#combining-transforms","aria-hidden":"true"}},[s._v("#")]),s._v(" Combining Transforms")]),s._v(" "),a("p",[s._v("To combine transforms, we just need to separate them with spaces.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("rotate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("5deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scale")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.9"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"origin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#origin","aria-hidden":"true"}},[s._v("#")]),s._v(" Origin")]),s._v(" "),a("p",[a("code",[s._v("transform-origin")]),s._v(" lets you define at what point of the element the transformation starts from. Normally, it would be "),a("code",[s._v("center center")]),s._v(", but you can change that.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("rotate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("5deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform-origin")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left top"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("This will rotate your element around the top left corner. You can also use pixel units to the transform-origin (across then down) as well as percentages (useful for when you may not be sure of the size of the element).")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("rotate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("5deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform-origin")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 25% 25%"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3-d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-d","aria-hidden":"true"}},[s._v("#")]),s._v(" 3-D")]),s._v(" "),a("p",[s._v("There's also a whole 3-dimensional aspect to transforms.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform-style")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" preserve-3d"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("backface-visibility")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("perspective")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("50px"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("perspective-origin")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("translateZ")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100px"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("matrix3d")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    1,0,0,0,\n    0,1,0,0,\n    0,0,1,0,\n    -50,-100,0,1.1\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("translate3d")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("42px, -62px, -135px"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scaleZ")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1.4"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scale3d")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.5, 1, 1.7"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("rotate3d")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1, 1, 1, 45deg"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("I'm not an expert in using these, nor do they come up often so this will be something you can explore on your own if you're interested.")]),s._v(" "),a("p",[s._v("There are also some helpful generators out there like...")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://westciv.com/tools/3Dtransforms/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("westciv.com"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"using-with-transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-with-transitions","aria-hidden":"true"}},[s._v("#")]),s._v(" Using with transitions")]),s._v(" "),a("p",[s._v("Combining transforms with transitions allows for a wide range of animations.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".my-element")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scale")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("/* Default */")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transition")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" transform 200ms ease"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token selector"}},[s._v(".my-element:hover")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("scale")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1.5"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("We want to set a base transform on the element, this increases performance slightly, getting the element ready to transform.")]),s._v(" "),a("p",[s._v("Animating transforms is typically highly performant because the browser doesn't have to recompute the positions of neighboring items. But, since transforms only use one property, you have to animate "),a("em",[s._v("all")]),s._v(' transformations. You can\'t separate "scale" from "rotate" and only animate one, for example.')]),s._v(" "),a("p",[a("strong",[s._v("Keyframe")]),s._v(" animations give us more options, which we'll look at in a later lecture.")]),s._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[s._v("#")]),s._v(" Resources")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://css-tricks.com/almanac/properties/t/transform/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS Tricks Almanac"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://cssreference.io/property/transform/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS Reference on Transform"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.options.__file="lecture24-transforms.md";t.default=e.exports}}]);