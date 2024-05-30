// imprimir impares 1-20 
for ( let i=1; i <=20; i++){
    if (i % 2 != 0)
        console.log(i)
} 

// Disminuir múltiplos de 3
for (let i=100; i >= 0; i--) { 
   if (i % 3 === 0)
    console.log(i)
} 

// Imprime la secuencia 
for (let i = 4; i >= -3.5; i -= 1.5) { // se inicia con el valor 4 en i y el bucle irá disminuyendo 1,5 hasta que sea menor o igual a 3,5
    console.log(i);
}

// Sigma
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum) 


// Factorial 
let product = 1; // se pone que vale 1 ya que si vale 0 al hacer la primera multicaplicacion en el bucle, el resultado es 0
for (let i = 1; i <= 12; i++) { // inicia cpm valor i = a 1, irá hasta el que el valor sea mayor o igual a 12, y se sumará 1
  product *= i; // *= es un operador que indica multiplicacion de forma abreviada
}

console.log(product);