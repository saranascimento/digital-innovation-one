// in
something in somethingItems;

// Arrays
var arvores = new Array(
  'pau-brasil',
  'loreiro',
  'cedro',
  'carvalho',
  'sicómoro',
);
// verifica índice da posição do array
0 in arvores; // retorna true
3 in arvores; // retorna true
6 in arvores; // retorna false
'cedro' in arvores; // retorna false (você deve especificar o número do índice não o valor dele)
'length' in arvores; // retorna true (length é uma propriedade de array)

// Objetos predefinidos
'PI' in Math;
var minhaString = new String('coral');
'length' in minhaString; // retorna true

// Objetos personalizados
var meuCarro = { marca: 'Honda', modelo: 'Accord', ano: 1998 };
// verifica se a propriedade existe dentro do objeto
'marca' in meuCarro; // retorna true
'modelo' in meuCarro; // retorna true

// instaceof - verifica se o objeto é uma instancia de alguma coisa
objeto instanceof tipoObjeto;

var dia = new Data(2020, 12, 17);
if (dia instanceof Date) {
  // code here
}
