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
        function shortPoll(){
            let button = document.querySelector("button");
            let xhr = new XMLHttpRequest();
        // button.addEventListener("click", function() {
            xhr.open("GET", "data.php");
             xhr.send();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        document.querySelector("div").innerHTML = xhr.responseText;
                    }
                }


        // })
        }
        setInterval(shortPoll, 5000);


    </script>
</body>
</html>