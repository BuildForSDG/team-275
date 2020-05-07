import mongoose from "mongoose";
const db = mongoose;
const uri = "mongodb+srv://team_275:04tLXMQ4mmllwy2P@cluster0-dghpw.mongodb.net/test?retryWrites=true&w=majority";
export const connectDB = () => {
    db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
      console.log("DB Connected!!");
    }).catch(err => console.log(err));
};