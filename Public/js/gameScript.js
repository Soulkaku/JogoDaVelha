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
