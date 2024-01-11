import { Router } from 'express';
import {
    registerController,
    loginController,
    getTokenController,
    forgotPasswordController,
    resetPasswordController,
    changePasswordController,
    logoutController
} from '../controllers/auth.controllers';
import { authenticate } from '../middlewares';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/logout', authenticate, logoutController);
router.post('/reset-password/:userId/:token', resetPasswordController);
router.post('/forgot-password', forgotPasswordController);
router.post('/change-password', authenticate, changePasswordController);
router.post('/token', getTokenController)

export default router;