import path from "path";
import express from "express";
import dotenv from  "dotenv";
import cookieParser from "cookie-parser";
// file imports 
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";
import { connectToMongoDB } from "./db/connectToMongo.js";
// import { use } from "react";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
dotenv.config()

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})
server.listen(PORT,()=>{
    connectToMongoDB()
    console.log("Server Running on port " + PORT)
})

