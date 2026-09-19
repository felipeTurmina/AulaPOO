class Pagamento{
    constructor(valor){
        this.valor = valor
    }
}

class PagamentoPix extends Pagamento{
    constructor(valor){
        super(valor)
    }
    processarPagamento(){
        console.log(`Processando pagamento via Pix no valor de R$ ${this.valor}`)
    }
}

class PagamentoCartao extends Pagamento{
    constructor(valor){
        super(valor)
    }
    processarPagamento(){
        console.log(`Processando pagamento via Cartão no valor de R$ ${this.valor *0.05 + this.valor}`)
    }
}

class PagamentoBoleto extends Pagamento{
    constructor(valor){
        super(valor)
    }
    processarPagamento(){
        console.log(`Processando pagamento via Boleto no valor de R$ ${this.valor * 3}`)
    }
}

const tipo = `Pix`
const valor = 100

const tiposPagamento = {
    Pix: PagamentoPix,
    Cartao: PagamentoCartao,
    Boleto: PagamentoBoleto
}

const montarPagamento = new tiposPagamento[tipo](valor)
montarPagamento.processarPagamento()