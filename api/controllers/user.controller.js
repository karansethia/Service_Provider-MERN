import User from '../models/user.model.js';
import jwt from 'jsonwebtoken'

export const deleteUser = async (req,res,next)=>{

    const user = await User.findById(req.params.id)

    const token = req.cookies.accessToken;

    if(!token) return res.status(401).send("you are not authenticated");

    jwt.verify(token, process.env.JWT_KEY, async (error, payload) => {
        if(payload.id !== user._id.toString()){
            return res.status(403).send("you are not allowed to delete this account");
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("we are sorry to see you leave");
    })

}