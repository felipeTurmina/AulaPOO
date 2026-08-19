const INDISPONIVEL = `Indisponível`
const DISPONIVEL = `Disponível`

class Livro{
    constructor(titulo,autor,ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = DISPONIVEL
    }
    exibirLivro(){
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Disponibilidade: ${this.disponivel}`)
    }
    marcarIndisponivel(){
        if(this.disponivel === INDISPONIVEL){
            return console.log(`Este livro já está indisponível`)
        }else{
             this.disponivel = INDISPONIVEL
            return console.log(`Livro marcado como indisponível`)
        }
    }
    marcarDisponivel(){
        if(this.disponivel === DISPONIVEL){
            return console.log(`Este livro já está marcado como disponivel`)
        }else{
             this.disponivel = DISPONIVEL
            return console.log(`Livro marcado como disponivel`)
        }
    }
}

class Usuario{
    constructor(nome,email){
        this.nome = nome
        this.email = email
    }
    exibirUsuario(){
        console.log(`Usuario: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
    }
}

class Emprestimo{
    constructor(usuario,livro,dataEmprestimo){
        this.usuario = usuario
        this.livro = livro
        this.dataEmprestimo = dataEmprestimo
        this.status = INDISPONIVEL
    }
    exibirEmprestimo(){
        console.log(`Usuario: ${this.usuario.nome}`)
        console.log(`Titulo do livro: ${this.livro.titulo}`)
        console.log(`Data do empréstimo: ${this.dataEmprestimo}`)
        console.log(`Disponibilidade: ${this.status}`)
    }
    realizarEmprestimo(){
        if(this.livro.disponivel === INDISPONIVEL){
            console.log(`Livro indisponível para empréstimo.`)
            return
        }else{
            this.livro.marcarIndisponivel()
            this.status = INDISPONIVEL
            console.log(`Empréstimo realizado com sucesso.`)
        }
    }
    devolverLivro(){
        if(this.livro.disponivel === DISPONIVEL){
            console.log(`Livro já marcado como devolvido`)
            return
        }else{
            this.livro.marcarDisponivel()
            this.status = DISPONIVEL
            console.log(`Livro marcado como devolvido`)
        }
    }
    
}

class Biblioteca{
    constructor(){
        this.usuario = []
        this.livro = []
    }
    adicionarLivro(livro){
        this.livro.push(livro)
    }
    adicionarUsuario(usuario){
        this.usuario.push(usuario)
    }
    buscarLivro(titulo){
        const encontrarLivro = this.livro.filter(livros => livros.titulo === titulo)
        if(encontrarLivro){
            encontrarLivro.exibirLivro()
        }else{
            console.log(`Livro não encontrado`)
        }
    }
}
// TESTES

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
livro1.marcarIndisponivel()
console.log(`----------------5---------------------`)
livro1.exibirLivro()
console.log(`----------------6---------------------`)
usuario1.exibirUsuario()
console.log(`----------------7---------------------`)
usuario2.exibirUsuario()
console.log(`----------------8---------------------`)
emprestimo1.exibirEmprestimo()
console.log(`----------------9---------------------`)
emprestimo2.exibirEmprestimo()
console.log(`----------------10--------------------`)
emprestimo3.exibirEmprestimo()
console.log(`----------------11--------------------`)
emprestimo1.realizarEmprestimo()
console.log(`----------------12--------------------`)
emprestimo1.exibirEmprestimo()
console.log(`----------------13--------------------`)
emprestimo1.devolverLivro()
console.log(`----------------14--------------------`)
emprestimo1.exibirEmprestimo()
console.log(`----------------15--------------------`)
emprestimo2.realizarEmprestimo()
console.log(`----------------16--------------------`)
emprestimo2.realizarEmprestimo()
console.log(`----------------17--------------------`)
