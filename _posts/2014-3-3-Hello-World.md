---
layout: post
title: You're up and running!
published: true
---

Next you can update your site name, avatar and other options using the _config.yml file in the root of your repository (shown below).

![_config.yml]({{ site.baseurl }}/images/config.png)

The easiest way to make your first post is to edit this one. Go into /_posts/ and update the Hello World markdown file. For more instructions head over to the [Jekyll Now repository](https://github.com/barryclark/jekyll-now) on GitHub.


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
