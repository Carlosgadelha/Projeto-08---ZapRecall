import {useState} from 'react';
import { IconContext } from "react-icons";
import { IoPlayOutline, IoReloadOutline} from "react-icons/io5";

export default function (Tela02){

    

    const perguntas = [{titulo: 'O que é JSX?'}, 
                       {titulo: 'O React é ?'},
                       {titulo: 'Componentes devem iniciar com ?'},
                       {titulo: 'Podemos colocar __ dentro do JSX?'},
                       {titulo: 'O ReactDOM nos ajuda ?'}, 
                       {titulo: 'Usamos o npm para __ ?'},
                       {titulo: 'Usamos props para __ ?'},
                       {titulo: 'Usamos estado (state) para __ ?'}]
    return(
        <div className="tela02">
            <figure>
                <img src="assets/img/logo-pequeno.png"/>
                <h1>ZapRecall</h1>
            </figure>
            {perguntas.map((pergunta, index) => <Pergunta card={`pergunta 0${index+1}`} titulo={pergunta.titulo}/>)}

            <footer>
                <h1> 0/4 CONCLUÍDOS</h1>
            </footer>
            
        </div>

    )
}


function Pergunta(props){
    const[mostraPergunta, setMostrarPergunta] = useState(false)

    if(mostraPergunta){
        return(
            <div className="perguntaCard">
                <p>{props.titulo}</p>
                <IconContext.Provider value={{ size: 30, style: { position: 'absolute', bottom: 7, right: 7 } }}>
                    < IoReloadOutline onClick={()=> setMostrarPergunta(true)}/>
                </IconContext.Provider>
                
            </div>
        )

    }else{
        return(
            <div className="pergunta">
                <p>{props.card}</p>
                < IoPlayOutline onClick={()=> setMostrarPergunta(true)}/>
            </div>
        )
    }
    
}