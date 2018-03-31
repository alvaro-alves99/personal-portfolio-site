class View{
    constructor(pai, botao){
        console.log(botao.textContent);

        if($('.containerbg--selecionado')){

            if($('.informacao__containerbg')){
                $('.informacao__containerbg').innerHTML = ``;
            }

            $('.containerbg--selecionado').classList.remove('containerbg--selecionado');

        }

        pai.classList.add('containerbg--selecionado');

        if(botao.textContent == 'Habilidades'){
            View.viewHabilidades(pai);

            setTimeout(function(){
                $('.informacao__containerbg').classList.remove('opacidade0');
            }, 200);

            Helper.atribuiEventos();
        }


        View.viewTitle();


    }


    static viewTitle(){
        $('.title').classList.add('title--escondido');
        $('.title h1').classList.add('logo--encolhido');
        $('.title h2').classList.add('subtitulo--encolhido');
    }

    static viewHabilidades(pai){
        pai.innerHTML = `
            <a href="#" class="botao-navegacao">Habilidades</a>

            <div class="informacao__containerbg opacidade0">
                <div class="informacao__area">
                    <h3>Front End</h3>
                </div>

                <div class="lista-container">
                    <h4>HTML/CSS</h4>
                    <ul>
                        <li>Layouts Responsivos</li>
                        <li>Grid/Flexbox</li>
                        <li>Acessibilidade</li>
                        <li>Pré-processador(SASS)</li>
                    </ul>

                    <h4>JavaScript</h4>
                    <ul>
                        <li>jQuery</li>
                        <li>ES6</li>
                        <li>Orientação à objetos</li>
                        <li>Aplicações MVC</li>
                    </ul>
                </div>
            </div>

        `;
    }
}
