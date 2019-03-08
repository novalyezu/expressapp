const express = require("express");
const app = express();
const router = require("./routes/route");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/expressapp");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(3000, function() {
  console.log("Expressapp sukses berjalan pada port 3000!");
});
