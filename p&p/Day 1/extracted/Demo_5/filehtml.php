<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>Click me</button>
    <div></div>
    <script>
        lasttime= 0;
        function longPoll(){
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "data.php?time=" + lasttime);
             xhr.send();
             xhr.onload = function (){
                let response = JSON.parse(xhr.responseText);
                lasttime = response.time;
                document.querySelector("div").innerText = response.data;
                longPoll();
             }
             }
             longPoll();

        

    </script>
</body>
</html>