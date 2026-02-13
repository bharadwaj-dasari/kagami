import express from "express";
import {register,login,getme,googleAuth} from "../controllers/auth.controllers.js";
import {protect} from "../middlewares/auth.js";

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/me',protect,getme);
router.post('/google',googleAuth);

export default router;