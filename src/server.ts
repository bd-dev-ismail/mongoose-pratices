import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;


//Data base connection
async function bootStrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pratices-mongoose");

    console.log("Data Base Connection Successful");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log("Failed to connect data base", err);
  }
}
bootStrap();



