const express = require(`express`);
// const port = 3000;
const app = express();

const port = process.env.PORT || 3000;
app.user(express.json());

app.post('/backend-api/conversation' function(err, res) {
    const message = req.query.message;
    console.log(message);
    //machine language things
    res.json({
        output: "2+2=4"
    })
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})