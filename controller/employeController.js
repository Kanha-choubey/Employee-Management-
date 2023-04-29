const Employe = require("../model/employeSchema");

const getAllEmploye = async (req, res) => {
  const allEmploye = await Employe.find();
  if (allEmploye) {
    res.status(200);
    res.json(allEmploye);
  } else {
    throw new Error("No data found");
  }
};
const singleEmploye = async (req, res) => {
  const oneEmploye = await Employe.findById(req.params.id);
  if (oneEmploye) {
    res.status(200);
    res.json(oneEmploye);
  }
};
const createEmploye = async (req, res) => {
  const { name, email, salary, role, exprience } = req.body;

  if (!name || !email || !salary || !role) {
    res.status(400);
    throw new Error("Please input all feild");
  }
  const createNewEmploye = await Employe.create(req.body);
  if (createNewEmploye) {
    res.status(200);
    res.json(createNewEmploye);
  }
};
const updateEmployee = async (req, res) => {
  const updateEmploye = await Employe.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  if (updateEmploye) {
    res.status(200);
    res.json(updateEmploye);
  }
};
const deleteEmploye = async (req, res) => {
  const removeEmploye = await Employe.findByIdAndRemove(req.params.id);
  if (removeEmploye) {
    res.status(200);
    res.json({ remove: "remove" });
  }
};

module.exports = {
  getAllEmploye,
  createEmploye,
  singleEmploye,
  updateEmployee,
  deleteEmploye,
};
