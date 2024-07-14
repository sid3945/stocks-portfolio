const stockEmitter = require("./stockEvent");

stockEmitter.on("STOCK_ADDED", (stock) => {
	console.log(`Stock added: ${stock.company} (${stock.symbol})`);
});

module.exports = stockEmitter;