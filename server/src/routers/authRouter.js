import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/register', signUp);

authRouter.post('/login', signIn)

export {authRouter};