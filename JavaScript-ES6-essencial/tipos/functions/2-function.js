(() => {
  // this é referenciado dentro do seu contexto
  this.name = 'Arrow function';

  // this de arrow function referencia ao escopo global
  const getNameArrowFn = () => this.name;

  // this de função é referenciado dentro de onde ela foi executada
  function getName() {
    return this.name;
  }

  const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName,
  };

  console.log(user.getNameArrowFn()); // this.name global
  console.log(user.getName()); // tihs.name do objeto user
})();
