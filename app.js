const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

const app = express();

const coursesRouter = require("./routers/courses");
const notesRouter = require("./routers/notes");



mongoose.connect(
  "mongodb+srv://ayo:replayz1@cluster0.fupxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected to db");
});

app.use(express.json());
// add helmet to protect the app from some common vulnerabilities
app.use(helmet());

app.use("/courses", coursesRouter);
app.use("/notes", notesRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log('listening on port ${PORT}');
});
