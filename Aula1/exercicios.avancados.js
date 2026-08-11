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

// Sistema de Tarefas

// ## Objetivo

// Criar um sistema de tarefas usando JavaScript, praticando:

// - objetos;
// - arrays;
// - funcoes;
// - condicionais;
// - busca por `id`;
// - filtros;
// - contagem de dados.

// ## Estrutura da tarefa

// O sistema deve ter um array chamado `tarefas` com pelo menos 5 tarefas.

// Cada tarefa deve ser um objeto com as propriedades:

// ```javascript
// id
// titulo
// descricao
// prioridade
// concluida
// ```

// A prioridade deve ser uma destas opcoes:

// ```text
// baixa
// media
// alta
// ```

// Exemplo:

// ```javascript
// const tarefas = [
// {
// id: 1,
// titulo: "Estudar JavaScript",
// descricao: "Revisar funcoes e objetos",
// prioridade: "alta",
// concluida: false
// }
// ];
// ```

// ## Funcoes obrigatorias

// ### 1. `mostrarTarefa(tarefa)`

// Deve receber uma tarefa e exibir seus dados formatados no terminal.

// ### 2. `mostrarTodasTarefas(tarefas)`

// Deve receber o array de tarefas e listar todas no terminal.

// ### 3. `concluirTarefa(tarefas, id)`

// Deve receber o array de tarefas e o `id` de uma tarefa.

// Se encontrar a tarefa, deve alterar `concluida` para `true`.

// Se o `id` nao existir, deve exibir:

// ```text
// Tarefa nao encontrada
// ```

// ### 4. `contarPendentes(tarefas)`

// Deve retornar quantas tarefas ainda nao foram concluidas.

// ### 5. `filtrarConcluidas(tarefas)`

// Deve retornar apenas as tarefas concluidas.

// ### 6. `filtrarPorPrioridade(tarefas, prioridade)`

// Deve retornar apenas as tarefas da prioridade informada.

// Exemplo:

// ```javascript
// filtrarPorPrioridade(tarefas, "alta");
// ```

// ### 7. `buscarTarefaPorId(tarefas, id)`

// Deve buscar uma tarefa pelo `id`.

// Se encontrar, deve retornar a tarefa.

// Se nao encontrar, deve retornar:

// ```text
// Tarefa nao encontrada
// ```

// ### 8. `calcularResumo(tarefas)`

// Deve mostrar um resumo com:

// ```text
// Total de tarefas
// Tarefas concluidas
// Tarefas pendentes
// Tarefas de prioridade alta
// ```

// ## Regras

// - O codigo deve rodar no terminal.
// - Todas as funcoes devem ser testadas no final do arquivo.
// - O sistema deve usar funcoes para organizar o codigo.
// - Nao vale resolver tudo apenas com `console.log` solto.
// - O grupo deve explicar como cada funcao funciona.

// ## Entrega esperada

// O arquivo `dojo-tarefas.js` deve conter:

// - array com pelo menos 5 tarefas;
// - funcao para mostrar uma tarefa;
// - funcao para mostrar todas as tarefas;
// - funcao para concluir tarefa por `id`;
// - funcao para contar pendentes;
// - funcao para filtrar concluidas;
// - funcao para filtrar por prioridade;
// - funcao para buscar tarefa por `id`;
// - funcao para calcular resumo;
// - testes usando todas as funcoes.

// ## Desafio extra

// Crie uma funcao chamada:

// ```javascript
// adicionarTarefa(tarefas, novaTarefa)
// ```

// Ela deve adicionar uma nova tarefa ao array.

// A nova tarefa deve ter:

// ```javascript
// id
// titulo
// descricao
// prioridade
// concluida
// ```Sistema de Tarefas

// ## Objetivo

// Criar um sistema de tarefas usando JavaScript, praticando:

// - objetos;
// - arrays;
// - funcoes;
// - condicionais;
// - busca por `id`;
// - filtros;
// - contagem de dados.

// ## Estrutura da tarefa

// O sistema deve ter um array chamado `tarefas` com pelo menos 5 tarefas.

// Cada tarefa deve ser um objeto com as propriedades:

// ```javascript
// id
// titulo
// descricao
// prioridade
// concluida
// ```

// A prioridade deve ser uma destas opcoes:

// ```text
// baixa
// media
// alta
// ```

// Exemplo:

// ```javascript
// const tarefas = [
// {
// id: 1,
// titulo: "Estudar JavaScript",
// descricao: "Revisar funcoes e objetos",
// prioridade: "alta",
// concluida: false
// }
// ];
// ```

// ## Funcoes obrigatorias

// ### 1. `mostrarTarefa(tarefa)`

// Deve receber uma tarefa e exibir seus dados formatados no terminal.

// ### 2. `mostrarTodasTarefas(tarefas)`

// Deve receber o array de tarefas e listar todas no terminal.

// ### 3. `concluirTarefa(tarefas, id)`

// Deve receber o array de tarefas e o `id` de uma tarefa.

// Se encontrar a tarefa, deve alterar `concluida` para `true`.

// Se o `id` nao existir, deve exibir:

// ```text
// Tarefa nao encontrada
// ```

// ### 4. `contarPendentes(tarefas)`

// Deve retornar quantas tarefas ainda nao foram concluidas.

// ### 5. `filtrarConcluidas(tarefas)`

// Deve retornar apenas as tarefas concluidas.

// ### 6. `filtrarPorPrioridade(tarefas, prioridade)`

// Deve retornar apenas as tarefas da prioridade informada.

// Exemplo:

// ```javascript
// filtrarPorPrioridade(tarefas, "alta");
// ```

// ### 7. `buscarTarefaPorId(tarefas, id)`

// Deve buscar uma tarefa pelo `id`.

// Se encontrar, deve retornar a tarefa.

// Se nao encontrar, deve retornar:

// ```text
// Tarefa nao encontrada
// ```

// ### 8. `calcularResumo(tarefas)`

// Deve mostrar um resumo com:

// ```text
// Total de tarefas
// Tarefas concluidas
// Tarefas pendentes
// Tarefas de prioridade alta
// ```

// ## Regras

// - O codigo deve rodar no terminal.
// - Todas as funcoes devem ser testadas no final do arquivo.
// - O sistema deve usar funcoes para organizar o codigo.
// - Nao vale resolver tudo apenas com `console.log` solto.
// - O grupo deve explicar como cada funcao funciona.

// ## Entrega esperada

// O arquivo `dojo-tarefas.js` deve conter:

// - array com pelo menos 5 tarefas;
// - funcao para mostrar uma tarefa;
// - funcao para mostrar todas as tarefas;
// - funcao para concluir tarefa por `id`;
// - funcao para contar pendentes;
// - funcao para filtrar concluidas;
// - funcao para filtrar por prioridade;
// - funcao para buscar tarefa por `id`;
// - funcao para calcular resumo;
// - testes usando todas as funcoes.

// ## Desafio extra

// Crie uma funcao chamada:

// ```javascript
// adicionarTarefa(tarefas, novaTarefa)
// ```

// Ela deve adicionar uma nova tarefa ao array.

// A nova tarefa deve ter:

// ```javascript
// id
// titulo
// descricao
// prioridade
// concluida
// ```

// const tarefas = [
// {
// id: 1,
// titulo: "Estudar JavaScript I",
// descricao: "Revisar funcoes e objetos I",
// prioridade: "alta",
// concluida: true,
// },
// {
// id: 2,
// titulo: "Estudar JavaScript II",
// descricao: "Revisar funcoes e objetos II",
// prioridade: "alta",
// concluida: true,
// },
// {
// id: 3,
// titulo: "Estudar JavaScript III",
// descricao: "Revisar funcoes e objetos III",
// prioridade: "media",
// concluida: false,
// },
// {
// id: 4,
// titulo: "Estudar JavaScript IV",
// descricao: "Revisar funcoes e objetos IV",
// prioridade: "baixa",
// concluida: false,
// },
// {
// id: 5,
// titulo: "Estudar JavaScript V",
// descricao: "Revisar funcoes e objetos V",
// prioridade: "baixa",
// concluida: false,
// },
// ];

// function mostrarTarefa(tarefa) {
// return `ID: ${tarefa.id} Titulo: ${tarefa.titulo} Descricao: ${tarefa.descricao} Prioridade: ${tarefa.prioridade}
// Concluida: ${tarefa.concluida ? "Sim" : "Nao"}`;
// }

// function mostrarTodasTarefas(tarefas) {
// return tarefas.map((tarefa) => {
// return mostrarTarefa(tarefa);
// });
// // return tarefas.map((tarefa) => mostrarTarefa(tarefa));
// }

// function concluirTarefa(tarefas, id) {
// const tarefa = tarefas.find((tarefa) => tarefa.id === id);
// if (tarefa) {
// tarefa.concluida = true;
// return `Tarefa ${id} concluida com sucesso!`;
// } else {
// return "Tarefa nao encontrada";
// }
// }
// function contarPendentes(tarefas) {
// return tarefas.filter((tarefa) => !tarefa.concluida).length;
// }

// function filtrarConcluidas(tarefas) {
// const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida);
// return mostrarTodasTarefas(tarefasConcluidas);
// }

// function filtrarPorPrioridade(tarefas, prioridade) {
// const tarefasPorPrioridade = tarefas.filter(
// (tarefa) => tarefa.prioridade === prioridade,
// );
// return mostrarTodasTarefas(tarefasPorPrioridade);
// }

// function buscarTarefaPorId(tarefas, id) {
// const tarefa = tarefas.find((tarefa) => tarefa.id === id);
// if (tarefa) {
// return mostrarTarefa(tarefa);
// } else {
// return "Tarefa nao encontrada";
// }
// }

// function calcularResumo(tarefas) {
// const totalTarefas = tarefas.length;
// const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
// const tarefasPendentes = totalTarefas - tarefasConcluidas;
// const tarefasAltaPrioridade = tarefas.filter(
// (tarefa) => tarefa.prioridade === "alta",
// ).length;

// return `Total de tarefas: ${totalTarefas}
// Tarefas concluidas: ${tarefasConcluidas}
// Tarefas pendentes: ${tarefasPendentes}
// Tarefas de prioridade alta: ${tarefasAltaPrioridade}`;
// }
// function adicionarTarefa(titulo, descricao, prioridade) {
// const novaTarefa = {
// id: tarefas.length + 1,
// titulo: titulo,
// descricao,
// prioridade,
// concluida: false,
// };
// tarefas.push(novaTarefa);
// }

// // console.log(mostrarTarefa(tarefas[0]));
// // console.log(mostrarTodasTarefas(tarefas));
// // console.log(mostrarTarefa(tarefas[2]));
// // console.log(concluirTarefa(tarefas, 3));
// // console.log(mostrarTarefa(tarefas[2]));
// // console.log(filtrarConcluidas(tarefas));
// // adicionarTarefa('teste','novaTarefa','alta')