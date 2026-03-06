import express from "express";
const app = express();
import dotenv from "dotenv";


dotenv.config();




app.listen(process.env.PORT || 5000,()=>{
    console.log(`🚀 IOT Server running on port ${process.env.PORT}`)
})