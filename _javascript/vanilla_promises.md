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

Sometimes we dont want that. If an operation takes a long time to finish, we dont want to block all other operations until it finishes. Rather, we want to proceed with our business, and then pick op with what to do, when the long-running operation has finished.



## References

- [https://developers.google.com/web/fundamentals/primers/promises](https://developers.google.com/web/fundamentals/primers/promises) <- introduction
