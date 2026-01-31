const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const dataFilePath = path.join(__dirname, "comments.json");

const read = () => {
  if (fs.existsSync(dataFilePath)) {
    const fileData = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(fileData);
  }
  return [];
};

// Helper function to write data to file
const save = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

let data = read();

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("Welcome to the Home Page!");
});


app
    .route("/comments")
    .get((req, res) => {
        data = read();
        res.json(data);
    })
    .post((req, res) => {
        const newComment = { id: data.length + 1, ...req.body };
        data.push(newComment);
        save(data);
        res.status(201).json(newComment);
    })

app
    .route("/comments/:id")
    .get((req, res, next) => {
        const id = parseInt(req.params.id);
        const comment = data.find((c) => c.id === id);
        console.log(comment);
        if (comment) {
        res.json(comment);
        } else {
        res.status(404).send("Comment not found");
        }
    })
    .post((req, res) => {
        const { id } = req.params;
        const newComment = { id:  id, ...req.body };
        data.push(newComment);
        save(data);
        res.status(201).json(newComment);
    })
    .put((req, res) => {
        const { id } = req.params;
        const {  author, body } = req.body;
        const comment = data.find((c) => c.id === id);
        if (comment) {
        comment.author = author || comment.author;
        comment.body = body || comment.body;
        save(data);
        res.json(comment);
        } else {
        res.status(404).send("Comment not found");
        }
    })
    .delete((req, res) => {
        const { id } = req.params;
        idd = parseInt(id);
        const index = data.findIndex((c) => c.id === idd);
        console.log(index);
        
        if (index !== -1) {
        const deletedComment = data.splice(index, 1);
        save(data);
        res.json(deletedComment);
        } else {
        res.status(404).send("Comment not found");
        }
    });

app.listen(3000, () =>
console.log("Express Running on http://localhost:3000/"),
);
