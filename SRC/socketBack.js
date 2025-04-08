import io from "../server.js";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    socket.on("create-session", sessionData => {
        const room = sessionData.room;

        console.log(sessionData);
    });
    
    socket.on("join-room", (room) => {
        socket.join(room);
        console.log(`${socket.id} entered in room ${room}`);
    });
    
        socket.on("position", (session) => {
            const room = session.room;
            const position = session.position;
            socket.broadcast.to(room).emit("positionClient", position);
        });
});
