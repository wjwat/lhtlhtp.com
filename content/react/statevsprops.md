+++
title = "Components vs State vs Props"
weight = 2
updated = 2022-08-07
+++

As we've learned, there are two types of components that are used in React. 

First, the easy/fun one: **Functional Components**. All it really does is import the React Libraries using 'import React from "react"', import any children components, and call a function that returns a div or fragment and some JSX (HTML & JS).

```js
import React from "react";
// import SomeChildComponent from './PathTo/SomeChildComponent';

export default function ExampleFunctionalComponent() {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

```

LHTP mentions that Functional Components can not change state in any way. Nor should they have to. They're there to return JSX, not witchcraft. They can, however, use a read-only version of state called props to allow us to read state from a parent Class Component. 

Let's change a few things so that our Functional Component brings in props as an argument, and then calls a key of props called "mysteryString", which will eventually be set to 'Hello World!'.

```js
import React from "react";

export default function ExampleFunctionalComponent(props) {
  <>
    <h1>{props.mysteryString}</h1>
  </>
}
```

Those props are going have to be sent to it from a different, more complicated and less fun **Class Component**. Bare with me, but let's pretend App.js is the entry point of our React App.

```js
import React from "react";
import ExampleClassComponent from "./ExampleClassComponent";

export default function App () {
  return (
    <ExampleClassComponent />
  )
}
```

That'll setup the class component below, which is called from App.js, then sets state, and sends part of it as a prop to our ExampleFunctionalComponent:

```js
import React from "react";
import ExampleFunctionalComponent from "./ExampleFunctionalComponent";

export default class ExampleClassComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = { stateString: 'Hello World!'}
  }
  render() {
    return (
      <ExampleFunctionalComponent
        mysteryString = {this.state.stateString} 
        />
    )
  }
}
```

Now we're glossing over why we need to use super(props) and a constructor, but yeah. We're going to do that. That's how it goes. So assuming the class component is the parent of the ExampleFunctionalComponent one, it will first set an initial state to { stateString: 'Hello World!' }. It then returns the ExampleFunctionalComponent and sends mysteryString (which has a value of 'this.state.stateString') to it using props.

So on the functional class side, it sees props (scroll up and you'll see it used as an argument) being carried over and can be used like an object. So we can say 

```js
return (
  <h1>{props.mysteryString}</h1> // 'Hello World!'
)
```

Hopefully that didn't make you more confused. Did it? Let us know.

Buckle up for "How to change state".