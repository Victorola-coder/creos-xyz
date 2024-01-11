import { Router } from 'express';
import {
    allEventsController,
    buyTicketController,
    createEventController,
    deleteEventController,
    eventGuestsController,
    singleEventController,
    updateEventController,
    usersEventsController,
    verifyTicketController
} from '../controllers';
import { authenticate } from '../middlewares';


const router = Router();

router.get('/', allEventsController);
router.get('/mine', authenticate, usersEventsController);
router.get('/guests/', authenticate, eventGuestsController);
router.post('/buy-ticket', buyTicketController);
router.get('/verfiy-ticket/:ticket', verifyTicketController)
router.post('/create', authenticate, createEventController);
router.get('/:id', singleEventController);
router.put('/:id', authenticate, updateEventController);
router.delete('/:id', authenticate, deleteEventController);
export default router;