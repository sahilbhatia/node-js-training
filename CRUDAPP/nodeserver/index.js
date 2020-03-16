const express = require("express");
var bodyParser = require("body-parser");

const userRouter = require("./routes/user");
const mongoConnect = require("./db").mongoConnect;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "GET,OPTIONS,PUT,POST,PATCH,DELETE"
  );
  next();
});
app.use("/user", userRouter);

mongoConnect(() => {
  app.listen(8084, () => {
    console.log(`Server is running on the port 8084`);
  });
});
