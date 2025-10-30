function run() {
  // 1. Par ou ímpar
  let numero = parseInt(
    prompt("1. Digite um número para saber se é par ou ímpar:")
  );
  if (numero % 2 === 0) {
    console.log("É par");
  } else {
    console.log("É ímpar");
  }
}

module.exports = { run };
