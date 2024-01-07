import { Router } from 'express';
import { verifyTransactionController } from '../controllers';

const router = Router();

router.get('/verify/:reference', verifyTransactionController);

export default router;