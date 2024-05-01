// creating http server 2

const express = require(`express`);
const port = 3000;
const app = express();

app.get("/route-handler", function(req, res) {
    //headers, body, query parameters
    //do machime learning model
    res.json({
        name: "sumit",
        age: 20
    })
})

app.get(`/`, function(req, res) {
    res.send("hello World");
});

app.listen(port);