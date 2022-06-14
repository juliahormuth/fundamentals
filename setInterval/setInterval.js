function getHour() {
  let date = new Date();

  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const timer = setInterval(function () {
  console.log(getHour());
}, 1000); //one in a second/thousandth of a second

setTimeout(function () {
  clearInterval(timer);
}, 10000); // stop after 10 seconds

setTimeout(function () {
  console.log("Hello world!");
}, 5000); // Hello world after 5 seconds
