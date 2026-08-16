class produto {
    constructor(nome,preco,quantidade,categoria){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
    }
    exibirProduto(){
        console.log(`Nome: ${this.nome} | Preço: ${this.preco} | Quantidade: ${this.quantidade} | Categoria: ${this.categoria}`);
    }
    calcularValorTotal(){
        return this.preco * this.quantidade;
    }
    aplicarDesconto(percentual){
        const desconto = this.preco * (percentual / 100);
        this.preco -= desconto;
    }
    adicionarEstoque(quantidadeAdicional){
        this.quantidade += quantidadeAdicional;
    }
    removerEstoque(quantidadeRemovida){
        if(quantidadeRemovida <= this.quantidade){
            this.quantidade -= quantidadeRemovida;
        } else {
            console.log("Quantidade insuficiente em estoque.");
        }
    }
}

const produtos = new produto("Mouse", 100, 5, "Informática");
produtos.exibirProduto();
console.log(produtos.calcularValorTotal());
produtos.exibirProduto();
produtos.aplicarDesconto(10);
produtos.exibirProduto();
produtos.adicionarEstoque(3);
produtos.exibirProduto();
produtos.removerEstoque(2);
produtos.exibirProduto();