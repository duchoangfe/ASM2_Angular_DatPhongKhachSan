import express from 'express';

import { create ,get, getAll} from '../controllers/bookingroom';

const router = express.Router();
router.post('/bookingroom', create);
router.get('/bookingroom/:email', get);
router.get('/bookingroom', getAll);

export default router;
