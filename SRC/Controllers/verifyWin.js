// const board = [ 0, 1, 2,
//                 3, 4, 5,
//                 6, 7, 8
//               ];


// const winPatterns = [board[0, 1, 2], board[3, 4, 5], board[6, 7, 8], board[0, 3, 6],
//                      board[1, 4, 7], board[2, 5, 8], 
//                      board[0, 4, 8], board[2, 4, 6]
//                     ];


function receivePosition(position, user) {
    let markedBoxes = [];
    markedBoxes.push(position); //receives a object with user and position

    for (let i = 0; i < 4; i++) {
        console.log(markedBoxes);
    }
}

export { receivePosition };