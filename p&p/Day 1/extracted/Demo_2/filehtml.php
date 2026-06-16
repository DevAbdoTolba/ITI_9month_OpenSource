<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>send</button>
    <div id="response"></div>

    <script>
        let button = document.querySelector('button');
        
        let responseDiv = document.getElementById('response');

        button.addEventListener('click', () => {
           let input = document.querySelector('input').value;
           let xhr = new XMLHttpRequest();
            xhr.open('POST', 'data.php?name=' + input);
            xhr.send()
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    responseDiv.innerHTML = xhr.responseText;
                }
            }

        });


    </script>
</body>
</html>