import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { createError } from '../utils/createError.js';

export const register = async (req,res, next)=> {
    try {
        // const newUser = new User({
        //     username: "Karan",
        //     email: "karan@gmail.com",
        //     password: "karan1234",
        //     fullAddress: "Rohini sector - 22 New delhi 110086"
        // });
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
        ...req.body,
        password: hash,
    });
        await newUser.save();
        res.status(201).send('user has been created'); 
    } catch (error) {
        next(error)
    }

}
export const logout = async (req,res)=> {
    try {
        res.clearCookie('accessToken',{
            sameSite: "none",  //? None because our react frontend and express backend do not work on the same localhost => different ports
            secure: true
        }).status(200).send("User has been logged out")
        
    } catch (error) {
        res.status(500).send('<h4>Something went wrong</h4>',error);
        console.log(error);
    }

}
export const login = async (req,res, next)=> {
    try {

        //* Checking if user exists => db.collec.findOne({key:value})
        const user = await User.findOne({username: req.body.username});

        if(!user) return next(createError(404, "User not found"));

        //* comparing stored password to entered password
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return next(createError(400,"Wrong Password entered"));

        //* Tokens from jwt
        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        },process.env.JWT_KEY)

        //* importing only user details from the database
        const {password, ...info} = user._doc;

        //* if user found and password correct
        res.cookie("accessToken", token, {
        httpOnly: true,
      }).status(200).send(info); 
    } catch (error) {
        next(createError(500,"Something went wrong, Username or Password Incorrect"))
    }

}