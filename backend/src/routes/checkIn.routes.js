import express from 'express';
const router = express.Router();
import { createCheckIn,getCheckInByDate,getTodayCheckIns,deleteCheckIn } from '../controllers/checkIn.controllers.js';
import { protect } from "../middlewares/auth.js";

router.use(protect);

router.post('/',createCheckIn);
router.get('/',getCheckInByDate);
router.get('/today',getTodayCheckIns);
router.delete('/:id',deleteCheckIn);

export default router;

