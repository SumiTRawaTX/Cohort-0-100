// const express = require("express");
// const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username === "sumit" && password === "pass") {
//     if (kidneyId == 1 && kidneyId == 2) {
//       res.json({
//         msg: "your kidney is fine",
//       });
//     }
//   }
//   res.status(400).json({
//     msg: "Something up with your input",
//   });
// });

// app.listen(3000);

// method 2

const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "sumit" || password != "pass") {
    res.status(400).json({
      msg: "Something up with your input",
    });
    return;
  }

  if (kidneyId != 1 || kidneyId != 2) {
    res.status(400).json({
      msg: "Something up with your input",
    });
    return;
  }

  // kidney is fine affter that
  res.json({
    msg: "your kidney is fine",
  });
});

app.listen(3000);

// this is the dumbest way to write the example
