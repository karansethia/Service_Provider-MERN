import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

export const register = async (req,res)=> {
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
        res.status(500).send(error)
    }

}
export const logout = async (req,res)=> {
    try {
        
    } catch (error) {
        res.status(500).send('<h4>Something went wrong</h4>',error);
        console.log(error);
    }

}
export const login = async (req,res)=> {
    try {

        //* Checking if user exists => db.collec.findOne({key:value})
        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(404).send('user does not exist');

        //* comparing stored password to entered password
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return res.status(400).send('wrong password bro');

        //* if user found and password correct
        res.status(200).send('welcome to iksan'); 
    } catch (error) {
        res.status(500).send('Something went wrong, username or password incorrect');
    }

}