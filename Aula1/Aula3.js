const tarefas = [
  {
    id: 1,
    titulo: "Estudar JavaScript 1",
    descricao: "Revisar funcoes e objetos 1",
    prioridade: "alta",
    concluida: false
  },{
    id: 2,
    titulo: "Estudar JavaScript 2",
    descricao: "Revisar funcoes e objetos 2",
    prioridade: "alta",
    concluida: false
  },{
    id: 3,
    titulo: "Estudar JavaScript 3",
    descricao: "Revisar funcoes e objetos 3",
    prioridade: "baixa",
    concluida: true
  },{
    id: 4,
    titulo: "Estudar JavaScript 4",
    descricao: "Revisar funcoes e objetos 4",
    prioridade: "baixa",
    concluida: true
  },{
    id: 5,
    titulo: "Estudar JavaScript 5",
    descricao: "Revisar funcoes e objetos 5",
    prioridade: "alta",
    concluida: false
  }
];

function mostrarTarefa(tarefa){
    return `ID: ${tarefa.id}, ${tarefa.titulo} tem que ${tarefa.descricao}, com prioridade ${tarefa.prioridade}`
}

console.log(mostrarTarefa(tarefas[0]))



function mostrarTodasTarefas(tarefas){
    // for (let i = 0; i < tarefas ;i++){
    //     console.log (`ID: ${tarefas[i].id}, ${tarefas[i].titulo} tem que ${tarefas[i].descricao}, com prioridade ${tarefas[i].prioridade}`)
    // }

   return tarefas.map(tarefa =>{
    return `ID: ${tarefa.id}, ${tarefa.titulo} tem que ${tarefa.descricao}, com prioridade ${tarefa.prioridade}, ${tarefa.concluida}`
    })
}


console.log(mostrarTodasTarefas(tarefas))


function concluirTarefa(listaTarefas, id){
   listaTarefas.map((tarefa,index) => {
    if(tarefa.id === id){
        tarefas[index].concluida = true
    }
   })   
   }   

console.log(concluirTarefa(tarefas,8))
console.log(mostrarTodasTarefas(tarefas))

