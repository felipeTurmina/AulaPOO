class Pessoa {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`E-mail: ${this.email}`);
    }
}
class Aluno extends Pessoa {
    constructor(nome, email, curso, media) {
    super(nome, email); // chama o pai
    this.curso = curso;
    this.media = media;
    }
    verificarSituacao() {
        if (this.media >= 7) return "Aprovado";
        if (this.media >= 5) return "Recuperação";
        return "Reprovado";
    }
    exibirDados() {
        super.exibirDados(); // método do pai
        console.log(`Curso: ${this.curso}`);
        console.log(`Média: ${this.media}`);
        console.log(`Situação: ${this.verificarSituacao()}`);
    }
}
class Professor extends Pessoa {
    constructor(nome, email,disciplina, salario) {
    super(nome, email);
    this.disciplina = disciplina;
    this.salario = salario;
    }
    exibirDados() {
    super.exibirDados();
    console.log(`Disciplina: ${this.disciplina}`);
    console.log(`Salário: R$ ${this.salario}`);
    }
}

const aluno1 = new Aluno("Ana", "ana@email.com", "ADS", 8)
const aluno2 = new Aluno("João", "joao@email.com", "ADS", 5.5)
const professor1 = new Professor("Carlos", "carlos@email.com", "POO", 3500)
aluno1.exibirDados()
console.log("---")
aluno2.exibirDados()
console.log("---")
professor1.exibirDados()