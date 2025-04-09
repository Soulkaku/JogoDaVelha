import { socket } from "../socket.js";

function createSession(userInfo ,room) {
    const sessionData = {
        name: userInfo,
        room: room
    };

    socket.emit("create-session", sessionData);
    socket.emit("join-room", sessionData);
};

export { createSession };