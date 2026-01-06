const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(3000)
  .then(() => {
    document.body.innerHTML = "<h1>Welcome</h1>";
    document.body.innerHTML +=
      '<br><img src="https://dummyjson.com/icon/emil/128" />';
    return wait(3000);
  })
  .then(() => {
    document.body.innerHTML += "<h1>Thanks</h1>";
    window.location.href = "https://www.google.com";
  })
  .catch((err) => console.error(err));
