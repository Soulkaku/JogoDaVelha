const socket = io.connect()

const inputText = document.getElementById("userForm");


const userData = new Object();

inputText.addEventListener("submit", (event) => {
    event.preventDefault();

    //let userId = socket.id;
    
    const nameInput = document.getElementById("userInput");
    userData.name = nameInput.value.trim();

    createSession(userData);
    
    if(!createSession) {
        alert("type a name, no matter what");
        return;

    } else {
        nameInput.value = "";
        socket.emit("userTest", alert(JSON.stringify(userData))); //returns object object
        // // socket.emit('create', "room1"); //create a room;
        
         window.location.href = "http://localhost:3000/game"
    }
});

function createSession(userData) {
    socket.emit("dados-do-usuario", userData);
};


