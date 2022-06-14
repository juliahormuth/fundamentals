// Callback: Function that will be executed when something finishes

function sendEmail(body, to, callback) {
  setTimeout(() => {
    console.log(`
        Para: ${to}
        -------------------------------------------
        ${body}

        -------------------------------------------

        De: Julia Hormuth
        `);
    callback("Ok", 5, "8s");
  }, 8000);
}

console.log("Begining of the program");
sendEmail(
  "Hello, welcome to the course!",
  "juliateste@gmail.com",
  (status, amount, time) => {
    console.log(`
    Status: '${status}'
    --------------------
    Amount: ${amount}
    --------------------
    Time: ${time}
    --------------------
    `);
    console.log("You email has been sent!");
    console.log("FINISHED!"); // This will be executed after the callback
  }
);
