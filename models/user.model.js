import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String,required: true },
    fullname: {  type: String,required: true },
    email: { type: String,unique: true,required: true },
    password: { type: String,required: true,select: false },
    isActive: { type: Boolean,default: true },
    emailVerified: { type: Boolean,default: false },
    verifyToken: { type: String,default: null,select: false },
    verifyTokenExpires: { type: Date,default: null,select: false },
    destroyDataAfter: { type: Date,default: null,select: false },
    otpRequestCount: { type: Number,default: 0,select: false },
    otpLastRequest: { type: Date,default: null,select: false },
    articles: [ {type: mongoose.Schema.Types.ObjectId,ref: "PostModel"} ]
});

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;