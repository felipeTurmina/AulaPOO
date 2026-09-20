const express = require('express');
const tarefasService = require('./servicos/tarefasService');

const app = express();
const PORTA = process.env.PORT || 3000;

app.use(express.json());

app.get('/tarefas', (request, response) => {
  response.status(200).json(tarefasService.listarTarefas());
});

app.get('/tarefas/:id', (request, response) => {
  const tarefa = tarefasService.buscarTarefaPorId(Number(request.params.id));
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

app.delete('/tarefas/:id', (request, response) => {
  const removida = tarefasService.removerTarefa(Number(request.params.id));
  if (!removida) return response.status(404).json({ erro: 'Tarefa não encontrada' });
  response.status(200).json({ mensagem: 'Tarefa removida com sucesso', tarefa: removida });
});

app.use((request, response) => {
  response.status(404).json({ erro: 'Rota não encontrada' });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
