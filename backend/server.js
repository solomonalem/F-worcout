const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exercisesRouter = require("./routes/exerciseRoute");
const usersRouter = require("./routes/userRoute");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb database connectionstarted succesfully");
});

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`server from port ${port}`);
});
