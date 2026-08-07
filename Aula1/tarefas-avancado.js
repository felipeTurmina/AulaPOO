//Inicio
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
//Exercicio1
function mostrarTarefa(tarefas, idbuscado){
    const procurar = tarefas.find(tarefa => tarefa.id === idbuscado)
    if (procurar){
        return `ID: ${procurar.id}, Titulo:${procurar.titulo}, Descrição:${procurar.descricao}, Prioridade: ${procurar.prioridade}, Concluida: ${procurar.concluida}`
    }
    else{
        return `Tarefa nao encontrada`
    } 
}
//Exercicio2
function mostrarTodasTarefas(tarefas){
    const lista = tarefas.map(tarefa => `ID: ${tarefa.id}, Titulo: ${tarefa.titulo}, Descrição: ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Concluida: ${tarefa.concluida}`)
    return lista
}
//Exercicio3
function concluirTarefa(listaDeTarefas,idDaLista){
    const procurar = listaDeTarefas.find(tarefa => tarefa.id === idDaLista)

    if(procurar){
        procurar.concluida = true
        return procurar 
    }
    else{
        return `Tarefa não encontrada`
    }
}
//Exercicio4
function contarPendentes(tarefas){
    return tarefas.filter(tarefa => !tarefa.concluida).lenght
}
//Exercicio5
function filtrarConlcuidas(tarefas){
    const filtro = tarefas.filter(tarefa => tarefa.concluida)

    return filtro.map(tarefa =>
        `ID: ${tarefa.id}, Titulo: ${tarefa.titulo}, Descrição: ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Concluida: ${tarefa.concluida}`
    )
}
//Exercicio6
function filtrarPorPrioridade(tarefas,prioridades){
    const filtro = tarefas.filter(tarefa => tarefa.prioridade === prioridades)

    return filtro.map(tarefa =>
        `ID: ${tarefa.id}, Titulo: ${tarefa.titulo}, Descrição: ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Concluida: ${tarefa.concluida}`
    )
}
//Exercicio7
function buscarTarefasPorId(tarefas,idDaLista){
    const filtro = tarefas.find(tarefa => tarefa.id === idDaLista)

    if(filtro){
        return `ID: ${filtro.id}, Titulo: ${filtro.titulo}, Descrição: ${filtro.descricao}, Prioridade: ${filtro.prioridade}, Concluida: ${filtro.concluida}`
    }
    else{
        return `Tarefa não encontrada`
    }
}
//Exercicio8
function calcularResumo(tarefas){
    const total = tarefas.length
    const concluidas = tarefas.filter(tarefa => tarefa.concluida).length
    const pendentes = tarefas.filter(tarefa => !tarefa.concluida).length
    const prioridade = tarefas.filter(tarefa => tarefa.prioridade === `alta`).length

    return `    Total de tarefas: ${total}
    Tarefas concluídas: ${concluidas}
    Tarefas pendentes: ${pendentes}
    Tarefas de prioridade alta ${prioridade}`
}

console.log(mostrarTarefa(tarefas,1))
console.log(mostrarTodasTarefas(tarefas))
console.log(concluirTarefa(tarefas,3))
console.log(contarPendentes(tarefas))
console.log(filtrarConlcuidas(tarefas))
console.log(filtrarConlcuidas(tarefas))
console.log(filtrarPorPrioridade(tarefas,`alta`))
console.log(buscarTarefasPorId(tarefas,3))
console.log(calcularResumo(tarefas))
