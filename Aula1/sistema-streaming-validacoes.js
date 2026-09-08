const valoresValidos = [`Livre`,`10`,`12`,`14`,`16`,`18`]
const statusSerie = [`Em andamento`, `Finalizada`,`Cancelada`]


class Conteudo{
    constructor(titulo, genero, classificacao, ano){
        this.titulo = titulo
        this.genero = genero
        this.classificacao = classificacao
        this.ano = ano    
    }  
        validarBase() {
        const erros = []

        if (!this.titulo) erros.push(`Título inválido`)
        if (!this.genero) erros.push(`Gênero inválido`)
        if (!valoresValidos.includes(this.classificacao)) {
            erros.push(`Valor inválido, digite as opções: Livre, 10, 12, 14, 16 ou 18`)
        }
        if (!Number.isInteger(this.ano) || this.ano < 1900 || this.ano > 2026) {
            erros.push(`Ano inválido`)
        }

        return erros
    }

    validacao() {
        return this.validarBase()
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
        const erros = super.validacao()

        if (this.duracao < 1 || this.duracao > 300) {
            erros.push(`Duração inválida`)
        }

        if (!this.diretor) {
            erros.push(`Diretor inválido`)
        }

        return erros
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
        const erros = super.validacao()

        if (this.quantidadeTemporada <= 0) {
            erros.push(`Quantidade de temporadas inválida`)
        }
        if (this.quantidadeEpisodios <= 0) {
            erros.push(`Quantidade de episódios inválida`)
        }
        if (!statusSerie.includes(this.status)) {
            erros.push(`Valor inválido, digite: Em andamento, Finalizada ou Cancelada`)
        }

        return erros
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
        const erros = super.validacao()

        if (!this.temaPrincipal) {
            erros.push(`Tema inválido`)
        }
        if (typeof this.fatosReais !== `boolean`) {
            erros.push(`Valor inválido, tem que ser true ou false`)
        }
        if (this.duracao < 1 || this.duracao > 300) {
            erros.push(`Duração inválida`)
        }

        return erros
    }
}

class Lista {
    constructor() {
        this.lista = []
    }

    adicionar(conteudo) {
        this.lista.push(conteudo)
    }

    validarTodos() {
        this.lista.forEach(conteudo => {
            const erros = conteudo.validacao()
            const tipo = conteudo.constructor.name

            console.log(`Título: ${conteudo.titulo}`)
            console.log(`Tipo: ${tipo}`)
            console.log(`Resultado: ${erros.length === 0 ? `Válido` : `Inválido`}`)

            if (erros.length > 0) {
                console.log(`Erros: ${erros.join(`; `)}`)
            }

            console.log(`-------------------------------------------------`)
        })
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
const listaConteudos = new Lista()

listaConteudos.adicionar(conteudo1)
listaConteudos.adicionar(conteudo2)
listaConteudos.adicionar(filme1)
listaConteudos.adicionar(filme2)
listaConteudos.adicionar(serie1)
listaConteudos.adicionar(serie2)

const documentario1 = new Documentario(`Documentário 1`, `História`, `Livre`, 2020, `Natureza`, true, 90)

listaConteudos.adicionar(documentario1)

console.log(`Validação da lista de conteúdos`)
console.log(`-------------------------------------------------`)
listaConteudos.validarTodos()
