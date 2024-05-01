function onDone() {
    console.log("hi there");
  }
  
  setTimeout(onDone, 2000);
  console.log("after setTimeout");
  
  for(let i = 0; i < 1000000000; i++) {
    
  }
  
  // output -
  // after setTimeout 
  // hi there
  // stuck in loop