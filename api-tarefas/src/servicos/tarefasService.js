const tarefas = require('../dados/tarefas');


const PRIORIDADES_VALIDAS = ['baixa', 'media', 'alta'];


let proximoId = Math.max(0, ...tarefas.map((tarefa) => tarefa.id)) + 1;

function listarTarefas() {
  return tarefas;
}

function buscarTarefaPorId(id) {
  return tarefas.find((tarefa) => tarefa.id === id);
}

function criarTarefa({ titulo, descricao, prioridade }) {
  const tarefa = {
    id: proximoId++,
    titulo,
    descricao,
    prioridade: prioridade || 'media',
    concluida: false,
    dataCriacao: new Date().toISOString(),
  };
  tarefas.push(tarefa);
  return tarefa;
}

function atualizarTarefa(id, dados) {
  const tarefa = buscarTarefaPorId(id);
  if (!tarefa) return null;

  const { titulo, descricao, prioridade, concluida } = dados;
  if (titulo !== undefined) tarefa.titulo = titulo;
  if (descricao !== undefined) tarefa.descricao = descricao;
  if (prioridade !== undefined) tarefa.prioridade = prioridade;
  if (concluida !== undefined) tarefa.concluida = concluida;

  return tarefa;
}


function removerTarefa(id) {
  const indice = tarefas.findIndex((tarefa) => tarefa.id === id);
  if (indice === -1) return null;
  const [tarefaRemovida] = tarefas.splice(indice, 1);
  return tarefaRemovida;
}

module.exports = {
  PRIORIDADES_VALIDAS,
  listarTarefas,
  buscarTarefaPorId,
  criarTarefa,
  atualizarTarefa,
  removerTarefa,
};
