#!/bin/bash

BASE_URL="http://localhost:3000"
USER1="user_$(date +%s)"
USER2="user2_$(date +%s)"

echo "--- 1. SIGN UP User 1 ---"
curl -s -X POST $BASE_URL/auth/signup -H "Content-Type: application/json" -d "{\"username\": \"$USER1\", \"password\": \"123456\"}"
echo -e "\n"

echo "--- 2. SIGN IN User 1 ---"
TOKEN1=$(curl -s -X POST $BASE_URL/auth/signin -H "Content-Type: application/json" -d "{\"username\": \"$USER1\", \"password\": \"123456\"}" | grep -o '"token":"[^"]*' | grep -o '[^"]*$')
echo "Token 1 Acquired"

echo "--- 3. SIGN UP & IN User 2 ---"
curl -s -X POST $BASE_URL/auth/signup -H "Content-Type: application/json" -d "{\"username\": \"$USER2\", \"password\": \"password\"}" > /dev/null
TOKEN2=$(curl -s -X POST $BASE_URL/auth/signin -H "Content-Type: application/json" -d "{\"username\": \"$USER2\", \"password\": \"password\"}" | grep -o '"token":"[^"]*' | grep -o '[^"]*$')
echo "Token 2 Acquired"
echo -e "\n"

echo "--- 4. User 1 Creates Post ---"
POST_ID=$(curl -s -X POST $BASE_URL/posts -H "Authorization: Bearer $TOKEN1" -H "Content-Type: application/json" -d '{"title": "User1 Secret Diary", "content": "Nobody should see this"}' | grep -o '"_id":"[^"]*' | grep -o '[^"]*$')
echo "Post Created ID: $POST_ID"
echo -e "\n"

echo "--- 5. User 1 Views Own Posts (Should Success) ---"
curl -s -X GET $BASE_URL/posts -H "Authorization: Bearer $TOKEN1" | grep "User1 Secret Diary" && echo "User 1 saw their post."
echo -e "\n"

echo "--- 6. User 2 Views Own Posts (Should be Empty, cannot see User 1) ---"
curl -s -X GET $BASE_URL/posts -H "Authorization: Bearer $TOKEN2"
echo "(If empty [], test passed)"
echo -e "\n"

echo "--- 7. User 2 Tries to Update User 1 Post (Should Fail) ---"
curl -s -X PUT $BASE_URL/posts/$POST_ID -H "Authorization: Bearer $TOKEN2" -H "Content-Type: application/json" -d '{"title": "HACKED"}'
echo -e "\n"

echo "--- 8. User 1 Creates Comment on their Post ---"
COMMENT_ID=$(curl -s -X POST $BASE_URL/comments -H "Authorization: Bearer $TOKEN1" -H "Content-Type: application/json" -d "{\"content\": \"My private comment\", \"postId\": \"$POST_ID\"}" | grep -o '"_id":"[^"]*' | grep -o '[^"]*$')
echo "Comment Created ID: $COMMENT_ID"
echo -e "\n"

echo "--- 9. User 2 Tries to Delete User 1 Comment (Should Fail) ---"
curl -s -X DELETE $BASE_URL/comments/$COMMENT_ID -H "Authorization: Bearer $TOKEN2"
echo -e "\n"

echo "--- 10. User 1 Deletes Own Post (Should Success) ---"
curl -s -X DELETE $BASE_URL/posts/$POST_ID -H "Authorization: Bearer $TOKEN1"
echo -e "\n"