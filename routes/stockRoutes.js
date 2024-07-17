const express = require('express');
const { getStock, addStockToWatchlist } = require("../controllers/stockController");
// const { protect } = require("../controllers/authController");
const {protect, admin} = require('../middleware/authMiddleware');

const router = express.Router();

router.get("/stocks",protect, getStock);
router.post("/watchlist", protect, admin, addStockToWatchlist);

module.exports  = router;