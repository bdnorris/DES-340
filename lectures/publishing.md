# Publishing a site to the web

## Hosting

To put your site online, you need "hosting." You have to get your site onto a web server. A web server is basically just a computer that is configured to allow HTTP requests from anyone with a browser, and serve up the site's HTML and associated files. 

### Server side languages and databases vs. static sites

A majority of websites on the internet are served by some sort of server side programing language. This can be PHP, Ruby, C#, or even server-side Javascript. The programming around these is often to facilitate retrieving information from a database, then building the HTML dynamically before serving it back to you. 

But in the end, no matter what is happening on the server, it's still just HTML that's being sent to the browser. What you've been learning to build in this class is called a **"static"** site. "Static" here just means the opposite of "dynamic", as in, it doesn't need to be built dynamically by the server, it can just be served as is. 

[Static Web Page (Wikipedia)](https://en.wikipedia.org/wiki/Static_web_page)

### Classic shared hosting and FTP

#### FTP

### Newer types of hosting

There have been a lot of new products and services in the past few years for publishing static sites. Here's a few you might want to try.

#### Github

Learning how to use Github has a bit of learning curve. Github is way to host your code, but also will let you publish sites as well. You can do quite a bit with a free account, or pay for more features.

The "git" in Github is a program that lets you track and manage code and code history. 

> Git (/ɡɪt/) is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.

Learning git is beyond the scope of this class, but there are Codecademy courses and lots of other ways to learn on your own. Once you have a static site on Github, you can publish to URL it gives you automatically. You can have one custom domain pointing to this on a free account, more if you pay.

#### Netlify

Netlify is my new favorite thing. It's meant to run off of git projects, but it also has a drag and drop interface where you can upload a site from your computer. And it just works.

[They have a generous free tier](https://www.netlify.com/pricing/) and Netlify will even do form collection for you. 

#### CodePen Projects

CodePen has a projects mode