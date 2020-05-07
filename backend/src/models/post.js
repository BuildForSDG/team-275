import mongoose from "mongoose";

const Schema = mongoose.Schema;
const postSchema = new Schema({
    id: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("post", postSchema);