function init() {
  const exemplo = `Essa variavel`;

  return function (exemplo) {
    console.log(`1 - O valor da variavel é: ${exemplo}.`);

    return function (exemplo) {
      console.log(`2 - O valor da variavel é: ${exemplo}.`);

      return function (exemplo) {
        console.log(`3 - O valor da variavel é: ${exemplo}.`);
      };
    };
  };
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();
initFn3();
