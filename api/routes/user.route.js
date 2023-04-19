import express from "express";
import { testUser } from "../controllers/user.controller.js";

const router = express.Router()

router.get('/test',testUser)

export default router;