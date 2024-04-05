import { Router } from 'express';
import authRouter from './auth.routes.js';
import managerRoutes from './manager.routes.js';
import checkerRouter from './checker.routes.js';
import adminRouter from './admin.routes.js';
import userRouter from './user.routes.js';
import {
    isAdmin,
    isChecker,
    isManager
} from '../middlewares/roleVerification.middleware.js';
import userAuth from '../middlewares/auth.middleware.js';
import { middlewareEmailValidater } from '../validaters/email.validaters.js';

const router = Router();

router.use('/auth', middlewareEmailValidater, authRouter);
router.use('/admin', userAuth, isAdmin, adminRouter);
router.use('/manager', userAuth, isManager, managerRoutes);
router.use('/checker', userAuth, isChecker, checkerRouter);
router.use('/user', userAuth, userRouter);

export default router;
