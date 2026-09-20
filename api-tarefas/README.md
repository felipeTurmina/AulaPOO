# api-tarefas

API REST local de gerenciamento de tarefas, feita com Node.js e Express, como atividade prática da disciplina de Programação Orientada a Objetos.

## Descrição

Uma API simples que permite listar, buscar, criar, atualizar e excluir tarefas. Os dados ficam guardados em memória (um array), então são reiniciados sempre que o servidor é reiniciado. O projeto já sobe com 3 tarefas cadastradas.

## Objetivo

Praticar a criação de uma API REST com Node.js e Express: organização em camadas (dados / serviço / rotas), definição de rotas HTTP, validação de dados de entrada e uso correto dos status codes HTTP, além de documentar e testar manualmente os endpoints.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) 5
- [nodemon](https://www.npmjs.com/package/nodemon)

## Instalação

```bash
git clone https://github.com/felipeTurmina/AulaPOO.git
cd AulaPOO/api-tarefas
npm install
```

## Como iniciar o servidor

```bash
npm start
```

Ou em modo desenvolvimento, reiniciando automaticamente a cada alteração de arquivo:

```bash
npm run dev
```

## Endereço da API

```
http://localhost:3000
```

A porta pode ser trocada com a variável de ambiente `PORT` (ex.: `PORT=4000 npm start`); se não for definida, usa 3000.

## Estrutura de pastas

```
api-tarefas/
├── src/
│   ├── server.js         
│   ├── dados/
│   │   └── tarefas.js     
│   └── servicos/
│       └── tarefasService.js  
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

O projeto separa **dados** (`dados/tarefas.js`), **regras de negócio** (`servicos/tarefasService.js`) e **rotas/HTTP** (`server.js`) em arquivos diferentes para que cada um tenha uma única responsabilidade: o serviço não sabe nada sobre requisição/resposta HTTP, e as rotas não manipulam o array de tarefas diretamente.

## Modelo de tarefa

```json
{
  "id": 1,
  "titulo": "Estudar Node.js",
  "descricao": "Revisar módulos, npm e o modelo assíncrono do Node",
  "prioridade": "alta",
  "concluida": false,
  "dataCriacao": "2026-09-15T09:00:00.000Z"
}
```

- `id`: número inteiro, gerado automaticamente pela API.
- `titulo`: texto, obrigatório.
- `descricao`: texto, obrigatório.
- `prioridade`: uma das strings `"baixa"`, `"media"` ou `"alta"` (equivalentes a baixa/média/alta prioridade; sem acento no valor para facilitar o uso em JSON/URLs). Se não for enviada na criação, assume `"media"`.
- `concluida`: booleano, gerado como `false` na criação.
- `dataCriacao`: data/hora ISO 8601, gerada automaticamente pela API no momento da criação.

## Tabela de rotas

| Método | Rota           | Função                         |
|--------|----------------|----------------------------------|
| GET    | /tarefas       | Listar todas as tarefas          |
| GET    | /tarefas/:id   | Buscar uma tarefa pelo id        |
| POST   | /tarefas       | Criar uma nova tarefa            |
| PATCH  | /tarefas/:id   | Atualizar parcialmente uma tarefa|
| DELETE | /tarefas/:id   | Excluir uma tarefa               |

Todas as respostas são em JSON.

## Exemplos de requisição e resposta

### GET /tarefas

Requisição: sem corpo.

Resposta (`200 OK`):
```json
[
  {
    "id": 1,
    "titulo": "Estudar Node.js",
    "descricao": "Revisar módulos, npm e o modelo assíncrono do Node",
    "prioridade": "alta",
    "concluida": false,
    "dataCriacao": "2026-09-15T09:00:00.000Z"
  }
]
```

### GET /tarefas/:id

Requisição: sem corpo, id na URL (ex.: `/tarefas/1`).

Resposta (`200 OK`):
```json
{
  "id": 1,
  "titulo": "Estudar Node.js",
  "descricao": "Revisar módulos, npm e o modelo assíncrono do Node",
  "prioridade": "alta",
  "concluida": false,
  "dataCriacao": "2026-09-15T09:00:00.000Z"
}
```

Resposta quando o id não existe (`404 Not Found`):
```json
{ "erro": "Tarefa não encontrada" }
```

### POST /tarefas

Requisição:
```json
{
  "titulo": "Revisar PR",
  "descricao": "Revisar o pull request da API",
  "prioridade": "alta"
}
```

Resposta (`201 Created`):
```json
{
  "id": 4,
  "titulo": "Revisar PR",
  "descricao": "Revisar o pull request da API",
  "prioridade": "alta",
  "concluida": false,
  "dataCriacao": "2026-09-20T14:02:35.613Z"
}
```

### PATCH /tarefas/:id

Requisição (só envia os campos que quer alterar):
```json
{ "concluida": true }
```

Resposta (`200 OK`):
```json
{
  "id": 1,
  "titulo": "Estudar Node.js",
  "descricao": "Revisar módulos, npm e o modelo assíncrono do Node",
  "prioridade": "alta",
  "concluida": true,
  "dataCriacao": "2026-09-15T09:00:00.000Z"
}
```

### DELETE /tarefas/:id

Requisição: sem corpo, id na URL.

Resposta (`200 OK`):
```json
{
  "mensagem": "Tarefa removida com sucesso",
  "tarefa": {
    "id": 4,
    "titulo": "Revisar PR",
    "descricao": "Revisar o pull request da API",
    "prioridade": "alta",
    "concluida": false,
    "dataCriacao": "2026-09-20T14:02:35.613Z"
  }
}
```

## Validações

- `titulo` é obrigatório na criação e não pode ser vazio na atualização.
- `descricao` é obrigatória na criação e não pode ser vazia na atualização.
- `prioridade`, quando enviada, precisa ser `"baixa"`, `"media"` ou `"alta"` — qualquer outro valor retorna `400`.
- `concluida`, quando enviada, precisa ser exatamente `true` ou `false` (booleano) — string como `"sim"` retorna `400`.
- O `:id` da URL precisa ser um número inteiro — um valor não numérico retorna `400`.
- A tarefa precisa existir antes de ser atualizada (`PATCH`) ou removida (`DELETE`) — caso contrário retorna `404`.
- Requisições para rotas não definidas retornam `404`.

## Cenários de teste

Testes executados com `curl` contra o servidor rodando localmente (`npm start`), a partir do estado inicial (3 tarefas cadastradas). Poderiam ser reproduzidos da mesma forma no Thunder Client, Postman ou Insomnia.

### Testes de sucesso

| # | Cenário | Método | Rota | Dados enviados | Status esperado | Resultado obtido |
|---|---------|--------|------|-----------------|------------------|-------------------|
| 1 | Listar tarefas | GET | /tarefas | — | 200 | **200** — array com as 3 tarefas iniciais |
| 2 | Buscar uma tarefa existente | GET | /tarefas/1 | — | 200 | **200** — `{"id":1,"titulo":"Estudar Node.js",...}` |
| 3 | Criar tarefa válida | POST | /tarefas | `{"titulo":"Revisar PR","descricao":"Revisar o pull request da API","prioridade":"alta"}` | 201 | **201** — `{"id":4,"titulo":"Revisar PR",...,"concluida":false,"dataCriacao":"2026-09-20T14:02:35.613Z"}` |
| 4 | Atualizar uma tarefa existente | PATCH | /tarefas/1 | `{"concluida":true}` | 200 | **200** — `{"id":1,...,"concluida":true}` (demais campos preservados) |
| 5 | Excluir uma tarefa existente | DELETE | /tarefas/4 | — | 200 | **200** — `{"mensagem":"Tarefa removida com sucesso","tarefa":{...}}` |

### Testes de erro

| # | Cenário | Método | Rota | Dados enviados | Status esperado | Resultado obtido |
|---|---------|--------|------|-----------------|------------------|-------------------|
| 1 | Buscar tarefa com id inexistente | GET | /tarefas/9999 | — | 404 | **404** — `{"erro":"Tarefa não encontrada"}` |
| 2 | Criar tarefa sem título | POST | /tarefas | `{"descricao":"Falta o titulo"}` | 400 | **400** — `{"erro":"Título é obrigatório"}` |
| 3 | Criar tarefa sem descrição | POST | /tarefas | `{"titulo":"Falta a descricao"}` | 400 | **400** — `{"erro":"Descrição é obrigatória"}` |
| 4 | Criar tarefa com prioridade inválida | POST | /tarefas | `{"titulo":"Teste","descricao":"Teste","prioridade":"urgente"}` | 400 | **400** — `{"erro":"Prioridade inválida. Valores aceitos: baixa, media, alta"}` |
| 5 | Atualizar tarefa com id inexistente | PATCH | /tarefas/9999 | `{"titulo":"Novo titulo"}` | 404 | **404** — `{"erro":"Tarefa não encontrada"}` |
| 6 | Enviar `concluida` com valor que não é booleano | PATCH | /tarefas/1 | `{"concluida":"sim"}` | 400 | **400** — `{"erro":"Concluída deve ser um valor booleano"}` |
| 7 | Excluir tarefa com id inexistente | DELETE | /tarefas/9999 | — | 404 | **404** — `{"erro":"Tarefa não encontrada"}` |
| 8 | Acessar rota que não existe | GET | /rota-que-nao-existe | — | 404 | **404** — `{"erro":"Rota não encontrada"}` |
| 9 (extra) | Id não numérico | GET | /tarefas/abc | — | 400 | **400** — `{"erro":"Id deve ser um número inteiro"}` |

Todos os cenários bateram com o status esperado.

## Dificuldades encontradas

- No início dos testes, um processo antigo do `node` ficou preso na porta 3000 de uma execução anterior, então as requisições pareciam estar retornando dados desatualizados mesmo depois de alterar o código. Foi preciso encerrar o processo antigo (via porta 3000) antes de rodar os testes de novo.
- Trocar a rota de atualização de `PUT` para `PATCH` exigiu cuidado extra no serviço: como `PATCH` é uma atualização *parcial*, o `tarefasService.atualizarTarefa` precisou ser reescrito para só sobrescrever os campos realmente enviados no corpo da requisição (e nunca `id`/`dataCriacao`), em vez de simplesmente misturar todo o corpo recebido na tarefa.
- Decidir os valores aceitos de `prioridade` sem acento (`baixa`/`media`/`alta`) em vez de `"média"`, para evitar problemas de encoding em URLs e ferramentas de teste — isso ficou documentado no modelo de tarefa para não gerar dúvida.

## Autor

felipeTurmina

---

## Perguntas

**1. O que é uma API?**
É uma interface que permite que dois programas conversem entre si seguindo um contrato definido (rotas, formatos de dados, respostas) — neste caso, uma interface HTTP que expõe operações sobre tarefas, sem o cliente precisar saber como os dados são armazenados por trás.

**2. Qual é a diferença entre uma função local e uma API?**
Uma função local roda no mesmo processo/máquina de quem a chama e o acesso é direto (uma chamada de função). Uma API roda separada de quem a consome (pode estar em outra máquina, processo ou linguagem) e a comunicação acontece por rede, usando um protocolo (aqui, HTTP) e um formato de dados combinado (aqui, JSON).

**3. O que é um endpoint?**
É a combinação de um método HTTP com uma rota específica que a API expõe — por exemplo, `GET /tarefas` e `POST /tarefas` são dois endpoints diferentes, mesmo usando a mesma URL base.

**4. Qual é a diferença entre GET e POST?**
`GET` é usado para buscar/ler dados, não deve alterar o estado do servidor e normalmente não tem corpo de requisição (os parâmetros vão na URL). `POST` é usado para criar um novo recurso, envia dados no corpo da requisição e altera o estado do servidor (neste projeto, adiciona uma tarefa à lista).

**5. Por que utilizamos Express?**
Express é um framework que simplifica a criação de servidores HTTP em Node.js: cuida do roteamento (`app.get`, `app.post`, etc.), do parsing de requisições e da montagem das respostas, evitando escrever manualmente a lógica de baixo nível do módulo `http` do Node para cada rota.

**6. Para que serve `express.json()`?**
É um middleware que lê o corpo da requisição quando o `Content-Type` é `application/json`, converte o texto em um objeto JavaScript e disponibiliza esse objeto em `request.body`. Sem ele, `request.body` ficaria `undefined` e não seria possível ler os dados enviados em `POST`/`PATCH`.

**7. Por que `req.params.id` precisa ser convertido?**
Tudo que vem da URL chega como texto (string), mesmo que pareça um número — `request.params.id` de `/tarefas/1` chega como a string `"1"`, não como o número `1`. Como os ids das tarefas são armazenados como números, é preciso converter com `Number(...)` antes de comparar (`tarefa.id === id`); comparar `"1" === 1` seria sempre `false`, pois `===` não faz conversão de tipo.

**8. Por que utilizamos status 201 na criação?**
`201 Created` informa explicitamente ao cliente que a requisição não só teve sucesso como resultou na criação de um novo recurso — é mais preciso que `200 OK`, que só diz "deu certo" sem indicar que algo novo foi criado.

**9. Qual é a diferença entre erro 400 e erro 404?**
`400 Bad Request` indica que a requisição em si está errada ou incompleta (ex.: faltou o título, a prioridade enviada é inválida) — o problema é nos dados enviados pelo cliente. `404 Not Found` indica que a requisição está correta, mas o recurso pedido (uma tarefa com aquele id, ou uma rota) não existe.

**10. Por que os dados são perdidos quando o servidor é reiniciado?**
Porque as tarefas são guardadas em um array em memória (RAM) dentro do processo do Node. Quando o processo é encerrado (por reiniciar o servidor, por exemplo), essa memória é liberada e o array volta a ser criado do zero a partir dos dados iniciais de `dados/tarefas.js` — não há um banco de dados ou arquivo em disco persistindo essas informações entre execuções.
