function run() {
  // 6. Múltiplos
  let a = parseInt(prompt("6. Digite o primeiro número:"));
  let b = parseInt(prompt("Digite o segundo número:"));
  if (a % b === 0 || b % a === 0) {
    console.log("Pelo menos um dos números é múltiplo do outro");
  } else {
    console.log("Nenhum dos números é múltiplo do outro");
  }
}

module.exports = { run };
