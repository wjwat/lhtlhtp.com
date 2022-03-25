+++
title = "HTML Basics"
weight = 1
+++

So there you are, relaxing in a calm, sunny meadow. You gently curl back the title page of your favorite Sabrina the Teenage Witch fanfiction novel to come across this: ```<!DOCTYPE html>```

What's this? Someone sold you "Sabrina XVI" in the wrong language. Lucky for you, HTML is the language you'd want to see if you're a student at Epicodus, as it is the basic structure of our story. 

Pro Tip: After you've created an html document and opened it up with VS code, if the first thing you type is ! followed by the enter key, a basic HTML template will magically appear. It'll look something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

- The three &lt;meta&gt; lines in the header aren't important right now, so they can be deleted.  
- There's no &lt;script&gt; or &lt;link&gt; tags in the header, being as we're talking about strictly about HTML at the moment. Be sure to check out CSS Basics & JS Basics for how those tags are handled.

Take note of the indentation, as this is something they'll be looking at throughout your time at epicodus. And they aren't being sticklers about it: this makes your code easier to read and is a best-of-the-best practice for coders all across the 9142 galaxies or whatever. 

VSCode and the majority of code-specific text editors will create vertical lines whenever you open a tag and intend for the content that's inside of it. Use these lines to match up your [opening and closing](https://www.semrush.com/blog/html-tags-list/) tags.

Another healthy tip, here are a list of some of the common HTML elements that you can use to "style" your text without using CSS:
- &lt;b&gt; <b>bolds your text</b> &lt;/b&gt;  
- &lt;strong&gt; <strong>bold, but notes to another coder what's important</strong> &lt;/strong&gt;
- &lt;i&gt; <i>italizes your text</i> &lt;/i&gt;
- &lt;em&gt; <em>similar to italizes, but notes to another coder what's in emphasis</em> &lt;/em&gt;
- &lt;u&gt; <u>underlines your text </u> &lt;/u&gt;
- &lt;strike&gt; <strike>puts a strike through your text</strike> &lt;/strike&gt;
- There are also &lt;h1&gt; through &lt;h5&gt; tags to resize your text to be used like as a header.  
[There are many more in addition to these as well](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), but it's not bad to keep it simple while you can.

Should more be added to this page? [Let us know!](@/contributing/issues.md)
