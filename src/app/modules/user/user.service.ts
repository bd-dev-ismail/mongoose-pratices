import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //creating a new user
  //creating inostance
  const user = await new User(payload); //User --> class || user ta hocce instance || r user er shate dot .save() ta ekta method hisabe ache!!
  await user.save(); //built in instance method   || jodi amora ready kori tahole egula hobe custom instance methods
  console.log(user.fullName()); //custom instance method
  return user;
};

//get
export const getUsersToDB = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};
//get one
export const getUserByIdToDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }); // { name: 1, contactNo: 1 },   -second object for field filtering
  return user;
};

///get all adminusers
export const getAllAdminUserToDB = async()=> {
  const admins = await User.getAdminUsers();
  return admins;
}