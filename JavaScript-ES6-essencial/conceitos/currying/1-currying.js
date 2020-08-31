// Currying é o processo de transformar uma função que recebe vários argumentos em uma tupla como seu argumento, em uma função que recebe apenas um único argumento e retorna outra função que aceita outros argumentos, um por um, que a função original receberia no resto dessa tupla.

// Função  - repetição do primeiro parametro
function soma(a, b) {
  return a + b;
}
console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));


