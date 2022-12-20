import express from "express";
const FreeRoutes = express.Router();


//importing routes controllers 
import sController from '../controllers/simple';

//simple route data
 FreeRoutes.get("/",  sController.hello);





export default FreeRoutes;