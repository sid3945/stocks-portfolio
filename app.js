const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stockRoutes = require("./routes/stockRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api', stockRoutes);
module.exports = app;