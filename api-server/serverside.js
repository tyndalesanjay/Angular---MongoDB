const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const studentRoute = require("./routes/students-Route");
const accountRoute = require("./routes/accountRoute");

// Mongoose Connection (Always fixed)
mongoose
  .connect("mongodb://127.0.0.1:27017/students")
  .then((x) => {
    console.log(
      `Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongodb", err.reason);
  });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(["*", "http://localhost:4200"]));

// Setting Route middleware
app.use("/api", studentRoute);
app.use("/api/account", accountRoute );

const port = process.env.Port || 4000;

const server = app.listen(port, () =>
  console.log(`Connected to http://localhost:${port}`)
);
