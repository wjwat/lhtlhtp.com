+++
title = "Branching"
weight = 5
+++

Branching typically looks a little something like this:

```js
if (something === something){
  do stuff;
} else if (something === somethingElse) {
  do something different;
} else {
  do something even differenter;
}
```
and now here comes some words.

**Equals = Equals**: Always use "===" when checking if something is the same as
something else. You
[technically](https://www.guru99.com/difference-equality-strict-operator-javascript.html)
can use "==" on occasion (like when comparing integers), but in most instances
you'll want the datatypes to match too. So stick with the triple ='s whenever
you can. **Don't use "=" when comparing values, as the single equal sign is for
assigning values, not comparing values.**

**Parentheses If You Please**: Be sure to keep your parentheses in check when
setting your conditionals, especially when you have multiple comparisons
occuring. Check it:
```js
if ((x > 1) || (y > 2)) {
  console.log("Those parentheses are on fleek.");
}
```
Not weighing the number of your closing and opening parentheses (or not having
them at all) can create some very confusing errors!

**Do This, Or Else**: Always try your best to account for every situation when
branching. They should always end with an **else** to catch every curveball that
might be sent your way. While this might seem a little overkill, teachers will
be on the lookout for those elses.

**Line 'em up**: Always think about the order of your if statements, especially
if you're chaining **else ifs**. This can be super-duper important when you get
into using
[breaks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
or returns to exit branching/functions.

Pro-tip: The **!=** (not equal to) comparison operator is often forgotten and is
the bees knees, especially when executed creatively. For example: **if (x !=
[NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN))**
(good old double negative).

**You are the One, This is True**: The conditional part of an *if statement*
returns a boolean. "If" is looking for "true" or "false" and then away it goes.
So, if you're feeling frisky, it totally makes sense to do something like this:

```js
let x = true; // boolean set to true
let y = 1; // 1 is a flag variable for true
if ((x) && (y)) { // x AND y are true, so the code carries on
  ...
}
```

There's a lot of ways a branching statement can start, but it's helpful to have
a [list of comparison
operators](https://www.w3schools.com/js/js_comparisons.asp) at the ready so you
remember how you can compare operands.

**Captain's Console.Log**: If you ever are unsure of how your code is routing
through your branching statements, a handsome **console.log("Checkpoint 1!");**
can indicate what's going where. (Yes, console.log will continue to be a very
helpful tool whenever things go sideways.)

Wishing we had different information here? [Tell us what we should
put!](@/contributing/issues.md) (after you wake up, of course.)
