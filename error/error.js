function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("x e y precisam ser números");
  }
  return x + y;
}

try {
  console.log(sum(1, 2));
  console.log(sum("1", 2));
} catch (error) {
  console.log("Ocorreu um erro");
}

try {
  // Runs when there is no errors
} catch (error) {
  // Runs when there are errors
} finally {
  // Ever
}

// Example
function returnHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError("Waiting for a date instance");
  }

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const date = new Date("01-01-1970 12:58:12");
  const hour = returnHour(date);
  console.log(hour);
} catch (error) {
  // Handle error
  //   console.log(error);
} finally {
  console.log("Im always executed");
}
