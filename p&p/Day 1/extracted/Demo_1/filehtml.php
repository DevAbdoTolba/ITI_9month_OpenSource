<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <button>get data</button>
    <div id="data-container"></div>
    <script>
        let button = document.querySelector('button');
        let dataContainer = document.getElementById('data-container');

        button.addEventListener('click', () => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'data.php');
            xhr.send();
            // console.log('Request sent to the server.');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    dataContainer.innerHTML = xhr.responseText;
                }
            }
           
        });



    </script>
</body>
</html>