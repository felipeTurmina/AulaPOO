const valoresValidos = [`Livre`,`10`,`12`,`14`,`16`,`18`]
const statusSerie = [`Em andamento`, `Finalizada`,`Cancelada`]


class Conteudo{
    constructor(titulo, genero, classificacao, ano){
        this.titulo = titulo
        this.genero = genero
        this.classificacao = classificacao
        this.ano = ano
        this.validacao()     
    }  
    validacao(){
        if(!this.titulo){console.log(`Titulo inválido`)}
        if(!this.genero){console.log(`Genero inválido`)}
        if(!valoresValidos.includes(this.classificacao)){console.log(`Valor inválido, digite as opções: Livre, 10, 12, 14, ,16 ou 18`)}
        if(this.ano < 1900, this.ano > 2026){console.log(`Ano inválido`)}
    }
}

class Filme extends Conteudo{
    constructor(titulo, genero, classificacao, ano, duracao, diretor){
        super(titulo, genero, classificacao, ano)
        this.duracao = duracao
        this.diretor = diretor
        this.validacao()
    }
    validacao(){
        if(this.duracao < 1 , this.duracao > 300 ){console.log(`Duração inválida`)}
        if(!this.diretor){console.log(`Diretor inválido`)}
        super.validacao()
    }
}

class Serie extends Conteudo{
    constructor(titulo, genero, classificacao, ano, quantidadeTemporada, quantidadeEpisodios, status){
        super(titulo, genero, classificacao, ano)
        this.quantidadeTemporada = quantidadeTemporada
        this.quantidadeEpisodios = quantidadeEpisodios
        this.status = status
        this.validacao()
    }
    validacao(){
        if(!this.quantidadeTemporada > 0){console.log(`Quantidade de temporadas inválida`)}
        if(!this.quantidadeEpisodios > 0){console.log(`Quantidade de episódios inválida`)}
        if(!statusSerie.includes(this.status)){console.log(`Valor inválido, digite: Em andamento, Finalizada ou Cancelada`)}
        super.validacao()
    }
}

class Documentario extends Conteudo{
    constructor(titulo, genero, classificacao, ano, temaPrincipal, fatosReais, duracao){
        super(titulo, genero, classificacao, ano)
        this.temaPrincipal = temaPrincipal
        this.fatosReais = fatosReais
        this.duracao = duracao
    }
    validacao(){
        if(!this.temaPrincipal){console.log(`Tema inválido`)}
        if(!this.fatosReais === false, !this.fatosReais ===  true){console.log(`Valor inválido, tem que ser true ou false`)}
    }
}



const conteudo1 = new Conteudo(`Filme 1`,`Ação`,`18`,2026)
const conteudo2 = new Conteudo(`Filme 2`,`Aventura`,`1`,1899)

const filme1 = new Filme(`Filme 3`, `Comédia`, `18`, 2026, 200,`Felipe`)
const filme2 = new Filme(`Filme 4`, `Suspense`, `5`, 1899, 350,``)

const serie1 = new Serie(`Serie 1`, `Aventura`, `18`, 2026, 2, 20, `Finalizada`)
const serie2 = new Serie(`Serie 2`, `Ação`, `0`, 1700, 0, 0, `Findada`)

console.log(`-------------------------------------------------`)
console.log(conteudo1)
console.log(`-------------------------------------------------`)
console.log(conteudo2)
console.log(`-------------------------------------------------`)
console.log(filme1)
console.log(`-------------------------------------------------`)
console.log(filme2)
console.log(`-------------------------------------------------`)
console.log(serie1)
console.log(`-------------------------------------------------`)
console.log(serie2)
console.log(`-------------------------------------------------`)
console.log(`-------------------------------------------------`)
console.log(`-------------------------------------------------`)