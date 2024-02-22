import { Router } from 'express';
import { createTeacher, getTeachers, updateTeacher, deleteTeacher } from '../controllers/teacherController.js';


const teacherRouter = Router();


teacherRouter.get('/', getTeachers);

teacherRouter.post('/', createTeacher);

teacherRouter.put('/update/:_id', updateTeacher);

teacherRouter.delete('/:_id', deleteTeacher);

export { teacherRouter };