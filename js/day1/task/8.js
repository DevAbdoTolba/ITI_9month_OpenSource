let loop = true;
let year;
let u_name;
do {
  u_name = prompt("enter your name");
  if (isNaN(Number(u_name))) {
    loop = false;
  } else {
    loop = true;
  }
} while (loop);

do {
  year = Number(prompt("enter birth year"));
  if (!isNaN(year)) {
    if (year < 2010) {
      loop = false;
    }
  } else {
    loop = true;
  }
} while (loop);

let age = 2026 - year;
alert("Name: " + u_name + "\nBirth Year: " + year + "\nAge: " + age);
