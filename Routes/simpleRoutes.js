import express from "express";
const FreeRoutes = express.Router();


//importing routes controllers 
import sController from '../controllers/simple';

//simple route data
const home = FreeRoutes.get("/",  sController.hello);





export default {
    home,
};
