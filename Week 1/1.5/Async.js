function sum(n) {
    let ans = 0;
    for(let i=0; i<=n; i++) {
        ans +=i;
    }
    return ans;
}

function sum100() {
    console.log(sum(100));
}

setTimeout(sum100, 5000);
console.log("hello world");






// another example of Async
const fs = require('fs');
//filesystem module

fs.readFile("a.txt", "utf-8", function(err, data) {
  console.log(data);
});

console.log("hi there");