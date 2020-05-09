import mongoose from "mongoose";

/** remote connection */
/* const uri = "mongodb+srv://team_275:04tLXMQ4mmllwy2P@cluster0-dghpw.mongodb.net/test?retryWrites=true&w=majority"; */
/** localhost */
const uri = "mongodb://localhost:27017/team257DB";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
export const dbConnection = db;
