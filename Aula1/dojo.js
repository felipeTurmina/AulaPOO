class Pessoa{
    #documento;
    constructor(nome, email, documento){
        this.nome = nome
        this.email = email
        this.#documento = documento
    }
    validarDadosIniciais(){
        if(!this.nome) console.log(`Nome não informado`)
        if(!this.email || !this.email.includes(`@`)) console.log(`Email não informado`)
        if(!this.#documento) console.log(`Documento não informado`)
    }
}

class Cliente extends Pessoa{
    #limiteCredito;
    constructor(nome, email, documento, limiteCredito){
        super(nome, email, documento)
        this.#limiteCredito = limiteCredito
    }
    validarDadosIniciais(){
        if(!this.#limiteCredito) console.log(`Limite é menor ou igual a 0`)
            super.validarDadosIniciais()
    }
}

class Funcionario extends Pessoa{
    constructor(nome, email, documento, cargo, salario){
        super(nome, email, documento)
        this.cargo = cargo
        this.salario = salario
    }
    validarDadosIniciais(){
        if(!this.cargo) console.log(`Cargo não informado`)
        if(this.salario < 1) console.log(`Salário não informado`)
        super.validarDadosIniciais()
    }
}

class Fornecedor extends Pessoa{
    constructor(nome, email, documento, empresa, tipoDeServico){
        super(nome, email, documento)
        this.empresa = empresa
        this.tipoDeServico = tipoDeServico
        this.ativo = true
    }
    validarDadosIniciais(){
        if(!this.empresa) console.log(`Empresa não informada`)
        if(!this.tipoDeServico) console.log(`Tipo de serviço não informada`)
        if(!this.ativo) console.log(`Fornecedor não está ativado`)
        super.validarDadosIniciais()
    }
    ativarFornecedor(){
        if(this.ativo){
            return console.log(`Empresa já está ativa`)
        }else{
            this.ativo = true
            console.log(`Empresa ativada`)
            return
        }
    }
    desativarFornecedor(){
        if(!this.ativo){
            return console.log(`Empresa já está inativa`)
        }else{
            this.ativo = false
            console.log(`Empresa desativada`)
        }
    }
}



const pessoa1 = new Pessoa(`Felipe`,`felipe@email.com`,`0123456789`)
const cliente1 = new Cliente(`Felipe2`,`felipe2@email.com`,`0123456789`,5000)
const funcionario1 = new Funcionario(`Felipe2`,`felipe2@email.com`,`0123456789`,`Maluco`,0)
const empresa1 = new Fornecedor(`Felipe3`,`felipe4@email.com`,`0123456789`,`GSI`,`Mecanica`)

console.log(`-------------------------------------------------------`)
console.log(pessoa1)
console.log(`-------------------------------------------------------`)
console.log(cliente1)
console.log(`-------------------------------------------------------`)
console.log(funcionario1)
console.log(`-------------------------------------------------------`)
console.log(empresa1)