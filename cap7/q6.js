//Crie um array com os elementos [5, 10, 15, 20].
//Use o método pop() para remover o último elemento do
//array.
//Exiba o array resultante e o elemento removido.
function run() {
	let numerosArray = [5, 10, 15, 20];
	console.log(numerosArray);
	console.log(`o número que saiu foi o: ${numerosArray.pop()}`)
	console.log(numerosArray);
}

module.exports = { run };
