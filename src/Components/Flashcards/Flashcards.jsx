import { useState } from "react"
import Footer from "../Footer/Footer"
import Card from "../Card/Card"

import "./style.css"
import logoPequeno from "../../assets/img/logo-pequeno.png"

export default function Flashcards(){

    const [perguntasRespondidas, setPerguntasRespondidas] = useState(0)
    const [esqueceuPerguntas, setEsqueceuPerguntas] = useState(false)
    const [embaralhar, setEmbaralhar] = useState(true)
    const [icons, setIcons] = useState([])

    function atualizarRespondidos(icon,cor){
        setPerguntasRespondidas(perguntasRespondidas + 1)
        setIcons([...icons,icon])
        if(cor === 'vermelho'){
            setEsqueceuPerguntas(true)
        }
    }

    function comparador() { 
        return Math.random() - 0.5; 
    }

    const perguntas = [{
                           titulo: 'O que é JSX?', 
                           resposta: 'Uma extensão de linguagem do JavaScript'
                       },{
                           titulo: 'O React é ?', 
                           resposta: 'uma biblioteca JavaScript para construção de interfaces'
                       },{
                           titulo: 'Componentes devem iniciar com ?', 
                           resposta: 'letra maiúscula'
                       },{
                           titulo: 'Podemos colocar __ dentro do JSX?', 
                           resposta: 'expressões'
                       },{
                           titulo: 'O ReactDOM nos ajuda ?', 
                           resposta: 'interagindo com a DOM para colocar componentes React na mesma'
                       },{
                           titulo: 'Usamos o npm para __ ?', 
                           resposta: 'gerenciar os pacotes necessários e suas dependências'
                       },{
                           titulo: 'Usamos props para __ ?', 
                           resposta: 'passar diferentes informações para componentes '
                       },{
                           titulo: 'Usamos estado (state) para __ ?', 
                           resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
                       }]
    
    if(embaralhar === true){
        perguntas.sort(comparador)
        setEmbaralhar(false)
    }

    return(
        <div className="flashcards">
            <Header/>
            <div className="cards">
                {perguntas.map((pergunta, index) => <Card card={`Pergunta 0${index+1}`} titulo={pergunta.titulo} resposta={pergunta.resposta } atualizarRespondidos = {atualizarRespondidos}/>)}
            </div>
            <Footer qntPerguntasRespondidas = {perguntasRespondidas} qntPerguntas = {perguntas.length} icons = {icons} esqueceu = {esqueceuPerguntas}/>
            
        </div>

    )
}

function Header(){
    return (
        <header>
            <figure>
                <img src={logoPequeno}/>
                <h1>ZapRecall</h1>
            </figure>
        </header>
    )
}

