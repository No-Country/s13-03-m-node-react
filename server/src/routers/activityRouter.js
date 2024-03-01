import { Router } from "express";
import { createActivity, getActivities, getActivityById, updateActivity } from "../controllers/activityController.js";

const activityRouter = Router();

activityRouter.get('/', getActivities);

activityRouter.get('/:id', getActivityById);

activityRouter.post('/', createActivity);

activityRouter.put('/:id', updateActivity);

export {activityRouter};