// creating a http server
// express
// node default library => no


const  express = require('express');
const app = express();

function sum(n) {
    ans = 0;
    for(let i=0; i<=n; i++) {
        ans += i;
    }
    return ans;
}

app.get('/', function(req, res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi there your ans is " + ans);
})

app.listen(3000);