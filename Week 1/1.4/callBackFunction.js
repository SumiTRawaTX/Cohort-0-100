// callBack function 
// when a function passed as an argument to another function is called back function

// step1 can we call one function inside another function? Yes

//finds the square of the input
function square(n) {
    return n*n;
  }
  
  // finds the sum of the squares of the inputs 
  
  // function sumOfSquares(a, b) {
  //   const val1 = square(a);
  //   const val2 = square(b);
  
  //   return val1 + val2;
  // }
  
  // console.log(sumOfSquares(2, 3));



// problem with passing function into another function you have to be write a lot of code



//   function square(n) {
//     return n*n;
//   }
  
//   function cube (n) {
//     return n * n * n;
//   }
  
//   function sumOfSquares(a, b) {
//     const val1 = square(a);
//     const val2 = square(b);
  
//     return val1 + val2;
//   }
//   function sumOfCubes(a, b) {
//     const val1 = cube(a);
//     const val2 = cube(b);
  
//     return val1 + val2;
//   }
  
//   const ans = sumOfCubes(2, 3);
//   console.log(ans);



// call back function example

function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function sumOfSomething(a, b, callback) {
    console.log(a);
    console.log(b);
    console.log(callback);
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
  }
  
  const ans = sumOfSomething(2, 3, square);
  console.log(ans);
  
  const ans2 = sumOfSomething(2, 3, cube);
  console.log(ans2);