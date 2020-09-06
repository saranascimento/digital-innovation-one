/**
  while(condicao)
    declaracao
 */

// while só é executado se a condição for verdadeira

var n = 0;
var x = 0;
while (n < 3) {
  n++; // recebe + 1 enquanto a condição for verdadeira
  x += n; // 1, 3, 6
}

console.log(x);
