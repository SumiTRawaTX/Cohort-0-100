function promised(duration) {
    const p = new Promise(function(resolve) {
      setTimeout(resolve, duration);
    });
    return p;
  }
  
  // promises chaining
  promised(1000).then(function() {
    console.log("first is done");
    return promised(2000).then(function() {
      console.log("second is done");
    });
  });
  
  // promises chaining is the process of chaining promises together.