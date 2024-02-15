import { userRouter } from './userRouter.js'; 
import { Router } from 'express';


const indexRouter = Router();

indexRouter.use('/user', userRouter);

export default indexRouter;