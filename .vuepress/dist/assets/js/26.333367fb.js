(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{192:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=s(6),o=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"code-editor-and-formatting-conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-editor-and-formatting-conventions","aria-hidden":"true"}},[t._v("#")]),t._v(" Code Editor and formatting conventions")]),t._v(" "),s("blockquote",[s("p",[t._v("When we’re making our files, what program do we make them in? Is\nthere a special program we need? If so, is it expensive?\nLuckily for us, all the files that we’ll be making are essentially text files\nwith a different extension. You can open them in Notepad, TextEdit, IA\nWriter or any program that you would write plain old text in.")])]),t._v(" "),s("blockquote",[s("p",[t._v("Make a folder on your computer, then store all your code and assets\nin there.")])]),t._v(" "),s("blockquote",[s("p",[t._v("There are, however, easier ways to edit code. There are specialist\nprograms that make it simpler to see what’s happening when you write\ncode.")])]),t._v(" "),s("blockquote",[s("p",[t._v("Some of the most popular code editors include Atom (atom.io),\nSublime Text (sublimetext.com), Coda (panic.com/coda) and\nDreamweaver (adobe.com/dreamweaver). Some are free to download,\nsome are paid for.")])]),t._v(" "),s("h2",{attrs:{id:"whitespace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whitespace","aria-hidden":"true"}},[t._v("#")]),t._v(" Whitespace")]),t._v(" "),s("blockquote",[s("p",[t._v("We mentioned earlier that HTML is all about content and CSS is all about style. Because of this, HTML doesn’t really care about how your code looks, it will ignore any white space you put in your code and make it look “normal”.")])]),t._v(" "),s("p",[t._v("For instance, this code...")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hi there, Rik!"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...would look exactly the same as...\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nHi\nthere, Rik!"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("p",[t._v("HTML ignores all the spacing and treats it as if it’s one sentence. If we want to control how the website looks, we need to use CSS — more on that later.")])]),t._v(" "),s("p",[t._v("As HTML doesn’t care about gaps, it means we can make our code\ncleaner to read so that when we come back to it in a few months, or if\nwe’re working with another coder, it can make more sense.\nFor instance, this is hard to read:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("about.html"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("About"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nSo to make it easier, I would write it like:\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("about.html"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("About"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Indentation is a powerful tool when you start getting more complex\ncode.")])])},[],!1,null,null,null);o.options.__file="lecture04-editor.md";a.default=o.exports}}]);