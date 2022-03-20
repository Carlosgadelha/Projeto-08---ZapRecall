import "./style.css"
import party from "../../assets/img/party.png"
import sad from "../../assets/img/sad.png"

function Footer(props){


    if(props.qntPerguntasRespondidas === props.qntPerguntas){

        if(props.esqueceu){
            return(
                <footer className="footerResultado">
                    <div className="titulo">
                        <img src={sad}/>
                        <h1><b>Putz...</b> </h1> 
                    </div>

                    <div className= "texto">
                        <h1> Ainda faltam alguns...</h1> 
                        <h1> Mas não desanime!</h1>
                    </div>
                    
                    <h1> {props.qntPerguntasRespondidas}/{props.qntPerguntas} CONCLUÍDOS</h1>
                    <h2> {props.icons}</h2>
                </footer>
    
            )
        
        }

        return(
            <footer className="footerResultado">
                <div className="titulo">
                    <img src={party}/>
                   <h1> <b>Parabéns!</b></h1> 
                </div>
                <div className= "texto">
                    <h1> Você não esqueceu</h1>
                    <h1> de nenhum flashcard!</h1>
                </div>
                
                <h1> {props.qntPerguntasRespondidas}/{props.qntPerguntas} CONCLUÍDOS</h1>
                <h2> {props.icons}</h2>
            </footer>

        )
    }

    return(
        <footer>
            <h1> {props.qntPerguntasRespondidas}/{props.qntPerguntas} CONCLUÍDOS</h1>
            <h2> {props.icons}</h2>
        </footer>
    )
}


export default Footer