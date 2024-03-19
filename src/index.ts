import settings from "./settings";
import express, { Express } from "express";
import http from 'http';
import updater from "./system/updater";
import notifier from './system/notifier';

// App creation
const app: Express = express();

// App listening and receiving server
const server: http.Server = app.listen(
    settings.port,
    function () {
        console.log(`${settings.name} listening on port ${settings.port}!`);
    }
);

// Serving static content at ./public directory
app.use(express.static('./public/'));

// Updater
updater(
    server,
    function () {
        console.log(`${settings.name}'s updater ready!`);
    }
);

// Notifier
notifier(
    app,
    function () {
        console.log(`${settings.name}'s notifier ready!`);
    }
);
