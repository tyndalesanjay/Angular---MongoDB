const bodyParser = require("body-parser");
let express = require("express");
let studentModel = require("../models/students"); //Connect to student model
let studentRoute = express.Router();

const app = express();

studentRoute.route("/").get((req, res, next) => {
  studentModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/create").post((req, res, next) => {
  studentModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/find/:_id").get((req, res, next) => {
  studentModel.findById(req.params._id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/update/:_id").put((req, res, next) => {
  studentModel.findByIdAndUpdate(req.params._id, req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/delete/:_id").delete((req, res, next) => {
  studentModel.findByIdAndDelete(req.params._id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/delete_all").delete((req, res, next) => {
  studentModel.deleteMany((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  });
});

module.exports = studentRoute;
