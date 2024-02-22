import { userRouter } from './userRouter.js'; 
import { Router } from 'express';
import { teacherRouter } from './teacherRouter.js';


const indexRouter = Router();

indexRouter.use('/user', userRouter);

indexRouter.use('/teacher', teacherRouter);


export default indexRouter;