const socket = io.connect()

const inputText = document.getElementById("userForm");

let username;
let userId;


inputText.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("userInput");
    
    username = nameInput.value.trim();
    userId = socket.id;


    if(!username) {
        alert("type a name, no matter what");
    }

    console.log(username);
    
});
