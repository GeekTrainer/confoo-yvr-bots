"use strict";

const builder = require("botbuilder");
const dialog = require("./dialogs/echo");
const bot = new builder.UniversalBot(
    new builder.ChatConnector({
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    }), 
    // dialog.waterfall
    [
        (session) => {
            // session.send('Hello, world!!');
            builder.Prompts.text(session, `Hi there! What is your name?`);
        },
        (session, results) => {
            session.send(`Hello, ${results.response}`);
        }
    ]
);


module.exports = bot;
