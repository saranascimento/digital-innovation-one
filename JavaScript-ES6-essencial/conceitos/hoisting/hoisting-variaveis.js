// eleva a criação da variável e não a sua atribuição
// claso uma variavel que ainda não existe for chamada o javascript não retorna um erro e sim undefined.

function fn() {
  console.log(text); // retorna undefined

  var text = 'Exemplo';

  console.log(text); // retorna Exemplo
}

fn();

/* exemplo do código acima por trás dos panos - hoisting

  function fn() {
  var text;
  console.log(text); // retorna undefined
  
  var text = "Exemplo";
  
  console.log(text); // retorna Exemplo
  }
  */
