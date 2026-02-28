@echo off
echo ============================
echo   Todo API Test Script
echo ============================
echo.

echo --- 1. Create a todo ---
curl -s -X POST http://localhost:3000/todo -H "Content-Type: application/json" -d "{\"title\": \"My Task\", \"task\": \"Do something cool\", \"done\": false}"
echo.
echo.

echo --- 2. Create another todo ---
curl -s -X POST http://localhost:3000/todo -H "Content-Type: application/json" -d "{\"title\": \"Second Task\", \"task\": \"Another thing to do\", \"done\": true}"
echo.
echo.

echo --- 3. Get all todos ---
curl -s http://localhost:3000/todo
echo.
echo.

echo --- 4. Get first todo (copy an ID from above) ---
echo Skipping... use: curl http://localhost:3000/todo/ID
echo.

echo --- 5. Update first todo (copy an ID from above) ---
echo Skipping... use: curl -X PATCH http://localhost:3000/todo/ID -H "Content-Type: application/json" -d "{\"done\": true}"
echo.

echo --- 6. Delete first todo (copy an ID from above) ---
echo Skipping... use: curl -X DELETE http://localhost:3000/todo/ID
echo.

echo --- 7. Try invalid data (should fail with 400) ---
curl -s -X POST http://localhost:3000/todo -H "Content-Type: application/json" -d "{\"title\": \"x\"}"
echo.
echo.

echo --- 8. Try getting a todo that does not exist (should fail with 404) ---
curl -s http://localhost:3000/todo/999999
echo.
echo.

echo ============================
echo   Done!
echo ============================
pause
