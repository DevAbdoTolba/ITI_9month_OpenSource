import asyncio
import websockets
import json

clients = {}

async def sendToAll(data, exclude=None):
    for client in clients:
        if client is not exclude:
            try:
                await client.send(json.dumps(data))
            except:
                pass

async def handler(ws):
    try:
        async for message in ws:
            received = json.loads(message)
            
            if received.get("login"):
                if received["username"] in clients.values():
                    await ws.send(json.dumps({"type": "error", "message": "Username is already taken"}))
                    await ws.close()
                    return
                clients[ws] = received["username"]
                await sendToAll({
                    "type": "login",
                    "message": received["username"] + " has joined the chat",
                    "onlineUsers": list(clients.values())
                })


            elif received.get("body"):
                data = {
                    "type": "chat",
                    "message": received["body"]
                }
                if received.get("to") == "all":
                    await sendToAll(data, ws)
                else:
                    for client in clients:
                        if clients[client] == received.get("to"):
                            try:
                                await client.send(json.dumps(data))
                            except:
                                pass
    finally:
        if ws in clients:
            name = clients.pop(ws)
            await sendToAll({
                "type": "logout",
                "message": name + " has left the chat",
                "onlineUsers": list(clients.values())
            })

async def main():
    async with websockets.serve(handler, "localhost", 8081):
        print("server on 8081")
        await asyncio.Future()

asyncio.run(main())
