import { Router } from 'express';
import { createUser, getUser, getUsers, updateUser } from '../controllers/userController.js';

const userRouter = Router();



userRouter.get('/', getUsers);

userRouter.get('/:email', getUser);

userRouter.post('/', createUser);

userRouter.put('/:email', updateUser);

export { userRouter };