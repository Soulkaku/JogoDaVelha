import { socket } from "../socket.js";

// const board = [ 0, 1, 2,
//                 3, 4, 5,
//                 6, 7, 8
// ];




function playAction(username, play) {

    const userPlay = {
        position : play,
        name : username
    };
    
    socket.emit("player-action", (userPlay));
}

// function verifyWin(, play) {
//     const position = play;
// }

export { playAction };