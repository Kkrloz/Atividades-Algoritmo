function run() {
  // 4. Maioridade
  let anoNascimento = parseInt(prompt("4. Digite seu ano de nascimento:"));
  let anoAtual = 2025;
  let idade = anoAtual - anoNascimento;
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

module.exports = { run };
