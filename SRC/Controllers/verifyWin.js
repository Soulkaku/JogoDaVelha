
const winPatterns = [ 
        ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
        ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], 
        ['1', '3', '9'], ['3', '5', '7'], 
        ];


// function checkWin(moves) {
//     return winPatterns.some(combo => combo.every(move => moves.includes(move)));
// }

function checkwin(moves) {
    return winPatterns.some(winCombo => winCombo.every(movement => moves.includes(movement)));
}


function defineWinner(user, moves) {
    let movement = moves;
    console.log(user, moves);

    if(checkwin(movement)) {
        console.log("winner");
    } else {
    }
    console.log("not detected");
    
        if(movement.length === 3) {
            console.log(movement + "right");
        }
    
}


// function defineWinner(user, moves) {
//     let movement = moves;
//     console.log(user, moves);

//     if(checkwin(movement)) {
//         console.log(user + "{ winner }");
//     } else {
//     }
//     console.log("lost");
// }
export {checkwin, defineWinner };
// function receivePosition(moves, user) {
//     console.log(user, moves);
//     if(checkWin(moves)) {
//         console.log(user + "winner");
//     }
// }

