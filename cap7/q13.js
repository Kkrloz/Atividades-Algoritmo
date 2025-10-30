function run() {
  console.log("Digite o nome de 5 filmes: ");
  let respostaUsuario1 = prompt("Filme 1: ");
  let respostaUsuario2 = prompt("Filme 2: ");
  let respostaUsuario3 = prompt("Filme 3: ");
  let respostaUsuario4 = prompt("Filme 4: ");
  let respostaUsuario5 = prompt("Filme 5: ");
  let arrayRepostas = [
    respostaUsuario1,
    respostaUsuario2,
    respostaUsuario3,
    respostaUsuario4,
    respostaUsuario5,
  ];
  console.log(arrayRepostas);
}

module.exports = { run };
