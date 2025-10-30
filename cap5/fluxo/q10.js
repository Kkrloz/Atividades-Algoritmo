function run() {
  // 10. Números pares com while
  let limitePar = parseInt(
    prompt("10. Digite um número positivo para exibir pares até ele:")
  );
  let i = 0;
  let pares = "";
  while (i <= limitePar) {
    if (i % 2 === 0) {
      pares += i + " ";
    }
    i++;
  }
  console.log("Pares: " + pares);
}

module.exports = { run };
