import { socket } from "../socket.js";
import { createSession } from "./create-session.js";
import { playAction } from "./play-action.js";

const params = new URLSearchParams(window.location.search);
const yourSymbol = sessionStorage.getItem("yourSymbol");

const name = params.get("username");
const room = params.get("room");

    createSession(name, room);

const yourName = document.getElementById("Your-User");
yourName.textContent = `Ally: ${name}`;

const boxes = document.querySelectorAll(".box");

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

    if(yourSymbol === "X") {
        enemySymbol = "O";
    } else if (yourSymbol === "O") {
        enemySymbol = "X";
    }

    box.innerHTML = enemySymbol;

    disableAll(false);
    disableContent();
});


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
}