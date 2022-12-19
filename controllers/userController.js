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


export default {
    Register,
}