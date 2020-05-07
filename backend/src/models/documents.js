import mongoose from "mongoose";

const Schema = mongoose.Schema;
const docxSchema = new Schema({
    docxNum: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("documents", docxSchema);