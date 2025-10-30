function run() {
	// 25. r += 2 * 4 e depois r /= 2
	let r = 3;
	r += 2 * 4; // r = 11
	r /= 2; // r = 5.5
	console.log(r);
}

module.exports = { run };