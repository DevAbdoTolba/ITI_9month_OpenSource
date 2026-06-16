<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>send</button>
    <div id="response"></div>
    <script> 
        let button = document.querySelector('button');
        button.addEventListener('click', () => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'data.php');
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let students = JSON.parse(xhr.responseText);
                    let responseDiv = document.getElementById('response');
                    responseDiv.innerHTML = `
                    Name: ${students.name} <br>
                    Age: ${students.age} <br>
                    Grade: ${students.grade} <br>
                    `

                }
            }
        });

    </script>
    
</body>
</html>