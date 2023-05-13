import { Request, Response, NextFunction } from "express";
import { createUserToDB, getUserByIdToDB, getUsersToDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "Success",
    data: user,
  });
};

export const getUsers = async(req: Request, res: Response, next: NextFunction)=> {
    const user = await getUsersToDB();
    res.status(200).json({
        status: "Successful",
        data: user,
    })
}

export const getUserById = async(req: Request, res: Response, next: NextFunction)=> {
  const {id} = req.params;
  const user = await getUserByIdToDB(id);
  res.status(200).json({status: "Success!!", data: user})
}