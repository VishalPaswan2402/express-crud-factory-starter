import mongoose from "mongoose";
const Schema = mongoose.Schema;

const defaultPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true

    },
    likes: {
        type: Number,
        default: () => Math.floor(Math.random() * 1000 + 1)
    },
    comments: {
        type: Number,
        default: () => Math.floor(Math.random() * 100 + 1)
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const PostModel = mongoose.model("PostModel", defaultPostSchema);
export default PostModel;