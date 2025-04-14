
const winPatterns = [ 
        ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
        ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], 
        ['1', '3', '9'], ['3', '5', '7'], 
        ];

let winner;
let movements;

function checkwin(moves) {
    return winPatterns.some(winCombo => winCombo.every(movement => moves.includes(movements)));
}

function checkPosition(user, moves) {
    movements = moves;
    console.log(user, moves);

    if(checkwin(movements)) {
        winner = user;
        console.log(defineWinner()); 
    }
}

function defineWinner() {
    return winner;
}


function resetWinner() {
    winner = null;

    resetBoard();
}

function resetBoard() {
    return movements.lenght = 0;
}

export { checkPosition,  defineWinner, resetWinner};