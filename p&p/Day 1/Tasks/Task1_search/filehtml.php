<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search</title>
</head>
<body>
    <input type="text" id="search">
    <div id="result"></div>
    <script>
        let input = document.getElementById('search');
        let result = document.getElementById('result');
        input.addEventListener('keyup', () => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'data.php?q=' + input.value);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    result.innerHTML = xhr.responseText;
                }
            }
        });
    </script>
</body>
</html>
