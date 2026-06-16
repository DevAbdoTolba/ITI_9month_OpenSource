<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
</head>
<body>
    Name: <input type="text" id="name"><br>
    Email: <input type="text" id="email"><br>
    Password: <input type="password" id="password"><br>
    <button>Register</button>
    <div id="response"></div>
    <script>
        let button = document.querySelector('button');
        let response = document.getElementById('response');
        button.addEventListener('click', () => {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'data.php?name=' + name + '&email=' + email + '&password=' + password);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    response.innerHTML = xhr.responseText;
                }
            }
        });
    </script>
</body>
</html>
