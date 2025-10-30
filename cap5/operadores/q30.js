function run() {
	// 30. Avaliação completa
	let resultado30 = 10 + 5 * 2 > 30 / 2 && !false;
	// 5 * 2 = 10 → 10 + 10 = 20 → 30 / 2 = 15 → 20 > 15 = true → true && true = true
	console.log(resultado30); // true
}

module.exports = { run };