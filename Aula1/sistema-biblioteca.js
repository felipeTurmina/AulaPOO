const DISPONIVEL = `Disponivel`
const INDISPONIVEL = `Indisponivel`



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
        console.log(`Ano ${this.ano}`)
        console.log(`Disponibilidade: ${this.disponivel}`)
    }
    marcarComoEmprestado(){
        this.disponivel = INDISPONIVEL
    }
    marcarComoDisponivel(){
        this.disponivel = DISPONIVEL
    }
}


class Usuario{
    constructor(nome,email){
        this.nome = nome
        this.email = email
    }
    exibirUsuario(){
        console.log(`Nome: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
    }
}

class Emprestimo{
    constructor(usuario,livro,dataEmprestimo){
        this.usuario = usuario
        this.livro= livro
        this.dataEmprestimo = dataEmprestimo
        this.status = DISPONIVEL
    }

    realizarEmprestimo(){
        if(this.livro.disponivel === INDISPONIVEL){
            return `Livro indisponivel`
        }else{
            this.livro.marcarComoDisponivel()
        }
    }
    exibirEmprestimo(){
        console.log(`Usuario: ${this.usuario}`)
        console.log(`Livro(s) emprestado(s): ${this.livro.titulo}`)
        console.log(`Data do emprestimo: ${this.dataEmprestimo}`)
        console.log(`Status: ${this.status}`)
    }
    devolverLivro(livroDevolvido){
        this.livro.filter(livro => livroDevolvido === livro)
            this.livro.status = DISPONIVEL   
    }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
console.log(`---------------------------------------------------------------------------`)
livro1.exibirLivro()
console.log(`---------------------------------------------------------------------------`)
const livro2 = new Livro("Peter Pan", "Setembrino", 1900);
livro2.exibirLivro()
console.log(`---------------------------------------------------------------------------`)
const usuario1 = new Usuario("Ana", "ana@email.com");
usuario1.exibirUsuario()
console.log(`---------------------------------------------------------------------------`)
const emprestimo1 = new Emprestimo(usuario1.nome, livro1, "18/08/2026");
emprestimo1.exibirEmprestimo()
console.log(`---------------------------------------------------------------------------`)
emprestimo1.realizarEmprestimo()
emprestimo1.exibirEmprestimo()
console.log(`---------------------------------------------------------------------------`)
const emprestimo2 = new Emprestimo(usuario1.nome, livro1, "18/08/2026");
emprestimo1.realizarEmprestimo()
emprestimo1.exibirEmprestimo()
console.log(`---------------------------------------------------------------------------`)


