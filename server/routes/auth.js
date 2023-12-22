import { Router } from 'express';
import auth from '../controllers/auth.js';
import authenticate from '../middlewares/auth.js';

const router = Router();

router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/reset-password/:userId/:token', auth.resetPassword);
router.post('/forgot-password', auth.forgotPassword);
router.post('/change-password', authenticate, auth.changePassword);
router.post('/token', auth.getToken)

export default router;