const express = require(`express`);
const app = express();

app.get(`/endPoint`, function(req, res) {
    res.send("hello world");
});

const PORT= 3000;

app.listen(PORT)