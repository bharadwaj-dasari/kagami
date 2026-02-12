import express from "express";
import { getBehaviorPatterns } from "../controllers/analysis.controllers.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.use(protect);

router.get('/:behaviorId', getBehaviorPatterns);

export default router;