function run() {
  // 5. Conversão de temperatura
  let tipo = prompt(
    "5. Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para o contrário:"
  ).toUpperCase();
  let temp = parseFloat(prompt("Digite a temperatura:"));
  if (tipo === "C") {
    let fahrenheit = temp * 1.8 + 32;
    console.log("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2));
  } else if (tipo === "F") {
    let celsius = (temp - 32) / 1.8;
    console.log("Temperatura em Celsius: " + celsius.toFixed(2));
  } else {
    console.log("Opção inválida");
  }
}

module.exports = { run };
