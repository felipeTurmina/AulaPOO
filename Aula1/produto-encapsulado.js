class Produto{
    #preco
    #estoque
    constructor(nome, categoria, precoInicial, estoqueInicial){
        this.nome = nome
        this.categoria = categoria
        this.#preco = precoInicial
        this.#estoque = estoqueInicial
        this.ativo = true
    }
    alterarPreco(novoValor){
        if(this.ativo === false){ console.log(`Produto inativo`); return}
        
        if(novoValor <= 0){console.log(`Valor inválido`); return}

        this.#preco = novoValor
    }
    consultarPreco(){
        console.log(`Produto: ${this.nome}, valor R$ ${this.#preco}`)
    }
    adicinarEstoque(quantidade){
        if(this.ativo === false){console.log(`Produto inativo`); return}

        if(quantidade <= 0){console.log(`Digite uma quantidade válida`); return}

        this.#estoque += quantidade
        console.log(`Estoque adicionado`)
    }
    removerEstoque(quantidade){
        if(this.ativo === false){console.log(`Produto inativo`); return}

        if(quantidade <= 0){console.log(`Digite uma quantidade válida`); return}

        if(quantidade > this.#estoque){console.log(`Quantidade acima do estoque atual`); return}

        this.#estoque -= quantidade
    }
    consultarEstoque(){
        console.log(`Produto: ${this.nome}, quantidade atual no estoque: ${this.#estoque}`)
    }
    ativarProduto(){
        if(this.ativo === true){(`Produto já está ativo`); return}
        this.ativo = true
        console.log(`Produto ativado`)
    }
    desativarProduto(){
        if(this.ativo === false){(`Produto já está inativo`); return}
        this.ativo = false
        console.log(`Produto desativado`)
    }
    exibirProduto(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Categoria: ${this.categoria}`)
        console.log(`Preço: R$ ${this.#preco}`)
        console.log(`Estoque: ${this.#estoque}`)
        console.log(`Ativo: ${this.ativo}`)
    }
    aplicarDesconto(percentual){
        if(this.ativo === false){console.log(`Produto inativo`);return}
        if(percentual <= 0){console.log(`Valor inválido`)}
        if(percentual > 50){console.log(`Desconto de ${percentual} é inválido o máximo é de 50%`)}
        
        this.#preco -= (this.#preco * percentual) / 100
    }
    valorTotalEmEstoque(){
        console.log(`Valor total em estoque R$: ${this.#estoque * this.#preco}`)
    }
    vender(quantidade){
        if(this.ativo === false){console.log(`Produto inativo`);return}

        if(this.#estoque === 0){console.log(`Estoque do produto está em 0`);return}

        if(quantidade > this.#estoque){console.log(`Quantidade é maior que o estoque atual, estoque atual ${this.#estoque}`); return}

        this.#estoque -= quantidade
        console.log(`Venda efetuada com sucesso`); return
    }
    reporEstoqueMinimo(quantidadeMinima,quantidadeReposicao){
        if(quantidadeMinima <= 0){console.log(`Quantidade minima não pode ser 0 ou menor que 0`); return}

        if(quantidadeReposicao <= 0){console.log(`Quantidade reposição não pode ser 0 ou menor que 0`); return}

        if(quantidadeMinima > this.#estoque ){console.log(`Quantidade minima não atingida`); return}

        if(quantidadeMinima <= this.#estoque ){this.#estoque += quantidadeReposicao, console.log(`Estoque minimo ativo, vai ser adicionado ${quantidadeReposicao}`); return}
    }
    reajustarPreco(percentual){
        if(this.ativo === false){console.log(`Produto inativo`);return}

        if(percentual <= 0){console.log(`Valor inválido`); return}

        this.#preco += (this.#preco * percentual)/100
        console.log(`Valor reajustado`)
    }
}

class Estoque{
    constructor(produtos){
        produtos = []
    }
    adicionarProduto(produto){
        produtos.push(produto)
    }
}

const produto1 = new Produto(`Graxa`,`Lubrificante`,50,10)

produto1.exibirProduto()
console.log(`-------------------------------------------`)
produto1.alterarPreco(50)
console.log(`-------------------------------------------`)
produto1.exibirProduto()
console.log(`-------------------------------------------`)
produto1.alterarPreco(0)
console.log(`-------------------------------------------`)
produto1.adicinarEstoque(5)
console.log(`-------------------------------------------`)
produto1.exibirProduto()
console.log(`-------------------------------------------`)
produto1.adicinarEstoque(0)
console.log(`-------------------------------------------`)
produto1.removerEstoque(50)
console.log(`-------------------------------------------`)
produto1.desativarProduto()
console.log(`-------------------------------------------`)
produto1.alterarPreco(5)
console.log(`-------------------------------------------`)
produto1.adicinarEstoque(5)
console.log(`-------------------------------------------`)
produto1.ativarProduto()
console.log(`-------------------------------------------`)
produto1.exibirProduto()
console.log(`-------------------------------------------`)
produto1.aplicarDesconto(10)
console.log(`-------------------------------------------`)
produto1.exibirProduto()
console.log(`-------------------------------------------`)
produto1.valorTotalEmEstoque()
console.log(`-------------------------------------------`)
produto1.vender(5)
console.log(`-------------------------------------------`)
produto1.vender(500)
console.log(`-------------------------------------------`)
produto1.reporEstoqueMinimo(5,5)
console.log(`-------------------------------------------`)
produto1.reporEstoqueMinimo(200,5)
console.log(`-------------------------------------------`)
produto1.reajustarPreco(10)
console.log(`-------------------------------------------`)
produto1.exibirProduto()
console.log(`-------------------------------------------`)