//! Packages 
import express from "express";
import mongoose, { mongo } from "mongoose";
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'

//! Routes

import authRoute from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import singleServiceRoute from "./routes/singleService.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";

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

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(cors({ origin: 'http://localhost:5173', credential:true}))
app.use(express.json()); //? used for accepting any json data)
app.use(cookieParser());

//Routes
app.use("/api/auth",authRoute)
app.use("/api/users", userRoutes);
app.use("/api/gigs", singleServiceRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

//error handling
app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"

    return res.status(errorStatus).send(errorMessage);
})

app.listen(3100,()=>{
    connect()
    console.log("backend running");
});