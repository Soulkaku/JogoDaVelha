const socket = io();
//create-session( {name, room}

function createSession(userInfo ,room) {
    const sessionData = {
        name: userInfo,
        room: room
    };

    socket.emit("create-session", sessionData);
};

export { createSession };