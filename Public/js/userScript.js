// import { createSession } from "./create-session.js";

const form = document.getElementById("userForm");

form.addEventListener("submit", event => {
    event.preventDefault();

    const room = (document.getElementById("roomInput")).value;
    const username = (document.getElementById("userInput")).value.trim();
    
    if(!username) {
        alert("escreva um nome");
        return;

    } else {
            // sessionStorage.setItem("username", username);
            // sessionStorage.setItem("room", room);

            // createSession(username, room);

            // document.getElementById("userInput").value = "";
            // document.getElementById("roomInput").value = "";

            window.location.href = `/game?room=${room}&username=${username}`;
    }
});

