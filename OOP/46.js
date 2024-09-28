"use strict"

// console.log(this); //Window obj  = Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// console.log(this === window);

function myFunction() {
  console.log(this);
}

myFunction();
