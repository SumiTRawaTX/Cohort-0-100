function findSum(n) {
    let ans = 0;
    // let n = 10;
    for(let i=1; i<=n; i++) {
      ans = ans + i;
    }
    return ans;
  }
  
  let ans = findSum(100);
  console.log(ans);
  
  function sum(a, b) {
    return a+b;
  }
  
  let ans2 = sum(10, 20);
  console.log(ans2);