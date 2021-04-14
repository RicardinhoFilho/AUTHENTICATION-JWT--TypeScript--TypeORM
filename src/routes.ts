import{Router} from 'express';

import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController';

import {authMiddleware} from "./app/middlewares/authMiddleware";

const router = Router();


router.post('/users', UserController.store);
router.get("/users", authMiddleware, UserController.index);

router.post('/auth', AuthController.authenticate);


export default router;