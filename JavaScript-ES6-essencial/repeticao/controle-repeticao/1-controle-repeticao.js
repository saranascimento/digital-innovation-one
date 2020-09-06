// break - quebra a execução quando a condição for verdadeira
console.log('Exemplo de utilização do break');

var index = 0;

while (true) {
  index++;

  if (index > 2) {
    break;
  }
  console.log(index);
}

// continue - pula a execução que tem a condição verdadeira
console.log('\nExemplo da utilização de continue.');
const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
  const element = array[index];

  if (element % 2 === 0) continue;

  console.log(element);
}
