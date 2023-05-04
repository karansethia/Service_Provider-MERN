import { createError } from "../utils/createError.js";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.accessToken;

    if(!token) return next(createError(401, "You are not authenticated"));

    jwt.verify(token, process.env.JWT_KEY, async (error, payload) => {

        if(error) return next(403, "Token is not valid");

        req.userId = payload.id;
        req.isSeller = payload.isSeller;
    })
}