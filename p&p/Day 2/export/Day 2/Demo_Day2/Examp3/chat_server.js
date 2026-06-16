// ____________________Part1 
const webSocket = require("ws");

const wss = new webSocket.Server({ port: 8080 });
// _____________________Part2
let clients = [];
let userId = 0;
function getOnlineUsers() {
    return clients.map((client) => client.username);
}

function sendToAll(data, excludeClient = null) {
    clients.forEach((client) => {
        if (client !== excludeClient && client.readyState === webSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}
// _____________________Part3
wss.on("connection", (ws) => {
    userId++;
    ws.id = userId;
    clients.push(ws);
    console.log(`User ${ws.id} connected`);

    ws.on("message", (message) => {
        const receivedData = JSON.parse(message);
        if(receivedData.login && receivedData.username) {
            ws.username = receivedData.username
            const data  = {
                type: "login",
                message: `${ws.username} has joined the chat`,
                onlineUsers: getOnlineUsers()
            }
            console.log(data);
            sendToAll(data);
            ws.send(JSON.stringify({onlineUsers: getOnlineUsers() }));
        }else if(receivedData.body) {
            const data = {
                type: "chat",
                message: receivedData.body
            }
            sendToAll(data, ws);
        }
    })

    ws.on("close", () => {
        console.log(`User ${ws.id} disconnected`);
        clients = clients.filter(client => client.id !== ws.id);
        if (ws.username) {
            const data = {
                type: "logout",
                message: `${ws.username} has left the chat`,
                onlineUsers: getOnlineUsers()
            };
            sendToAll(data);
        }
    });


})