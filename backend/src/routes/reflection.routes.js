import {getWeeklyReflection,getTodayOverview,getRangeReflection} from "../controllers/reflection.controllers.js"
import express from "express";
const router = express.Router();
import { protect } from "../middlewares/auth.js";

router.use(protect);

router.get('/weekly', getWeeklyReflection);
router.get('/range', getRangeReflection);
router.get('/today', getTodayOverview);

export default router;