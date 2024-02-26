import { Router } from "express";
import { createAttendance, getAttendances, updateAttendance, deleteAttendance } from "../controllers/attendanceController.js";


const attendanceRouter = Router();

attendanceRouter.get('/', getAttendances);

attendanceRouter.post('/', createAttendance);

attendanceRouter.put('/update/:_id', updateAttendance);

attendanceRouter.delete('/:_id', deleteAttendance);

export { attendanceRouter }