// const socket = io.connect();

// let user; //object

// const inputText = document.getElementById("UserForm");

// inputText.addEventListener("submit", function(event) {
//     event.preventDefault();

//     var createUser = document.getElementById("userInput");
    
//     var username = createUser.value.trim();
//     var id = socket.id;
// });
//     const socket = io.connect();
    
//     const inputText = document.getElementById("userForm");
    
//     let user = {
//         name: username,
//         userId: id
//     };
    
//     inputText.addEventListener("submit", function (event) {
//         event.preventDefault();
    
//         var createUser = document.getElementById("userInput");

//         var username = createUser.value.trim();
//         var id = socket.id;

//         user = {
//             name: username,
//             userId: id 
//         }

//         if (!username) {
//             alert("username empty");
//             return;
//         }

//         function createSession(id, name) {
//             // socket.emit("create", "room");
//         };
//         // const userId = socket.id;
//         // const userData = {
//         //     name: username,
//         //     id: socket.id
//         // }
        
//         // return userData;
//        console.log(user);

//     });

// export { user }   