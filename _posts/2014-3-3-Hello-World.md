---
layout: post
title: js design patterns - the module pattern
published: true
---

JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components. This provides loose coupling to support well-structured code. The module pattern allows for private and public access levels.

References:

- [http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html) <- the most thorough
- [https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript )<- practical advantages/disadvantages
- [http://developer.telerik.com/featured/leveling-up-your-javascript/?utm_source=javascriptweekly&utm_medium=email](http://developer.telerik.com/featured/leveling-up-your-javascript/?utm_source=javascriptweekly&utm_medium=email)
- [https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)


## Basic module declaration

The module pattern utilizes Immediately-Invoked-Function-Expressions (IIFE), which is a function expression 
that is executed rigth after its creation. 

The basic syntax for a module is:

```js
(function () {
  // some private and/or public code
  // see examples further down
}());

```
{: .codepen-able}

The outer parentheses ```()``` tells js that we now have an expression. 
Inside the parentheses we then have a function declaration, an anonymous (unnamed) function.
...so it is an expression that contains a function declaration: ```function () {}``` 
The extra parentheses () right after the function declaration: function () {} ```()```, tells js to 
invoke the declared function immediately (we don't have to call it first):

```js
(function () {
  console.log('im invoked immediately - no need to call me like a normal function');
}());
```
{: .codepen-able}


