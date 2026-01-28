const { createServer } = require('node:http');

let data = [{ id: 0, name: "postTitle", content: "lorem20" }];

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  let b = '';
  res.setHeader("Content-Type", "application/json");
  req.on('data', c => b += c);

  req.on('end', () => {
    if (req.url === "/favicon.ico") return res.end();

    const id = +req.url.slice(1);
    let body = b ? JSON.parse(b) : {};

    if (req.method === 'GET')
      (id && res.end(JSON.stringify(data.find(i => i.id === id)) || "not found")) || res.end(JSON.stringify(data));
    
    if (req.method === 'POST')
      data.find(i => i.name === body.name) ?
        res.end("Already found")
        : data.push({ id: data.length, ...body }) && res.end("added");
    
    if (req.method === 'PUT')
      data.find(d => d.id === id) ?
        (data = data.map(d => d.id === id ? { ...d, ...body } : d))
        && res.end("updated") : res.end("not found");
    
    if (req.method === 'DELETE')
      data.find(d => d.id === id) ?
        (data = data.filter(d => d.id !== id))
        && res.end("deleted") : res.end("not found");

    if (!res.writableEnded) res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});