// Factorial de 10 consiste en todos los números que se ingresen, sean multiplicados por 10

function bucleWhile(num) {
  let i = 1;
  let total = 1;
  
  while (i < num) {
    total = total * i;
    i++;
  }

  return total;
}
console.log(bucleWhile(10));
