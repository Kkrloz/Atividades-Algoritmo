function run() {
  // 8. Restaurante com switch
  let prato = prompt(
    "8. Escolha um prato: pizza, hamburguer, salada, macarrao"
  ).toLowerCase();
  switch (prato) {
    case "pizza":
      console.log("Preço: R$25\nDescrição: Pizza de queijo e calabresa.");
      break;
    case "hamburguer":
      console.log("Preço: R$18\nDescrição: Hambúrguer artesanal com batata.");
      break;
    case "salada":
      console.log("Preço: R$15\nDescrição: Salada verde com frango grelhado.");
      break;
    case "macarrao":
      console.log("Preço: R$20\nDescrição: Macarrão ao molho bolonhesa.");
      break;
    default:
      console.log("Prato inválido");
      break;
  }
}

module.exports = { run };
