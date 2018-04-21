---
layout: collectionpage
title: Js vanilla promises
published: true
categories: js-notes
slug: module
breadcrumb: module
---

Note: this page is about the classical javascript use of promises and not the newer ```async await```,  etc.

## introduction - what is a promise?

Execution of code in js is single threaded, meaning that code execution proceeds in consecutive order, and that the execution process will halt ('block') until an operation has finished, before it goes to the next operation.

Sometimes we dont want that. If an operation takes a long time to finish, we dont want to block all other operations until it finishes. Rather, we want to proceed with our business, and then pick up with what to do, when the long-running operation has finished. This is what promises are for. The typical use case if for communication with external systems, that may take a while to get back with an answer to a request. We encapsulate the external request in a promise, goes on with our business, and then comes back to this piece of code when we have a response. 

The name *promise* is to be understood as something that is **promised**. After the promise has been declared, we don't yet know if it will be fullfilled. It is ```pending```. If it later on is fullfilled it is ```resolved```. However, we might also NOT get what we were promised, in which case the promise is ```rejected```.



## References

- [https://developers.google.com/web/fundamentals/primers/promises](https://developers.google.com/web/fundamentals/primers/promises) <- introduction
