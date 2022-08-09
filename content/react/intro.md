+++
title = "Intro to React"
weight = 1
updated = 2022-07-29
+++

Our unknowing mothersite, learnhowtoprogram, is pretty thorough about explaining
some of the advantages of React, including using a Virtual DOM and using JSX to
combine HTML and Javascript.
[Here](https://www.learnhowtoprogram.com/react/react-fundamentals/using-create-react-app)
they also mention that "some developers build React from scratch" but quickly
move on to using **npx create-react-app** so you can get on with your day. I'd
argue that looking at the barebones of what's going on might be helpful.

### Hello again, World, the easy ("wrong") way.

React and ReactDOM CDNs are avaliable
[here](https://reactjs.org/docs/cdn-links.html) so you can include those
libraries in your project simply by using script code. Babel also has a
[CDN](https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx) so
we can use JSX. We can call all three of them in the head of our html file:

```html
<head>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js" />
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" />
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js" />
</head>
```

The documentation mentions that once Babel's script is included, you can use JSX
in any script tag by adding **type="text/babel"** to it. So the body section
could be as simple as:

```html
<body>
  <div id="root"></div>
  <script src="index.js" type="text/babel"></script>
</body>
```

I've also included a div tag with the id "root" so we can point to where we want
our rendered elements to go. Hopefully most of this dance looks a little
familiar. In a seperate index.js file, we can now use JSX and the ReactDOM
library to work some magic.

```js
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
```

This takes your JSX code as its first argument and then points to where you
want it rendered in the second argument using vanilla JS. 

In the above codeblock, we are only sending one element (an h1 tag
with some words), so it renders just fine. However, in the instance where you
have multiple elements and lines of code, you need to wrap them all in a div or
React.Fragment. It might look a little something like this:

```js
ReactDOM.render(
  <div>
    <h1>Cats and boots and cats...</h1>
    <p>and boots.</p>
  </div>,
  document.getElementById("root")
);
```

If you don't wrap it in a div or React.Fragment, React has a small panic attack
you'll be visited with some of our favorite red error text when it attempts to
compile.


(If you do use **create-react-app** to start a project, if you look in
/public/index.html and /src/index.js, you'll see that underneath everything
else, that's what's happening when you load it up.)
