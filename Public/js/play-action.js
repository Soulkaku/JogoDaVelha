import { socket } from "../socket.js";

function playAction(username, play) {

    const userPlay = {
        position : play,
        name : username
    };
    
    socket.emit("player-action", (userPlay));
}

export { playAction };