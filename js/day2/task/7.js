let s = [
  { Name: "Tolba", Degree: 95 },
  { Name: "Ahmed", Degree: 50 },
  { Name: "Yes", Degree: 80 },
];

let topStudent = s.find(function (s) {
  return s.Degree >= 90 && s.Degree <= 100;
});
console.log("Top Student:", topStudent);

let failed = s.filter(function (s) {
  return s.Degree < 60;
});
console.log("Failed:", failed);

s.push({ Name: "New", Degree: 75 });
for (let k in s) {
  console.log(s[k]);
}

s.pop();
for (let v of s) {
  console.log(v);
}

s.sort(function (a, b) {
  return a.Name.localeCompare(b.Name);
});

s.splice(1, 0, {}, {});
s.splice(3, 1);
