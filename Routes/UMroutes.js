import  express  from "express";
import user_controller from "../controllers/userController"
const userhandle = express.Router();


userhandle.post("/register", user_controller.Register);
userhandle.post("/login", user_controller.loginct);



export default userhandle;

