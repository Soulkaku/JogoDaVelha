import path from "path";
import http from "http";
import express from "express";
import { create } from "express-handlebars";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

const app = express();
const PORT = 3000;

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


const httpServer = http.createServer(app); //servidor http criado e receber as funções do express.
const io = new Server(httpServer);

httpServer.listen(PORT, () => {
    console.log("listen! from localhost:3000");
});

// io.on("connection", () => {
//     console.log("Client connected");
// })

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render("index", {layout : "CreateUser"});
    // io.sockets.on("connection", function(socket) {
    //     socket.on("create", function(room) {
    //         socket.join(room);
    //     }) 
    // });
});
app.get('/game', (req, res) => {
    const { room, user } = req.query;
    res.render("index", { layout: "game"});
});

export default io;