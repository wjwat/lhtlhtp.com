+++
title = "JS Basics"
weight = 3
updated = 2022-03-28
+++

While there's some dispute as to where the link to your JS should go, Epicodus
teaches that we call to our script file in our HTML file by putting
```html
<script src="js/scripts.js"></script>
  ```
in the &lt;head&gt; tag. <i>(If you use an off-site script that specifies
putting it at the end of your &lt;body&gt; tag, do that instead.)</i> Note that
unlike linking to our CSS file, &lt;script&gt; needs to have a closing tag.

[Scoping](https://www.w3schools.com/js/js_scope.asp) your variables is crucial
in Javascript, as it allows us make code that is more
[secure](https://medium.com/@gemma.stiles/understanding-scope-in-javascript-40ab3763c2f8)
and more readable. So if you have any attachment to the "var" keyword, best send
out your last few love letters to it. "var" is no longer used because it has no
scope and can be used anywhere. Teachers will come at you like ninjas if they
see "var" or catch any free-roaming variables. Be prepared and do your best to
learn [const/let and their
scope](https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/).

When you call a function, the values sent in the () are referred to as
[arguments](https://www.w3schools.com/js/js_function_parameters.asp) (the names
of those arguments are referred to as parameters). The order of those arguments?
Big deal.

```js
orderOfArguments("pb", "&", "j"); // call function

function orderOfArguments(first, second, third) {
  console.log(first);
  console.log(second);
  console.log(third);
} // would console.log "pb" "&" "j"
```

When you're naming a variable or function, be sure to name them in [camel
case](https://techterms.com/definition/camelcase): (ie: "nameOfVariable" or
"functionName"). No spaces, first letter is lowercase, and then every other word
uppercase. 

If you're looking to return a value from a function, the
[return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
statement is your friend. When your code reaches it, it will exit/stop the
function it's running and send back whatever you've specified to return (even if
it doesn't return anything!).

[Methods](@/javascript/methods.md) are amazing tools to arm yourself with (even
early on), as they help so much with manipulating data without having to exhaust
yourself writing code.

W3Schools has a pretty useful page on [JS
operators](https://www.w3schools.com/js/js_operators.asp), if you need to remind
yourself how to increment or return remainders using them. Aunt Sally will be
ecstatic when she hears you've been thinking about her: remember that [order of
operations](https://www.mathsisfun.com/operation-order-pemdas.html) is used when
calculating. (For example: 2 + 4 * 2 = 10, not 12)

Javascript concepts sometimes require some additional explanation, so check out "Intermediate JS" for more gems. 

Think we're wrong? [Come at us](@/contributing/issues.md)!