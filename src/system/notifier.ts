import { Express } from "express";

function notifier(app: Express, callback: () => void) {
    app.use(
        function (request, response, next) {
            console.log(`${request.method} ${request.url}`);
            next();
        }
    );

    if (callback) {
        callback();
    }
}

export default notifier;