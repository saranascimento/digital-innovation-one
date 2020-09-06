let arr = [3, 5, 7];

//adiciona propriedade foo
arr.foo = 'hello';

// retorna todas as propriedades do array
console.log('for in');
for (let index in arr) {
  console.log(index); // logs '0', '1', '2', 'foo'
}

// retorna apenas os valores numericos do array
console.log('\nfor off');
for (let index of arr) {
  console.log(index); // logs '3', '5', '7'
}
