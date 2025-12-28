let temp = Number(prompt("Tempreture: "));
let feel = Number(prompt("Feeling: "));
tempCal(temp, feel);
function tempCal(temp, fell) {
  if (fell >= 25 && temp >= 25 && fell <= 30 && temp <= 30) {
    console.log("normal");
  } else if (fell < 25 && temp < 25) {
    console.log("cold");
  } else if (fell > 25 && temp > 25) {
    console.log("hot");
  } else {
    console.log("ambgius");
  }
}
