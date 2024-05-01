
function getSlice(str, start, end) {
  console.log("Original String: ", str);
  console.log("After Slice: ", str.slice(start, end));
}
getSlice("Hello World", 1, 4);

// one more example

function cutIt(str, startIndex, endIndex) {
  let  newStr = "";
  for (let i = startIndex; i < endIndex; i++) {
    if(i >= startIndex && i < endIndex ) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

const value = "Sumit Rawat";

let ans = value.slice(2, 5);
console.log(ans);
console.log(cutIt(value, 2, 5));