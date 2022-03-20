import {useState} from 'react';
import { IconContext } from "react-icons";
import { IoPlayOutline, IoReloadOutline, IoAlertCircle, IoCheckmarkCircle, IoCloseCircle} from "react-icons/io5";


function Card(props){

    const[mostraPergunta, setMostrarPergunta] = useState(false)
    const[mostraResposta, setMostrarResposta] = useState(false)
    const[cor, setCor] = useState("")
    

    function responderPerguntas(cor){
        setMostrarPergunta(false)
        props.atualizarRespondidos()
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
                    <div className = {css}>
                        <p>{props.card}</p> 
                        < IoCloseCircle/>
                    </div>
                )
                break;

            case "verde":
                return(
                    <div className = {css}>
                        <p>{props.card}</p>
                        < IoCheckmarkCircle/>
                    </div>
                )
                break;

            case "amarelo":
                return(
                    <div className = {css}>
                        <p>{props.card}</p>
                        < IoAlertCircle/>
                    </div>
                )
                break;
        
        }

        return(
            <div className = {css}>
                <p>{props.card}</p>
                < IoPlayOutline onClick={()=> setMostrarPergunta(true)}/>
            </div>
        )
    }
    
}


export default Card