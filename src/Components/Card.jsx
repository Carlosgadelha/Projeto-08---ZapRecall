import {useState} from 'react';
import { IconContext } from "react-icons";
import { IoPlayOutline, IoReloadOutline} from "react-icons/io5";


function Card(props){

    const[mostraPergunta, setMostrarPergunta] = useState(false)
    const[mostraResposta, setMostrarResposta] = useState(false)

    if(mostraPergunta){

            if(mostraResposta){
                return(
                    <div className="respostaCard">
                        <p>{props.resposta}</p>
                        <div className="opcoes">
                            <button name="button" className="buttonNaoLembrei">Não lembrei</button>
                            <button name="button" className="buttonQuaseLembrei">Quase não lembrei</button>
                            <button name="button" className="buttonZap">Zap!</button>
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
        return(
            <div className="pergunta">
                <p>{props.card}</p>
                < IoPlayOutline onClick={()=> setMostrarPergunta(true)}/>
            </div>
        )
    }
    
}


export default Card