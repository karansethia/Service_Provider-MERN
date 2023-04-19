//! Packages 
import express from "express";
import mongoose, { mongo } from "mongoose";
import * as dotenv from 'dotenv';

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


//todo remove below method and use middleware to accept user data
app.use(express.json()); //! TEMP CODE FOR TESTING (used for accepting any json data)


app.use("/api/auth",authRoute)
app.use("/api/users", userRoutes);
app.use("/api/gigs", singleServiceRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.listen(3100,()=>{
    connect()
    console.log("backend running");
});