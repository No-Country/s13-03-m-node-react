import { Router } from "express";
import { createStudent, getStudents, updateStudent, deleteStudent } from "../controllers/studentControler.js";


const studentRouter = Router();

studentRouter.get('/', getStudents);

studentRouter.post('/', createStudent);

studentRouter.put('/update/:_id', updateStudent);

studentRouter.delete('/:_id', deleteStudent);

export { studentRouter }