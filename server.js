import express from "express";
import { Server } from "socket.io";

import http from "http";
import path from "path";
import { fileURLToPath } from "url"

const app = express();
const httpServer = http.createServer(app); //servidor http criado e receber as funções do express.
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
});
httpServer.listen(3000, () => {
    console.log("Listen! from localHost:3000");
})



export default io;
