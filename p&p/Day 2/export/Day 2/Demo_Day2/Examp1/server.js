const websocket = require('ws'); 

const wss = new websocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log("Client connected");
    ws.send("Welcome to the WebSocket server!");

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    })


})

console.log("WebSocket server is running on ws://localhost:8080");