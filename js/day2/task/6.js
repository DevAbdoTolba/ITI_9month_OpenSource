let arr = new Array(60, 100, 10, 15, 85);

let s = arr.sort(function (a, b) {
  return b - a;
});

let high = arr.find(function (v) {
  return v >= 100;
});

let low60 = arr.filter(function (v) {
  return v < 60;
});

document.write(s, " :: ", high, " :: ", low60);
