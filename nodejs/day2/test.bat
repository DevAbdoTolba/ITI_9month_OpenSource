@echo off
echo --- 1. Testing Redirect (Root to Home) ---
curl -L http://localhost:3000/
echo.
echo.

echo --- 2. GET All Comments ---
curl http://localhost:3000/comments
echo.
echo.

echo --- 3. GET ID 1 (Using Query Param) ---
curl "http://localhost:3000/comments/2"
echo.
echo.

echo --- 4. POST New Comment ---
curl -X POST -H "Content-Type: application/json" -d "{\"author\":\"Junior\", \"body\":\"I made this\"}" http://localhost:3000/comments
echo.
echo.

echo --- 5. PUT Update ID 2 (Sending ID in Body) ---
curl -X PUT -H "Content-Type: application/json" -d "{\"id\": 2, \"body\":\"Updated by Junior\"}" http://localhost:3000/comments
echo.
echo.

echo --- 6. DELETE ID 5 (Sending ID in Body) ---
curl -X DELETE -H "Content-Type: application/json" -d "{\"id\": 5}" http://localhost:3000/comments
echo.
echo.

echo --- 7. GET All Again (To prove ID 1 is gone) ---
curl http://localhost:3000/comments
echo.
echo.

pause