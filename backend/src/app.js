import express from "express";
import { json } from "body-parser";
import { indexRouter } from "./routes";

const app = express();
const mongoose = require("mongoose");
const uri = "mongodb+srv://team_275:04tLXMQ4mmllwy2P@cluster0-dghpw.mongodb.net/test?retryWrites=true&w=majority";
app.use(express.json());

/** --- middleware ---- */
app.use(json());
/** --- middleware ---- */
app.use("/api", indexRouter);

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
  app.listen("3000", () => {
    console.log("Server is running at port 3000");
  });
  console.log(result); 
}).catch(err => console.log(err));





