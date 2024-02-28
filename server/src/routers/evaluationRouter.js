import { Router } from "express";
import { createEvaluation, getEvaluations, updateEvaluation, deleteEvaluation } from "../controllers/evaluationController.js";


const evaluationRouter = Router();


evaluationRouter.get('/', getEvaluations );

evaluationRouter.post('/', createEvaluation );

evaluationRouter.put('/update/:_id', updateEvaluation );

evaluationRouter.delete('/:_id', deleteEvaluation );

export { evaluationRouter }

