function funcao() {
  console.log("Hello");
}

funcao("value");

// argument that supports all arguments
function arguments() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}

arguments(1, 2, 3, 4, 5);

const newArguments = (...args) => {
  console.log(`Arguments in the arrow function: ${args} `);
};

newArguments(1, 2, 3, 4, 5);

function sum(a, b = 2, c = 4) {
  //
  console.log(a + b + c); // 24
}
sum(2, undefined, 20); //b is undefined, so it takes a parameter value of 2

const test = (number1, number2, ...numbers) => {
  console.log(`Rest ${numbers}`);
};

test(1, 2, 3, 4, 5);

// Destructuring in function
function destructuring({ name, surname, age }) {
  console.log(name, surname, age);
}
destructuring({ name: "Julia", surname: "Hormuth", age: 22 });
