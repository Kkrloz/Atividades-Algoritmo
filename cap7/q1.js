// Crie um objeto para representar um aluno, incluindo propriedades como
// nome, idade, curso e notas. Popule o objeto com valores e imprima os
// dados do aluno.
function run() {
  let aluno = {
    nome: "Luis",
    idade: 17,
    curso: "Informática",
    notas: 5,
  };
  console.log(`Nome: ${aluno.nome}`);
  console.log(`Idade: ${aluno.idade}`);
  console.log(`Curso: ${aluno.curso}`);
  console.log(`Notas: ${aluno.notas}`);
}

module.exports = { run };
