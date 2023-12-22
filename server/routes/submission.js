import { Router } from 'express';
import submissions from '../controllers/submissions.js';


const router = Router();

router.post('/contact', submissions.contact);
router.post('/waitlist', submissions.waitlist);
router.post('/subscribe', submissions.subscribe);
router.post('/linkedin', submissions.submitLinkedIn);

export default router;