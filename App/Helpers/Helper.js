class Helper{
    constructor(){
        throw new error("Esta classe não pode ser instanciada");
    }

    static atribuiEventos(){
        var botoes = document.querySelectorAll('.botao-navegacao');

        botoes.forEach(function(botao){
            botao.removeEventListener('click', function(){
                new Controller(botao, botao.parentNode);
            })

            botao.addEventListener('click', function(){
                new Controller(botao, botao.parentNode);
            })
        });
    }
}
