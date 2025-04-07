import io from "../server.js";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    socket.on("create-session", sessionData => {
        const room = sessionData.room;

        console.log(sessionData);
    })
});
