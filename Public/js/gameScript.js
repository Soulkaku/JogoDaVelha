import { createSession } from "./create-session.js";
import { playAction } from "./play-action.js";

// import { socket } from "../socket.js";

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

        playAction(name, boxPosition);
    });
});
