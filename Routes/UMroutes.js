import  express  from "express";
import user_controller from "../controllers/userController"
const userhandle = express.Router();


const REG = userhandle.post("/register", user_controller.Register);



export default {
    REG
};

