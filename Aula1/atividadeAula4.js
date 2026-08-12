// Array
const alunos = [
{
id: 1,
nome: "Felipe",
idade: 33,
curso: "ADS",
media: 10,
ativo: true
},
{
id: 2,
nome: "Ana",
idade: 20,
curso: "ADS",
media: 8,
ativo: true
},
{
id: 3,
nome: "Marcio",
idade: 45,
curso: "ADS",
media: 5,
ativo: true
},
{
id: 4,
nome: "Marcelo",
idade: 45,
curso: "ADS",
media: 10,
ativo: true
},
{
id: 5,
nome: "Deucleciano",
idade: 85,
curso: "ADS",
media: 10,
ativo: false
},
]

//Exercicio1

function validaMedia(media){
    if(media >=7){
        return `Aprovado`
    }else{
        return `Reprovado`
    }
}


function mostrarAluno(aluno){
    return `Aluno: ${aluno.nome} Idade: ${aluno.idade} Curso: ${aluno.curso}  Média: ${aluno.media} Ativo: ${aluno.ativo == true ? "Sim" : "Não"} Situação: ${validaMedia(aluno.media)}`

}

//Exercicio2

function mostrarTodosAlunos(aluno){
    return aluno.map(todos =>{
       return mostrarAluno(todos)
    })
}

//Exercicio3

function buscarAlunosPorId(aluno, id){

    const filtro = aluno.find(filtro => filtro.id === id)

    if (filtro){
       return mostrarAluno(filtro)
    }else{
        return `Aluno não encontrado`
    }
}

//Exercicio4

function filtrarAprovados(alunos){

    const filtro = alunos.filter((filtros) => filtros.media >= 7)

    return  mostrarTodosAlunos(filtro)
    
}

//Exercicio5

function filtrarRecuperacao(alunos){

    const filtro = alunos.filter((filtros) => filtros.media <= 7 && filtros.media >= 5)

    return  mostrarTodosAlunos(filtro)
    
}

//Exercicio6

function filtrarReprovados(alunos){

    const filtro = alunos.filter((filtros) => filtros.media < 5 )

    return  mostrarTodosAlunos(filtro)
    
}

//Exercicio7

function alterarMedia(aluno,id,novaMedia){

    const filtro = aluno.find(filtro => filtro.id === id)

    if (filtro){
       return filtro.media = novaMedia
    }else{
        return `Aluno não encontrado`
    }
}

//Exercicio8

function alterarAtivo (aluno,id, ativo){

    const filtro = aluno.find(filtro => filtro.id === id)

    if (filtro){
       return filtro.ativo = ativo
    }else{
        return `Aluno não encontrado`
    }
}

//Exercicio9

function calcularMediaGeral(alunos){
    let mediaGeral = 0
    alunos.forEach(aluno => {
      mediaGeral += aluno.media  
    }) 
    return mediaGeral / alunos.length
}

//Exercicio10

function gerarResumoTurma(alunos){
    
    const totalAlunos = alunos.length
    const quantidadeAtivos = alunos.filter(aluno => aluno.ativo === true).length
    const quantidadeAprovado = alunos.filter(aluno => aluno.media >= 7).length
    const quantidadeRecuperacao = alunos.filter(aluno => aluno.media <7 && aluno.media >=5).length
    const quantidadeReprovados = alunos.filter(aluno => aluno.media <5).length
    return `Total de Alunos: ${totalAlunos}, Quantidade de Alunos ativos: ${quantidadeAtivos}, Quantidade de Alunos Aprovados: ${quantidadeAprovado}
    Quantidade de Alunos em Recuperação: ${quantidadeRecuperacao}, Quantidade de Alunos Reprovados: ${quantidadeReprovados}, Média geral da turma: ${calcularMediaGeral(alunos)}`

}

//DesafioExtra1

function filtrarAlunosAtivos(alunos){
    const filtro = alunos.map(aluno => aluno.ativo === true)
    return mostrarTodosAlunos(filtro)
}

//DesafioExtra2

function buscarAlunoPorNome(alunos, nome){
    const filtro = alunos.find(aluno => aluno.nome === nome)
    return filtro
}

//DesafioExtra3

function filtrarPorCurso(alunos, curso){
    const filtro = alunos.find(aluno => aluno.curso === curso)
    return filtro
}

//DesafioExtra4
function atualizarAluno(alunos, id, novosDados){
const filtro = aluno.find(filtro => filtro.id === id)
const novosDados1 ={
    nome: "Ana Clara",
    idade: 21,
    media: 9
}
    if (filtro){
       return alunos.push(novosDados1)
    }else{
        return `Aluno não encontrado`
    }
}

//DesafioExtra5

function validarMedia(media){
    if(media >0 && media <=10){
        return `Média Válida`
    }else{
        return `Média inválida`
    }
}

//DesafioExtra6

function removerAluno(alunos, id){
    let idArray = alunos.findIndex(aluno => aluno.id === id)
    let filtro = alunos.map(aluno => aluno.id === id)

    if(filtro){
    return alunos.splice(idArray,1)
    }else{
        `Aluno não encontrado`
    }  
}

//DesafioExtra7

// function ordenarPorMedia(alunos){

//     const filtro = alunos.map(aluno => mostrarTodosAlunos(aluno.sort((a,b) => a - b)))
 
// }

// console.log(ordenarPorMedia(alunos))
