// Os dados nunca mudam. Se precisar alterar será necessario criar um novo (uma copia)
// se for adicionar um novo item terá que pegar todo o conteudo e concatenar com o novo
// se for remover terá que filtrar para remover

const students = [
  {
    name: 'Grace',
    grade: 7,
  },
  {
    name: 'Jennifer',
    grade: 4,
  },
  {
    name: 'Paul',
    grade: 10,
  },
];

function getApprovedStudents(studentsList) {
  return studentsList.filter((student) => student.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos: ');
console.log(students);

// retorno
// Alunos aprovados:
// [ { name: 'Grace', grade: 7 }, { name: 'Paul', grade: 10 } ]

// Lista de alunos:
// [
//   { name: 'Grace', grade: 7 },
//   { name: 'Jennifer', grade: 4 },
//   { name: 'Paul', grade: 10 }
// ]
