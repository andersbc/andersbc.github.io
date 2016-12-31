---
layout: post
title: js design patterns - the module pattern
published: true
---

JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components. This provides loose coupling to support well-structured code. The module pattern allows for private and public access levels.

References: 
- http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html <- the most thorough
- https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript <- practical advantages/disadvantages
- http://developer.telerik.com/featured/leveling-up-your-javascript/?utm_source=javascriptweekly&utm_medium=email
- https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know



```js

/* Module public and private methods/properties
-----------------------------------------------
A module can encapsulate all kinds of private methods, properties (e.g. maintain private state) that we don't 
want to spread around and pollute global scope. Only the return value is public accessible:
*/

(function (param1, param2) {
  console.log(param1); // outputs 'first parameter'  
  console.log(param2); // outputs 'second parameter'    
}('first parameter', 'second parameter'));

let summationModule = (function () {
  // private stuff - inaccessible to the outside:
  let total = 0;
  add = function ( numberToAdd) {
    total = total + numberToAdd;
  };
  
  // public stuff:
  return {
    getTotal: function () {return total;}, 
    addNumber: function (number) {
      add(number); 
    }
  } 
}());

```
{: .codepen-able}
