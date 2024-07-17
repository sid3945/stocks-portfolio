const stockEmitter = require("./stockEvent");
const sendEmail = require('../services/emailService');

stockEmitter.on("STOCK_ADDED", (stock) => {
	console.log(`Stock added: ${stock.company} (${stock.symbol})`);
});

stockEmitter.on("SEND_EMAIL", async (stock)=>{
    const htmlContent = `<h1>New Stock Added</h1><p>Company: ${stock.company}</p><p>Symbol: ${stock.symbol}</p>`;
    try { 
        const emailRes = await sendEmail("user@example.com", "New Stock Added", htmlContent);
        console.log("emailRes ", emailRes)
    } catch(error){
        console.log("could not send email : ", error)
    }
})

module.exports = stockEmitter;