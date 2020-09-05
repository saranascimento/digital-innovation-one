const users = ['Sara', 'Pedro', 'Jennifer', 'Guilherme'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W'),
};

const persons = [
  {
    name: 'Sara',
    age: 26,
    gender: gender.WOMAN,
  },
  {
    name: 'Pedro',
    age: 27,
    gender: gender.MAN,
  },
  {
    name: 'Guilherme',
    age: 28,
    gender: gender.MAN,
  },
  {
    name: 'Jennifer',
    age: 21,
    gender: gender.WOMAN,
  },
];

// Retornar a quatidade de itens de um array
console.log('Itens:', persons.length);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do array
// array.forEach((paraCadaItem) => {executa uma função})
persons.forEach((person) => {
  console.log(`Nome: ${person.name}`);
});

persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr);
});

// Filtrar array com uma condicional - não altera o original
const mens = persons.filter((person) => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo - não altera o original
const personsWithCourse = persons.map((person) => {
  person.course = 'Introdução ao JavaScript';
  return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

// Transformar um array em outro tipo
// reduce((novoTipoQueSeraRetornado, itemQueSeraIterado) => {codigo aqui}, valorInicialDoNovoTipoRetornado)
// retorna um valor unico
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoas:', totalAge);

// Juntando operações | encadiando as execuções
const totalEvenAges = persons
  .filter((person) => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
console.log(
  '\nSoma de idades das pessoas que possuem idade par',
  totalEvenAges,
);
