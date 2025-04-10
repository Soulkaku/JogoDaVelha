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

        socket.join(room);
    });
    socket.on("player-action", (userPlay) => {
        // const plyer = userPlay.player;
        // const play = userPlay.position;
        const room = userPlay.room;

        console.log(userPlay);

        socket.to(room).emit("player-actionClient", userPlay);
    });

    
});
