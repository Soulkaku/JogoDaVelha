
const winPatterns = [ 
        ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
        ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], 
        ['1', '3', '9'], ['3', '5', '7'], 
        ];

let winner;

function checkwin(moves) {
    return winPatterns.some(winCombo => winCombo.every(movement => moves.includes(movement)));
}


function checkPosition(user, moves) {
    let movement = moves;
    console.log(user, moves);

    if(checkwin(movement)) {
        winner = user;
        console.log(defineWinner()); 
    }
}

function defineWinner() {
    return winner;
}

export { checkPosition,  defineWinner};