---
layout: collectionpage
title: Js vanilla promises
published: true
categories: js-notes
slug: module
breadcrumb: module
---

Note: this page is about the classical javascript use of promises and not the newer ```async await```,  etc.

## Introduction - what is a promise?

Execution of code in js is synchronous, meaning that code execution proceeds in consecutive order, and that the execution process will halt ('block') until an operation has finished, before it goes to the next operation.

Sometimes we dont want that. If an operation takes a long time to finish, we dont want to block all other operations until it finishes. Rather, we want to proceed with our business, and then pick up with what to do, when the long-running operation has finished. This is what promises are for. 

The typical use case is communication with external systems, that may take a while to get back with an answer to a request. We encapsulate the request ti the external system in a promise, goes on with our business, and then comes back to this piece of code when we have a response. 

The name *promise* is to be understood as something that is **promised**. After the promise has been declared, we don't yet know if it will be fullfilled. It is ```pending```. If later on it is fullfilled it is ```resolved```. However, we might also NOT get what we were promised, e.g. because of an error, in which case the promise is ```rejected```. These are the three states of a promise: pending, resolved or rejected.

## Introduction - basic syntax

```js
var p = new Promise(function(resolve, reject) {
	
	// Do an async task async task and then...

	if(/* good condition */) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function() { 
	/* do something with the result */
}).catch(function() {
	/* error :( */
})
```
{: .codepen-able}



## References

- [https://scotch.io/tutorials/javascript-promises-for-dummies](https://scotch.io/tutorials/javascript-promises-for-dummies) <- best basic intro so far, also covers async/await.
- [https://davidwalsh.name/promises](https://davidwalsh.name/promises) <- another good intro, also have som tips on best practices.
- [https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261) <- more in-depth intro, also explores error handling.
- [https://developers.google.com/web/fundamentals/primers/promises](https://developers.google.com/web/fundamentals/primers/promises) <- another intro.



