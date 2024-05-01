
function log1() {
    console.log("hello world");
  }
  
  function log2() {
    console.log("hello world2");
  }
  
  function hey(fn) {
    fn();
  }
  
  hey(log2);
  
  
  // when a function is passed as an argument to another function, that function is called a callback function.