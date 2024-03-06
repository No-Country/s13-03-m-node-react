import { Router } from "express";
import { createSubject, getAllSubjects, getOneSubject, updateSubject } from "../controllers/subjectController.js";

const subjectRouter = Router();

subjectRouter.get('/', getAllSubjects);
subjectRouter.get('/:id', getOneSubject);
subjectRouter.post('/', createSubject);
subjectRouter.put('/:id', updateSubject);

export {subjectRouter}