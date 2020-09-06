/**
  switch(expressão)  {
    case valor:
      [break];
    case valor:
      [break];

      default:
      [break];
  }
 */

console.log('\nfruta');
const fruit = 'pera';

switch (fruit) {
  case 'banana':
    console.log('R$ 3,00 / kg');
    break;
  case 'mamão':
  case 'pera':
    console.log('R$ 2,00 / kg');
    break;
  default:
    console.log('Produto não existe no estoque.');
}

console.log('\nfruta1');
const fruit1 = 'melancia';

switch (fruit1) {
  // caso o valor da variável fruta seja banana, console.log() e finaliza
  case 'banana':
    console.log('R$ 3,00 / kg');
    break;

  // caso o valor da variável fruta seja mamão ou pera, console.log() e finaliza
  case 'mamão':
  case 'pera':
    console.log('R$ 2,00 / kg');
    break;

  // caso o valor da variável fruta não seja nenhuma das opções, console.log() e finaliza
  default:
    console.log('Produto não existe no estoque.');
}
