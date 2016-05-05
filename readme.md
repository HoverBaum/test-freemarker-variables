# Objects and FreeMarker.js

This repo is meant to illustrate a bug with [freemarker.js](https://github.com/ijse/freemarker.js).

## case

We hand an object to `fm.render()`. In the FreeMarker template we then want to use this object to compute some things.

Use case:  
Our use case is to parse that object into a string representation which we can then use to assign it to a JavaScript variable.  
Using FreeMarker.js as a development environment and later a Java based backend.

## Experienced behavior

The Objects to not get handed over as FreeMarker objects. Parsing them to strings returns us things like `bytes:[{},{},{}]`. Hava a look at the `test.html`.

## Hackaround

 A hackaround that somewhat works is to hand Objects as strings. Convert object to string using `JSON.stringify()` and assign that to a property which we hand to the template. In the template parse this JSON back into variables.

 This should not be necessary.

### Downsides

Somehow this hackaround looses some Chinese characters in the `fm.render()`.

## Illustrating this

`test.js` illustrates a version which should work but does not.

`test2.js` illustrates the hackaround.
