const express = require("express");
const {
  getAllEmploye,
  createEmploye,
  singleEmploye,
  updateEmployee,
  deleteEmploye,
} = require("../controller/employeController");
const route = express.Router();

route.get("/", getAllEmploye);
route.get("/:id", singleEmploye);
route.post("/create", createEmploye);
route.put("/update/:id", updateEmployee);
route.delete("/delete/:id", deleteEmploye);
module.exports = route;
