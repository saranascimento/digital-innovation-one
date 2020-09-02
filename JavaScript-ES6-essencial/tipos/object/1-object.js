//chave: 'valor'
let user = {
  name: 'Sara',
};
// console.log(user);

// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
// console.log(user);

user['name'] = 'Outro nome 2';
// console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
// console.log(user);

//exemplo
// function getProp(prop) {
//   return user[prop];
// }

// Criando uma propriedade
user.lastName = 'Gomes do Nascimento';
// console.log(user);

// Deletando uma propriedade
delete user.name;
console.log(user);
