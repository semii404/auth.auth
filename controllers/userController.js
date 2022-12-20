import users from "../models/user.models";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();



const user =users.USchema;

const Register =async (req, res) =>{
    const Iuser = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
    
      const finding = await user.findOne({email: Iuser.email});
      if(finding){
        res.json({
          status : 500,
          message : "User Already exist" ,
        })
        return;
      }
      try {
        //hashing password 
        const hashedPass = await bcrypt.hash(Iuser.password, 12);
        Iuser.password = hashedPass ;
        const saved_user = await Iuser.save();
        res.json({
          status: 200,
          message: "Registered successfully.",
  
        });
      } catch (error) {
        // do logging in DB or file.
        console.log(error)
        res
          .status(400)
          .json({ status: false, message: "Something went wrong.", data: error });
      }
    }
  



//login controller
const loginct = async (req, res)=>{
  const Iuser = new user({
    email: req.body.email,
    password: req.body.password,
  });

  if(!Iuser.email && !Iuser.password) return res.status(400).send("enter credentials");
  
  try {
    const OldUser = await user.findOne({ email:Iuser.email}).select("+password");
    if(!OldUser) return res.status(201).send("Invalid Credentials");
    
    //matching pass 
    const cmp = bcrypt.compare(Iuser.password, OldUser.password);
      if(!cmp) return res.status(201).send("Invalid Credentials");

      const token = jwt.sign({ email: OldUser.email, id: OldUser._id, role:OldUser.role }, process.env.SECRET_KEY, { expiresIn: "1h" });
      return res.status(200).send(token);
   
}catch(error){
  console.log(error);
  res.status(500).send("Somthing went wrong");
}
}

export default {
    Register,
    loginct,
}