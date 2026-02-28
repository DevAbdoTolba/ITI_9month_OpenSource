# Users

POST http://localhost:3000/users/signup
{
  "name": "Tolba",
  "email": "Tolba@Tolba.com",
  "password": "password"
}

POST http://localhost:3000/users/login
{
  "email": "Tolba@Tolba.com",
  "password": "password"
}

GET http://localhost:3000/users/profile
Header -> Authorization: Bearer <token>

---

# Todos

POST http://localhost:3000/todo
{
  "title": "lazy task",
  "task": "do nothing",
  "done": false
}

GET http://localhost:3000/todo

GET http://localhost:3000/todo/<id>

PATCH http://localhost:3000/todo/<id>
{
  "done": true
}

DELETE http://localhost:3000/todo/<id>
