import socket
import os
import time
import json

s = socket.socket()
s.bind(('', 3000))
s.listen()
print("works 3000")
while True:
    conn, addr = s.accept()
    req = conn.recv(1024).decode()
    path = req.split(' ')[1]
    if path == '/':
        body = open('index.html').read()
        conn.send(('HTTP/1.1 200 OK\r\n\r\n' + body).encode())
    else:
        lasttime = float(path.split('=')[1])
        while True:
            currenttime = os.path.getmtime('content.txt')
            if currenttime > lasttime:
                body = json.dumps({'time': currenttime, 'data': open('content.txt').read()})
                conn.send(('HTTP/1.1 200 OK\r\n\r\n' + body).encode())
                break
            time.sleep(1)
    conn.close()
