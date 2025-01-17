import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        maxPeople: {
            type: Number,
            reuired: true
        },
        desc:{
            type:String,
            required:true
        },
        roomNumbers: [{ number: Number, unaviableDated: { type: [Date]}}],
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Room", RoomSchema);