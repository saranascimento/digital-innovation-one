// Currying é o processo de transformar uma função que recebe vários argumentos em uma tupla como seu argumento, em uma função que recebe apenas um único argumento e retorna outra função que aceita outros argumentos, um por um, que a função original receberia no resto dessa tupla.

// função currying- armazena o valor do primeiro parametro em uma variavel para não precisar repeti-lo várias vezes

function soma(a) {
  return function (b) {
    return a + b;
  };
}

const soma2 = soma(2);
console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
