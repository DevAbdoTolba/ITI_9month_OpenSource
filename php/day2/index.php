<form action="profile.php" method="POST">
    <table>
        <tr>
            <td>First Name</td>
            <td><input type="text" name="fname"></td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td><input type="text" name="lname"></td>
        </tr>
        <tr>
            <td>Address</td>
            <td><textarea name="address"></textarea></td>
        </tr>
        <tr>
            <td>Country</td>
            <td>
                <select name="country">
                    <option value="Egypt">Egypt</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>
                <input type="radio" name="gender" value="Male"> Male 
                <input type="radio" name="gender" value="Female"> Female
            </td>
        </tr>
        <tr>
            <td>Skills</td>
            <td>
                <input type="checkbox" name="skills[]" value="PHP"> PHP 
                <input type="checkbox" name="skills[]" value="J2SE"> J2SE 
                <input type="checkbox" name="skills[]" value="MySQL"> MySQL 
                <input type="checkbox" name="skills[]" value="PostgreSQL"> PostgreSQL
            </td>
        </tr>
        <tr>
            <td>Username</td>
            <td><input type="text" name="username"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="password" name="password"></td>
        </tr>
        <tr>
            <td>Department</td>
            <td><input type="text" name="department" value="OpenSource" readonly></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </td>
        </tr>
    </table>
</form>