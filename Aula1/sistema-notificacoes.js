class Notificacao{
    constructor(destinatario, mensagem){
        this.destinatario = destinatario
        this.mensagem = mensagem
    }
    enviar(){
        console.log(`Enviando notificação para ${this.destinatario}: ${this.mensagem}`)
    }
}

class NotificacaoEmail extends Notificacao{
    constructor(destinatario, mensagem){
        super(destinatario, mensagem)
        
    }
    validarDestinatario(){
        if(this.destinatario.includes(`@`)){
            return true
        }else{
            return false
        }
    }
    formatarMensagem(){
        console.log(`    PARA: ${this.destinatario}
    Mensagem: ${this.mensagem}`)
    }
    enviar(){
       if(this.validarDestinatario()){
        this.formatarMensagem()
       }else{console.log(`E-mail inválido`)}
    }
}

class NotificacaoSMS extends Notificacao{
    constructor(destinatario, mensagem){
        super(destinatario, mensagem)
    }
    validarDestinatario(){
        if(this.destinatario.length < 11 ){
            return false
        }else{
            return true
        }
    }
    formatarMensagem(){
        console.log(`Para: ${this.destinatario}
            Mensagem: ${this.mensagem}`)
    }
    enviar(){
        if(this.validarDestinatario()){
            this.formatarMensagem()
        }else{
            console.log(`Número inválido`)
        }
    }
}

class NotificacaoPush extends Notificacao{
    constructor(destinatario, mensagem){
        super(destinatario, mensagem)
    }
    validarDestinatario(){
        if(this.destinatario.length < 1){
            return false
        }else{
            return true
        }
    }
    formatarMensagem(){
        console.log(`Olá ${this.destinatario}, ${this.mensagem}`)
    }
    enviar(){
        if(this.validarDestinatario()){
            this.formatarMensagem()
        }else{
            console.log(`Mensagem em branco (inválida)`)
        }
    }
}

class NotificacaoWhatsApp extends Notificacao{
    constructor(destinatario, mensagem, emitente){
        super(destinatario , mensagem)
        this.emitente = emitente
    }
    validarDestinatario(){
        if(this.destinatario.length < 11){
            return false
        }else{
            return true
        }
    }
    formatarMensagem(){
        console.log(`Mensagem de ${this.emitente}
            ${this.mensagem}`
        )
    }
    enviar(){
        if(this.validarDestinatario()){
            this.formatarMensagem()
        }else{
            console.log(`Número inválido`)
        }
    }
}

class notificacaoSlack extends Notificacao{
    constructor(destinatario, mensagem){
        super(destinatario, mensagem)
    }
    validarDestinatario(){
        if(this.destinatario.includes(`#`)){
            return true
        }else{
            
        }
    }
    formatarMensagem(){
        console.log(`${this.mensagem}`)
    }
    enviar(){
        if(this.validarDestinatario()){
            this.formatarMensagem()
        }else{
             console.log(`Destinatario inválido`)
        }
    }
}

class CentralDeNotifcações{
    constructor(){
        this.notificacoes = []
    }
    adicionarNotificacao(notificas){
        this.notificacoes.push(notificas)
    }
    enviarTodas(){
        this.notificacoes.map(enviado => enviado.enviar())

        
    }
}


const central = new CentralDeNotifcações()
const notificacoes = [
new NotificacaoEmail("ana@email.com", "Bem-vinda ao sistema"),
new NotificacaoSMS("54999999999", "Seu código é 1234"),
new NotificacaoPush("Ana", "Você recebeu uma nova mensagem"),
new notificacaoSlack(`#Felipe`,`Grêmio`)
]
for (const notificacao of notificacoes) {central.adicionarNotificacao(notificacao)}

central.enviarTodas()