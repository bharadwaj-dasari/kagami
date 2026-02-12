import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import behaviorRoutes from "./routes/behavior.routes.js";
import CheckInRoutes from "./routes/checkIn.routes.js";
import reflectionRoutes from "./routes/reflection.routes.js";
import userRoutes from "./routes/user.routes.js";
import analysisRoutes from "./routes/analysis.routes.js";
const app = express();//creating application instance

app.use(cors());

app.use(express.json());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/behaviors", behaviorRoutes);
app.use("/api/v1/checkin",CheckInRoutes);
app.use("/api/v1/reflection",reflectionRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/analysis",analysisRoutes);
app.get("/health",(req,res)=>{
    res.status(200).json({status:"good"});
});

export default app;