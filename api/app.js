//! Packages
import express from "express"
import mongoose, { mongo } from "mongoose";
import * as dotenv from 'dotenv'

//! App initialization
const app = express()

dotenv.config()
mongoose.set('strictQuery',true)
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongodb');
    }catch(error){
        console.log(error);
    }
}


app.listen(3100,()=>{
    connect()
    console.log("backend running");
});