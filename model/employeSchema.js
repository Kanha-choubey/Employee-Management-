const mongoose = require("mongoose");
const employeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter name"],
    },
    email: {
      type: String,
      require: [true, "please enter email"],
    },
    salary: {
      type: Number,
      require: [true, "please input salary"],
    },
    isRemote: {
      type: Boolean,
      default: true,
    },
    exprience: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      require: [true, "input role"],
    },
  },
  {
    timesstamps: true,
  }
);
module.exports = mongoose.model("Employe", employeSchema);
