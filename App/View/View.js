class View{
    constructor(pai, botao){

        console.log('ESSE E O CONTAINER')
        console.log($('.containerbg--selecionado'));

        if($('.containerbg--selecionado')){

            $('.containerbg--selecionado').classList.remove('containerbg--selecionado');

        }

        pai.classList.add('containerbg--selecionado');



        View.viewTitle();


    }


    static viewTitle(){
        $('.title').classList.add('title--escondido');
        $('.title h1').classList.add('logo--encolhido');
        $('.title h2').classList.add('subtitulo--encolhido');
    }

    static viewHabilidades(pai){
        $('.conteudobg-1').innerHTML = `

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

    static viewExperiencia(pai){
        $('.conteudobg-2').innerHTML = `
        <div class="informacao__containerbg container-experiencia opacidade0">

            <div class="lista-container">
                <p>Tabatinga Free Shop</p>
                <h4>Estagiário de Web Design</h4>
                <p>Setembro 2018 -<br>Atualmente</p>
                <p class="descricao-job">Construo sites completos do zero para marcas de perfumes e cosméticos famosas que chegam ao Brasil (ou que já atuam por aqui).<br><br>
                    Exemplo de um site desenvolvido: <br><a href="http://www.cubaperfumesoficial.com.br/" target="_blank">Cuba Perfumes</a></p>

            <div class="emprego-item">
                <p>Quality SP</p>
                <h4>Estagiário de Web Design</h4>
                <p>Julho 2018 -<br>Setembro 2018</p>
                <p>Auxiliei no gerenciamento do site de e-commerce da empresa, adicionando fotos, substituindo banners etc</p>
            </div>

            </div>
        </div>
        `;
    }
}
