---
layout: collectionpage
title: Js design patterns - the module pattern
published: true
categories: js-design-patterns
slug: module
breadcrumb: module
---

Note: this page is about the classical javascript 'module pattern' and not the specific es6+ module construct, with exports/imports etc.. 

JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components. This provides loose coupling to support well-structured code. The module pattern allows for private and public access levels.

In OOP terms the module pattern gives us a singleton, i.e. a single-instance structure that cannot be instantiated more than once. So the module pattern cannot, in itself, be used to instantiate multiple new objects based on the module. It only gives you one, single object.  (I'm sure there are some workarounds where you use the module as a container and in that container can construct new objects..<- check up on that)   

## Basic module declaration

The basic syntax for a module is:

```js
(function () {
  // some private and/or public code, which we'll come to later
}());
```
{: .codepen-able}

The module pattern utilizes Immediately-Invoked-Function-Expressions (IIFE), which is a function expression 
that is executed right after its creation. 

### Syntax breakdown:

- The outer parentheses ```( ... )``` tells js that we now have an _expression_ (a function expression). Without these parens the ```function``` keyword would be interpreted as the beginning of a function declaration: ```function aName (){...}```, which it is not, i.e. it is not a statement of a function, that you will reference later 
- Inside the parentheses we then have the function definition, an anonymous (unnamed) function: ```function () {}``` followed by an extra pair of parentheses ```()```.
 
The extra parentheses after the function declaration  ``` ... ()```, tells js to invoke the function immediately (we don't have to call it first):

```js
(function () {
  console.log('im invoked immediately - no need to call me');
}());
```
{: .codepen-able}

The syntax might seem slightly odd at first, but you use the same principle when you declare a function and then call it: 

```js
// declare a function
let test = function () {
	alert ('hi!');
}
// To invoke the function, you reference it followed by a pair of parentheses: 
test();
```
{: .codepen-able}

If we substitute the reference ```test``` with the function declaration itself, we could compress the example into one statement:

```js
let test = function () {
	alert ('hi!');
}(); 
```
{: .codepen-able}

... a function invoked immediately after it is declared.


## Assigning the module to a variable

You can assign the module to a variable like this:

```js
let myModule = (function () {
  console.log('im also invoked immediately, by the way');
}());
```
{: .codepen-able}

This enables you to reference the module in other pieces of code, which is neccesary if you want to use it in an OOP-like syntax (e.g. ```myModule.someMethod()```), or you need to augment it or add sub modules other places in your code (more on that later). 

### A use case for NOT assigning the module to a variable

A use case for NOT assigning the module to a variable would be if you just want the module to run immediately on page load and do a bunch of stuff to the DOM, e.g. adding event listeners, functionality, etc. but don't need other pieces of code to have a handle on the module itself. 

In this way a user can just reference the js file with the module and be done, while you maintain the benefit of a self contained package, with its internal functions and properties kept out of global scope.

Either way you can return something from the module into the global scope (it just doesn't hinge on a module name):

## Returning something from the module


```js
(function () {
  return someNewGlobalVar = 'a simple global string variable created inside a module '; 
  // the return value could also be an object with properties / methods, etc.
}());

console.log(someNewGlobalVar); // someNewGlobalVar now accesible in global scope```
```
{: .codepen-able}

## References

- [http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html) <- the most thorough
- [https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript )<- practical advantages/disadvantages
- [http://developer.telerik.com/featured/leveling-up-your-javascript/?utm_source=javascriptweekly&utm_medium=email](http://developer.telerik.com/featured/leveling-up-your-javascript/?utm_source=javascriptweekly&utm_medium=email)
- [https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)
- [https://www.sitepoint.com/modular-design-patterns-in-javascript/](https://www.sitepoint.com/modular-design-patterns-in-javascript/) <- modules are singletons etc.
- [https://www.kenneth-truyers.net/2013/04/27/javascript-namespaces-and-modules/](https://www.kenneth-truyers.net/2013/04/27/javascript-namespaces-and-modules/) <- namespacing wtih modules
