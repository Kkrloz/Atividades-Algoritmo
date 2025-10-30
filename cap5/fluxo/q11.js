function run() {
  // 11. Números ímpares com for
  let limiteImpar = parseInt(
    prompt("11. Digite um número positivo para exibir ímpares até ele:")
  );
  let impares = "";
  for (let j = 0; j <= limiteImpar; j++) {
    if (j % 2 !== 0) {
      impares += j + " ";
    }
  }
  console.log("Ímpares: " + impares);
}

module.exports = { run };
