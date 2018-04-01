class Helper{
    constructor(){
        throw new error("Esta classe não pode ser instanciada");
    }

    static atribuiEventos(){

        function adicionaController(){
            new Controller(botao, botao.parentNode);
        }

        var botoes = document.querySelectorAll('.botao-navegacao');

        console.log(botoes);

        botoes.forEach((botao) => {
            console.log(botao);

            botao.removeEventListener('click', adicionaController);
            botao.addEventListener('click', adicionaController);
            }
        );


}

}
