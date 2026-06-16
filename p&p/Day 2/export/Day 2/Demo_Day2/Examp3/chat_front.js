

const username = prompt("Enter your name:"); 
document.getElementById("title").textContent = username;

const chatbox = document.getElementById("chatbox");
const onlineList = document.getElementById("online");
const sendBtn = document.getElementById("send");
const messageInput = document.getElementById("msg");
// __________________________Part1
const socket = new WebSocket("ws://localhost:8080"); 


socket.onopen = () => {
    console.log("Connected to the server");
    socket.send(JSON.stringify({ login: true, username: username }));
}

sendBtn.addEventListener("click", () => {
    const message = messageInput.value;
    socket.send(JSON.stringify({
        body: `${username}: ${message}`, // aya: hello
    }));
    chatbox.innerHTML += `<p>Me: ${message}</p>`;
    messageInput.value = "";
})

socket.onmessage = (event) => {
    console.log("Received message:", event.data);
    const data = JSON.parse(event.data);
    if (data.type === "chat") {
        chatbox.innerHTML += `<p>${data.message}</p>`;
    }else if (data.type === "login") {
        chatbox.innerHTML += `<p style="color: green;">${data.message}</p>`;
    }else if(data.type === "logout") {
        chatbox.innerHTML += `<p style="color: red;">${data.message}</p>`;
    }


    if(data.onlineUsers) {
        onlineList.innerHTML = "";
        data.onlineUsers.forEach((user) => {
            onlineList.innerHTML += `<li>${user}</li>`;
        });
    }
}