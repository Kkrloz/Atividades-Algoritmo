function run() {
	// 10. a += b e a *= 2
	let a = 20;
	let b = 5;
	a += b;
	a *= 2;
	console.log(a); // 50
}

module.exports = { run };