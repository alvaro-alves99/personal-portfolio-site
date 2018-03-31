class Controller{
    constructor(botao, containerpai){
        this.containerPai = containerpai;
        this.botao = botao;

        this.view = new View(containerpai, botao);
    }
}
