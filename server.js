require("dotenv").config();
const app = require('./app');

const port = process.env.PORT || 3200;

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
})

io.on("connection", (socket)=>{
    console.log("Socket connection done ", socket);

    socket.on("disconnect", ()=>{
        console.log("disconnected")
    });
});

app.listen(port, ()=>{
    console.log(`Nodejs up&running on ${port}`);
})