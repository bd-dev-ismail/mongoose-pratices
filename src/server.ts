const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

//Data base connection
async function bootStrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pratices-mongoose");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log("Data Base Connection Successful");
  } catch (err) {
    console.log("Failed to connect data base", err);
  }
}
bootStrap();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
