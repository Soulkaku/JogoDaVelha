const winPatterns = [ [1, 2, 3], [4, 5, 6], [7, 8, 9],
                      [1, 4, 7], [2, 5, 8], [3, 6, 9], 
                      [1, 3, 9], [3, 5, 7]  ];



function checkWin(moves) {
    return winPatterns.some(combo => combo.every(move => moves.includes(move)));
}

function receivePosition(moves, user) {
    console.log(user, moves);
    if(checkWin(moves)) {
        console.log(user + "winner");
    }
}

export { receivePosition };