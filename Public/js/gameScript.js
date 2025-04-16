import { socket } from "../socket.js";
import { createSession } from "./create-session.js";
import { playAction } from "./play-action.js";

socket.on("return-creation", () => {
    alert("Sala cheia!");
    history.back();
});

const params = new URLSearchParams(window.location.search);
let yourSymbol = sessionStorage.getItem("yourSymbol");

if(yourSymbol == undefined) {
    yourSymbol = "X";
};

const name = params.get("username");
const room = params.get("room");

    createSession(name, room);

const yourName = document.getElementById("Your-User");
yourName.textContent = `you: ${name}`;

let rivalName = document.getElementById("Rival-User");

const boxes = document.querySelectorAll(".box");

disableAll(true);

socket.on("start-game", (state) => {
    disableAll(state); 
    socket.emit("your-rival", name);
});

socket.on("rival-name", (rival) => {
    rivalName.textContent = `rival: ${rival}`;
});

boxes.forEach(box => {
    box.addEventListener('click', () => {
        const boxPosition = box.getAttribute("id");
        console.log(boxPosition);

        box.innerHTML = yourSymbol;
        
        playAction(name, boxPosition, room);
        disableAll(true);
    });
});


socket.on("player-actionClient", (enemyPlay) => {
    const box = document.getElementById(enemyPlay.position);
    let enemySymbol;

    if(yourSymbol == "X") {
        enemySymbol = "O";
    } else {
        enemySymbol = "X";
    }

    box.innerHTML = enemySymbol;

    disableAll(false);
    disableContent();
});

socket.on("game-result", (winner) => {
    console.log(winner);
    disableAll(true);
    if(winner != "") {
        dialog.showModal();

        if(name === winner) {
            yourStatus.textContent = "Você ganhou";
        } else if(name != winner) {
            yourStatus.textContent = "Você perdeu";
        }  else if(boxes.textContent != "") {
            yourStatus.textContent = "empate";
        }
    }
});

const dialog = document.querySelector("dialog");
const yourStatus = document.getElementById("loserWinner");

window.newGame = function() {
    dialog.close();
    history.back();

    socket.emit("new-game");
}

window.resetGame = function() {
    dialog.close();

    for (let b = 0; b < boxes.length; b++) {
        const box = document.getElementById(b + 1);
        box.textContent = "";
    }

    const restartPhrase = `the game was restarted by ${name}`;
    
    
    socket.emit("clean-board", restartPhrase);

    socket.emit("restart-board");
    socket.on("enemy-response", () => {
        disableAll(false);
    });

    socket.on("new-game", () => {
        history.back();
    });
}

function disableAll(state) {
    for (let b = 0; b < boxes.length; b++) {
        document.getElementById(b + 1).disabled = state;
    };
};

function disableContent() {
    for (let b = 0; b < boxes.length; b++) {
        const box = document.getElementById(b + 1);
        if(box.textContent.includes("X") || box.textContent.includes("O")) {
            box.disabled = true;
        }
    }
};