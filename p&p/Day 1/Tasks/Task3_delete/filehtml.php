<?php
    $students = file('students.txt', FILE_IGNORE_NEW_LINES);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Delete</title>
</head>
<body>
    <table border="1">
        <?php foreach($students as $student){ ?>
        <tr>
            <td><?php echo $student; ?></td>
            <td><button onclick="del('<?php echo $student; ?>', this)">delete</button></td>
        </tr>
        <?php } ?>
    </table>
    <script>
        function del(name, btn){
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'data.php?name=' + name);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    btn.parentElement.parentElement.remove();
                }
            }
        }
    </script>

</body>
</html>
