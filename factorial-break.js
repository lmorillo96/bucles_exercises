// Factorial de 10 consiste en todos los números que se ingresen, sean multiplicados por 10

function bufurcacion(num) {
  let i = 1;
  let total = 1;

  while (i < num) {
    total = total * i;
    i++;
    
    if (i === 10) {
        break;
    }
}

  return total;
}

console.log(bufurcacion(10));
