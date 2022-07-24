const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define collection and schema
let Student = new Schema(
  {
    student_id: { type: Number },
    name: { type: String },
    email: { type: String },
    cohort: { type: String },
    phoneNumber: { type: Number },
    accountInfo: [{ type: Schema.Types.ObjectId, ref: 'accounts'}]
  },
  { collection: "students" }
);

module.exports = mongoose.model("Student", Student);
