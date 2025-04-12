import io from "../server.js";
import { checkPosition, defineWinner,  } from "./Controllers/verifyWin.js";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    socket.on("join-room", sessionData => {
        const room = sessionData.room;
        const username = sessionData.name;

        console.log(`user ${username} with id ${socket.id} entered in room ${room}`);

        socket.join(room);
    });

    let userMoves = [];

    socket.on("player-action", (userPlay) => {
        const room = userPlay.room;
        const position = userPlay.position;

        userMoves.push(position);
        checkPosition(userPlay.player, userMoves);

        if(defineWinner() != undefined) {
            socket.to(room).emit("send-winner", defineWinner());
        }

        socket.to(room).emit("player-actionClient", userPlay);
    });
});
