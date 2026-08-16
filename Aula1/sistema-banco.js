class contaBancaria {
    constructor(nome,saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    depositar(valor) {
            this.saldo += valor;    
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
    exibirSaldo() {
        console.log(`Nome: ${this.nome} | Saldo: ${this.saldo}`);
    }
    transferir(valor, contaDestino) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            contaDestino.depositar(valor);
        } else {
            console.log("Saldo insuficiente para transferência.");
        }
    }
}

const conta1 = new contaBancaria("Ana", 500);
const conta2 = new contaBancaria("João", 200);
conta1.exibirSaldo();
conta2.exibirSaldo();
conta1.depositar(100);
conta1.sacar(50);
conta1.transferir(150, conta2);
conta1.exibirSaldo();
conta2.exibirSaldo();