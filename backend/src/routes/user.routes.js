import express from "express";
import {protect} from '../middlewares/auth.js';
import { downloadData,deleteAccount } from "../controllers/user.controllers.js";

const router = express.Router();
router.use(protect);

router.get('/export', downloadData);
router.delete('/nuke', deleteAccount);

export default router;