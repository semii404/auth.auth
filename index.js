import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//db config inport
import DB from './config/db';


const app = express();
dotenv.config();

app.use(express.json());

//db connection
DB.conn1();
//import routes
import userMGMT from './Routes/UMroutes';
import sRoutes from './Routes/simpleRoutes'

app.use("/", userMGMT.REG)






app.get('/', sRoutes.home);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
