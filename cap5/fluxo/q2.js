function run() {
  // 2. Maior de três números
  let n1 = parseFloat(prompt("2. Primeiro número:"));
  let n2 = parseFloat(prompt("Segundo número:"));
  let n3 = parseFloat(prompt("Terceiro número:"));
  if (n1 > n2 && n1 > n3) {
    console.log("Maior: " + n1);
  } else if (n2 > n3) {
    console.log("Maior: " + n2);
  } else {
    console.log("Maior: " + n3);
  }
}

module.exports = { run };
