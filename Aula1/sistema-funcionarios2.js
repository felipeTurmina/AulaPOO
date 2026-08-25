<<<<<<< HEAD
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
=======
class Funcionario {
    constructor(nome, email, salario) {
        this.nome = nome;
        this.email = email;
        this.salario = salario;
    }
    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Salário: R$ ${this.salario}`);
    }
    calcularBonus() {
        return 0
    }
}
class Desenvolvedor extends Funcionario {
    constructor(nome, email, salario, linguagem) {
        super(nome, email, salario);
        this.linguagem = linguagem;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Linguagem: ${this.linguagem}`);
    }
    calcularBonus() {
        return this.salario * 0.1;
    }   
}
class Designer extends Funcionario {
    constructor(nome, email, salario, ferramenta) {
        super(nome, email, salario);
        this.ferramenta = ferramenta;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Ferramenta: ${this.ferramenta}`);
    }
    calcularBonus() {
        return this.salario * 0.08;
    }
}
class Gerente extends Funcionario {
    constructor(nome, email, salario, setor) {
        super(nome, email, salario);
        this.setor = setor;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Setor: ${this.setor}`);
    }
    calcularBonus() {
        return this.salario * 0.15;
    }
}
class Empresa {
    constructor(nome) {
        this.nome = []
    }
    adicioarFuncionario(funcionario) {
        this.nome.push(funcionario);
    }
    listarFuncionarios() {
        this.nome.forEach(funcionario => {
            funcionario.exibirDados();
            console.log(`Bônus: R$ ${funcionario.calcularBonus()}`);
            console.log("---");
        });
    }
    calcularTotalBonus() {
        let total = 0;
        this.nome.forEach(funcionario => {
            total += funcionario.calcularBonus();
        });
        return total;
    }
    calcularFolhaSalarial() {
        let total = 0;
        this.nome.forEach(funcionario => {
            total += funcionario.salario;
        });
        return total;
    }
    buscarFuncionarioPorNome(nome) {
        return this.nome.find(funcionario => funcionario.nome === nome);
    }
    listarFuncionariosPorSetor(setor) {
        return this.nome.filter(funcionario => funcionario.setor === setor);
    }
}


const dev1 = new Desenvolvedor("Ana","ana@email.com",4000,"JavaScript");
const designer1 = new Designer("João","joao@email.com",3500,"Figma");
const gerente1 = new Gerente("Carlos","carlos@email.com",6000,"Tecnologia");
dev1.exibirDados();
console.log(`Bônus: R$ ${dev1.calcularBonus()}`);
console.log("---");
designer1.exibirDados();
console.log(`Bônus: R$ ${designer1.calcularBonus()}`);
console.log("---");
gerente1.exibirDados();
console.log(`Bônus: R$ ${gerente1.calcularBonus()}`);

// ===================== TESTES =====================
console.log("\n=== TESTES ===\n");

console.log("--- Funcionario ---");
const funcionarioBase = new Funcionario("Teste", "teste@email.com", 1000);
funcionarioBase.exibirDados();
console.log("Bônus:", funcionarioBase.calcularBonus());

console.log("\n--- Desenvolvedor ---");
dev1.exibirDados();
console.log("Bônus:", dev1.calcularBonus());

console.log("\n--- Designer ---");
designer1.exibirDados();
console.log("Bônus:", designer1.calcularBonus());

console.log("\n--- Gerente ---");
gerente1.exibirDados();
console.log("Bônus:", gerente1.calcularBonus());

console.log("\n--- Empresa ---");
const empresaTeste = new Empresa("Empresa Teste");
empresaTeste.adicioarFuncionario(dev1);
empresaTeste.adicioarFuncionario(designer1);
empresaTeste.adicioarFuncionario(gerente1);

console.log("\nlistarFuncionarios():");
empresaTeste.listarFuncionarios();

console.log("calcularTotalBonus():", empresaTeste.calcularTotalBonus());
console.log("calcularFolhaSalarial():", empresaTeste.calcularFolhaSalarial());
console.log("buscarFuncionarioPorNome('João'):", empresaTeste.buscarFuncionarioPorNome("João"));
console.log("listarFuncionariosPorSetor('Tecnologia'):", empresaTeste.listarFuncionariosPorSetor("Tecnologia"));
>>>>>>> c5e58cdfbd996fddc1b7365b5f030adcc0cc3c5a
