import express from "express";
import {json} from "body-parser";
import {indexRouter} from "./routes";
import {userRouter} from "./routes/user.route";
import {dbConnection} from "./util/database";


const app = express();
app.use(express.json());

/** --- middleware ---- */
app.use(json());
/** --- middleware ---- */
app.use("/api", indexRouter);
app.use("/api", userRouter);

/** database connection */
dbConnection.on("error", console.error.bind(console, "connection error:"));
dbConnection.once("open", console.info.bind(console, "connection established:"));
/** database connection */
app.listen("3000", () => {
  console.log("Server is running at port 3000");
});
