import express from "express";
import cors from "cors";

const app = express();//creating application instance

app.use(cors());

app.use(express.json());
app.get("/health",(req,res)=>{
    res.status(200).json({status:"good"});
});

export default app;