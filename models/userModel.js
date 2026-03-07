import mongoose from "mongoose";
const Schema = mongoose.Schema;

const defaultUserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PostModel"
    }]
})

const UserModel = mongoose.model("UserModel", defaultUserSchema);
export default UserModel;