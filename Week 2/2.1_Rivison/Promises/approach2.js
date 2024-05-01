// syntax :->

// const promise = new Promise(function (resolve) {
//   //code{...}
// })

// example without promises

// function myOwnTimeout(callback, duration) {
//   setTimeout(function() {
//     callback();
//   }, duration);
// }

// myOwnTimeout(function() {
  
// }, 10000);


// same example with promises

function promisefiedMyOwnTimeout(duration) {
    const p = new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, duration)
    });
    return p;
  }
  
  // const ans = promisefiedMyOwnTimeout(1000);
  // console.log(ans);
  
  // output : Promise{< pending >}
  
  // for fetching the Promise we not use log we use .then() for fetching the promise
  
  // fetching process or calling promise
  
  const ans = promisefiedMyOwnTimeout(1000);
  ans.then(function() {
    console.log("timeout is done");
  });
  
  // their are two steps for promises
  // 1. create a promise
  // 2. call the promise by using .then()