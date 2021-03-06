+++
title = "CSS Basics"
weight = 2
updated = 2022-03-28
+++

In HTML, we link to a CSS file by adding:
```html
<link href="css/styles.css" rel="stylesheet" type="text/css">
```

to our &lt;head&gt; tag. Keep in mind that you are not restricted to using that
"styles.css" filename, though during your time at Epicodus, it's probably better that you do. 
Your pathing will usually always be in a css/ folder, but as you progress through
class material, the pathing to that folder may vary (GHpages, static files,
etc).

It's not a bad idea to make sure your stylesheet is linked up properly by
putting something simple and easy to see in your styles.css. A simple 
```css
body {
  background-color: blue;
}
```
would do great. If you reload the page and you don't see those changes, 9 times
out of 10 will be that things aren't linked up right, so double check that first.
(A common mistake: style.css vs styles.css).

Pro-tip: If you're a perfectionist and are making frequent changes to your CSS
file, check the changes on your HTML page with your browser in
"incognito"/"private" mode or by [hard
refreshing](https://fabricdigital.co.nz/blog/how-to-hard-refresh-your-browser-and-clear-cache)
(or both). Your browser tries to do you a favor by not redownloading a webpage
whenever a small change is made, but one of those two modes will force it to do
it anyway.

An important thing to remember is the difference between an id and a class.
```css
.selector-for-a-class {
  ...
}

#selector-for-an-id {
  ...
}
```
IDs (#) are used to target an specific HTML element, Classes (.) are used to select
multiple HTML elements. More info about this and other important best practices can be found [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured).

<i>Fast 'n furious?</i> If you're ever interested in creating a &lt;div&gt; with
a specific class/id, start a line in a HTML file in VSCode by entering
<b>.your-class-name</b> or <b>#your-id-name</b> followed by "enter" and
&lt;div&gt; tags will be created with class/id values as whatever you put after
it.

As you get more and more comfortable with styling this way, make sure you get a
clear picture of what the
"[cascading](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)"
part of "cascading stylesheet" stands for, and use it to your advantage.

It's nudged at quite a bit during lessons, but
[Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/download/)
actually is a really useful styling tool (especially after you tweak selectors
using what you know about cascading). Once you get a feel for their
[container](https://getbootstrap.com/docs/5.1/layout/containers/) and
[column](https://getbootstrap.com/docs/5.1/layout/columns/) selectors, styling a
presentable webpage becomes much less time-consuming. 

Any additions/edits you'd like to see on this page? [Get involved!](@/contributing/issues.md)
