const Stock = require('../models/stock');
const stockEmitter = require('../events/stockEvent');

async function getStock(req, res){
    try {
        const stocks = await Stock.find();
        res.status(200).json(stocks);
    } catch (error){
        console.error(error);
        res.status(500).json({error: "Internal Server Error"})
    }
};

async function addStockToWatchlist(req, res){
    try{
        const {
            company,
            description,
            initial_price,
            price_2002,
            price_2007,
            symbol,
        } = req.body;
        const stock = new Stock({
            company,
            description,
            initial_price,
            price_2002,
            price_2007,
            symbol
        });
        stockEmitter.emit("STOCK_ADDED", stock);
        stockEmitter.emit("SEND_EMAIL", stock);
        await stock.save();
        res.json({ message: "Stock added to watchlist successfully" });
        
    } catch (err){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {getStock, addStockToWatchlist};