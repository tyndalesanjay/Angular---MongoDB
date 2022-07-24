const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define collection and schema
let Accounts = new Schema(
  {
    studentID: { 
        type: String
    },
    account: { 
        type: Number,
    },
    bank: { 
        type: String
    },
    branch: { 
        type: String 
    },
    accountType: { 
        type: String 
    },
    status: {
        type: String
    },
  },
  { collection: "accounts" }
);

module.exports = mongoose.model("Accounts", Accounts);