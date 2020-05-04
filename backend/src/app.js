const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes");

const app = express();
app.use(express.json());

/** --- middleware ---- */
app.use(bodyParser.json());
/** --- middleware ---- */
app.use("/api", indexRouter);

app.listen("3000", () => {
  console.log("Server is running at port :3000");
});
