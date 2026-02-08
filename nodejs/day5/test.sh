#!/bin/bash


echo "1. SIGN UP User 1"
if ! curl -s -X POST http://localhost:3000/auth/signup -H "Content-Type: application/json" -d '{"username": "user1", "password": "123456"}'; then
    echo "ERROR in SIGN UP User 1"
fi
echo -e "\n"

echo "2. SIGN IN User 1"
TOKEN1=$(curl -s -X POST http://localhost:3000/auth/signin -H "Content-Type: application/json" -d '{"username": "user1", "password": "123456"}' | grep -o '"token":"[^"]*' | grep -o '[^"]*$')
if [ -z "$TOKEN1" ]; then
    echo "ERROR in SIGN IN User 1"
else
    echo "Token 1 Acquired"
fi
echo -e "\n"

echo "3. SIGN UP & IN User 2"
if ! curl -s -X POST http://localhost:3000/auth/signup -H "Content-Type: application/json" -d '{"username": "user2", "password": "password"}' > /dev/null; then
    echo "ERROR in SIGN UP User 2"
fi
TOKEN2=$(curl -s -X POST http://localhost:3000/auth/signin -H "Content-Type: application/json" -d '{"username": "user2", "password": "password"}' | grep -o '"token":"[^"]*' | grep -o '[^"]*$')
if [ -z "$TOKEN2" ]; then
    echo "ERROR in SIGN IN User 2"
else
    echo "Token 2 Acquired"
fi
echo -e "\n"

echo "4. User 1 Creates Post"
POST_ID=$(curl -s -X POST http://localhost:3000/posts -H "token: $TOKEN1" -H "Content-Type: application/json" -d '{"title": "User1 Secret Diary", "content": "Nobody should see this"}' | grep -o '"_id":"[^"]*' | grep -o '[^"]*$')
if [ -z "$POST_ID" ]; then
    echo "ERROR in User 1 Creates Post"
else
    echo "Post Created ID: $POST_ID"
fi
echo -e "\n"

echo "5. User 1 Views Own Posts"
if ! curl -s -X GET http://localhost:3000/posts -H "token: $TOKEN1" | grep "User1 Secret Diary"; then
    echo "ERROR in User 1 Views Own Posts"
else
    echo "User 1 saw their post."
fi
echo -e "\n"

echo "6. User 2 Views Own Posts"
if ! curl -s -X GET http://localhost:3000/posts -H "token: $TOKEN2"; then
    echo "ERROR in User 2 Views Own Posts"
else
    echo "(If empty [], test passed)"
fi
echo -e "\n"

echo "7. User 2 Tries to Update User 1 Post"
if ! curl -s -X PUT http://localhost:3000/posts/$POST_ID -H "token: $TOKEN2" -H "Content-Type: application/json" -d '{"title": "HACKED"}'; then
    echo "ERROR in User 2 Tries to Update User 1 Post"
fi
echo -e "\n"

echo "8. User 1 Creates Comment on their Post"
COMMENT_ID=$(curl -s -X POST http://localhost:3000/comments \
  -H "token: $TOKEN1" \
  -H "Content-Type: application/json" \
  -d "{\"content\": \"My private comment\", \"postId\": \"$POST_ID\"}" \
  | grep -o '"_id":"[^"]*' | grep -o '[^"]*$')
if [ -z "$COMMENT_ID" ]; then
    echo "ERROR in User 1 Creates Comment"
else
    echo "Comment Created ID: $COMMENT_ID"
fi
echo -e "\n"

echo "9. User 2 Tries to Delete User 1 Comment"
echo $COMMENT_ID
if ! curl -s -X DELETE http://localhost:3000/comments/$COMMENT_ID -H "token: $TOKEN2"; then
    echo "ERROR in User 2 Tries to Delete User 1 Comment"
fi
echo -e "\n"

echo "10. User 1 Deletes Own Post"
if ! curl -s -X DELETE http://localhost:3000/posts/$POST_ID -H "token: $TOKEN1"; then
    echo "ERROR in User 1 Deletes Own Post"
fi
echo -e "\n"


curl  -H "token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTg4MTQ2OTQ2MmJkOWQ4N2M5ZDdkYTQiLCJpYXQiOjE3NzA1MjYyOTQsImV4cCI6MTc3MDUyOTg5NH0.lDYLKt7-ZuVpgXR6CfZ5OwI4xpG1D7iQO761wumROE8" -H "Content-Type: application/json" -d '{"content": "My private comment", "postId": "69881753f9634d37008406c8"}'  -X POST http://localhost:3000/comments
