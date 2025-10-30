function run() {
  // 7. Tipo de triângulo
  let lado1 = parseFloat(prompt("7. Lado 1 do triângulo:"));
  let lado2 = parseFloat(prompt("Lado 2 do triângulo:"));
  let lado3 = parseFloat(prompt("Lado 3 do triângulo:"));
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
      console.log("Triângulo equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      console.log("Triângulo isósceles");
    } else {
      console.log("Triângulo escaleno");
    }
  } else {
    console.log("Triângulo inválido");
  }
}

module.exports = { run };
