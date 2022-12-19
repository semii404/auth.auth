import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();


async function conn1() {
    mongoose.connect(process.env.DB_CONN_STRING);
    const db = mongoose.connection;
    
    
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");
});
}







export default {
    conn1,
};