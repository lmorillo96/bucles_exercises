// Factorial de 10 consiste en todos los números que se ingresen, sean multiplicados por 10

function factorial(num) {
  let total = 1;
  for (i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorial(10));
