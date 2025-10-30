function run() {
  // 12. Fatorial
  let numFat = parseInt(prompt("12. Digite um número para calcular o fatorial:"));
  let fat = 1;
  let k = 1;
  while (k <= numFat) {
    fat *= k;
    k++;
  }
  console.log("Fatorial de " + numFat + " é " + fat);
}

module.exports = { run };
