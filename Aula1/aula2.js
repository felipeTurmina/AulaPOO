// Exercicio 1
function saudarAna(){
    console.log(`Olá, Ana!`)
}

saudarAna()

// Exercicio 2
function somarDoisNumeros(numero1,numero2){

    return numero1 + numero2
}

console.log(somarDoisNumeros(10,5))

// Exercicio 3

function calcularMedia(numero1, numero2, numero3){

    return (numero1 + numero2 + numero3 ) / 3
}

console.log(calcularMedia(8,7,9))

// Exercicio 4

function verificarMaiorIdade(idade){
    if(idade >= 18){
        return console.log(`Maior de idade`)
    }
    else{
        return console.log(`Menor de idade`)
    }
}
console.log(verificarMaiorIdade(30))

// Exercicio 5

const aluno = {
    nome:`Felipe`,
    idade:33,
    curso:`ADS`, 
    media:10
}

console.log(`${aluno.nome} tem ${aluno.idade}, estuda ${aluno.curso} e possui media ${aluno.media}`)

// Exercicio 6

function mostarAluno(aluno){
    return console.log(`${aluno.nome} tem ${aluno.idade}, estuda ${aluno.curso} e possui media ${aluno.media}`)
}

// Exercicio 7

function verificarSituacao(nome, media){
    if(media >=7){
        return console.log(`${nome} está aprovado (a)`)
    }
    else if(media < 5){
        return console.log(`${nome} está reprovado (a)`)
    }
    else{
        return console.log(`${nome} está em recuperação`)
    }
}

console.log(verificarSituacao(aluno.nome,aluno.media))

// Exercicio 8

const produto = {
    nome: `Cerveja`,
    preco: 11,
    quantidade: 10
}

function calcularTotal(preco,quantidade){

    return preco * quantidade
}

console.log(calcularTotal(produto.preco,produto.quantidade))

// Exercicio 9

const produto1 = {
    nome: `Mouse`,
    preco: 100,
    desconto: 20
}

function aplicarDesconto(preco, desconto){
    return preco - desconto
}

console.log(aplicarDesconto(produto1.preco, produto1.desconto))

// Exercicio 10

const cadastro = {
    nome: `Jubileu`,
    idade: 20,
    cidade: `Marau`
}

function apresentarPessoa(nome,idade,cidade){
    return `Meu nome é ${cadastro.nome}, tenho ${cadastro.idade} anos e moro em ${cadastro.cidade} `
}

apresentarPessoa()

// Exercicio 10

const livro = {
    titulo: `Dom Casmurro`,
    autor: `Machado de Assis`,
    ano: 1899,
    disponivel: true
}

function mostrarLivro(titulo,autor,ano){
    return `${livro.titulo}, escrito por ${livro.autor}, publicado em ${livro.ano}`
}

function verificarDisponibilidade(livro){
    if(livro.disponivel){
        return `Livro disponível para empréstimo`
    }else{
        return(`Livro indisponível`)
    }
}


function emprestarLivro(livro){
    if(livro.disponivel){
        livro.disponivel = false
        return `Empréstimo realizado com sucesso`     
        }
        else{
            return `Este livro já está emprestado`
            }
}

console.log(mostrarLivro(livro));
console.log(verificarDisponibilidade(livro));
console.log(emprestarLivro(livro));
console.log(verificarDisponibilidade(livro));