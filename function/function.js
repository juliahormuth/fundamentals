// Function hoisting
// You can use before function declaration
sayHello();

function sayHello() {
  console.log("Hello");
}

sayHello();

// First-class objects
// Function expression:
const imData = function () {
  console.log("I am data");
};

imData(); // You can use the like parameter of another function

function executeFunction(funcao) {
  funcao();
}
executeFunction(imData);

//Arrow function
const arrowFunction = () => {
  console.log("I am arrow function");
};

arrowFunction();

// Into a object
const obj = {
  say: function () {
    console.log("I am object");
  },
  newSay() {
    console.log("New method to declare a function into the object");
  },
};

obj.say();
obj.newSay();
