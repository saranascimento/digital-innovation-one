const name = 'Sara';

//Não podemos alterar o valor
// name = 'Sara'; // retorno - TypeError: Assignment to constant variable

const user = {
  name: 'Sara',
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
// user = {
//   name: 'Sara',
// }; // retorno - TypeError: Assignment to constant variable

const persons = ['Sara', 'Danilo', 'Davi'];

// Podemons adicionar novos itens
persons.push('João');

// Podemos remover algum item
//shift remove o primeiro item da lista
persons.shift();

// Podemos alterar diretamente
// a primeira posição do array é 0
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);
