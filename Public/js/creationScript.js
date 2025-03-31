document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const createUser = document.getElementById("userInput");
    const username = createUser.value.trim();

    if(!username) {
        alert("Type a nickname!");
        return;
    };
})