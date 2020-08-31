// a função é elevada (içada) ao topo como um todo
//  sendo possível fazer a chamada da função antes declaração

function fn() {
  log('Hosting de função');

  function log(value) {
    console.log(value);
  }
}

fn();

/* exemplo do código acima por trás dos panos por causa do hosting 
function fn() {

	function log(value) {
		 console.log(value);
		}

	log("Hosting de função");
}
*/

/**Boa prática sempre declarar a função antes de usá-la */
