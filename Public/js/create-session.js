const socket = io();
//create-session(name, room)


function createSession(userInfo ,room) {
    socket.emit("create-session", userInfo, room);
    // socket.join(room);

    // const roomData = io.sockets.adapter.rooms.get(room);
    // const usersInRoom = roomData ? roomData.size : 0; //evitar um undefined

    // if(usersInRoom === 0) {
    //     console.log("no players");
    //     // socket.emit("enemy", userInfo);
    //     socket.on("enter-room", userInfo ,room);
    // } else {
    //     socket.on("create-room", userInfo, room);
    // }
};

// function enterSession(userInfo, room) {
//     socket.on("enter-session", userInfo, room);
// }

    // socket.on("enter-session", (userInfo, room) => {

    // });

export { createSession };