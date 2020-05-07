import mongoose from "mongoose";

const Schema = mongoose.Schema;
const eduProviderSchema = new Schema({
    id: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("education_Provider", eduProviderSchema);