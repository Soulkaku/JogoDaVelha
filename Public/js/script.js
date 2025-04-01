    const socket = io.connect();
    
    const inputText = document.getElementById("userForm");

    inputText.addEventListener("submit", function (event) {
        event.preventDefault();
    
        var createUser = document.getElementById("userInput");
        var username = createUser.value.trim();
        
        if (!username) {
            alert("username empty");
            return;
        }

        function createSession(id, name) {
            // socket.emit("create", "room");
        };
        // const userId = socket.id;
        // const userData = {
        //     name: username,
        //     id: socket.id
        // }
        
        // return userData;
        
    });
