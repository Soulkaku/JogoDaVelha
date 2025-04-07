// import { createSession } from "./create-session.js";

const form = document.getElementById("userForm");

form.addEventListener("submit", event => {
    event.preventDefault();

    const room = (document.getElementById("roomInput")).value;
    const username = (document.getElementById("userInput")).value.trim();
    
    if(!username) {
        alert("escreva um nome");
        return;
    }

    window.location.href = `/game?room=${room}&username=${username}`;

});

