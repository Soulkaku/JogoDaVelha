import { socket } from "../socket.js";

function playAction(username, box, room) {

    const userPlay = {
        position : box,
        player : username,
        room : room       
    }

    socket.emit("player-action", ( userPlay ) );
}

export { playAction,  };