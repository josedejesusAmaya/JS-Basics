Bubbling
The bubbling principle is simple.

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
https://javascript.info/bubbling-and-capturing

event.target
Note the differences from this (=event.currentTarget):

- event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
- this – is the “current” element, the one that has a currently running handler on it.

https://javascript.info/bubbling-and-capturing#event-target