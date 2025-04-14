import io from "../server.js";
import { checkPosition, defineWinner,  } from "./Controllers/verifyWin.js";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    socket.on("join-room", sessionData => {
        const room = sessionData.room;
        const username = sessionData.name;

        const roomData = io.socket.adapter.rooms.get(room);
        const usersConnected = roomData ? roomData : 0;

        if ( usersConnected == 2){
            socket.emit("return-creation");
            
        } else {
            console.log(`user ${username} with id ${socket.id} entered in room ${room}`);
            socket.join(room);
        }
    });

    let userMoves = [];

    socket.on("player-action", (userPlay) => {
        const room = userPlay.room;
        const position = userPlay.position;

        userMoves.push(position);
        checkPosition(userPlay.player, userMoves);

        if(defineWinner() != null) {
            console.log(defineWinner() + " this is the winner from socketBack.js");

            io.in(room).emit("game-result", defineWinner());
        }

        socket.to(room).emit("player-actionClient", userPlay);

        socket.on("clean-board", (resetWinner) => {
            userMoves.length = 0;
            defineWinner() = resetWinner;
            console.log(defineWinner());
            checkPosition(userPlay.player, userMoves);
        });
    });


});
