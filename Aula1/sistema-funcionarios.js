class Funcionario{
    constructor(nome, email, salario){
        this.nome = nome
        this.email = email
        this.salario = salario
    }
    exibirDados(){
        console.log(`Nome: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Salário: ${this.salario}`)
    }
    calcularBonus(){
        return 0
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, email, salario, linguagem){
        super(nome, email, salario)
        this.linguagem = linguagem
    }
    exibirDados(){
        super.exibirDados()
        console.log(`Linguagem: ${this.linguagem}`)
    }
    calcularBonus(){
        return this.salario *0.10
    }
}

class Designer extends Funcionario{
    constructor(nome, email, salario, ferramenta){
        super(nome, email, salario)
        this.ferramenta = ferramenta
    }
    exibirDados(){
        super.exibirDados()
        console.log(`Ferramenta: ${this.ferramenta}`)
    }
    calcularBonus(){
        return this.salario *0.08
    }
}

class Gerente extends Funcionario{
    constructor(nome, email, salario, setor){
        super(nome, email, salario)
        this.setor = setor
    }
    exibirDados(){
        super.exibirDados()
        console.log(`Setor: ${this.setor}`)
    }
    calcularBonus(){
        return this.salario * 0.15
    }
}

class Empresa{
    constructor(){
        this.funcionarios = []
    }
    adicionarFuncionario(funcionario){
        this.funcionarios.push(funcionario)
    }
    listarFuncionarios(){
        this.funcionarios.map(funcionario => funcionario.exibirDados())
    }
    calcularTotalBonus(){
        let bonus = 0
        this.funcionarios.forEach(funcionario => bonus += funcionario.calcularBonus())

        return console.log(`R$ ${bonus}`)
    }
    calcularFolhaSalarial(){
        let folha = 0
        this.funcionarios.map(funcionario => folha += funcionario.salario)
        return console.log(`Folha total: ${folha}`)
    }
    buscarPorNome(nome){
        const buscaFuncionario = this.funcionarios.filter(funcionario => nome === funcionario.nome)

            console.log(buscaFuncionario)     
    }
    buscarPorTipo(tipo){
        const filtroTipo = this.funcionarios.filter(funcionario =>{
            if(funcionario instanceof tipo){
                return funcionario
            }
        })
        filtroTipo.map(filtro =>filtro.exibirDados())
    }

}

// TESTES

const dev1 = new Desenvolvedor("Ana","ana@email.com",4000,"JavaScript")
const designer1 = new Designer("João","joao@email.com",3500,"Figma")
const gerente1 = new Gerente("Carlos","carlos@email.com",6000,"Tecnologia")
const gerente2 = new Gerente("Carlos2","carlos2@email.com",6000,"Tecnologia")

const empresa = new Empresa()


console.log("--------------------------------")
dev1.exibirDados()
console.log(`Bônus: R$ ${dev1.calcularBonus()}`)
console.log("--------------------------------")
designer1.exibirDados()
console.log(`Bônus: R$ ${designer1.calcularBonus()}`)
console.log("--------------------------------")
gerente1.exibirDados()
console.log(`Bônus: R$ ${gerente1.calcularBonus()}`)
console.log("--------------------------------")
empresa.adicionarFuncionario(dev1)
empresa.adicionarFuncionario(designer1)
empresa.adicionarFuncionario(gerente1)
empresa.adicionarFuncionario(gerente2)
console.log("--------------------------------")
empresa.listarFuncionarios()
console.log("--------------------------------")
empresa.calcularTotalBonus()
console.log("--------------------------------")
empresa.calcularFolhaSalarial()
console.log("--------------------------------")
empresa.buscarPorNome(`Ana`)
console.log("--------------------------------")
empresa.buscarPorTipo(Gerente)