import chokidar from 'chokidar';
import { Server } from 'socket.io';
import http from 'http';

function updater(server: http.Server, callback?: () => void) {
    // Create socket.io server
    const socketServer: Server = new Server(server);
    
    // Watch on change
    chokidar.watch('./public/')
    .on(
        'all',
        function (eventName, path, stats) {
            socketServer.emit('reload');
        }
    )

    // Call callback
    if (callback) {
        callback();
    }
}

export default updater;