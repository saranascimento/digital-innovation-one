function fn() {
  return 'Code Here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
  //Mais de uma expressão
  return 'Code here';
};

// Funções também são objetos
// Não é comum fazer assim
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber paramêtros
const logValue = (value) => console.log(value);
const logFnResult = (fnParam) => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções (recebe um e executa outro)
const controlFnExec = (fnParam) => (allowed) => {
  if (allowed) {
    fnParam();
  }
};

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {
  return function (allowed) {
    fnParam();
  };
}
