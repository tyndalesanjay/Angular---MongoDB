const bodyParser = require("body-parser");
let express = require("express");
let accountModel = require("../models/accounts"); //Connect to student model
let accountRoute = express.Router();

const app = express();

accountRoute.route("/").get((req, res, next) => {
    accountModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

accountRoute.route("/create").post((req, res, next) => {
    accountModel.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
});

module.exports = accountRoute;