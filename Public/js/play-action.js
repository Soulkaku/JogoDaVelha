import { Socket } from "socket.js";

const board = [ 0, 1, 2,
                3, 4, 5,
                6, 7, 8
];

const winPatterns = [board[0, 1, 2], board[3, 4, 5], board[6, 7, 8], board[0, 3, 6], 
                     board[1, 4, 7], board[2, 5, 8], 
                     board[0, 4, 8], board[2, 4, 6]];

function playAction(username, play) {

    const userPlay = {
        position : play,
        user : username
    }
    
    socket.emit("player-action", (userPlay));
}

// function verifyWin(, play) {
//     const position = play;
// }

export { playAction };