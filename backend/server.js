import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

// app.use(cors({origin:"http://localhost:5173/",
//     credentials:true
// }));


app.listen(process.env.PORT || 5000,()=>{
    console.log(`🚀 IOT Server running on port ${process.env.PORT}`)
})