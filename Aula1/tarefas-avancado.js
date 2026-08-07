//Exercicio1
const tarefas =[
    {
    id: 1,
    titulo: "Estudar JavaScript I",
    descricao: "Revisar funcoes e objetos I",
    prioridade: "alta",
    concluida: true
    },
    {
    id: 2,
    titulo: "Estudar JavaScript II",
    descricao: "Revisar funcoes e objetos II",
    prioridade: "alta",
    concluida: true
    },
    {
    id: 3,
    titulo: "Estudar JavaScript III",
    descricao: "Revisar funcoes e objetos III",
    prioridade: "media",
    concluida: false
    },{
    id: 4,
    titulo: "Estudar JavaScript IV",
    descricao: "Revisar funcoes e objetos IV",
    prioridade: "baixa",
    concluida: false
    },{
    id: 5,
    titulo: "Estudar JavaScript V",
    descricao: "Revisar funcoes e objetos V",
    prioridade: "baixa",
    concluida: false
    },
]
//Exercicio2
function mostrarTarefa(tarefas, idbuscado){
    const procurar = tarefas.find(tarefa => tarefa.id === idbuscado)
    if (procurar){
        return `ID: ${procurar.id}, Titulo:${procurar.titulo}, Descrição:${procurar.descricao}, Prioridade: ${procurar.prioridade}, Concluida: ${procurar.concluida}`
    }
    else{
        return `Tarefa nao encontrada`
    } 
}
//Exercicio3
function mostrarTodasTarefas(tarefas){
    const lista = tarefas.map(tarefa => `ID: ${tarefa.id}, Titulo: ${tarefa.titulo}, Descrição: ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Concluida: ${tarefa.concluida}`)
    console.log(lista)
}
//Exercicio4
function concluirTarefa(listaDeTarefas,idDaLista){
    const procurar = listaDeTarefas.find(tarefa => tarefa.id === idDaLista)

    if(procurar){
        procurar.concluida = true
        return procurar
    }
    else{
        return console.log(`Tarefa não encontrada`)
    }
}
//Exercicio5
function contarPendentes(tarefas){
    return tarefas.filter(tarefa => !tarefa.concluida).lenght
}
//Exercicio6
function filtrarConlcuidas(tarefas){
    const filtro = tarefas.filter(tarefa => tarefa.concluida)

    return filtro.map(tarefa =>
        `ID: ${tarefa.id}, Titulo: ${tarefa.titulo}, Descrição: ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Concluida: ${tarefa.concluida}`
    )
}
