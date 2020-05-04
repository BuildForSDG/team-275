import express from "express";
import {json} from "body-parser";
import {indexRouter} from "./routes";

const app = express();
app.use(express.json());

/** --- middleware ---- */
app.use(json());
/** --- middleware ---- */
app.use("/api", indexRouter);

app.listen("3000", () => {
  console.log("Server is running at port 3000");
});
