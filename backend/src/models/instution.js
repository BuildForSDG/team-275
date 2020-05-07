import mongoose from "mongoose";

const Schema = mongoose.Schema;
const institutionSchema = new Schema({
    id: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("institution", institutionSchema);