// Crie um objeto produto com as propriedades nome, preco e quantidade.
// Em seguida, calcule e imprima o valor total do estoque (preço *
// quantidade).
function run() {
  const produto = {
    nome: "Caneta",
    preco: 2.5,
    quantidade: 100,
  };

  const valorTotal = produto.preco * produto.quantidade;
  console.log(
    `O valor total do estoque de ${produto.nome} é: R$ ${valorTotal.toFixed(2)}`
  );
}

module.exports = { run };
