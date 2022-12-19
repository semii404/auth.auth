import express from "express";
const PaidRoutes = express.Router();


//importing routes controllers 
//import sRoutes from '../controllers/simple'

//authentication for paid rout
import protect from '../middleware/auth'



//PaidRoutes.get("/hello", protect ,sRoutes.hello);





export default PaidRoutes;