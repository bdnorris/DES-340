<!-- Our efforts so far have been concerned with two of the three parts of building the front-end of web pages — HTML and CSS.
These are what make up the content and style of pages. Up to now we’ve only been able to add one level of interaction — CSS states such as hover. How do we add more interactivity? Step forward Javascript!
This is what gives us the ability to alter a page after it has loaded for our users. The best way to think about where to use Javascript is to think “when the user clicks ...”, “when the user submits a form ...”, “when the user scrolls ...”, “when the user resizes the browser ...”, etc.
All of these are actions, the third and last part of front-end web development.
In other words, HTML is the content, CSS is the style, Javascript is the user action.

A quick history of Javascript — and
what is Java?
Back in the mid 1990s, before the days of Adobe Flash (or Macromedia
Flash as it was called then), there was another way to integrate
miniature media programs into web pages. This was Java Applets.
Java is a programming language created in the early 90s, originally
with the intent to make interactive television. After a few years, it was
realized that this technology could be used in the fast growing World
Wide Web. Over a few years, all the major browsers added the ability to
use these miniature programs in the HTML of web pages. Java was the
programming language and applet just meant a small application.
As more sites used Java applets in their pages, browser makers decided
there needed to be a way to control these Java applets, in case they took
a while to load, or if two applets needed to communicate. They wanted
to make a “glue” between HTML, CSS and Java applets.

One of the large browser companies at the time, Netscape, hired a
programmer called Brendan Eich to make this “glue” programming
language. Initially, he called it Mocha, since Mocha and Java were both
coffee beans. When it was released, Netscape first changed its name to
LiveScript, then a few months later to Javascript, to reflect the fact it
was intended to work with Java applets.
The code behind Java applets and Javascript look completely different.
There isn’t too much in common apart from the name. It was a branding
decision by Netscape to increase the new language’s popularity with
Java developers.

Think of it like a grape and a grapefruit — both have similar names but are completely different. Or a horse and a horsefly.
Over time, Java applets became less and less popular, partly due to Adobe’s Flash, which is a quicker and powerful version of Java applets. Then over even more time, Flash became less popular, partly due to its removal from the iPhone system and partly due to Javascript itself getting quicker and more powerful over the course of 20 years.
So whenever you hear anyone talk about HTML, CSS and Java, you can put on your best “well, actually” voice and tell them: “I think you mean Javascript, not Java”. Cue smug feeling.

One of the harder languages to learn
As Javascript was invented for a slightly different purpose than what it is used for today, this means the thought process and planning for it has been a little less structured than other languages.
Think of Javascript as a small house that, over years, has more and more extensions and wings built on to it, to the point where it looks like a bit of a mess. And because of this, it means that Javascript itself can be a difficult language to learn. You’ll notice a lot of (round brackets) and {curly brackets} that can look quite confusing at first, but once we understand what they actually do, it hopefully gets a little clearer.

On the back-end of web sites, us coders have the choice of a variety of
languages to work in, it depends partly on whether the tool is right for
the job and partly if we like the language.
Unfortunately for us coders, we are tied to Javascript for aspects of the
front-end. We don’t have a choice in what to use for the web’s “action”
language, so we have to know it to be a front-end web developer.
There are, however, tools we can use to make it easier. We will talk soon
about jQuery, which means that a lot of common tasks we would need
to do get reduced from tens of lines of normal Javascript into one line
of jQuery code. We’ll cover this later in the guide.

Starting with Javascript
The one thing to remember with Javascript is you are essentially holding and changing data. That data could be HTML, that data could be CSS, that data could be a username, but all Javascript (and all coding languages) does is change things.
So first we need to know how to store data in Javascript, then later, how to change data.

Numbers
The first thing we can store data as is a number. Numbers are written just as if you would on a piece of paper. They can be decimal numbers, they can be negative numbers, and they can be negative decimal numbers:
12
-12
1.23
-1.234

Strings
The next thing we can store data in is a string, which is essentially just
a set of letters, numbers and characters. The way we store data in a
string is by using double quote marks around the data:
"riklomas"
"Rik Lomas"
"Welcome to SuperHi"
"p@ssw0rd1"
Examples of data you might want to store in a string are usernames,
welcome messages, error messages and blog post titles.
Booleans

Booleans are named after George Boole, the 19th Century English
mathematician who invented a lot of the formal ideas behind the
logic that computers still use. As Mr. Boole was all about logic, the
booleans are also about logic. There are two special words, without any
quotation marks:
true
false
Notice they’re both all lower case letters. Javascript knows to look out
for these two words as they’re special.

Examples of where we might use booleans are to check if something
is sold out, to check if a user is logged in, or to check if a username is too long.
Arrays (or lists)
With our numbers, strings and booleans, we might want to store them in a list. This could be a list of numbers, a list of strings or a mixture of everything.

To make a list we use square brackets to start and end the list, then a comma to separate each item in a list:
["bacon", "sausages", "eggs"]
[48, 32, 15, 3]
[true, true, false]
["red", false, 12.23]
To make an empty list, for example if we were having an empty shopping basket, we can use:
[]

Objects
Arrays are used to describe multiple items that are grouped together,
but sometimes we might want to describe one single item. For instance,
if we are describing a user, it would be just me, one single user, versus
an array of multiple users.
To describe a user, we can use curly brackets to start and end the object
we’re describing. Then inside we use a “key” to give the attributes we
want to describe, then a colon, then the “value” of the attribute. Think of
it a little like a CSS rule. We then separate them with commas:
{
name: "Rik Lomas",
username: "@riklomas",
age: 32,
admin: false
}

Notice how the “keys” don’t have quotation marks around them, only
the values that are strings do. One of the values is a boolean (I’m not an
admin) and one of the values is a number (I’m getting old).
One more example would be of a course that we run:

{
title: "Introduction to HTML",
teacher: "Lawrence Gosset",
isSoldOut: false,
students: ["Holly", "Sarah", "Dani"],
}
Notice here that we have a key — “is sold out” — that we have condensed down to one weird word. Keys have to be just one word, no spaces allowed.
Also notice that we have two values that are strings, one that is a boolean and the last value is an array. We can mix and match our objects and arrays so we could have an array of objects or a objects with arrays in it. Or even an array of objects that contain arrays. Or an array of arrays. Phew!

Variables
A lot of the time we might want to hold on to data so that we can change it later on. To do this, we tell the data to attach itself to
a variable.
The name “variable” sums it up pretty well — it’s a bit of data that could change later.

The way we say something is a variable is we tell a word that we make
up to be the variable, then tell it to equal something:
var username = "@riklomas"
We always use “var” then a space to start a variable. Then we give the
variable a name (no quotes!) that we assign to it. In this case we called
it username as we felt that was most appropriate, but we could have
called it “ourbestusernameever” if we wanted to. We then say it’s equal
to something — a string, a number, an array, an object, anything we
want to store:

var age = 32
var canEdit = false
var colors = ["red", "blue", "white"]
Here we’ve added three variables, one called “age”, one called “canEdit”
(has to be one word), then one called “colors”. All are equal to
completely different things.
Later, we might want to update our variable to be something different.
We might want to change the age, name, colors, etc. To do this, we don’t
need to use “var” again, we can just use the name of the variable:
var age = 32
age = 33
age = 52

At the end of this code, “age” will now be 52, not 33 or 32. We only need
to say “var” once.
Chapter 13 299
We can also alter the variable based on the variable itself:
var slide = 1
slide = slide + 1

At the end of this code, “slide” will be 2. Originally it was one, but then we said add one to “slide” and overwrite the variable “slide”. We can also subtract, multiple, divide and more to our variables:
var account = 900
account = account - 1000
My variable “account” in my bank website is now -100. This is also a reflection of my real life bank account. If I wanted to double my real life bank account, I could use the multiply sign “*” or divide with “/”. So:
var account = 900
account = account * 3 / 2

Here, I’m tripling the original account number, then dividing the total by two (account is 1350 at the end).
Numbers aren’t the only thing we can add together. We can also add strings to together:

var welcome = "Hi there, "
var name = "Rik"
var message = welcome + name
Here we’re making a string called welcome and a string called name,
then we’re making a brand new variable called message which adds
the two previous strings together. The output for the variable message
would be “Hi there, Rik”.
We could also add numbers to strings too and they automatically
convert into strings:

var slide = 2
var max = 4
var text = slide + " out of " + max
The variable called “text” would have the output of “2 out of 4” — we’re
adding something that changes (2) to something that stays the same
(“ out of “) to something that changes (4). Unfortunately, you can’t
subtract, multiply or divide strings, Javascript doesn’t know what you
mean when you say divide “rik” by 2.

var slide = 2
var max = 4
var text = slide + " out of " + max
The variable called “text” would have the output of “2 out of 4” — we’re
adding something that changes (2) to something that stays the same
(“ out of “) to something that changes (4). Unfortunately, you can’t
subtract, multiply or divide strings, Javascript doesn’t know what you
mean when you say divide “rik” by 2.

Adding your scripts
to your pages
At the moment, our fake code has just lived in the ether. We haven’t
set a place for us to write our code within our web pages. How do we
do this?
The first thing we need to do is add our code into a file. Just like HTML
and CSS, we need to use an extension that the browser knows is a
Javascript file. We are going to use the “.js” file extension. For instance
if we are making a slideshow Javascript file, we might want to call this
“slideshow.js” or maybe some kind of parallax effect in the file called
“parallax.js”.
Next we need to add it to the web pages we want. Not all pages will
need all Javascript files. For instance, it might just be your homepage
that needs the slideshow file.
To do this we need to pull our script into our HTML using a script tag.
We add this at the very bottom of our HTML content:
Chapter 13 313
<footer>
Footer goes here...
</footer>
<script src="slideshow.js"></script>
<script src="parallax.js"></script>
</body>
</html>
Here we are adding two scripts to the bottom of our HTML,
one with the filename “slideshow.js” and the other with the filename “parallax.js” — inside our files is where we will write our Javascript code.
Why do we add the code to the bottom of our HTML? We need the rest of our HTML and CSS to load before we can mess around with it. -->