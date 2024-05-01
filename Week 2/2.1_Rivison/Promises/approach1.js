// without using promises

function myOwnTimeout(fn, duration) {
    serTimeout(fn, duration);
  }
  
  myOwnTimeout(function () {
    console.log("hi there");
  }, 1000);
  
  // this approach uses a callback you have created a function where other people can send a callback  this is good, but could lead to callback hell
  
  
  // create a function that log something after 1s and then waits for 2 seconds to log another thing
  
  function myOwn(fn, duration) {
    setTimeout(fn, duration);
  }
  
  myOwn(function () {
    console.log("log the first thing");
    myOwn(function () {
      console.log("log the second thing");
    }, 2000);
  }, 1000);
  
  
  // callbacks lead to unnecessay indentation this is called callback hell