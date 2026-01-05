function take() {
  let input = prompt("Enter date (DD-MM-YYY)");
  date(input);
}

function date(str) {
  if (str.length === 10 && str.charAt(2) === "-" && str.charAt(5) === "-") {
    let d = str.substring(0, 2);
    let m = str.substring(3, 5);
    let y = str.substring(6, 10);

    let date_ = new Date(y, m - 1, d);
    alert(date_);
  } else {
    alert("Wrong format!");
  }
}
