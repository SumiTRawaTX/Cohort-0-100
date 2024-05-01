// basic http server         

const express = require(`express`);

const port = 3000;
const app = express();H

app.get(`/`, function(req, res) {
    res.send("hello World");
});

app.listen(port);


