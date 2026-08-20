class Pessoa {
    constructor(nome, email){
        this.nome = nome
        this.email = email
    }
    exibirPessoa(){
        console.log(`Nome: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
    }
}

class Aluno extends Pessoa{
    constructor(nome, email, curso, media){
        super(nome, email)
        this.curso = curso
        this.media = media
    }
    exibirAluno(){
        super.exibirPessoa()
        console.log(`Curso: ${this.curso}`)
        console.log(`Média ${this.media}`)
    }
}

class Professor extends Pessoa{
    constructor(nome, email, disciplina, salario){
        super(nome, email)
        this.disciplina = disciplina
        this.salario = salario
    }
    exibirProfessor(){
        super.exibirPessoa()
        console.log(`Disciplina: ${this.disciplina}`)
        console.log(`Salário: ${this.salario}`)
    }
}

// TESTES

const aluno1 = new Aluno (`Felipe`,`Felipe@cesurg.com`,`ADS`,10)
const aluno2 = new Aluno (`Turmina`,`Turmina@cesurg.com`,`ADS`,9)
const professor1 = new Professor(`Carlos`, `carlos@cesurg.com`, `POO`, 3500)


console.log(`------------------------------`)
aluno1.exibirAluno()
console.log(`------------------------------`)
aluno2.exibirAluno()
console.log(`------------------------------`)
professor1.exibirProfessor()
console.log(`------------------------------`)