import { userRouter } from './userRouter.js'; 
import { Router } from 'express';
import { teacherRouter } from './teacherRouter.js';
import { authRouter } from './authRouter.js';
import { imageRouter } from './imageRouter.js';
import { studentRouter } from './studentRouter.js';
import { attendanceRouter } from './attendanceRouter.js';

const indexRouter = Router();

indexRouter.use('/user', userRouter);

indexRouter.use('/teacher', teacherRouter);

indexRouter.use('/auth', authRouter);
indexRouter.use('/image', imageRouter)

indexRouter.use('/student', studentRouter);

indexRouter.use('/attendance', attendanceRouter);




export default indexRouter;