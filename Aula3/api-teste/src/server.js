const express = require ("express");
const app = express();
const PORTA = 3000;

const lista = [
    { id: 1, nome: "Marcio"},
    { id: 2, nome: "Marcelo"},
    { id: 3, nome: "Felipe"},
]



app.get("/", (request, response) => {
    response.json({message: "Hello, World"});
});

app.get("/lista", (request, response) => {
    response.json(lista);
});

app.get("/lista/:id", (request, response) => {
    const id = Number(request.params.id);
    console.log(`esse é o id`, id);
    const filtro = lista.find(filtro => filtro.id === id);
    if(!filtro){return res.status(404).json({mensagem: "Tarefa não encontrada"})};
    console.log(`retorno do filtro `,filtro);
    response.json({message: `${filtro.nome}`});
});

app.post("/tarefa", (request, response) => {
    const body = request.body
    const titulo = body.titulo

    if(!titulo){ return response.json({message:"Titulo da tarefa é obrigatório" })}
    console.log("")
})

app.listen(PORTA, () => {
    console.log(`http://localhost:${PORTA}`);
})