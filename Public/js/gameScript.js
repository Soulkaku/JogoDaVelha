import { createSession } from "./create-session.js";

// import { socket } from "../socket.js";

const params = new URLSearchParams(window.location.search);
const yourSymbol = sessionStorage.getItem("yourSymbol");


const name = params.get("username");
const room = params.get("room");


    createSession(name, room);


const yourName = document.getElementById("Your-User");
yourName.textContent = `Ally: ${name}`;


const boxes = document.getElementsByClassName("box");

let playerPlays = [];

for(let p = 0; p < boxes.length; p++) {
    boxes[p].addEventListener("click", () => {
        const box = boxes[p];
        box.innerHTML = yourSymbol;
        console.log(position[p]);
        playerPlays.push(position[p]);
        

        // if(playerPlays.length === 3) {
        //     console.log("wind)");
        // }
    });
}