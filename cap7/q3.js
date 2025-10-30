// Crie um objeto livro com as propriedades titulo, autor e anoPublicacao.
// Imprima o título e o autor do livro.
function run() {
  const livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    anoPublicacao: 1988,
  };

  console.log("Título:", livro.titulo);
  console.log("Autor:", livro.autor);
}

module.exports = { run };
