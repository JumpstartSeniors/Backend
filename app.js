const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

const app = express();

const coursesRouter = require("./routers/courses");
const notesRouter = require("./routers/notes");
const statsRouter = require("./routers/stats");

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is runningh')
    .end();
});

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
// CORS error	
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/courses", coursesRouter);
app.use("/notes", notesRouter);
app.use("/stats", statsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("listening on port 8080");
});