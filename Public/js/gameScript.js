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

// let playerPlays = [];

boxes.forEach(box => {
    box.addEventListener('click', () => {
        const boxPosition = box.getAttribute("id");
        console.log(boxPosition);

        box.innerHTML = yourSymbol;
        
        if(box.textContent != "") {
            box.disabled = true;
        }

        playAction(name, boxPosition, room);
    });
});
// socket.on("player-actionClient", (enemyPlay) => {
    

//     console.log(enemyPlay);
// });

socket.on("player-actionClient", (enemyPlay) => {
    const box = document.getElementById(enemyPlay.position);
    let enemySymbol;

    if(yourSymbol === "X") {
        enemySymbol = "O";
    } else if (yourSymbol === "O") {
        enemySymbol = "X";
    }

    box.innerHTML = enemySymbol;

    if(box.innerHTML != "") {
        box.disabled = true;
    }
});