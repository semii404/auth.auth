import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
//db config inport
import DB from './config/db';


const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
//db connection
DB.conn1();
//import routes
import userMGMT from './Routes/UMroutes';
import sRoutes from './Routes/simpleRoutes'
import pRoutes from './Routes/protected'

app.use("/", userMGMT)
app.use("/", pRoutes)


app.get('/', sRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
