// Dado o array let numeros = [1, 2, 3, 4, 5],
// use o método shift() para remover
// o primeiro elemento do array.
// Exiba o array resultante e o elemento removido.
function run() {
	let numeros = [1, 2, 3, 4, 5];
	console.log(numeros);
	console.log(`O número que saiu foi o: ${numeros.shift()}`);
	console.log(numeros);
}

module.exports = { run };
