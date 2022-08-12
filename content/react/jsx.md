+++
title = "JSX" 
weight = 2 
updated = 2022-07-29 
+++

### I'm JSX-y and I know it

JSX is pretty awesome, being it's as handy as a [template
engine](https://www.educative.io/answers/what-are-template-engines) but includes
all that great Javascript functionality you've come to know and love. While you
aren't required to use JSX when you build React Apps, it's a really neat tool
that's hard not to use. Babel is responsible for converting JSX into
fragments/elements that can be seen on the DOM.

Whenever you use curly braces inside your return fragment, you're calling for
Javascript. For example,

```js
...
return (
  <React.Fragment>
    <h4>1 + 1 = {1 + 1}</h4> // 1 + 1 = 2
    <h3>"House" is {'house'.length} letters long</h3> // "House" is 5 letters long.
  < />
)
```

This also means that values that are stored in variables can also be called.

```js
export default function Example() {
  const cat = {
    breed: 'Orange Tabby',
    age: 8,
    name: 'Garfield'
  }

  return (
    <React.Fragment>
      <p> I have a {cat.breed} cat named {cat.name}. He is {cat.age} years old.</p>
      // I have a Orange Tabby cat named Garfield ....
    </>
  )
}
```

You can also use it in all sorts of different ways, like if you wanted a
particular style to be reused throughout your component/code:

```js
...
const myStyle = {
  fontSize: 300,
  fontWeight: bold,
  color: 'blue'
  };

return (
  <React.Fragment>
  <p style={myStyle}> BIG TEXT </p>
  < />
)
...
```

Take note that styling happens a tad bit differently in React. When the fragment
is compiled, it looks for the camelCase version of the usual CSS properties...
ie font-weight = fontWeight. "class" has also been replaced with "className" in
the instance that you want an element on the DOM to have a specific class.
There's a few other thisses and thats that are also different when you play with
that sort of thing (and React will let be sure to let you know when it can't
compile).

You can also see less-consistent variables using state, but we'll look
more at that when we look at components. But the idea is, you can pass an object
(called state) from component to a different (children) components using
something called 'props'. 