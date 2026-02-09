import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./config/db.js";


const PORT = process.env.PORT || 5000;
//console.log(process.env.MONGO_URI);
connectDB();
app.listen(PORT,()=>{
    console.log(`kagami backend is running at port ${PORT}`);
});