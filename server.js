import express from "express";
import { Server } from "socket.io";

import http from "http";
import path from "path";
import { fileURLToPath } from "url"

const app = express();
const httpServer = http.createServer(app); //servidor http criado e receber as funcionalidades do express.
const io = new Server(httpServer);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

httpServer.listen(3000, () => {
    console.log("Listen! from localHost:3000");
})


export default io;
