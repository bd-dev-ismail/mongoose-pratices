import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser):Promise<IUser> => {
  //creating inostance
  const user = await new User(payload);
  await user.save();
  return user;
};


//get
export const getUsersToDB = async(): Promise<IUser[]>=>{
    const users = await User.find({})
    return users;
}

