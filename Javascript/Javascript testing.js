<!DOCTYPE html>
<html>
<body>

<h2>Lets run a few tests</h2>

<p id="change1">JavaScript can change HTML content with one button.</p>

<button type="button" onclick='document.getElementById("change1").innerHTML = "Change has occured"'>Click here now!</button>


<form action="login.php" method="POST" align="center">
<br>
Username:<input type="text" name="username"><br><br><br>
Password :<input type="text" name="password"><br><br>

<input type="Submit"  value="Submit">

<h3> Sadly log in is client side and is buried in my other files, I will fix later! =P<h3>
</body>
</html>
