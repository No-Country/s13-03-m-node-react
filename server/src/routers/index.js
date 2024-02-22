import { userRouter } from './userRouter.js'; 
import { Router } from 'express';
import { teacherRouter } from './teacherRouter.js';
import { authRouter } from './authRouter.js';


const indexRouter = Router();

indexRouter.use('/user', userRouter);

indexRouter.use('/teacher', teacherRouter);

indexRouter.use('/auth', authRouter);


export default indexRouter;