import path from "path";
import http from "http";
import express from "express";
import { create } from "express-handlebars";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app); //servidor http criado e receber as funções do express.
const io = new Server(httpServer);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //fedora_data/Programação/JogoDaVelha

const hbs = create({
    layoutsDir: `${__dirname}/SRC/Views/Layouts`,
    extname: 'hbs',
    default: 'index'
});
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine);
app.set("views", path.join(`${__dirname}/SRC/Views`));
app.use(express.static(path.join(__dirname, "Public")));

httpServer.listen(3000, () => {

    console.log("Listen! from localHost:3000");
});

io.on("connection", (socket) => {
    console.log(`User ${socket.id}`);
})

app.get('/', (req, res) => {
    res.render("index", {layout : "CreateUser"});
});

export default io;
