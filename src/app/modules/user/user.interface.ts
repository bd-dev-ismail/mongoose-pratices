import { HydratedDocument, Model } from "mongoose";


//inerface
export interface IUser {
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



//methods er interface
export interface IUserMethods {
  fullName(): string;
}

//static methods
export interface UserModel extends Model<IUser, {}, IUserMethods> {
   getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
