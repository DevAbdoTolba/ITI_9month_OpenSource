let start, end;
start = Number(prompt("Enter num1"));
end = Number(prompt("Enter num2"));

for (let i = start; i < end; i++) {
  i % 2 == 1 && console.log(i);
}
