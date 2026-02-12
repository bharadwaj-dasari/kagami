import express from "express";
import { getBehaviors,updateBehavior,deleteBehavior, createBehavior } from "../controllers/behavior.controllers.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.use(protect);

router.route('/').get(getBehaviors).post(createBehavior);
router.route('/:id').put(updateBehavior).delete(deleteBehavior);

export default router;