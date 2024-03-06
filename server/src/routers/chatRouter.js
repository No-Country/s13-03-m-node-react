import { chat } from "../controllers/chatController.js";

import { Router } from 'express';

const chatRouter = Router();

chatRouter.get('/', chat);

export { chatRouter }