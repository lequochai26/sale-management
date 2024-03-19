import "/socket.io/socket.io.js";

// Get socket io
window.socketIO = io();

// Reload on receiving event call 'reload'
socketIO.on(
    "reload",
    function () {
        window.location.reload();
    }
)