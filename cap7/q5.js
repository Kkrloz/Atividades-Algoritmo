//Crie um array com os elementos [10, 20, 30].
//Use o método push() para adicionar os elementos 40 e 50 ao final do array. Exiba o array resultante.
function run() {
	let array = [10, 20, 30];
	console.log(array);
	array.push(40, 50);
	console.log(array);
}

module.exports = { run };
