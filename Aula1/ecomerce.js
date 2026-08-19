const ABERTO = `Aberto`
const FINALIZADO = `Finalizado`

class Produto{
    constructor(nome,preco,categoria){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }
    exibirProduto(){
        return `${this.nome} - R$ ${this.preco} - ${this.categoria}`
    }
}

class Cliente{
    constructor(nome,email,telefone){
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
    exibirCliente(){
        return `${this.nome} - R$ ${this.email} - ${this.telefone}`
    }
}

class Pedido{
    constructor(cliente){
        this.cliente = cliente
        this.produtos = []
        this.status = ABERTO
    }
    exibirPedido(){
       console.log (`Cliente: ${this.cliente.nome}`)
       console.log(`Produtos:`)
       this.produtos.map(produto => console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`))
       console.log(`Total R$ ${this.calcularTotal()}`)
       console.log(`Status: ${this.status}`)
    }
    adicionarProduto(produto){
        if(this.status === FINALIZADO){
            console.log(`Não é possível adicionar um produto em um pedido finalizado!`)
        }
        this.produtos.push(produto)
    }
    calcularTotal(){
        let total = 0
        this.produtos.map(rpdouto => total += produto.preco)
        return `R$ ${total.toFixed(2)}`
    }
    finalizarPedido(status){
        this.status = FINALIZADO
    }
}


const mouse = new Produto(`Mouse`, 100 , `Elêtronico`)
const teclado = new Produto(`Teclado`, 150 , `Elêtronico`)
const monitor = new Produto(`Monitor`, 200 , `Elêtronico`)
console.log(produto1.exibirProduto())

const cliente1 = new Cliente(`Felipe`, `felipe@hotmail.com`,`9954575`)
console.log(cliente1.exibirCliente())

const pedido = new(cliente1)

