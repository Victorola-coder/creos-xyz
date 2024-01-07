import { Router } from 'express';
import {
    contactController,
    membershipController,
    sendTokenAddressController,
    submitLinkedInController,
    subscribeController,
    waitlistController, 
    webhookController
} from '../controllers';


const router = Router();

router.post('/contact', contactController);
router.post('/waitlist', waitlistController);
router.post('/subscribe', subscribeController);
router.post('/linkedin', submitLinkedInController);
router.post('/address', sendTokenAddressController);
router.post('/membership', membershipController);
router.post('/webhook', webhookController);

export default router;