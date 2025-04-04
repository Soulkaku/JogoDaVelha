const socket = io.connect();


const form = document.getElementById("userForm");
// const userData = new Object();

form.addEventListener("submit", event => {
    event.preventDefault();

    const room = (document.getElementById("roomInput")).value;
    const username = (document.getElementById("userInput")).value.trim();
  
    // userData.name = username.value.trim();
    
    if(!username) {
        alert("escreva um nome");
        return;

    } else {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("indentification", socket.id);

            socket.emit("create_user-find_room", {name : username, id: socket.id}, room);

            document.getElementById("userInput").value = "";
            document.getElementById("roomInput").value = "";
    }
});


// const roomForm = document.getElementById("roomForm");
// let room;

// roomForm.addEventListener("submit", (event) => {
//     event.preventDefault
//     const roomId = document.getElementById("roomInput");
    

//     if(roomId.value === "") {
//         socket.emit()
//     }
//     socket.emit("enter-room", roomId);
// });
// const inputText = document.getElementById("userForm");
// const userData = new Object();

// inputText.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     let nameInput = document.getElementById("userInput");
//     userData.name = nameInput.value.trim();

//     if (!userData.name) {
//         alert("digite um nome");
//         return;
//     } else {
//         alert(JSON.stringify(userData));
//         sessionStorage.setItem("username", userData.name);
//         socket.emit("create-user", { name : userData.name });
        

//         // nameInput.value = "";
//         window.location.href = "http://localhost:3000/game"
//     }

    // socket.on("alert-user", (userName) => { //somente para testar conexão
    //     console.log(userName);
    // });
    
    // createSession(userData);
    
    // if(!createSession) {
    //     alert("type a name, no matter what");
    //     return;

    // } else {
    //     nameInput.value = "";
    //     socket.emit("userTest", alert(JSON.stringify(userData))); //returns object object
    //     socket.emit("user-created", {name : userData.name});
        
    //      window.location.href = "http://localhost:3000/game"
    // }
// });

// function createSession(userData) {
//     socket.emit("dados-do-usuario", userData);
// };