+++
title = "Looping"
weight = 6
+++

There are two types of loops in Javascript that are mentioned during your time at Epicodus. The [forEach loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) comes first, which corresponds to an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) type.

```js
const x = [1, 2, 3, "cat", "dog"];
x.forEach(element => {
  console.log(element);
})

expected output: 1, 2, 3, "cat", "dog"
```
Keep in mind that "element" at the beginning of your forEach can be renamed whatever helps your code make the most sense upon revisiting. (Even though the majority of times, "element" makes sense.)

**Gimme a break!** Unlike other loops at your disposal, forEach loops cannot be broken out of using break. It must run out the loop, else you'll be thrown an error. 

There are ways that forEach can be very helpful and is a great way of introducing looping as a concept. This primarily because if the parameters of other loops aren't set up correctly, it'll loop forever, your browser/text editor will run out of memory and the world will end. (Not really, you'll just usually need to restart a crashed program.)

The other, and usually preferred loop, is the [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration), which allows you to set your own boundaries.

**for (set value, condition, adjust value)**

```js
for (i = 0; i < 5; i++){
  console.log(i);
}

expected output: 0, 1, 2, 3, 4
```

**Zero is the loneliest number**: Be careful when looping through arrays, as the starting index of an array is 0 and the .length method starts counting from 1. You can control this differently by tweaking your conditional.

Pro-Tip: For loops have the potential to get really, really complicated. *(Psst: Like when you have a loop nested in a loop!)* When a for loop starts, you can set multiple values, have complicated conditionals, and have multiple values adjusted after every iteration. Definitely make sure you have a solid understanding of what's going on if you decide to go that route. Alternatively, there are a few other [looping types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) that you can use depending on what you want seen done, but it won't be asked for during this course. 

The video below, while not providing any actual coding instruction, is a nice way to understand looping and their relevance:

{{ youtube(id="wxds6MAtUQ0") }}
