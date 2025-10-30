function run() {
  // 9. IMC
  let peso = parseFloat(prompt("9. Digite seu peso (kg):"));
  let altura = parseFloat(prompt("Digite sua altura (m):"));
  let imc = peso / (altura * altura);
  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }
  console.log("IMC: " + imc.toFixed(2) + " - " + classificacao);
}

module.exports = { run };
