import express from "express";
import dotenv from  "dotenv";

// file imports 
import authRoutes from "./routes/auth.routes.js";
import { connectToMongoDB } from "./db/connectToMongo.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config()

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Working")
})

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log("Server Running on port " + PORT)
})

