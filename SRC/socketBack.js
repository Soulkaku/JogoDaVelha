import io from "../server.js";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    socket.on("create-session", sessionData => {
        const room = sessionData.room;

        console.log(sessionData);
    });

    socket.on("join-room", sessionData => {
        const room = sessionData.room;
        const username = sessionData.name;

        console.log(`user ${username} with id ${socket.id} entered in room ${room}`);

        socket.broadcast.to(room).emit("enemy", username); 
    });

    socket.on("player-action", userPlay => {
        const username = userPlay.name;
        const play = userPlay.position;

        console.log(userPlay);
    });
});
