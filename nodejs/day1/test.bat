@echo off
setlocal
:: --- ZEN COLORS SETUP ---
for /F "delims=#" %%E in ('"prompt #$E# & for %%a in (1) do rem"') do set "ESC=%%E"
set "G=%ESC%[32m"
set "R=%ESC%[31m"
set "W=%ESC%[0m"
set /a n=0

:: --- TESTS ---


set /a n+=1
echo %n%. GET all
echo %G%
curl http://localhost:3000/ 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in GET all%W% & echo.

set /a n+=1
echo %n%. GET id 0
echo %G%
curl http://localhost:3000/0 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in GET%W% & echo.

set /a n+=1
echo %n%. GET id not found
echo %G%
curl http://localhost:3000/-1 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in GET not found%W% & echo.

set /a n+=1
echo %n%. POST new
echo %G%
curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"veryy New Post\", \"content\":\"some content\"}" http://localhost:3000/1 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in POST new%W% & echo.

set /a n+=1
echo %n%. POST duplicate
echo %G%
curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"veryy New Post\", \"content\":\"some content\"}" http://localhost:3000/1 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in POST duplicate%W% & echo.

set /a n+=1
echo %n%. PUT update
echo %G%
curl -X PUT -H "Content-Type: application/json" -d "{\"name\":\"Updated Post\", \"content\":\"new content\"}" http://localhost:3000/1 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in PUT%W% & echo.

set /a n+=1
echo %n%. PUT not found
echo %G%
curl -X PUT -H "Content-Type: application/json" -d "{\"name\":\"ghost\"}" http://localhost:3000/999 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in PUT not found%W% & echo.

set /a n+=1
echo %n%. DELETE id 1
echo %G%
curl -X DELETE http://localhost:3000/1 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in DELETE%W% & echo.

set /a n+=1
echo %n%. DELETE not found
echo %G%
curl -X DELETE http://localhost:3000/1 2>nul
echo %W%
if errorlevel 1 echo %R%ERROR in DELETE not found%W% & echo.

pause