function square (n) {
    return n * n;
  }
  
  function cube (n) {
    return n * n * n;
  }
  
  function quad (n) {
    return n * n * n * n;
  }
  
  function sumOfSomething(a, b, fn) {
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;                      
  }
  
  let ans1 = sumOfSomething(2, 3, square);
  console.log(ans1);
  
  let ans2 = sumOfSomething(2, 3, cube);
  console.log(ans2);
  
  let ans3 = sumOfSomething(2, 3, quad);
  console.log(ans3);
  
  // when a function passed as an argument to another function is called callback function.
  
  // both example working fine but repeating process in first example is not a good practice.
  // so we use callback function.