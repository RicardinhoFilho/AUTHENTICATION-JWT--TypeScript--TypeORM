import{Router} from 'express';

import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController';

import {authMiddleware} from "./app/middlewares/authMiddleware";

const router = Router();


router.post('/users/create', UserController.create);
router.post('/users/update', UserController.update);
router.post('/users/login', AuthController.authenticate);

router.get("/users/profile", authMiddleware, UserController.index);




export default router;