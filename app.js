const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stockRoutes = require("./routes/stockRoutes");
const authRoutes = require("./routes/authRoutes")
const connectDB = require("./config/db");
require('./events/stockListener');

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api', stockRoutes);
app.use('/api/auth', authRoutes)
module.exports = app;