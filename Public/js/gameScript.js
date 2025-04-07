import { createSession } from "./create-session.js";
const socket = io();

const params = new URLSearchParams(window.location.search);

const name = params.get("username");
const room = params.get("room");


    createSession(name, room);


const yourName = document.getElementById("Your-User");
yourName.textContent = `Ally: ${name}`;

const enemyName = document.getElementById("Enemy-User");
socket.on("enemy-data", enemyName => {
    enemyName.textContent = `enemy: ${enemyName}`;
});



const boxes = document.getElementsByClassName("box");

for (let p = 0; p < boxes.length; p++) {
    boxes[p].addEventListener("click", function() {
        const position = this.getAttribute("data-id");

        console.log(board[p]);

    });
}