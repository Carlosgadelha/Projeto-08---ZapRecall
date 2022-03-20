import { IoAlertCircle, IoCheckmarkCircle, IoCloseCircle} from "react-icons/io5";

function Footer(props){


    if(props.qntPerguntasRespondidas === props.qntPerguntas){

        if(props.esqueceu){
            return(
                <footer className="footerResultado">
                    <figure>
                       <h1> Putz...</h1> 
                    </figure>
                    <h1> Ainda faltam alguns... Mas não desanime!</h1>
                    <h1> {props.qntPerguntasRespondidas}/{props.qntPerguntas} CONCLUÍDOS</h1>
                    <h2> {props.icons}</h2>
                </footer>
    
            )
        
        }

        return(
            <footer className="footerResultado">
                <figure>
                   <h1> Parabéns!</h1> 
                </figure>
                <h1> Você não esqueceu de nenhum flashcard! </h1>
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