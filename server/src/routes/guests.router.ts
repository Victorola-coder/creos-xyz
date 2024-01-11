import { Router } from 'express';
import {
    allGuestsController,
    singleGuestController,
    updateGuestController,
    deleteGuestController,
    createGuestController
} from '../controllers';
import { authenticate } from '../middlewares';


const router = Router();

router.get('/', authenticate, allGuestsController);
router.post('/create', authenticate, createGuestController);
router.get('/:id', singleGuestController);
router.put('/:id', authenticate, updateGuestController);
router.delete('/:id', authenticate, deleteGuestController);
export default router;