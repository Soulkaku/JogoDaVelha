import { createSession } from "./create-session.js";
import { socket } from "./socket.js";

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

        let board = [   "1", "2", "3",
                        "4", "5", "6",
                        "7", "8", "9",
        ];

        console.log(board[p]);
        const session = {
            room : room,
            position : board[p]
        }
        socket.emit("position", session);
    });
}

socket.on("positionClient", position => {
    alert(position);
});