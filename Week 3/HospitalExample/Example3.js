const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  if (username != "sumit" || password != "pass") {
    res.status(403).json({
      msg: "incorrect input",
    });
  } else {
    next();
  }
}

function kidneysMiddleware(req, res, next) {
  if (kidneyId != 1 || kidneyId != 2) {
    res.status(403).json({
      msg: "incorrect input",
    });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneysMiddleware,
  function (req, res) {
    // do something with kidneys here

    res.send("your heart is fine");
  }
);

app.get(
  "/kidney-check",
  userMiddleware,
  kidneysMiddleware,
  function (req, res) {
    // do something with kidneys here

    res.send("your heart is fine");
  }
);

app.get("/heart-check", userMiddleware, function (req, res) {
  // do something with kidneys here

  res.send("your heart is fine");
});

app.listen(3000);

// example 2

// const express = require("express");
// const app = express();

let numberRequests = 0;
function calculateRequests(req, res, next) {
  numberRequests++;
  console.log(numberRequests);
  next();
}
app.get("/health-checkup", calculateRequests, function (req, res) {});

app.get("/health-chekcup2", calculateRequests, function (req, res) {});

app.listen(3000);
