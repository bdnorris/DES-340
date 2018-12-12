# Code Editor and formatting conventions

> When we’re making our files, what program do we make them in? Is
there a special program we need? If so, is it expensive?
Luckily for us, all the files that we’ll be making are essentially text files
with a different extension. You can open them in Notepad, TextEdit, IA
Writer or any program that you would write plain old text in.

> Make a folder on your computer, then store all your code and assets
in there.

> There are, however, easier ways to edit code. There are specialist
programs that make it simpler to see what’s happening when you write
code.

> Some of the most popular code editors include Atom (atom.io),
Sublime Text (sublimetext.com), Coda (panic.com/coda) and
Dreamweaver (adobe.com/dreamweaver). Some are free to download,
some are paid for.


## Whitespace

> We mentioned earlier that HTML is all about content and CSS is all about style. Because of this, HTML doesn’t really care about how your code looks, it will ignore any white space you put in your code and make it look “normal”.


For instance, this code...
<p>Hi there, Rik!</p>
...would look exactly the same as...
<p>
Hi
there, Rik!</p>


> HTML ignores all the spacing and treats it as if it’s one sentence. If we want to control how the website looks, we need to use CSS — more on that later.

As HTML doesn’t care about gaps, it means we can make our code
cleaner to read so that when we come back to it in a few months, or if
we’re working with another coder, it can make more sense.
For instance, this is hard to read:
<p><a href="about.html">About</a></p>
So to make it easier, I would write it like:
<p>
<a href="about.html">About</a>
</p>

Indentation is a powerful tool when you start getting more complex
code.