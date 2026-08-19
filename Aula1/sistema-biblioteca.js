const DISPONIVEL = `Disponível`
const INDISPONIVEL = `Indisponível`

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.status = DISPONIVEL
    }

    exibirLivro() {
        console.log(`Título: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Status: ${this.status}`)
    }

    marcarComoIndisponivel() {
        this.status = INDISPONIVEL
    }

    marcarComoDisponivel() {
        this.status = DISPONIVEL
    }
}

class Usuario {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
    }

    exibirUsuario() {
        console.log(`Usuário: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
    }
}

class Emprestimo {
    constructor(usuario, livro, dataEmprestimo) {
        this.usuario = usuario
        this.livro = livro
        this.dataEmprestimo = dataEmprestimo
        this.status = DISPONIVEL
    }

    exibirEmprestimo() {
        console.log(`Usuário: ${this.usuario.nome}`)
        console.log(`Livro: ${this.livro.titulo}`)
        console.log(`Data do empréstimo: ${this.dataEmprestimo}`)
        console.log(`Status: ${this.status}`)
    }

    realizarEmprestimo() {
        if (this.livro.status === INDISPONIVEL) {
            console.log(`Livro indisponível para empréstimo.`)
            return
        }
        this.livro.marcarComoIndisponivel()
        this.status = INDISPONIVEL
        console.log(`Empréstimo realizado com sucesso.`)
    }
    devolverLivro() {
        if (this.livro.status === DISPONIVEL) {
            console.log(`Este livro já está disponível.`)
            return
        }
        this.livro.marcarComoDisponivel()
        this.status = DISPONIVEL
        console.log(`Livro devolvido com sucesso.`)
    }
}

class Biblioteca{
    constructor(){
        this.usuario = []
        this.titulo = []
    }
    adicionarLivro(livro){
        this.titulo.push(livro)
    }
    adicionarUsuario(usuario){
        this.usuario.push(usuario)
    }
    buscarLivro(titulo){
        return this.titulo.find(livro =>livro.titulo === titulo)
    }
}

const livro1 = new Livro(`Árvore derrubada`, `Machado de Assis`, 1899)
const livro2 = new Livro(`Peter Pan`, `Mágico`, 1904)
const livro3 = new Livro(`O Pequeno Príncipe`, `Antoine de Saint-Exupéry`, 1943)

const usuario1 = new Usuario(`Felipe`, `felipe@cesurg.com`)
const usuario2 = new Usuario(`Samuel`, `samuel@cesurg.com`)

const emprestimo1 = new Emprestimo(usuario1, livro1, `19/08/2026`)
const emprestimo2 = new Emprestimo(usuario2, livro2, `18/08/2026`)
const emprestimo3 = new Emprestimo(usuario1, livro3, `19/08/2026`)

console.log(`----------------1---------------------`)
livro1.exibirLivro()
console.log(`----------------2---------------------`)
livro2.exibirLivro()
console.log(`----------------3---------------------`)
livro3.exibirLivro()
console.log(`----------------4---------------------`)
usuario1.exibirUsuario()
console.log(`----------------5---------------------`)
usuario2.exibirUsuario()
console.log(`----------------6---------------------`)
emprestimo1.exibirEmprestimo()
console.log(`----------------7---------------------`)
emprestimo2.exibirEmprestimo()
console.log(`----------------8---------------------`)
emprestimo3.exibirEmprestimo()
console.log(`----------------9---------------------`)
emprestimo1.realizarEmprestimo()
emprestimo1.exibirEmprestimo()
console.log(`----------------10--------------------`)
emprestimo1.devolverLivro()
emprestimo1.exibirEmprestimo()
console.log(`----------------11--------------------`)
emprestimo2.realizarEmprestimo()
console.log(`----------------12--------------------`)
emprestimo2.realizarEmprestimo()
console.log(`----------------13--------------------`)
