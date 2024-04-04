import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}`)   ///${DB_NAME}
        console.log(`\n Mongodb connected !! DB HOST : ${connectionInstance.connection.host}`);
        // console.log("connection succes")
    }
    catch(error){
        console.error("Mongoos connection failed",error);
        process.exit(1);

    }
}
export default connectDB;