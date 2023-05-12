import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
const app: Application = express();

//using cors
app.use(cors());
//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //instering a test data into mongoDB
  /**
   * Step1: create Interface
   * Step2: create a schema
   * Step3: Schema to model create
   * Step4: Database query
   */

  // res.send("Hello World!");
  // next();
  //inerface
  interface IUser {
    id: string;
    role: "Student";
    password: string;
    name: { firstName: string; middleName?: string; lastName: string };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emargencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }
  //Schema using inerface
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String },
    contactNo: { type: String, required: true },
    emargencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });
});

export default app;
