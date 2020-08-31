// Os dados nunca mudam. Se precisar alterar será necessario criar um novo (uma copia)
// se for adicionar um novo item terá que pegar todo o conteudo e concatenar com o novo
// se for remover terá que filtrar para remover

const user = {
  name: 'Sara',
  lastname: 'Gomes do Nascimento',
};

function getUserWithFullName(user) {
  return {
    //...spread - cria um novo objeto com os mesmos atributos sem alterar a referencia do original.
    ...user,
    fullName: `${user.name} ${user.lastname}`,
  };
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);

// {
//   name: 'Sara',
//   lastname: 'Gomes do Nascimento',
//   fullName: 'Sara Gomes do Nascimento'
// }
