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
  // some private and/or public code, which we'll come to later
}());
```
{: .codepen-able}

Syntax breakdown:

- The outer parentheses ```( ...function(){}()... )``` tells js that we now have an _expression_. 
- Inside the parentheses we then have a function declaration, an anonymous (unnamed) function. ```function () {}``` 
- ..so it is an expression that contains a function declaration. 
- The extra parentheses () right after the function declaration: function () {} ```()```, tells js to invoke the declared function immediately (we don't have to call it first):

```js
(function () {
  console.log('im invoked immediately - no need to call me');
}());
```
{: .codepen-able}

You can assign the module to a variable like this:

```js
let myModule = (function () {
  console.log('im also invoked immediately, by the way');
}());
```
{: .codepen-able}


This enables you to reference the module later, which is neccesary if you want to use it in an OOP-like syntax like: myModule.someMethod(), or you need to expand it or add sub modules later in your code. 

A use case for NOT assigning the module to a variable would be if you just want the module to run immediately on page load and do a bunch of stuff to the DOM, adding event listeners, functionality, etc. without interacting with other pieces of code. In this way a user can just reference the js file and be done, while you get the benefit that the modules internal functions and properties are kept out of global scope.

However, you will still be able to return something from the module to the global scope, so that other pieces of code can get a handle to something inide the module and intercat with it (it just doesn't hinge on a module name):

```js
(function () {
  return someNewGlobalVar = 'a simple global string variable created inside a module '; 
  // the return value could also be an object with properties / methods, etc.
}());

console.log(someNewGlobalVar); // someNewGlobalVar now accesible in global scope```
```
{: .codepen-able}







