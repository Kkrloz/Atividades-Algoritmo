// Crie um array de objetos representando carros, cada um com
// propriedades nome e ano, e use filter para criar um novo array
// contendo apenas os carros fabricados após o ano 2010.
function run() {
  let carros = [
    {
      nome: "Ranger",
      ano: 2015,
    },

    { nome: "Corolla",
      ano: 2012 },

    {
      nome: "Gol",
      ano: 2008,
    },
  ];
  const carrosAcimaDe2010 = carros.filter((carro) => {
    if(carro.ano>2010) console.log(carro.nome) 
  });
}

module.exports = { run };
