import io from "../server.js";

// function SessionExists(room) {}


// export SessionExists;

function criarSessao(room) {
    socket.emit("join", room);
};

export { criarSessao };