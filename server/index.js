const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const URI = process.env.MONGO_URI;
const port = process.env.PORT
const {savePhoneBook} = require("./routes/mainRoutes")
app.use(express.json());
app.use(cors());

mongoose
  .connect(URI)
  .then((res) => console.log("Connected To MongoDb"))
  .catch((err) => console.log(err));

  savePhoneBook(app);
  
  app.listen(port, () => console.log(`Server Is Active On Port ${port}`))