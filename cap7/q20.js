function run() {
  // Crie um array de objetos representando pessoas com nome e idade, e
  // use find para encontrar a primeira pessoa com idade maior que 18.
  const pessoas = [
    {
      nome: "Anthony",
      idade: 22,
    },
    {
      nome: "Luis Mário",
      idade: 96,
    },
    {
      nome: "Vitória Lorany",
      idade: 2,
    },
  ];
  const pessoaMaiorDe18 = pessoas.find((pessoa) => pessoa.idade > 18);
  console.log(pessoaMaiorDe18.nome);
}

module.exports = { run };
