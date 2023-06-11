import express from 'express';

import { create } from '../controllers/bookingroom';

const router = express.Router();
router.post('/bookingroom', create);

export default router;
