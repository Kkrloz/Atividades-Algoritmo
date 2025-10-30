function run() {
  // 3. Média de 3 notas
  let nota1 = parseFloat(prompt("3. Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let nota3 = parseFloat(prompt("Digite a terceira nota:"));
  let media = (nota1 + nota2 + nota3) / 3;
  if (media >= 7) {
    console.log("Aprovado! Média: " + media.toFixed(2));
  } else {
    console.log("Reprovado. Média: " + media.toFixed(2));
  }
}

module.exports = { run };
