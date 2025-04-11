import io from "../server.js";
import { defineWinner, checkwin } from "./Controllers/verifyWin.js";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    // socket.on("create-session", sessionData => {
    //     // const room = sessionData.room;

    //     console.log(sessionData);
    // });

    socket.on("join-room", sessionData => {
        const room = sessionData.room;
        const username = sessionData.name;

        console.log(`user ${username} with id ${socket.id} entered in room ${room}`);

        socket.join(room);
    });

    let clientMoves = [];

    socket.on("player-action", (userPlay) => {
        const room = userPlay.room;
        const position = userPlay.position;
        
        clientMoves.push(position);
        defineWinner(userPlay.player, clientMoves);

        socket.to(room).emit("player-actionClient", userPlay);
    });
});
