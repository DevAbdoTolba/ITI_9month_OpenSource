const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Day: ", (num) => {
  try {
    require(`./day${num}/index.js`);
  } catch (e) {
    console.log("Error: ", e.message);
  }
  rl.close();

});
