import { Router } from "express";
import { createNotification, getNotificationById, getNotifications, updateNotification } from "../controllers/notificationController.js";

const notificationRrouter = Router();

notificationRrouter.get('/', getNotifications);

notificationRrouter.get('/:id', getNotificationById);

notificationRrouter.post('/', createNotification);

notificationRrouter.put('/:id', updateNotification);

export { notificationRrouter };