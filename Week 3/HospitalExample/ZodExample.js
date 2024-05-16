// const express = require('express');
// const app = express();
// const zod = require('zod');

// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post("/health-checkup", function(req, res) {
//   // kidney = [1, 2]
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   res.send ({
//     response
//   })
// });

// app.listen(3000);

// {
//   email: string => email;
//   password: atleast
//   country: "IN", "US"
// }

// writing zod syntax for above example

// const schema = zod.object({
//   email: zod.string(),
//   password: z.string(),
//   country: zod.literal("IN").or(zod.literal("US"))// literals means specific string
// })

const zod = require("zod");
function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email: "sumi123@gmail.com",
  password: "sumit123",
});
