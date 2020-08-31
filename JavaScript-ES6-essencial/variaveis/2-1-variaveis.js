var test = 'exemple';

(() => {
  console.log(`Valor dentro da função "${test}"`);

  if (true) {
    var test = 'example';
    console.log(`Valor dentro do if "${test}"`);
  }

  console.log(`Valor após a execução do if "${test}"`);
})();

// por trás dos panos
// (() => {
// var test; hoisting de variavel
//   console.log(`Valor dentro da função "${test}"`);

//var não respeita escopo de bloco
//   if (true) {
//     test = 'example';
//     console.log(`Valor dentro do if "${test}"`);
//   }

//   console.log(`Valor após a execução do if "${test}"`);
// })();
