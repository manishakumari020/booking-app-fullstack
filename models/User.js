import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    img:{
        type: String
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
},
{
    timestamps:true
}

);

const User = mongoose.model("User", UserSchema);

export default User;