
import Footer from "./Footer"
import Card from "./Card"

export default function Flashcards(){


    const perguntas = [{titulo: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript'}, 
                       {titulo: 'O React é ?', resposta: 'uma biblioteca JavaScript para construção de interfaces'},
                       {titulo: 'Componentes devem iniciar com ?', resposta: 'letra maiúscula'},
                       {titulo: 'Podemos colocar __ dentro do JSX?', resposta: 'expressões'},
                       {titulo: 'O ReactDOM nos ajuda ?', resposta: 'interagindo com a DOM para colocar componentes React na mesma'}, 
                       {titulo: 'Usamos o npm para __ ?', resposta: 'gerenciar os pacotes necessários e suas dependências'},
                       {titulo: 'Usamos props para __ ?', resposta: 'passar diferentes informações para componentes '},
                       {titulo: 'Usamos estado (state) para __ ?', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}]
    return(
        <div className="tela02">
            <figure>
                <img src="assets/img/logo-pequeno.png"/>
                <h1>ZapRecall</h1>
            </figure>
            {perguntas.map((pergunta, index) => <Card card={`pergunta 0${index+1}`} titulo={pergunta.titulo} resposta={pergunta.resposta}/>)}

            <Footer qntPerguntas = {perguntas.length}/>
            
        </div>

    )
}


