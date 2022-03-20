import {useState} from 'react';
import { IconContext } from "react-icons";
import { IoPlayOutline, IoReloadOutline, IoAlertCircle, IoCheckmarkCircle, IoCloseCircle} from "react-icons/io5";


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
                    <IconContext.Provider value={{ size: 30, style: { position: 'absolute', bottom: 7, right: 7 } }}>
                        < IoReloadOutline onClick={()=> setMostrarResposta(true)}/>
                    </IconContext.Provider>
                    
                </div>
            )

    }else{ 

        const css = `pergunta ${cor}`

        switch (cor) {
            case "vermelho":
                
                return(
                    <CardPergunta css = {css} card = {props.card}>
                        < IoCloseCircle/>
                    </CardPergunta>  
                )
                break;

            case "verde":
                
                return(

                    <CardPergunta css = {css} card = {props.card}>
                        < IoCheckmarkCircle/>
                    </CardPergunta>  

                )
                break;

            case "amarelo":
                
                return(
                    <CardPergunta css = {css} card = {props.card}>
                        < IoAlertCircle/>
                    </CardPergunta>  
                )
                break;
        
        }

        return(
            <CardPergunta css = {css} card = {props.card}>
                < IoPlayOutline onClick={()=> setMostrarPergunta(true)}/>
            </CardPergunta>   
        )
    }
    
}

function CardPergunta(props) {
    return (
        <div className = {props.css}>
            <div className = "conteudo">
                <p>{props.card}</p>
                {props.children}
            </div>
         </div>
    )
}


export default Card