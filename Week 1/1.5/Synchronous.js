function sum(n) {
    let ans = 0;
    for(let i=0; i<=n; i++) {
        ans += i;
    }
    return ans;
}

let ans = sum(100);
console.log(ans);

// synchronous function means thta it will run one by one