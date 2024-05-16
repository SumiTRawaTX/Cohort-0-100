const express = require("express");
const app = express();

let numberRequests = 0;
function calculateRequests(req, res, next) {
  numberRequests++;
  console.log(numberRequests);
  next();
}
app.get("/health-checkup", calculateRequests, function (req, res) {});

app.get("/health-chekcup2", calculateRequests, function (req, res) {});

app.listen(3000);
