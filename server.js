const express = require("express");
const { connectDB } = require("./config/db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
connectDB();
// Body parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "from server home" });
});
app.use("/api/", require("./router/employeRouter"));
app.listen(PORT, () => {
  console.log(`PORT is runing on ${PORT}`);
});
