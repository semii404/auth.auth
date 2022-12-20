import express from "express";
const PRoutes = express.Router();


//importing routes controllers 

//authentication import
import auth from "../middleware/auth";
import proController from "../controllers/proController";



 PRoutes.get("/secret", auth.verifyToken, proController.pro);





export default PRoutes;