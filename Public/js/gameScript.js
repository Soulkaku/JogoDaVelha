const socket = io();

const buttons = document.getElementsByClassName("box");

buttons.addEventListener("click", function(event) {
    event.preventDefault();

    console.log("!");
});