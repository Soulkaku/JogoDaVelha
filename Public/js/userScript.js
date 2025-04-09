// import { createSession } from "./create-session.js";

const button_chooseSymbol = document.getElementById("buttonChooseSymbol");

let index = 0;
const symbols = ["X", "O"];

button_chooseSymbol.addEventListener("click", e => {
    e.preventDefault();

    index = (index + 1) % symbols.length;
    button_chooseSymbol.textContent = symbols[index];

    sessionStorage.setItem("yourSymbol", symbols[index]);
});


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

