class ContaBancaria{
    #saldo
    constructor(titular){
         this.titular = titular
        this.#saldo = 0
        this.conta = true
    }
    exibirSaldo(){
         console.log(`              Nome do titular ${this.titular}
              Saldo disponivel: R$ ${this.#saldo}`)
    }
    fazerSaque(saque){
        if(this.conta === false){console.log(`Conta inativa`); return}
        if(saque <= 0){console.log(`Saque de R$ ${saque} é inválido`); return}
        if(saque > this.#saldo){console.log(`Saldo insuficiente`); return}
        this.#saldo -= saque
        console.log(`Saque de R$ ${saque}, realizado com sucesso`)
        console.log(`Saldo atual de ${this.#saldo}`)
    }
    fazerDeposito(deposito){
        if(this.conta === false){console.log(`Conta inativa`); return}
        if(deposito <= 0){console.log(`Valor inválido para depósito`);return}
        this.#saldo += deposito
        console.log(`Deposito de R$ ${deposito}, realizado com sucesso`)
    }
    contaAtiva(){
        if(this.conta === true){console.log(`Conta já está ativa`); return}
        this.conta = true
    }
    contaInativa(){
        if(this.conta === false){console.log(`Conta já está inativa`); return}
        this.conta = false
    }
}

const conta1 = new ContaBancaria(`Felipe`)

conta1.contaAtiva()
console.log(`---------------------------------------------`)
conta1.contaInativa()
console.log(`---------------------------------------------`)
conta1.contaAtiva()
console.log(`---------------------------------------------`)
conta1.exibirSaldo()
console.log(`---------------------------------------------`)
conta1.fazerSaque(0)
console.log(`---------------------------------------------`)
conta1.fazerDeposito(0)
console.log(`---------------------------------------------`)
conta1.fazerSaque(100)
console.log(`---------------------------------------------`)
conta1.fazerDeposito(1000)
console.log(`---------------------------------------------`)
conta1.fazerSaque(100)
console.log(`---------------------------------------------`)

