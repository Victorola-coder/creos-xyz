import { Router } from 'express';
import submissions from '../controllers/submissions.js';


const router = Router();

router.post('/contact', submissions.contact);
router.post('/waitlist', submissions.waitlist);
router.post('/subscribe', submissions.subscribe);
router.post('/linkedin', submissions.submitLinkedIn);
router.post('/address', submissions.sendTokenAddress);
router.post('/membership', submissions.membership);

export default router;