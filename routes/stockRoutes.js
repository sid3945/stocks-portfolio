const express = require('express');
const { getStock, addStockToWatchlist } = require("../controllers/stockController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.get("/stocks",protect, getStock);
router.post("/watchlist", protect, addStockToWatchlist);

module.exports  = router;