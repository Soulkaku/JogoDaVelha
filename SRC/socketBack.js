import io from "../server.js";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    socket.on("disconnect", (motivo) => {
        console.log(`User ${socket.id} disconnected, because: ${motivo}`);
    });

    socket.on("create-session", (sessionData) => {
        console.log("username: " + sessionData.name);
        console.log("sala: " + sessionData.room);

        const roomInfo = io.sockets.adapter.rooms.get(sessionData.room);
        const roomExists = roomInfo ? roomInfo.size : 0;

        socket.join(sessionData.room);

        if (roomExists === 0) {
            console.log("no players in room " + sessionData.room);

            
            socket.to(sessionData.room).emit("new_room", sessionData.room);
        } else {
            socket.to(sessionData.room).emit("enemy-data", sessionData.name);
        }


    });

    socket.on("position-state", position => {
        console.log("box " + position);
    });

});
