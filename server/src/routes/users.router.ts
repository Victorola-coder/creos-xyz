import { Router } from 'express';
import { allUsersContoller, profileController } from '../controllers';
import { authenticate } from '../middlewares';

const router = Router();

router.get('/profile', authenticate, profileController);
router.put('/profile', authenticate, profileController);
router.get('/', allUsersContoller);

export default router;