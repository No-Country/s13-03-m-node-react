import { Router } from "express";
import { signUp, signUp2, signIn, signUp3 } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/register', signUp3);

authRouter.post('/login', signIn)


export {authRouter};