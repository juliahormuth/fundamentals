function multiplicate(multiplier) {
  return function (n) {
    return n * multiplier;
  };
}

const double = multiplicate(2);

console.log(double(2));
