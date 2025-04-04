import io from "../server.js";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    socket.on("disconnect", (motivo) => {
        console.log(`User ${socket.id} disconnected, because: ${motivo}`);
    });

    let roomId;
    socket.on("create_user-find_room", (userData, room) => {
        roomId = room;
        console.log("userData" + JSON.stringify(userData), ", room: " + roomId);
    });

    socket.emit("enter-room", roomId);

//     // socket.on("create", function (gameRoom) {
//     //     socket.join(gameRoom);
//     // })
    
//     let username;
    
//     socket.on("create-user", (name) => {
//         username = name;
//         console.log(username);
//         // socket.emit("alert-user", username.name);
//         socket.emit("second-user", username.name);
//     });


//     // socket.on("dados-do-usuario", async (userData) => {
//     //     username = userData.name
//     //     console.log(username); //or (userData), returns {name: }
//     //     socket.emit("username_fromX", username);
//     // });

//     socket.emit("user-data", async (username) => {
//     });
//     //estão conectadas
//     function emitirNome(name) {
//         socket.emit("firstName", (name) => {
//             atualizarH2(name);
//         })
//     }
//     // socket.on("play", (nombre) => {
//     //     socket.broadcast.emit(console.log(nombre));
//     // })
   
});


// function redirectToGame(username) {
    
// }