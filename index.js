import  express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js"

const app = express();
dotenv.config();


app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    }
    catch(error){
        throw error;
    }
}

app.listen(PORT, () => {
    connect()
    console.log(`Server is listening on ${PORT}`);
})