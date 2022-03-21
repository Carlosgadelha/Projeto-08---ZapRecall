import {useState} from 'react';
import { IconContext } from "react-icons";
import { IoPlayOutline, IoReloadOutline, IoAlertCircle, IoCheckmarkCircle, IoCloseCircle} from "react-icons/io5";
import setinha from "../../assets/img/setinha.png"
import "./style.css"


function Card(props){

    const[mostraPergunta, setMostrarPergunta] = useState(false)
    const[mostraResposta, setMostrarResposta] = useState(false)
    const[cor, setCor] = useState("")
    

    function responderPerguntas(cor){
        setMostrarPergunta(false)

        if(cor === 'vermelho'){
            props.atualizarRespondidos(< IoCloseCircle className="vermelho"/>,'vermelho')
        }else{
            if(cor === 'verde'){ 
                props.atualizarRespondidos(< IoCheckmarkCircle className="verde"/>,'verde')
            }else{      
                props.atualizarRespondidos(< IoAlertCircle className="amarelo"/>,'amarelo')
            }
        }
        
        setCor(cor)
    }

    if(mostraPergunta){

            if(mostraResposta){
                return(
                    <div className="respostaCard">
                        <p>{props.resposta}</p>
                        <div className="opcoes">
                            <button name="button" className="buttonNaoLembrei" onClick={()=> responderPerguntas("vermelho")}>Não lembrei</button>
                            <button name="button" className="buttonQuaseLembrei" onClick={()=> responderPerguntas("amarelo")}>Quase não lembrei</button>
                            <button name="button" className="buttonZap" onClick={()=> responderPerguntas("verde")}>Zap!</button>
                        </div>
                    
                    </div>
                )

            }
            return(
                <div className="perguntaCard">
                    <p>{props.titulo}</p>
                    <img src= {setinha} onClick={()=> setMostrarResposta(true)}/>
                    
                </div>
            )

    }else{ 

        const css = `pergunta ${cor}`

        switch (cor) {
            case "vermelho":
                
                return(
                    <CardPergunta css = {css} card = {props.card}>
                        < IoCloseCircle className = "icons"/>
                    </CardPergunta>  
                )
                break;

            case "verde":
                
                return(

                    <CardPergunta css = {css} card = {props.card}>
                        < IoCheckmarkCircle className = "icons"/>
                    </CardPergunta>  

                )
                break;

            case "amarelo":
                
                return(
                    <CardPergunta css = {css} card = {props.card}>
                        < IoAlertCircle className = "icons"/>
                    </CardPergunta>  
                )
                break;
        
        }

        return(
            <CardPergunta css = {css} card = {props.card}>
                <b>< IoPlayOutline onClick={()=> setMostrarPergunta(true)} className = "icons"/></b>
            </CardPergunta>   
        )
    }
    
}

function CardPergunta(props) {
    return (
        <div className = {props.css}>
            <div className = "conteudo">
                <p><b>{props.card}</b></p>
                {props.children}
            </div>
         </div>
    )
}


export default Card