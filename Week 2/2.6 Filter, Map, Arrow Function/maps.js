// given an array, give me back a new array in which every value is multipled by 2

// input - [1, 2, 3, 4, 5];
// output - [2, 4, 6, 8, 10];

// const input = [1, 3, 5, 7, 9];
// const newArray = [];

// for(let i=0; i<input.length; i++) {
//     newArray.push(input[i]*2);
// }

// console.log(newArray);




// uisng map function

const input=[1,2,3,4,5];

const ans = input.map(function (i) {
    return i*2;
});

console.log(ans);