import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
import errorMiddleware from "../middlewares/error.middleware.js";


const userRouter = Router();

// add authorize middleware to check user is admin or not to get all users
userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, errorMiddleware, getUser);

userRouter.post('/', (req, res) => res.send({title: 'Create user'}));

userRouter.put('/:id', (req, res) => res.send({title: 'UPDATE user'}));

userRouter.delete('/id', (req, res) => res.send({title: 'DELETE user'}));


export default userRouter;