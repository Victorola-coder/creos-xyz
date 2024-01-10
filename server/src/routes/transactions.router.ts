import { Router } from 'express';
import { verifyTransactionController } from '../controllers';

const router = Router();

router.get('/verify/:description/:reference', verifyTransactionController);

export default router;