const user = {
  name: 'Sara',
  lastName: 'Gomes do Nascimento',
};

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Mergear propriedades de objetos (Não é recomendado alterar o objeto principal)
Object.assign(user, { fullName: 'Sara Gomes do Nascimento' });

console.log('\nAdiciona a propriedade fullNameno objeto user', user);

// Recomendado - não altera o objeto original
console.log(
  '\nRetorna um novo objeto mergeando dois ou mais objetos',
  Object.assign({}, user, { age: 26 }),
);

// Previne (congela) todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Sara' };
Object.seal(person);

person.name = 'Sara Gomes';
delete person.name;
person.age = 26;

console.log('\nVariável person após ass alterações', person);
