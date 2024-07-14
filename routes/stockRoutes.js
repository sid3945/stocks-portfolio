const express = require('express');
const { getStock, addStockToWatchlist } = require("../controllers/stockController");
console.log(getStock, addStockToWatchlist)
const router = express.Router();

router.get("/stocks", getStock);
router.post("/watchlist", addStockToWatchlist);

module.exports  = router;