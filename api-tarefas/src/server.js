const express = require('express');
const tarefasService = require('./servicos/tarefasService');

const app = express();
const PORTA = process.env.PORT || 3000;

app.use(express.json());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (request.method === 'OPTIONS') return response.sendStatus(204);
  next();
});

function converterId(valor) {
  const id = Number(valor);
  return Number.isInteger(id) ? id : null;
}

app.get('/tarefas', (request, response) => {
  response.status(200).json(tarefasService.listarTarefas());
});

app.get('/tarefas/:id', (request, response) => {
  const id = converterId(request.params.id);
  if (id === null) return response.status(400).json({ erro: 'Id deve ser um número inteiro' });

  const tarefa = tarefasService.buscarTarefaPorId(id);
  if (!tarefa) return response.status(404).json({ erro: 'Tarefa não encontrada' });

  response.status(200).json(tarefa);
});

app.post('/tarefas', (request, response) => {
  const { titulo, descricao, prioridade } = request.body;

  if (!titulo) return response.status(400).json({ erro: 'Título é obrigatório' });
  if (!descricao) return response.status(400).json({ erro: 'Descrição é obrigatória' });
  if (prioridade !== undefined && !tarefasService.PRIORIDADES_VALIDAS.includes(prioridade)) {
    return response.status(400).json({
      erro: `Prioridade inválida. Valores aceitos: ${tarefasService.PRIORIDADES_VALIDAS.join(', ')}`,
    });
  }

  const tarefa = tarefasService.criarTarefa({ titulo, descricao, prioridade });
  response.status(201).json(tarefa);
});

app.patch('/tarefas/:id', (request, response) => {
  const id = converterId(request.params.id);
  if (id === null) return response.status(400).json({ erro: 'Id deve ser um número inteiro' });

  const tarefaExistente = tarefasService.buscarTarefaPorId(id);
  if (!tarefaExistente) return response.status(404).json({ erro: 'Tarefa não encontrada' });

  const { titulo, descricao, prioridade, concluida } = request.body;

  if (titulo !== undefined && !titulo) {
    return response.status(400).json({ erro: 'Título não pode ser vazio' });
  }
  if (descricao !== undefined && !descricao) {
    return response.status(400).json({ erro: 'Descrição não pode ser vazia' });
  }
  if (prioridade !== undefined && !tarefasService.PRIORIDADES_VALIDAS.includes(prioridade)) {
    return response.status(400).json({
      erro: `Prioridade inválida. Valores aceitos: ${tarefasService.PRIORIDADES_VALIDAS.join(', ')}`,
    });
  }
  if (concluida !== undefined && typeof concluida !== 'boolean') {
    return response.status(400).json({ erro: 'Concluída deve ser um valor booleano' });
  }

  const tarefa = tarefasService.atualizarTarefa(id, { titulo, descricao, prioridade, concluida });
  response.status(200).json(tarefa);
});

app.delete('/tarefas/:id', (request, response) => {
  const id = converterId(request.params.id);
  if (id === null) return response.status(400).json({ erro: 'Id deve ser um número inteiro' });

  const tarefaRemovida = tarefasService.removerTarefa(id);
  if (!tarefaRemovida) return response.status(404).json({ erro: 'Tarefa não encontrada' });

  response.status(200).json({ mensagem: 'Tarefa removida com sucesso', tarefa: tarefaRemovida });
});

app.use((request, response) => {
  response.status(404).json({ erro: 'Rota não encontrada' });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
