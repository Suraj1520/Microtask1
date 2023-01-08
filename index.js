
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const nik = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api", (req, res) => {
  res.send(nik);
});

//to start server we use listen
app.listen(port, () => {
  console.log("listening");
});

// export 'app'
module.exports = app;