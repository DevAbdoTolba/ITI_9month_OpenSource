let nameReg = /^[a-zA-z]{3,}(\s[a-zA-Z]{3,})*$/;
let emailReg = /\.eg$/;

let uname, uemail;

do {
  uname = prompt(
    "Enter your name 3 chars only (if you require more then spereate each 3 charchters with a space!)",
  );
} while (!nameReg.test(uname));

do {
  uemail = prompt("Enter your email (you must be egyptian :D)");
} while (!emailReg.test(uemail));

alert("You are egyptian! and your name is " + uname);
