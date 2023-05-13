import User from "./user.model";

const createUserToDB = async () => {
  //creating inostance
  const user = new User({
    id: "34235",
    role: "Student",
    password: "asdf2#Rasdfhlb",
    name: { firstName: "Noushin", middleName: "Akter", lastName: "Ratul" },
    gender: "male",
    email: "abc@gmail.com",
    contactNo: "01777782394",
    emargencyContactNo: "01888888234",
    presentAddress: "Kumira, Sitakunda",
    permanentAddress: "US- Calefonia",
  });
  await user.save();
  console.log(user, "create user");
};
