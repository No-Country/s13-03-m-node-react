import { Router } from "express";
import { createNotificatioin, getNotificationById, getNotifications, updateNotification } from "../controllers/notificationController";

const notificationRrouter = Router();

notificationRrouter.get('/', getNotifications);

notificationRrouter.get('/:id', getNotificationById);

notificationRrouter.post('/', createNotificatioin);

notificationRrouter.put('/:id', updateNotification);

export { notificationRrouter };